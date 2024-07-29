import "./../../globals.css";

import Navbar from "../../blog/Navbar";
import Footer from "../../blog/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="is-preload">
        <div id="page-wrapper">
          <Navbar isFilldBg={true} />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
