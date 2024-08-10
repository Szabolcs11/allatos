import { notFound } from "next/navigation";
import { getRequestConfig, unstable_setRequestLocale } from "next-intl/server";

const locales = ["rs", "hu"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  // Set the request locale to enable static rendering
  unstable_setRequestLocale(locale);

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
