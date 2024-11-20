"use client";
import Cookies from "js-cookie";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { flattenConfig } from "sanity";

type FooterType = {
  isFilldBg?: boolean;
  menus: any;
};

function Footer({ menus, isFilldBg }: FooterType) {
  const [locale, setLocale] = useState("rs");
  const [showDropdown, setShowDropdown] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    const storedLocale = Cookies.get("NEXT_LOCALE") || "rs";
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);
  console.log(menus);
  return (
    <footer id="footer">
      <div className="footercontainer">
        <h3 style={{ margin: 0, color: "#fff" }}>Vetservis d.o.o.</h3>
      </div>
      <div className="footerline"></div>
      <div className="footercontainer">
        <p style={{ fontSize: 16, margin: 0, color: "#fff" }}>
          <strong style={{ color: "#fff" }}>{menus[8].title}</strong><a style="border: none; color: white;" href="tel:+38124764270"> +381 24 764 270</a>
          <br />
          <strong style={{ color: "#fff" }}>{menus[9].title}</strong><a style="border: none; color: white;" href="tel:+381637150100"> +381 63 7 150 100</a>
          <br />
          <strong style={{ color: "#fff" }}>Email:</strong><a style="border: none; color: white;" href="mailto:vetservis@gmail.com"> vetservis@gmail.com</a>
          <br />
          <strong style={{ color: "#fff" }}>{menus[10].title}</strong> Trumbićeva 7, Bajmok 456621
        </p>
      </div>
      <div className="footercontainer">
        <nav id="nav">
          <ul className="footer-ul" style={{ display: "flex", gap: 24, fontSize: 16, fontWeight: 600 }}>
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
          </ul>
        </nav>
      </div>
      <div className="footercontainer" style={{ margin: 0, fontSize: 16, fontWeight: "500", color: "#fff" }}>
        <a style={{ border: "none" }} href="https://www.facebook.com/veterinarskastanica.vetservis">
          Facebook
        </a>
        <br />
        <a style={{ border: "none" }} href="https://www.instagram.com/veterinarskastanica.vetservis/">
          Instagram
        </a>
      </div>
      {/* <ul className="icons">
        <li>
          <a href="#" className="icon brands fa-facebook-f">
            <span className="label">Facebook</span>
          </a>
        </li>
        <li>
          <a href="#" className="icon brands fa-instagram">
            <span className="label">Instagram</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; Untitled. All rights reserved.</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul> */}
    </footer>
  );
}

export default Footer;
