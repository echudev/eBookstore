"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: 0,
    name: "Inicio",
    href: "/",
  },
  {
    id: 1,
    name: "Mis Libros",
    href: "/mislibros",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center mt-3 border-b border-white/10 w-full">
      <h1 className="text-xl">📚 echubooks</h1>
      <div className="flex gap-6 mt-2">
        {navLinks.map((link, i) => {
          let isActive = pathname === link.href;
          return (
            <Link
              key={i}
              href={link.href}
              className="relative hover:bg-white/10 rounded transition-all py-2 px-3"
            >
              <p className={isActive ? "" : "text-white/70"}>{link.name}</p>
              <div
                className={
                  isActive
                    ? "absolute inset-0 border-b-2 border-yellow-300 z-[-1]"
                    : "absolute inset-0 border-b-2 border-transparent z-[-1]"
                }
              ></div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
