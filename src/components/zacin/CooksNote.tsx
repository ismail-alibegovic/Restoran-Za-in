"use client";

import { Reveal, RevealText } from "./anim";
import { motion } from "framer-motion";

export default function CooksNote() {
  return (
    <section className="bg-ink text-cream py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: rotating stamp */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-[220px] h-[220px] md:w-[260px] md:h-[260px]"
            >
              {/* Outer rotating text ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 36,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text fill="currentColor" className="text-saffron">
                    <textPath
                      href="#circlePath"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        fontFamily: "var(--font-ptsans), sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      • Restoran Začin • Sarajevo • Od srca • Sezona 2026
                    </textPath>
                  </text>
                </svg>
              </motion.div>
              {/* Center emblem */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[120px] h-[120px] md:w-[140px] md:h-[140px] rounded-full border-2 border-saffron/50 flex items-center justify-center">
                  <span className="font-heading text-saffron text-5xl md:text-6xl font-extrabold">
                    Z
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: message */}
          <div className="lg:col-span-8">
            <Reveal>
              <p className="uppercase-spaced text-saffron mb-6">
                Poruka iz kuhinje
              </p>
            </Reveal>
            <RevealText
              as="h2"
              text="Dragi gosti — paradajz konačno opet ima ukus ljeta."
              className="font-heading text-3xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] mb-8"
            />
            <Reveal delay={0.15}>
              <p className="body-large text-cream/80 leading-relaxed max-w-[640px] mb-8">
                Sunčan, sočan, sladak onako kako treba. To kod nas znači samo
                jedno — vratio se pravi ukus, a sa njim i nova sezona u našoj
                kuhinji. Dođite gladni, izađite zadovoljni. Vidimo se za
                stolom.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-saffron" />
                <div>
                  <p className="font-heading text-2xl font-bold text-cream">
                    Šef kuhinje, Restoran Začin
                  </p>
                  <p className="text-[12px] uppercase tracking-[0.18em] text-saffron mt-1">
                    Sarajevo
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
