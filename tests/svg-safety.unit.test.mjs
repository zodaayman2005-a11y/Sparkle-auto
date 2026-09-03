import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { getUnsafeSvgReasons } from "../scripts/svg-safety.mjs";

describe("production SVG safety gate", () => {
  it("allows presentation-only SVG with internal fragment references", () => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">
      <defs><linearGradient id="paint"><stop offset="0" /></linearGradient></defs>
      <rect width="10" height="10" fill="url(#paint)" />
      <use href="#shape" />
    </svg>`;

    assert.deepEqual(getUnsafeSvgReasons(svg), []);
  });

  it("rejects script, event handlers, embedded documents and animation", () => {
    const samples = [
      `<svg><script>alert(1)</script></svg>`,
      `<svg onload="alert(1)"></svg>`,
      `<svg><foreignObject><iframe /></foreignObject></svg>`,
      `<svg><animate attributeName="x" /></svg>`,
    ];

    for (const svg of samples) {
      assert.notDeepEqual(getUnsafeSvgReasons(svg), []);
    }
  });

  it("rejects external references and document declarations", () => {
    const samples = [
      `<svg><use href="https://example.com/a.svg#shape" /></svg>`,
      `<svg><rect fill="url(data:image/svg+xml,test)" /></svg>`,
      `<!DOCTYPE svg [<!ENTITY xxe SYSTEM "file:///etc/passwd">]><svg />`,
    ];

    for (const svg of samples) {
      assert.notDeepEqual(getUnsafeSvgReasons(svg), []);
    }
  });
});
