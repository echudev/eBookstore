"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useStore } from "@/store/useReadingList";
import { LayoutGroup, motion } from "framer-motion";

export default function Navbar() {
  const { readingList, toggleBook } = useStore();
  const pathname = usePathname();
  const [navLinks, setNavLinks] = useState([
    {
      id: 0,
      name: "Inicio",
      href: "/",
      books: null,
    },
    {
      id: 1,
      name: "Mis Libros",
      href: "/mislibros",
      books: readingList.length,
    },
  ]);

  useEffect(() => {
    setNavLinks((prev) =>
      prev.map((link) => {
        if (link.id === 1) {
          return {
            ...link,
            books: readingList.length,
          };
        }
        return link;
      })
    );
  }, [readingList, toggleBook]);

  return (
    <nav className="flex flex-col items-center mt-3 border-b border-white/10 w-full">
      <h1 className="relative text-3xl mb-5">
        <b className="text-violet-500">e</b>Bookstore
      </h1>
      <LayoutGroup>
        <div className="flex gap-6 mt-2">
          {navLinks.map((link, i) => {
            let isActive = pathname === link.href;
            return (
              <Link
                key={i}
                href={link.href}
                className="relative hover:bg-white/10 rounded transition-all py-2 px-3"
              >
                <p className={isActive ? "" : "opacity-70"}>{link.name}</p>
                {link.id === 1 && link.books !== null && link.books > 0 && (
                  <div className="absolute top-1 -right-1 bg-yellow-300 text-neutral-800 font-bold rounded-full w-4 h-4 flex items-center justify-center text-xs">
                    {link.books}
                  </div>
                )}
                {isActive ? (
                  <motion.div
                    className="absolute inset-0 border-b-2 border-yellow-300 z-[-1]"
                    layoutId="sidebar"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                ) : null}
              </Link>
            );
          })}
        </div>
      </LayoutGroup>
    </nav>
  );
}
