import Navbar from "@/components/navbar";
import "./globals.css";
import localFont from "next/font/local";
import type { Metadata } from "next";

const ubuntu = localFont({
  src: [
    {
      path: "../../public/font/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "eBookstore",
  description: "prueba técnica Midudev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${ubuntu.variable}`}>
      <body className="font-ubuntu">
        <main className="flex flex-col min-h-screen max-w-screen-lg m-auto">
          <Navbar />
          <section>{children}</section>
          <footer className="mt-auto pb-3 text-center">
            hecho con 💖 by echudev
          </footer>
        </main>
      </body>
    </html>
  );
}
