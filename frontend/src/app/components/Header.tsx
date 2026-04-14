"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-green-primary h-11 flex items-center">
      <img
        src="/logo.svg"
        alt="Logo"
        className="w-40 h-11 shrink-0"
      />
      <nav className="flex items-center gap-14 ml-[21px]">
        {[
          { label: "Who we are", href: "/about" },
          { label: "What we do", href: "/whatwedo" },
          { label: "Our Teams", href: "" },
          { label: "Contact", href: "/contact" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`w-20 text-center text-[#F7F4EC] text-xs font-nimbus ${
              pathname === link.href ? "font-bold" : "font-normal"
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}