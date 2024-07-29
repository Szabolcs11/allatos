import "../globals.css";

import * as demo from "@/sanity/lib/demo";
import { sanityFetch } from "@/sanity/lib/fetch";
import { SettingsQueryResponse, settingsQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";
import { Metadata } from "next";
import { toPlainText } from "next-sanity";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";

// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import Link from "next/link";

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
    metadataBase = settings?.ogImage?.metadataBase ? new URL(settings.ogImage.metadataBase) : undefined;
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    console.log(hostname);
  }
  console.log("RootLayout");
  return (
    <html>
      <body className="landing is-preload">
        <div id="page-wrapper">
          <Navbar isFilldBg={true} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
