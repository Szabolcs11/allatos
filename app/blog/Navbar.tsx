"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

function Navbar() {
  const [locale, setLocale] = useState("hu");

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
    <header id="header" className="alt">
      <h1>
        <a href="index.html">Vetservis</a>
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Rólunk</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Szolgáltatásaink</a>
            </Link>
          </li>
          <li>
            <Link href="/specialservices">
              <a>Speciális Szolgáltatásaink</a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>Képgaléria</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a href="contact.html">Kontakt</a>
            </Link>
          </li>
          <li>
            <a href="#" className="icon solid fa-angle-down button">
              Nyelv
            </a>
            <ul>
              <li>
                <a onClick={() => handleLanguageChange("rs")}>Szerb</a>
              </li>
              <li>
                <a onClick={() => handleLanguageChange("hu")}>Magyar</a>
              </li>
            </ul>
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
