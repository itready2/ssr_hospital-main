import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ['en', 'th'],
  defaultLocale: 'th', //*ตั้งต้นเป็นภาษาไทย
  localePrefix:'always',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(th|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
