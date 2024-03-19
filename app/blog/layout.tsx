import "../globals.css";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SettingsQueryResponse, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { Metadata } from "next";
import { toPlainText } from "next-sanity";
// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await sanityFetch<SettingsQueryResponse>({
    query: settingsQuery,
    // Metadata should never contain stega
    stega: false,
  });
  const title = settings?.title || demo.title;
  const description = settings?.description || demo.description;

  const ogImage = resolveOpenGraphImage(settings?.ogImage);
  let metadataBase: URL | undefined = undefined;
  try {
    metadataBase = settings?.ogImage?.metadataBase
      ? new URL(settings.ogImage.metadataBase)
      : undefined;
  } catch {
    // ignore
  }
  return {
    metadataBase,
    title: {
      template: `%s | ${title}`,
      default: title,
    },
    description: toPlainText(description),
    openGraph: {
      images: ogImage ? [ogImage] : [],
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const [locale, setLocale] = useState("hu");

  // useEffect(() => {
  //   const storedLocale = Cookies.get("NEXT_LOCALE");
  //   if (storedLocale) {
  //     setLocale(storedLocale);
  //   }
  // }, []);
  // const handleLanguageChange = () => {
  //   const newLocale = locale === "hu" ? "rs" : "hu";
  //   setLocale(newLocale);
  //   Cookies.set("NEXT_LOCALE", newLocale);

  //   console.log("Language changed to", Cookies.get("NEXT_LOCALE"));
  // };
  return (
    <html>
      <body className="min-h-screen">
      <nav className="flex items-center gap-8 p-4 shadow-md">
          <div className="text-lg font-bold">Blog</div>
          <div className="flex gap-8">
            <Link href="/">
              <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">
                Home
              </p>
            </Link>
            <Link href="/blog">
              <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">
                Blogok
              </p>
            </Link>
            {/* <button onClick={handleLanguageChange}>
              Nyelv: {locale === "hu" ? "Magyar" : "Szerb"}
            </button> */}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
