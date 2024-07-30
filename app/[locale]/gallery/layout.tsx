import "./../../globals.css";

import { useTranslations } from "next-intl";
import React from "react";
import Footer from "../blog/Footer";
import Navbar from "../blog/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Gallery");
  const te = useTranslations("Menu");
  const menus = [
    { title: te("home") },
    { title: te("about") },
    { title: te("blog") },
    { title: te("services") },
    { title: te("specialservices") },
    { title: te("gallery") },
    { title: te("contact") },
    { title: te("language") },
  ];
  return (
    <html>
      <body className="landing is-preload">
        <Navbar menus={menus} />
        <section id="banner">
          <h2>{t("welcome")}</h2>
        </section>
        {children}
        <Footer />
      </body>
    </html>
  );
}
