import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";


import Link from 'next/link';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KellyMcCormack.com",
  description: "Web developer, designer, accessibility specialist, creative technonlogist.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="header">
          KellyMcCormack.com
          <nav className={styles.navMain}>
            <Link href="/">Home</Link>
            <Link href="/accessibility">Accessibility</Link>
            <Link href="/development">Development</Link>
            <Link href="/creative-technology">Creative Technology</Link>
            <Link href="/bio">Bio</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>

          {children}

        <footer>
          &copy;2025 KellyMcCormack.com
          <Link href="/privacy-accessibility-statement">Privacy and Accessibility Statement</Link>
        </footer>
      </body>
    </html>
  );
}
