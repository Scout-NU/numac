"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-green-primary px-10 h-[44px] flex items-center justify-start gap-12">
      <span className="text-[#F7F4EC] font-sans text-[20px] font-bold">
          <a
            key={"LOGO"}
            href={"/"}
          >
            LOGO
          </a>
      </span>
      <nav className="flex gap-8">
        {[
          { label: "Who we are", href: "/about" },
          { label: "What we do", href: "/projects" },
          { label: "Our Teams", href: "/our_teams" },
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
