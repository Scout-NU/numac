
export default function Header() {
  return (
    <header className="w-full bg-green-primary px-10 h-[44px] flex items-center justify-start gap-12">
      <span className="text-[#F7F4EC] font-sans text-[20px] font-bold">
        LOGO
      </span>
      <nav className="flex gap-8">
        {[
          { label: "Who we are", href: "/about" },
          { label: "What we do", href: "" },
          { label: "Our Teams", href: "" },
          { label: "Contact", href: "/contact" },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-beige-primary font-nimbus text-sm hover:font-bold transition-all"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
