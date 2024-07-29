import "./../../globals.css";

import Navbar from "../../blog/Navbar";
import Footer from "../../blog/Footer";
import { NextIntlClientProvider, useTranslations } from "next-intl";
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Gallery");

  return (
    <html>
      <body className="landing is-preload">
        <Navbar />
        <section id="banner">
          <h2>{t("welcome")}</h2>
        </section>
        {children}
        <Footer />
      </body>
    </html>
  );
}
