"use client";

import { useState } from "react";
import { Reveal } from "./anim";
import { Check } from "lucide-react";

export default function ReserveForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="rezervisi"
      className="paper-grain py-24 md:py-36 border-t border-divider"
    >
      <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left text */}
          <Reveal className="lg:col-span-5">
            <p className="uppercase-spaced text-spice mb-4">Rezerviši</p>
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold leading-[1.02] text-ink mb-6">
              Sjedite za našim stolom.
            </h2>
            <p className="body-large text-ink-soft leading-relaxed mb-8">
              Zakoračite u svijet živih ukusa i toplih trenutaka. Stolovi su
              postavljeni, kuhinja sumi, a nešto posebno se uvijek kuva. Bilo da
              je romantična večera ili porodični susret, vaše mjesto je samo
              jedan klik udaljeno.
            </p>

            <div className="space-y-4 mt-10">
              <div>
                <p className="uppercase-spaced text-ink-soft mb-1">
                  Radno vrijeme
                </p>
                <p className="body-small text-ink font-bold">
                  Pon — Sub: 10:00 — 24:00
                </p>
                <p className="body-small text-ink font-bold">
                  Ned: 14:00 — 22:00
                </p>
              </div>
              <div className="h-px bg-divider" />
              <div>
                <p className="uppercase-spaced text-ink-soft mb-1">Adresa</p>
                <p className="body-small text-ink font-bold">
                  Tina Ujevića 13, 71000 Sarajevo
                </p>
              </div>
              <div className="h-px bg-divider" />
              <div>
                <p className="uppercase-spaced text-ink-soft mb-1">Telefon</p>
                <a
                  href="tel:+38733445565"
                  className="body-small text-ink font-bold hover:text-spice transition-colors"
                >
                  +387 33 445 565
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right form */}
          <Reveal className="lg:col-span-7" delay={0.15}>
            <div className="bg-cream border border-divider p-7 md:p-12 shadow-[0_30px_60px_-30px_rgba(31,27,22,0.25)]">
              {!submitted ? (
                <>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-ink mb-2">
                    Rezervacija stola
                  </h3>
                  <p className="body-small text-ink-soft mb-8">
                    Popunite formu i javit ćemo vam se u najkraćem mogućem
                    roku sa potvrdom.
                  </p>
                  <form
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <Field label="Ime i prezime" name="name" placeholder="Vaše ime" />
                    <Field
                      label="E-mail"
                      name="email"
                      type="email"
                      placeholder="vase.ime@email.com"
                    />
                    <Field
                      label="Broj telefona"
                      name="phone"
                      type="tel"
                      placeholder="+387 ..."
                    />
                    <div>
                      <label className="block uppercase-spaced text-ink-soft mb-2">
                        Broj osoba
                      </label>
                      <select
                        name="people"
                        className="w-full bg-transparent border-b border-divider py-3 text-ink font-body focus:outline-none focus:border-spice transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, "8+"].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "osoba" : "osoba"}
                          </option>
                        ))}
                      </select>
                    </div>
                    <Field label="Datum" name="date" type="date" />
                    <Field label="Vrijeme" name="time" type="time" />
                    <div className="md:col-span-2">
                      <label className="block uppercase-spaced text-ink-soft mb-2">
                        Napomena (opciono)
                      </label>
                      <textarea
                        name="note"
                        rows={3}
                        placeholder="Alergije, posebne želje, povod..."
                        className="w-full bg-transparent border-b border-divider py-3 text-ink font-body focus:outline-none focus:border-spice transition-colors resize-none"
                      />
                    </div>
                    <div className="md:col-span-2 mt-4">
                      <button type="submit" className="btn-spice w-full justify-center">
                        Pošalji zahtjev
                        <span className="arrow">→</span>
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="text-center py-16">
                  <div className="mx-auto w-16 h-16 rounded-full bg-spice/10 flex items-center justify-center mb-6">
                    <Check className="text-spice" size={28} />
                  </div>
                  <h3 className="font-heading text-3xl font-bold text-ink mb-3">
                    Hvala vam!
                  </h3>
                  <p className="body-large text-ink-soft max-w-md mx-auto">
                    Primili smo vaš zahtjev za rezervaciju i javit ćemo vam se
                    uskoro sa potvrdom. Do viđenja u Začinu!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-outline mt-8"
                  >
                    Nova rezervacija
                  </button>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block uppercase-spaced text-ink-soft mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required
        className="w-full bg-transparent border-b border-divider py-3 text-ink font-body placeholder:text-muted-ink/60 focus:outline-none focus:border-spice transition-colors"
      />
    </div>
  );
}
