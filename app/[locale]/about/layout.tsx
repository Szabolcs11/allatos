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
  ];
  return (
    <html>
      <body className="landing is-preload">
        <Navbar menus={menus} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
