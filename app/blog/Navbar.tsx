"use client"
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
    const handleLanguageChange = () => {
      const newLocale = locale === "hu" ? "rs" : "hu";
      setLocale(newLocale);
      Cookies.set("NEXT_LOCALE", newLocale);
      window.location.reload();
      console.log("Language changed to", Cookies.get("NEXT_LOCALE"));
    };
  return (
    <nav className="flex items-center gap-8 p-4 shadow-md">
          <div className="flex gap-8">
            <Link href="/">
              <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">
                Home
              </p>
            </Link>
            <Link href="/blog">
              <p className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out">
                Blogok
              </p>
            </Link>
            <button onClick={handleLanguageChange}>
              Nyelv: {locale === "hu" ? "Magyar" : "Szerb"}
            </button>
          </div>
      </nav>
  )
}

export default Navbar