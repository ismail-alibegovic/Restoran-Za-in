"use client";

import { Reveal } from "./anim";
import { motion } from "framer-motion";

export default function BookNowCTA() {
  return (
    <section className="bg-spice text-cream py-24 md:py-32 overflow-hidden">
      {/* Big centered title */}
      <div className="relative mb-16 md:mb-20 text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="display-hero text-cream text-[8.5vw] leading-[1.05] md:text-[6vw] md:leading-[0.95] md:whitespace-nowrap"
        >
          Rezerviši večeru u Začinu
        </motion.h2>
      </div>

      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <Reveal className="lg:col-span-7">
            <p className="body-large text-cream/85 leading-relaxed max-w-[640px] mb-8">
              Zakoračite u svijet živih ukusa i toplih trenutaka. Naši stolovi
              su postavljeni, kuhinja sumi, a nešto posebno se uvijek kuva. Bilo
              da je veče za dvoje ili porodični susret, vaše mjesto je samo
              jedan klik udaljeno.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#rezervisi"
                className="inline-flex items-center gap-3 px-7 py-4 bg-cream text-spice text-[12px] uppercase tracking-[0.14em] font-bold hover:bg-ink hover:text-cream transition-colors duration-300"
              >
                Rezerviši sto
                <span className="arrow transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href="tel:+38733445565"
                className="inline-flex items-center gap-3 px-7 py-4 border border-cream/40 text-cream text-[12px] uppercase tracking-[0.14em] font-bold hover:bg-cream/10 transition-colors duration-300"
              >
                +387 33 445 565
              </a>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.15}>
            <div className="bg-cream/5 border border-cream/15 backdrop-blur-sm p-8 md:p-10">
              <p className="uppercase-spaced text-saffron-soft mb-3">
                Brze informacije
              </p>
              <div className="divide-y divide-cream/15">
                {[
                  ["Pon — Sub", "10:00 — 24:00"],
                  ["Nedjelja", "14:00 — 22:00"],
                  ["Adresa", "Tina Ujevića 13, Sarajevo"],
                  ["Telefon", "+387 33 445 565"],
                  ["E-mail", "zacin.info@gmail.com"],
                ].map(([k, v]) => (
                  <div
                    key={k}
                    className="flex items-center justify-between py-3.5 gap-4"
                  >
                    <span className="text-[11px] uppercase tracking-[0.18em] font-bold text-cream/60">
                      {k}
                    </span>
                    <span className="text-sm font-bold text-cream text-right">
                      {v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
