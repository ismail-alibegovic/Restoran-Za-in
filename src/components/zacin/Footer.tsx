"use client";

import { Reveal } from "./anim";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="bg-ink text-cream pt-24 md:pt-32 pb-10 mt-auto"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        {/* Top: Brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 mb-20">
          {/* Brand */}
          <div className="md:col-span-5">
            <Reveal>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-heading text-5xl md:text-6xl font-extrabold">
                  Začin
                </span>
                <span className="text-[11px] uppercase tracking-[0.22em] text-saffron-soft font-bold translate-y-[-4px]">
                  Sarajevo
                </span>
              </div>
              <p className="body-small text-cream/70 max-w-md leading-relaxed mb-8">
                Mediteranski i internacionalni restoran u srcu Sarajeva. Samo
                stotinjak metara od centra grada — vrhunska jela, iznimna vinska
                karta i topla atmosfera.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/restoranzacin/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-11 h-11 border border-cream/30 flex items-center justify-center hover:bg-spice hover:border-spice transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/p/Restoran-Za%C4%8Din-100070402410168/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-11 h-11 border border-cream/30 flex items-center justify-center hover:bg-spice hover:border-spice transition-colors"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Hours */}
          <Reveal className="md:col-span-3" delay={0.1}>
            <p className="uppercase-spaced text-saffron mb-5">Radno vrijeme</p>
            <ul className="space-y-2.5 body-small text-cream/80">
              <li className="flex justify-between gap-4">
                <span>Ponedeljak</span>
                <span className="text-cream font-bold">10 — 24</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Utorak</span>
                <span className="text-cream font-bold">10 — 24</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Srijeda</span>
                <span className="text-cream font-bold">10 — 24</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Četvrtak</span>
                <span className="text-cream font-bold">10 — 24</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Petak</span>
                <span className="text-cream font-bold">10 — 24</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Subota</span>
                <span className="text-cream font-bold">10 — 24</span>
              </li>
              <li className="flex justify-between gap-4">
                <span>Nedjelja</span>
                <span className="text-cream font-bold">14 — 22</span>
              </li>
            </ul>
          </Reveal>

          {/* Contact + Nav */}
          <Reveal className="md:col-span-4" delay={0.2}>
            <p className="uppercase-spaced text-saffron mb-5">Kontakt</p>
            <ul className="space-y-4 body-small text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-saffron mt-1 shrink-0" />
                <span>Tina Ujevića 13, 71000 Sarajevo, Bosna i Hercegovina</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-saffron mt-1 shrink-0" />
                <a
                  href="tel:+38733445565"
                  className="hover:text-saffron-soft transition-colors"
                >
                  +387 33 445 565
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-saffron mt-1 shrink-0" />
                <a
                  href="mailto:zacin.info@gmail.com"
                  className="hover:text-saffron-soft transition-colors break-all"
                >
                  zacin.info@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-8 pt-8 border-t border-cream/15">
              <p className="uppercase-spaced text-saffron mb-4">Navigacija</p>
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {[
                  ["Početna", "#hero"],
                  ["O nama", "#o-nama"],
                  ["Meni", "#meni"],
                  ["Rezervacije", "#rezervisi"],
                  ["Galerija", "#galerija"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    className="text-[12px] uppercase tracking-[0.14em] font-bold text-cream/70 hover:text-saffron-soft transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </Reveal>
        </div>

        {/* Big brand text */}
        <Reveal>
          <div className="border-t border-cream/15 pt-12">
            <p className="display-hero text-cream/8 text-[26vw] md:text-[20vw] leading-[0.8] text-center select-none">
              ZAČIN
            </p>
          </div>
        </Reveal>

        {/* Bottom row */}
        <div className="border-t border-cream/15 pt-6 mt-2 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.16em] text-cream/50">
          <span>© {new Date().getFullYear()} Restoran Začin — Sarajevo</span>
          <span>Mediteranska &amp; internacionalna kuhinja</span>
          <span>Sa ljubavlju od sarajevske kuhinje</span>
        </div>
      </div>
    </footer>
  );
}
