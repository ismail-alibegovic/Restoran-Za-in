"use client";

import { Reveal } from "./anim";
import { motion } from "framer-motion";

type Dish = {
  name: string;
  description: string;
  price: string;
  tag?: string;
};

const MENU: { section: string; items: Dish[] }[] = [
  {
    section: "Predjela",
    items: [
      {
        name: "Bruschetta ala Začin",
        description:
          "Hljeb sa roštilja, čeri paradajz, beli luk, bosiljak & extra virgin maslinovo ulje.",
        price: "8 KM",
        tag: "Klassik",
      },
      {
        name: "Tatarska govedina",
        description:
          "Svježe sjeckana govedina, kapar, ljutika, žumanjac, prepečeni hljeb.",
        price: "16 KM",
      },
      {
        name: "Lignje sa roštilja",
        description:
          "Svježe lignje, limun, maslinovo ulje, rukola, paradajz salata.",
        price: "18 KM",
      },
      {
        name: "Krem-juha od takođerke",
        description:
          "Topla krema od lokalnog povrća, prženi sjemenke, ulje od peršuna.",
        price: "7 KM",
        tag: "Dnevna",
      },
    ],
  },
  {
    section: "Glavna jela",
    items: [
      {
        name: "Pene sa špinatom i lososom",
        description:
          "Pene, mladi špinat, dimljeni losos, pavlaka, beli luk, limunova korica.",
        price: "22 KM",
        tag: "Preporuka",
      },
      {
        name: "Biftek salata",
        description:
          "Pečeni biftek, rukola, čeri paradajz, parmezan, balzamiko redukcija.",
        price: "26 KM",
        tag: "Specijalitet",
      },
      {
        name: "Plodovi mora pizza",
        description:
          "Tanak hrskav testo, škampi, dagnje, lignje, čeri paradajz, bijelo vino.",
        price: "24 KM",
      },
      {
        name: "Wok piletina sa povrćem",
        description:
          "Piletina, brokula, paprika, šampinjoni, soja-ginger umak, prženi rezanci.",
        price: "19 KM",
      },
      {
        name: "Ćevapi u somunu",
        description:
          "Domaći ćevapi od junetine, somun, kajmak, crveni luk, ajvar.",
        price: "14 KM",
        tag: "Balkan",
      },
      {
        name: "Jagnjetina ispod sača",
        description:
          "Polako pečena jagnjetina, krompir, domaće začinsko bilje, povrtna prilog.",
        price: "28 KM",
      },
    ],
  },
  {
    section: "Deserti",
    items: [
      {
        name: "Tiramisu",
        description:
          "Klasična receptura, maskarpone, espresso, kakao, savoiardi keksi.",
        price: "9 KM",
      },
      {
        name: "Tufahija",
        description:
          "Jabuka punjena orasima, šećer, vanilija, šlag — bosanska tradicija.",
        price: "8 KM",
        tag: "Lokalno",
      },
      {
        name: "Čokoladni fondan",
        description:
          "Topli čokoladni kolač sa tečnim srcem, sladoled od vanilije, šumsko voće.",
        price: "10 KM",
      },
    ],
  },
];

export default function MenuSection() {
  return (
    <section id="meni" className="paper-grain py-24 md:py-36 border-t border-divider">
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mb-16 md:mb-20">
          <Reveal className="md:col-span-7">
            <p className="uppercase-spaced text-spice mb-4">Naš meni</p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1] text-ink">
              Sezonski tanjiri,<br />izražajni ukusi.
            </h2>
          </Reveal>
          <Reveal className="md:col-span-5" delay={0.1}>
            <p className="body-large text-ink-soft leading-relaxed">
              Mediteranskih i međunarodnih nota, sa bosanskim srcem. Jela koja
              se naručuju zajedno, dijele polako i nestaju brže nego što
              mislite. Od udobnih klasika do svježih obrta — svako jelo je
              zamišljeno za stolom punim ljudi i razgovora.
            </p>
            <a
              href="#rezervisi"
              className="inline-flex items-center gap-3 mt-6 text-[12px] uppercase tracking-[0.18em] font-bold text-spice hover:text-ink transition-colors group"
            >
              Rezerviši sto
              <span className="w-10 h-px bg-current transition-all duration-300 group-hover:w-16" />
            </a>
          </Reveal>
        </div>

        {/* Menu list */}
        <div className="space-y-20">
          {MENU.map((cat, ci) => (
            <div key={cat.section}>
              <Reveal>
                <div className="flex items-center gap-6 mb-8">
                  <span className="font-heading text-spice text-3xl font-extrabold">
                    0{ci + 1}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold uppercase tracking-wide text-ink">
                    {cat.section}
                  </h3>
                  <div className="flex-1 h-px bg-divider" />
                </div>
              </Reveal>

              <div className="divide-y divide-divider border-y border-divider">
                {cat.items.map((dish, di) => (
                  <motion.div
                    key={dish.name}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.6,
                      delay: di * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="menu-row grid grid-cols-12 gap-4 py-6 items-baseline"
                  >
                    <div className="col-span-12 md:col-span-7">
                      <div className="flex items-baseline gap-3 flex-wrap">
                        <h4 className="font-heading text-xl md:text-2xl font-bold text-ink">
                          {dish.name}
                        </h4>
                        {dish.tag && (
                          <span className="text-[10px] uppercase tracking-[0.16em] font-bold text-spice border border-spice/40 px-2 py-0.5">
                            {dish.tag}
                          </span>
                        )}
                      </div>
                      <p className="body-small text-ink-soft mt-1.5 max-w-[480px]">
                        {dish.description}
                      </p>
                    </div>
                    <div className="hidden md:block md:col-span-3">
                      <div className="h-px bg-divider w-full" />
                    </div>
                    <div className="col-span-12 md:col-span-2 text-left md:text-right">
                      <span className="font-heading text-xl md:text-2xl font-bold text-spice">
                        {dish.price}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <Reveal>
          <p className="mt-14 text-center text-sm text-muted-ink italic max-w-2xl mx-auto">
            Cijene su izražene u konvertibilnim markama (KM). Za sezonske
            specijalitete i dnevne ponude pitajte vašeg konobara — uvijek imamo
            nešto izvan menija.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
