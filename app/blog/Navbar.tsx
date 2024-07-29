"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

type NavbarType = {
  isFilldBg?: boolean;
};

function Navbar({ isFilldBg }: NavbarType) {
  const [locale, setLocale] = useState("hu");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedLocale = Cookies.get("NEXT_LOCALE");
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);
  const handleLanguageChange = (lang: string) => {
    // const newLocale = locale === "hu" ? "rs" : "hu";
    if (lang == "hu" || lang == "rs") {
      setLocale(lang);
      Cookies.set("NEXT_LOCALE", lang);
      window.location.reload();
      console.log("Language changed to", Cookies.get("NEXT_LOCALE"));
    }
  };
  return (
    <header id="header" className={isFilldBg ? "" : "alt"}>
      <h1>
        <a href="index.html">Vetservis</a>
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">Rólunk</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/services">Szolgáltatásaink</Link>
          </li>
          <li>
            <Link href="/specialservices">Speciális Szolgáltatásaink</Link>
          </li>
          <li>
            <Link href="/gallery">Képgaléria</Link>
          </li>
          <li>
            <Link href="/contact">Kontakt</Link>
          </li>
          <li>
            <a
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              href="#"
              className="icon solid fa-angle-down button dropdown"
            >
              Nyelv
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
