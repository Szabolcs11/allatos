import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import Footer from "../blog/Footer";
import Navbar from "../blog/Navbar";
import "./../../globals.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
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
      <body className="landing is-preload">
        <div id="page-wrapper">
          <Navbar menus={menus} />
          {children}
          <Footer />
        </div>
        {/* <nav className="flex items-center gap-8 p-4 shadow-md">
          <div className="text-lg font-bold">Statikus főoldal</div>
          <div className="flex gap-8">
            <Link href="/">
              <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Rólunk</p>
            </Link>
            <Link href="/price">
              <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Árjegyzék</p>
            </Link>
            <Link href="/blog">
              <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Blogok</p>
            </Link>
            <button onClick={handleLanguageChange}>Nyelv: {locale === "hu" ? "Magyar" : "Szerb"}</button>
          </div>
        </nav> */}
        {/* <div>{children}</div> */}
      </body>
    </html>
  );
};

export default Layout;
