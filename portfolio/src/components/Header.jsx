import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#",            label: "Home",         active: true },
    { href: "#about",       label: "About" },
    // { href: "#education",   label: "Education" },
    { href: "#skills",      label: "Skills" },
    { href: "#projects",    label: "Projects" },
    { href: "#certificates",label: "Certificates" },
    { href: "#achievements",label: "Achievements" },
    { href: "#contact",     label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full px-[5%] py-4 md:py-5 bg-bg flex justify-between items-center z-10">
      <a href="#" className="text-xl md:text-2xl text-white font-semibold no-underline pointer-events-none">
        My Portfolio.
      </a>

      {/* Desktop Nav — visible from md (800px) and up */}
      <nav className="hidden md:flex items-center">
        {navLinks.map(({ href, label, active }) => (
          <a
            key={label}
            href={href}
            className={`text-[15px] lg:text-lg font-medium ml-5 lg:ml-9 no-underline transition-all
              ${active
                ? "text-grad"
                : "text-white hover:text-grad"
              }`}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* Hamburger — visible below md (800px) */}
      <div
        className="md:hidden text-[28px] text-white cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i className="bx bx-menu"></i>
      </div>

      {/* Mobile Dropdown — visible below md (800px) */}
      {menuOpen && (
        <div className="md:hidden absolute right-4 top-[56px] w-[250px] bg-white/10 backdrop-blur-md rounded-[20px] overflow-hidden">
          {navLinks.map(({ href, label }) => (
            <li
              key={label}
              className="flex items-center justify-center py-3 list-none border-b border-white/5 last:border-b-0"
            >
              <a
                href={href}
                className="no-underline text-white text-[15px] hover:text-grad"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </div>
      )}
    </header>
  );
}
