import "../globals.css";

import Navbar from "../blog/Navbar";
import Footer from "../blog/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="landing is-preload">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
