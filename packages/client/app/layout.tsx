import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "../util/Providers";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = {
  title: "shop.co",
  description: "Generated by create next app",
  icons: "../assets/svgs/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="overflow-x-hidden">
          <NavBar />
          <Provider>{children}</Provider>
          <Footer />
        </main>
      </body>
    </html>
  );
}
