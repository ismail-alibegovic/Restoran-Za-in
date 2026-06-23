"use client";

import { Reveal, RevealText } from "./anim";
import { Star } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="o-nama" className="paper-grain py-24 md:py-36">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        {/* Awards row */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-20 md:mb-28">
            <span className="stamp text-spice">
              <Star size={12} fill="currentColor" /> Tripadvisor 3.8 / 5
            </span>
            <span className="hidden md:block w-12 h-px bg-divider" />
            <span className="stamp text-saffron">
              <Star size={12} fill="currentColor" /> Google 4.5 / 5
            </span>
            <span className="hidden md:block w-12 h-px bg-divider" />
            <span className="stamp text-ink">
              Top 120 / 525 restorana Sarajevo
            </span>
            <span className="hidden md:block w-12 h-px bg-divider" />
            <span className="stamp text-ink-soft">
              Mediteranska kuhinja
            </span>
          </div>
        </Reveal>

        {/* Headline */}
        <div className="text-center max-w-[1100px] mx-auto">
          <RevealText
            as="h2"
            text="Mjesto koje osjećate bez napora — toplo, živo, sarajevski."
            className="font-heading text-3xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.05] text-ink"
          />

          <Reveal delay={0.2}>
            <p className="mt-10 max-w-[640px] mx-auto body-large text-ink-soft first-letter-highlight text-left">
              Samo stotinjak metara od samog centra grada, opustite se uz naša
              vrhunska jela i iznimno bogatu vinsku kartu. Mediteranski duh u
              srcu Sarajeva — gdje se svaki sastojak poštuje, svaka čaša
              natoči s pažnjom, a svaki susret pretvara u veče koje se pamti.
            </p>
          </Reveal>
        </div>

        {/* Three column intro */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-24 md:mt-32">
          {[
            {
              num: "01",
              title: "Mediteranski duh",
              body:
                "Svježa riba, maslinovo ulje, začinsko bilje i sunce jugozapada u svakom zalogaju — s poštovanjem prema lokalnim sastojcima.",
            },
            {
              num: "02",
              title: "Vinska karta za pamćenje",
              body:
                "Iznimno bogata selekcija domaćih i internacionalnih vina, od odabranog podruma do nježno njegovanih čaša.",
            },
            {
              num: "03",
              title: "Sarajevska duša",
              body:
                "Topao ambijent, živa priča i gostoljubivost koja prelazi granice hrane — ovdje usporavate i osjećate se kao kod kuće.",
            },
          ].map((item, i) => (
            <Reveal key={item.num} delay={i * 0.1}>
              <div className="group">
                <span className="font-heading text-spice text-5xl font-extrabold block mb-4">
                  {item.num}
                </span>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-3">
                  {item.title}
                </h3>
                <p className="body-small text-ink-soft leading-relaxed">
                  {item.body}
                </p>
                <div className="mt-6 h-px bg-divider w-full group-hover:bg-spice transition-colors duration-500" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
