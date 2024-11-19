import "./../../globals.css";

import Navbar from "../blog/Navbar";
import Footer from "../blog/Footer";
import { useTranslations } from "next-intl";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations("Menu");
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
        {children}
        <Footer menus={menus} />
      </body>
    </html>
  );
}
