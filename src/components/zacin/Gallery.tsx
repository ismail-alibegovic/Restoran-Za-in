"use client";

import { Reveal } from "./anim";
import { motion } from "framer-motion";

const PHOTOS = [
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    alt: "Enterijer restorana sa toplim svjetlom",
    label: "Ambijent",
    big: true,
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
    alt: "Stolovi sa postavljenim tanjirima",
    label: "Stol",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    alt: "Tanjur sa pažljivo pripremljenim jelom",
    label: "Tanjir",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
    alt: "Kuvar u pripremi jela",
    label: "Kuhinja",
  },
  {
    src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=900&q=80",
    alt: "Čaša vina",
    label: "Vinski podrum",
    big: true,
  },
  {
    src: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=900&q=80",
    alt: "Desert sa voćem",
    label: "Desert",
  },
];

export default function Gallery() {
  return (
    <section
      id="galerija"
      className="paper-grain py-24 md:py-36 border-t border-divider"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-14">
          <Reveal className="md:col-span-7">
            <p className="uppercase-spaced text-spice mb-4">Galerija</p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1] text-ink">
              Ukusi, trenuci,<br />sjećanja iz Začina.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.1}>
            <p className="body-large text-ink-soft leading-relaxed">
              Svaka fotografija je trenutak — ulov ambijenta, tanjira i ljudi
              koji ga dijele. Pogledajte kako izgleda veče u Začinu, a onda
              dođite da ga osjetite na licu mjesta.
            </p>
          </Reveal>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {PHOTOS.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: (i % 3) * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden ${
                p.big ? "md:row-span-2 aspect-square md:aspect-[3/4]" : "aspect-square"
              }`}
            >
              { }
              <img
                src={p.src}
                alt={p.alt}
                className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="stamp bg-paper/90 text-spice !text-[10px]">
                  {p.label}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Instagram CTA */}
        <Reveal>
          <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-between gap-6 pt-10 border-t border-divider">
            <div>
              <p className="uppercase-spaced text-spice mb-2">Pratite nas</p>
              <p className="font-heading text-2xl md:text-3xl font-bold text-ink">
                @restoranzacin na Instagramu
              </p>
            </div>
            <a
              href="https://www.instagram.com/restoranzacin/"
              target="_blank"
              rel="noreferrer"
              className="btn-spice"
            >
              Posjeti profil
              <span className="arrow">→</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
