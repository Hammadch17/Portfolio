"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/Button";
import { site } from "@/data/site";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/how-i-work", label: "How I Work" },
  ...(site.showContent ? [{ href: "/content", label: "Content" }] : []),
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (menuOpen) setMenuOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        scrolled ? "bg-bg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1120px] px-4 md:px-6 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-xl font-semibold text-text"
        >
          {site.fullName}
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium text-text hover:text-green ${
                  isActive ? "text-green underline underline-offset-4" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Button href="/contact#book">Book a call</Button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Button href="/contact#book" className="px-4 py-2 text-sm">
            Book a call
          </Button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 text-text"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-bg z-40 overflow-y-auto">
          <nav className="flex flex-col px-4 py-8 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-text"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
