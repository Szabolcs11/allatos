import "../globals.css";

import Navbar from "../blog/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body className="min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
