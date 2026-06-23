"use client";

import { Reveal } from "./anim";
import { motion } from "framer-motion";

const PHOTOS = [
  {
    src: "/zacin/galerija-3.jpg",
    alt: "Enterijer restorana sa drvenim stolovima, cvećem na stolu i vintage ambijentom",
    label: "Ambijent",
    big: true,
  },
  {
    src: "/zacin/galerija-1.jpeg",
    alt: "Unutrašnjost restorana sa drvenim plafonom i policama punih vina",
    label: "Enterijer",
  },
  {
    src: "/zacin/galerija-2.jpg",
    alt: "Bočica vina Chardonnay na stoljniku u toplom ambijentu restorana",
    label: "Vino",
  },
  {
    src: "/zacin/galerija-5.jpg",
    alt: "Trpezarijski prostor sa drvenim stolovima, barskim šankom i policama vina",
    label: "Trpezarija",
  },
  {
    src: "/zacin/galerija-4.jpg",
    alt: "Veče u restoranu sa svjetlima, dekorativnom lozicom i gostima za stolom",
    label: "Atmosfera",
    big: true,
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
