import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "echubooks",
  description: "prueba técnica Midudev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="flex flex-col min-h-screen max-w-screen-lg m-auto">
          <nav className="text-center pt-3 text-xl">📚 echubooks</nav>
          <section>{children}</section>
          <footer className="mt-auto pb-3 text-center">
            hecho con 💖 by echudev
          </footer>
        </main>
      </body>
    </html>
  );
}
