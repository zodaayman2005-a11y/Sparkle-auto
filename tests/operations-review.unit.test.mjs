import assert from "node:assert/strict";
import { describe, test } from "node:test";

import {
  createOperationsReviewSchema,
  egyptianMobileE164Pattern,
  isOperationsReviewOptionRegistryReady,
  normalizeEgyptianMobile,
  operationsReviewOptionRegistry,
  operationsReviewSchema,
} from "../src/lib/validation/operations-review.ts";

const approvedTestOptions = {
  approval: "approved",
  governorates: ["approved-governorate"],
  bestContactTimes: ["approved-contact-time"],
};

const validInput = {
  full_name: "Test User",
  phone: "+201012345678",
  wash_name: "Test Wash",
  governorate: "approved-governorate",
  branches_count: "1",
  cars_per_day: "20-50",
  role: "owner",
  main_problem: ["bookings"],
  lang: "en",
};

describe("Egyptian mobile normalization", () => {
  test("normalizes domestic, country-code and local forms to E.164", () => {
    const inputs = [
      "010 1234 5678",
      "(010)-1234-5678",
      "201012345678",
      "+20 10 1234 5678",
      "1012345678",
    ];

    for (const input of inputs) {
      assert.equal(normalizeEgyptianMobile(input), "+201012345678");
    }
  });

  test("normalizes Arabic and Persian digits", () => {
    assert.equal(normalizeEgyptianMobile("٠١٠ ١٢٣٤ ٥٦٧٨"), "+201012345678");
    assert.equal(normalizeEgyptianMobile("۰۱۰-۱۲۳۴-۵۶۷۸"), "+201012345678");
  });

  test("does not erase unsupported punctuation into a valid number", () => {
    const normalized = normalizeEgyptianMobile("010.1234.5678");

    assert.equal(normalized, "010.1234.5678");
    assert.equal(egyptianMobileE164Pattern.test(String(normalized)), false);
  });
});

describe("approved form-option contract", () => {
  test("keeps the production registry blocked until canonical options are approved", () => {
    assert.equal(isOperationsReviewOptionRegistryReady(), false);
    assert.equal(operationsReviewOptionRegistry.approval, "blocked");
    assert.equal(operationsReviewSchema.safeParse(validInput).success, false);
  });

  test("accepts only exact approved governorate and contact-time keys", () => {
    const schema = createOperationsReviewSchema(approvedTestOptions);

    const accepted = schema.safeParse({
      ...validInput,
      phone: "(٠١٠) ١٢٣٤-٥٦٧٨",
      best_contact_time: "approved-contact-time",
    });
    assert.equal(accepted.success, true);
    assert.equal(accepted.data?.phone, "+201012345678");

    assert.equal(
      schema.safeParse({ ...validInput, governorate: "arbitrary-value" })
        .success,
      false,
    );
    assert.equal(
      schema.safeParse({
        ...validInput,
        best_contact_time: "arbitrary-value",
      }).success,
      false,
    );
  });

  test("allows the optional contact time to be omitted", () => {
    const schema = createOperationsReviewSchema(approvedTestOptions);

    assert.equal(schema.safeParse(validInput).success, true);
  });

  test("rejects malformed, duplicate or unapproved registries", () => {
    assert.equal(
      isOperationsReviewOptionRegistryReady({
        approval: "approved",
        governorates: ["duplicate", "duplicate"],
        bestContactTimes: [],
      }),
      false,
    );
    assert.equal(
      isOperationsReviewOptionRegistryReady({
        approval: "approved",
        governorates: [" padded "],
        bestContactTimes: [],
      }),
      false,
    );
  });
});
