import "./../../globals.css";

import { useTranslations } from "next-intl";
import React from "react";
import Footer from "../blog/Footer";
import Navbar from "../blog/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Gallery");
  const te = useTranslations("Menu");
  const t2 = useTranslations("Contact");
  const menus = [
    { title: t("home") },
    { title: t("about") },
    { title: t("blog") },
    { title: t("services") },
    { title: t("specialservices") },
    { title: t("gallery") },
    { title: t("contact") },
    { title: t("language") },
    { title: t2("telephone") },
    { title: t2("phoneoncall") },
    { title: t2("address") },
  ];
  return (
    <html>
      <body className="landing is-preload">
        <Navbar menus={menus} />
        <section id="banner">
          <h2>{t("welcome")}</h2>
        </section>
        {children}
        <Footer menus={menus} />
      </body>
    </html>
  );
}
