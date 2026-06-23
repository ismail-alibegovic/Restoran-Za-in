"use client";

import { Reveal, RevealText, Parallax } from "./anim";

export default function WhoWeAre() {
  return (
    <section className="paper-grain py-24 md:py-36 border-t border-divider">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Image */}
          <div className="lg:col-span-5 relative">
            <Parallax speed={0.15}>
              <div className="relative aspect-[3/4] overflow-hidden">
                { }
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80"
                  alt="Kuvar Restorana Začin priprema jelo"
                  className="w-full h-full object-cover"
                />
              </div>
            </Parallax>
            <div className="absolute -bottom-8 -right-4 md:-right-8 bg-spice text-cream p-6 md:p-8 max-w-[260px] shadow-[0_20px_40px_-15px_rgba(184,57,47,0.5)]">
              <p className="font-heading text-5xl md:text-6xl font-extrabold leading-none mb-2">
                10
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] font-bold leading-tight">
                godina u službi dobrog ukusa — u srcu Sarajeva
              </p>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7 lg:pl-8">
            <Reveal>
              <p className="uppercase-spaced text-spice mb-4">Ko smo mi</p>
            </Reveal>
            <RevealText
              as="h2"
              text="Tim ljubitelja hrane, priča i detinjastih snova o savršenom tanjiru."
              className="font-heading text-3xl md:text-5xl font-extrabold leading-[1.1] text-ink mb-8"
            />

            <Reveal delay={0.1}>
              <p className="body-large text-ink-soft leading-relaxed mb-6 first-letter-highlight">
                Iza svakog jela stoji razgovor, uspomena, trenutak vrijedan
                dijeljenja. Vjerujemo u toplinu koja prelazi granice hrane, u
                stvaranju prostora gdje ljudi usporavaju, povezuju se i osjećaju
                kao kod kuće. Naš tim brine o svakom detalju — od prvog pozdrava
                do posljednjeg gutljaja vina.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-divider">
                <div>
                  <p className="font-heading text-4xl md:text-5xl font-extrabold text-spice">
                    4.5★
                  </p>
                  <p className="body-small text-ink-soft mt-2">
                    Prosječna ocjena na Google-u od stotina zadovoljnih gostiju
                  </p>
                </div>
                <div>
                  <p className="font-heading text-4xl md:text-5xl font-extrabold text-spice">
                    120+
                  </p>
                  <p className="body-small text-ink-soft mt-2">
                    Etičeta u vitloj vinskoj karti — domaće i međunarodne
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a href="#rezervisi" className="btn-spice">
                  Rezerviši sto
                  <span className="arrow">→</span>
                </a>
                <a
                  href="#meni"
                  className="inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] font-bold text-ink hover:text-spice transition-colors group"
                >
                  Pogledaj meni
                  <span className="w-10 h-px bg-current transition-all duration-300 group-hover:w-16" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
