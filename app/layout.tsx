import type { Metadata } from "next";
import { newsreader } from "./ui/fonts";
import "./globals.css";
import Header from "./ui/header/header";
import BookWrapper from "./ui/book/bookWrapper";
import { Suspense } from "react";
import Loading from "./ui/loading/loading";

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
