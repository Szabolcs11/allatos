"use client";
import Link from "next/link";
import React, { ReactNode, useState, useEffect } from "react";
import "../globals.css";
import Cookies from "js-cookie";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [locale, setLocale] = useState("hu");

  useEffect(() => {
    const storedLocale = Cookies.get("NEXT_LOCALE");
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  const handleLanguageChange = () => {
    const newLocale = locale === "hu" ? "rs" : "hu";
    setLocale(newLocale);
    Cookies.set("NEXT_LOCALE", newLocale);

    console.log("Language changed to", Cookies.get("NEXT_LOCALE"));
  };

  return (
    <html>
      <body>
        <nav className="flex items-center gap-8 p-4 shadow-md">
          <div className="text-lg font-bold">Statikus főoldal</div>
          <div className="flex gap-8">
            <Link href="/">
              <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Home</p>
            </Link>
            <Link href="/about">
              <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Rólunk</p>
            </Link>
            <Link href="/blog">
              <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Blogok</p>
            </Link>
            <button onClick={handleLanguageChange}>Nyelv: {locale === "hu" ? "Magyar" : "Szerb"}</button>
          </div>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
