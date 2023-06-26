import "./globals.css";

import { Footer, Navbar } from "@/components";
import { Manrope } from "next/font/google";

const inter = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Car Hub",
  description: "Discover the best car in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
