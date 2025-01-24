import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Provider } from "@/providers/Providers";
import NextBreadcrumb from "@/components/ui/NextBreadcrumb";
import SessionWrapper from "@/providers/SessionWrapper";
export const metadata: Metadata = {
  title: "shop.co",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <head>
          <link
            rel="icon"
            type="image/svg+xml"
            href="../assets/svgs/logo.svg"
          />
        </head>
        <body>
          <Provider>
            <NavBar />
            <main className="overflow-x-hidden font-sans ">
              <NextBreadcrumb
                homeElement={"Home"}
                separator={<span> | </span>}
                activeClasses="text-black font-bold"
                containerClasses="flex py-5 w-full"
                listClasses="hover:underline mx-2"
                capitalizeLinks
              />
              {children}
            </main>
            <Footer />
          </Provider>
        </body>
      </html>
    </SessionWrapper>
  );
}
