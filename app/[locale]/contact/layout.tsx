import "./../../globals.css";

import Navbar from "../blog/Navbar";
import Footer from "../blog/Footer";
import { useTranslations } from "next-intl";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Menu");
  const menus = [
    { title: t("home") },
    { title: t("about") },
    { title: t("blog") },
    { title: t("services") },
    { title: t("specialservices") },
    { title: t("gallery") },
    { title: t("contact") },
    { title: t("language") },
  ];
  return (
    <html>
      <body className="is-preload">
        <div id="page-wrapper">
          <Navbar isFilldBg={true} menus={menus} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
