"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Magnetic } from "./anim";

const NAV_LINKS = [
  { label: "Početna", href: "#hero" },
  { label: "O nama", href: "#o-nama" },
  { label: "Meni", href: "#meni" },
  { label: "Rezervacije", href: "#rezervisi" },
  { label: "Galerija", href: "#galerija" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-divider"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-[68px] md:h-[80px]">
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-baseline gap-1 group"
            aria-label="Restoran Začin — Početna"
          >
            <span className="font-heading text-2xl md:text-[28px] font-extrabold tracking-tight text-ink leading-none">
              Začin
            </span>
            <span className="hidden md:inline text-[10px] uppercase tracking-[0.22em] text-spice font-bold translate-y-[-2px]">
              Sarajevo
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group relative text-[13px] font-bold uppercase tracking-[0.14em] text-ink-soft hover:text-spice transition-colors duration-300"
              >
                {l.label}
                <span className="absolute -bottom-1.5 left-0 h-[1.5px] w-0 bg-spice transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+38733445565"
              className="text-[13px] font-bold uppercase tracking-[0.14em] text-ink-soft hover:text-spice transition-colors"
            >
              +387 33 445 565
            </a>
            <Magnetic strength={0.3}>
              <a href="#rezervisi" className="btn-spice !py-3 !px-5 text-[12px]">
                Rezerviši
                <span className="arrow">→</span>
              </a>
            </Magnetic>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 -mr-2 text-ink"
            aria-label="Otvori meni"
            onClick={() => setOpen(true)}
          >
            <Menu size={24} strokeWidth={1.6} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 bg-paper transition-transform duration-500 lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-[68px] px-6 border-b border-divider">
          <span className="font-heading text-2xl font-extrabold">Začin</span>
          <button
            aria-label="Zatvori meni"
            onClick={() => setOpen(false)}
            className="p-2 -mr-2"
          >
            <X size={24} strokeWidth={1.6} />
          </button>
        </div>
        <nav className="flex flex-col px-6 pt-10 gap-5">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-heading text-3xl font-bold text-ink hover:text-spice transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="h-px bg-divider my-4" />
          <a
            href="tel:+38733445565"
            className="text-sm uppercase tracking-widest font-bold text-ink-soft"
          >
            +387 33 445 565
          </a>
          <a
            href="mailto:zacin.info@gmail.com"
            className="text-sm uppercase tracking-widest font-bold text-ink-soft"
          >
            zacin.info@gmail.com
          </a>
          <a
            href="#rezervisi"
            onClick={() => setOpen(false)}
            className="btn-spice mt-6 justify-center"
          >
            Rezerviši sto
            <span className="arrow">→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
