import type { Metadata } from "next";
// import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { newsreader } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/header/header";
import BookWrapper from "./ui/book/bookWrapper";
import { Suspense } from "react";
import Loading from "./ui/loading/loading";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// const newsreader = Newsreader({
//   variable: "--font-newsreader",
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Book Worming",
  description: "Find your next favorite read from the top 15 books from The New York Times Best Sellers list",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${newsreader.className}`}>
        <Header />
        <Suspense fallback={<Loading />}>
          <BookWrapper>
            {children}
          </BookWrapper>
        </Suspense>
      </body>
    </html>
  );
}
