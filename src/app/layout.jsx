"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import Script from "next/script";
import Providers from "./providers.jsx";
import Link from 'next/link';
// import { Link } from "next-transition-router";


import Navigation from "./components/navigation";
import Logo from "./components/logo.jsx";

export const siteName = "KellyMcCormack.com";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "KellyMcCormack.com",
//   description: "Web developer, designer, accessibility specialist, creative technologist.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <header className="site-header">
            <Link href="/" className={styles.headerLogo}>
              <Logo
                site={siteName}
              ></Logo>
            </Link>
            <nav className={styles.navMain}>
              <Navigation></Navigation>         
            </nav>
          </header>
          <Providers>
            {children}
          </Providers>
          <footer className="site-footer">
            &copy;2025 KellyMcCormack.com
            <Link href="/privacy-accessibility-statement">Privacy and Accessibility Statement</Link>
          </footer>

        {/* <Script src="/next/temp-paths.js"></Script> */}
        <Script>
          {`
            if (window.location.href.indexOf('https://kellymccormack.com/next') == 0 )  {
              const styleSheets = document.styleSheets;
              let head = document.getElementsByTagName('head')[0];
              for (let i = 0; i < styleSheets.length; i++) {
                  let link = document.createElement('link');
                  link.rel = 'stylesheet';
                  link.type = 'text/css';
                  link.href = './' + styleSheets[i].href.split('/').pop();
                  console.log(link.href);
                  head.appendChild(link);
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}
