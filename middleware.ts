import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["rs", "hu"],
  defaultLocale: "rs",
  localeDetection: false,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(rs|hu)/:path*"],
};
