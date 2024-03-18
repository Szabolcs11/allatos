// layout.tsx
import Link from "next/link";
import React, { ReactNode } from "react";
import "../globals.css";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <html>
      <body>
        <nav className="flex items-center gap-8 p-4 shadow-md">
          <div className="text-lg font-bold">Statikus főoldal</div>
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
          </div>
        </nav>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default Layout;
