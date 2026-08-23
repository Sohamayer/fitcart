import "./globals.css";

import Header from "../components/header/Header.js";
import Footer from "../components/footer/Footer.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <Header />

        <main>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}