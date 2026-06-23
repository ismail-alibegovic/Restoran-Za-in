"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./anim";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Big text moves left as you scroll down
  const textX1 = useTransform(scrollYProgress, [0, 1], ["0vw", "-25vw"]);
  const textX2 = useTransform(scrollYProgress, [0, 1], ["0vw", "22vw"]);
  // Image parallax
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  // Phone image moves opposite
  const phoneY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  // Fade out
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative paper-grain min-h-[100svh] pt-28 md:pt-32 pb-16 overflow-hidden"
    >
      {/* Top meta row */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between text-[11px] md:text-[12px] uppercase tracking-[0.22em] font-bold text-ink-soft">
          <span className="flex items-center gap-3">
            <span className="w-8 h-px bg-spice" />
            Est. Sarajevo
          </span>
          <span className="hidden md:inline-flex items-center gap-3">
            Mediteranska &amp; internacionalna kuhinja
            <span className="w-8 h-px bg-spice" />
          </span>
          <span className="flex items-center gap-3">
            <span className="w-8 h-px bg-spice" />
            Tina Ujevića 13
          </span>
        </div>
      </div>

      {/* Hero text + image composition */}
      <div className="relative mt-8 md:mt-14">
        {/* Top row: ZAČIN huge */}
        <div className="relative">
          <motion.h1
            style={{ x: textX1, opacity }}
            className="display-hero text-spice text-[26vw] md:text-[22vw] leading-[0.85] whitespace-nowrap pl-[3vw]"
          >
            Začin
          </motion.h1>
        </div>

        {/* Middle row: image + secondary text */}
        <div className="relative -mt-[6vw] md:-mt-[5vw] flex items-center justify-center">
          <motion.div
            style={{ y: imgY, scale: imgScale }}
            className="relative w-[78vw] md:w-[42vw] aspect-[3/4] overflow-hidden shadow-[0_30px_60px_-20px_rgba(31,27,22,0.35)]"
          >
            { }
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
              alt="Restoran Začin — enterijer sa stolovima i ambijentom"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            {/* Stamp */}
            <div className="absolute bottom-5 left-5 md:bottom-8 md:left-8 bg-ink text-cream px-4 py-3 md:px-6 md:py-5 max-w-[230px]">
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-saffron-soft mb-1">
                Specijalitet kuće
              </p>
              <p className="font-heading text-lg md:text-2xl font-bold leading-tight">
                Biftek salata &amp; plodovi mora
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom row: ZAČIN huge reversed */}
        <div className="relative -mt-[6vw] md:-mt-[5vw]">
          <motion.h1
            style={{ x: textX2, opacity }}
            className="display-hero text-ink text-[12vw] md:text-[18vw] leading-[0.85] whitespace-nowrap pl-[3vw]"
          >
            Sarajevo
          </motion.h1>
        </div>
      </div>

      {/* Tagline row */}
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16 mt-16 md:mt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <Reveal className="md:col-span-5" delay={0.05}>
            <p className="uppercase-spaced text-spice mb-4">Dobrodošli u Začin</p>
            <p className="body-large text-ink-soft font-heading italic">
              Vrhunska jela i iznimno bogata vinska karta — samo stotinjak
              metara od samog centra grada.
            </p>
          </Reveal>

          <div className="hidden md:block md:col-span-2">
            <div className="h-px bg-divider" />
          </div>

          <Reveal className="md:col-span-5" delay={0.15}>
            <div className="flex items-start gap-4">
              <span className="font-heading text-spice text-5xl leading-none font-extrabold">
                ✦
              </span>
              <div>
                <p className="body-small text-ink-soft leading-relaxed">
                  Mjesto gdje mediteranski duh susreće bosansku tradiciju.
                  Svaki tanjir je razgovor, svako veče priča vrijedna
                  prepričavanja.
                </p>
                <a
                  href="#meni"
                  className="inline-flex items-center gap-3 mt-5 text-[12px] uppercase tracking-[0.18em] font-bold text-ink hover:text-spice transition-colors group"
                >
                  Pogledaj meni
                  <span className="w-10 h-px bg-current transition-all duration-300 group-hover:w-16" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-ink">
            Skroluj
          </span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-spice to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
