"use client";

import { Reveal, Parallax } from "./anim";
import { motion } from "framer-motion";

export default function SpecialEvents() {
  return (
    <section className="paper-grain py-24 md:py-36 border-t border-divider">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        {/* Top: This week's special */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24 md:mb-32">
          {/* Left: Image */}
          <Reveal className="lg:col-span-6">
            <Parallax speed={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden">
                { }
                <img
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1200&q=80"
                  alt="Specijalitet sedmice — penne sa špinatom i lososom"
                  className="w-full h-full object-cover"
                />
              </div>
            </Parallax>
          </Reveal>

          {/* Right: Text */}
          <div className="lg:col-span-6 lg:pl-8">
            <Reveal>
              <p className="uppercase-spaced text-spice mb-4">
                Specijalitet sedmice
              </p>
              <h2 className="font-heading text-4xl md:text-6xl font-extrabold leading-[1.02] text-ink mb-6">
                Pene sa špinatom<br />i dimljenim lososom.
              </h2>
              <p className="body-large text-ink-soft leading-relaxed mb-8">
                Mladi špinat, dimljeni losos, pavlaka i tanka kora limuna —
                mediteranski klasik sa dodirom kuće. Samo do četvrtka, dok
                traju svježe rezerve.
              </p>
              <a
                href="#rezervisi"
                className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-bold text-spice hover:text-ink transition-colors group"
              >
                Rezerviši i probaj
                <span className="w-10 h-px bg-current transition-all duration-300 group-hover:w-16" />
              </a>
            </Reveal>
          </div>
        </div>

        {/* Bottom: Three event cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {[
            {
              day: "Petak & Subota",
              time: "19:00 — 24:00",
              title: "Veče koktela",
              subtitle: "Cocktail Lounge",
              body:
                "U našem novootvorenom koktel-loungeu — klasici sa začinskim obrtom i sezonske kreacije našeg barmena.",
              img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=900&q=80",
              tag: "Cocktail",
            },
            {
              day: "Srijeda",
              time: "12:00 — 22:00",
              title: "Wok dan",
              subtitle: "Asian-inspired",
              body:
                "Svježi wok sa roštilja — od piletine do plodova mora, sa sezonskim povrćem i domaćim rezancima.",
              img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=900&q=80",
              tag: "Wok",
            },
            {
              day: "Nedjelja",
              time: "14:00 — 22:00",
              title: "Porodični ručak",
              subtitle: "Family table",
              body:
                "Tradicionalna jela ispod sača, domaće pitje i deserti koji vrate u djetinjstvo. Rezervišite na vrijeme.",
              img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
              tag: "Tradicijsko",
            },
          ].map((card, i) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-cream border border-divider overflow-hidden hover:border-spice/40 transition-colors"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                { }
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 stamp bg-paper/95 text-spice !text-[10px]">
                  {card.tag}
                </span>
              </div>
              <div className="p-6 md:p-7">
                <div className="flex items-center justify-between mb-3">
                  <span className="uppercase-spaced text-saffron">
                    {card.day}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.16em] font-bold text-muted-ink">
                    {card.time}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-ink mb-1">
                  {card.title}
                </h3>
                <p className="text-[12px] uppercase tracking-[0.16em] font-bold text-spice mb-4">
                  {card.subtitle}
                </p>
                <p className="body-small text-ink-soft leading-relaxed">
                  {card.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
