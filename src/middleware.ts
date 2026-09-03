import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale } from "@/lib/i18n";

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
}

export const config = {
  matcher: ["/"],
};
