"use client";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";
import path from "path";
import favicon from "./../../images/favicon.png";

type NavbarType = {
  isFilldBg?: boolean;
  menus: any;
};

export let navigateTo: (path: string) => void;

function Navbar({ isFilldBg, menus }: NavbarType) {
  const [locale, setLocale] = useState("rs");
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  navigateTo = (path: string) => {
    const pathWithLocale = "/" + locale + path;
    router.push(pathWithLocale, {});
  };

  useEffect(() => {
    const storedLocale = Cookies.get("NEXT_LOCALE") || "rs";
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  const handleLanguageChange = (lang: string) => {
    if (lang === "hu" || lang === "rs") {
      Cookies.set("NEXT_LOCALE", lang);
      const path = pathname.split("/")[2];
      if (path) {
        router.push("/" + lang + "/" + path, {});
      } else {
        router.push("/" + lang, {});
      }
    }
  };

  return (
    <header id="header" className={isFilldBg ? "" : "alt"}>
      <h1 style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <img src={favicon.src} alt="Vetservis logo" style={{ width: 36, borderRadius: "50%" }} />
        <a>Vetservis</a>
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <Link href={"/" + locale}>{menus[0].title}</Link>
          </li>
          <li>
            <Link href={"/" + locale + "/about"}>{menus[1].title}</Link>
          </li>
          <li>
            <Link href={"/" + locale + "/blog"}>{menus[2].title}</Link>
          </li>
          <li>
            <Link href={"/" + locale + "/services"}>{menus[3].title}</Link>
          </li>
          <li>
            <Link href={"/" + locale + "/specialservices"}>{menus[4].title}</Link>
          </li>
          <li>
            <Link href={"/" + locale + "/gallery"}>{menus[5].title}</Link>
          </li>
          <li>
            <Link href={"/" + locale + "/contact"}>{menus[6].title}</Link>
          </li>
          <li>
            <a
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              className="icon solid fa-angle-down button dropdown"
            >
              {menus[7].title}
              {showDropdown ? (
                <div className="dropdown-content">
                  <li onClick={() => handleLanguageChange("hu")}>Magyar</li>
                  <li onClick={() => handleLanguageChange("rs")}>Szerb</li>
                </div>
              ) : (
                <></>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
    // <nav className="flex items-center gap-8 p-4 shadow-md">
    //   <div className="flex gap-8">
    //     <Link href="/">
    //       <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Home</p>
    //     </Link>
    //     <Link href="/about">
    //       <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Rólunk</p>
    //     </Link>
    //     <Link href="/price">
    //       <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Árjegyzék</p>
    //     </Link>
    //     <Link href="/blog">
    //       <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">Blogok</p>
    //     </Link>
    //     <button onClick={handleLanguageChange}>Nyelv: {locale === "hu" ? "Magyar" : "Szerb"}</button>
    //   </div>
    // </nav>
  );
}

export default Navbar;
