import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const nextIntlMiddleware = createMiddleware({
  locales: ["en", "es", "pt"],
  defaultLocale: "en",
  localePrefix: "never",
  localeDetection: true,
});

const excludedPathsLogout = new Set([
  "/",
  "/pt",
  "/es",
  "/en",
  "/auth/login",
  "/auth/signup",
]);

const excludedPathsLogin = new Set([
  "/auth/login",
  "/auth/signup",
]);

export async function middleware(request: NextRequest) {
  const access_token = request.cookies.get("access_token");
  const teamID = request.cookies.get("team_id");
  const localeCookie = request.cookies.get("NEXT_LOCALE")?.value;

  if (!excludedPathsLogout.has(request.nextUrl.pathname) && !access_token) {
    request.nextUrl.pathname = "/" + localeCookie;
    return nextIntlMiddleware(request);
  }

  if (excludedPathsLogin.has(request.nextUrl.pathname) && access_token && teamID) {
    request.nextUrl.pathname = "/" + localeCookie;
    return nextIntlMiddleware(request);
  }

  if (access_token && !teamID) {
    request.nextUrl.pathname = "/questions";
    return nextIntlMiddleware(request);
  }

  if (request.nextUrl.pathname === "/questions" && teamID) {
    request.nextUrl.pathname = "/" + localeCookie;

    return nextIntlMiddleware(request);
  }
  return nextIntlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
