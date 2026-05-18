"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
  { label: "Design", href: "/design" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      ref={navRef}
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-card/70 backdrop-blur-xl border-b border-border shadow-md"
          : "bg-transparent backdrop-blur-sm",
      ].join(" ")}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="no-underline shrink-0 flex items-center gap-2 group"
          aria-label="Home"
        >
          <p className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300 m-0">
            Logo
          </p>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-1 flex-1 justify-center"
          aria-label="Main"
        >
          {navLinks.map(({ label, href }) => {
            const active =
              pathname.includes(label.toLowerCase()) ||
              (label === "Home" && pathname === "/");
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "relative px-4 py-2 rounded-xl text-sm font-medium no-underline",
                  "transition-all duration-300",
                  active
                    ? "text-primary"
                    : "text-foreground-muted hover:text-foreground hover:bg-muted",
                ].join(" ")}
              >
                {label}
                {/* {active && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                )} */}

                <span
                  className={[
                    "absolute bottom-1 left-4 h-[2px] w-[calc(100%-32px)] bg-primary origin-left transition-transform duration-300",
                    active ? "scale-x-100" : "scale-x-0",
                  ].join(" ")}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right side: dark mode toggle + mobile hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          <DarkModeToggle />

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-xl
                       hover:bg-muted transition-colors duration-200"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={[
                "block w-5 h-[1.5px] bg-foreground rounded-full transition-all duration-300 origin-center",
                menuOpen ? "rotate-45 translate-y-[6.5px]" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-[1.5px] bg-foreground rounded-full transition-all duration-300",
                menuOpen ? "opacity-0 scale-x-0" : "",
              ].join(" ")}
            />
            <span
              className={[
                "block w-5 h-[1.5px] bg-foreground rounded-full transition-all duration-300 origin-center",
                menuOpen ? "-rotate-45 -translate-y-[6.5px]" : "",
              ].join(" ")}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <nav
          className="bg-card/80 backdrop-blur-xl border-t border-border px-6 py-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
        >
          {navLinks.map(({ label, href }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "px-4 py-3 rounded-xl text-sm font-medium no-underline transition-all duration-200",
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-foreground-muted hover:text-foreground hover:bg-muted",
                ].join(" ")}
                onClick={active ? () => setMenuOpen(false) : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
