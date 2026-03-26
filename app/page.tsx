'use client'

import { useState } from 'react'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    checkin: '',
    checkout: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Anfrage Hotel Garni Zum Grauen Bären`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone}\nGäste: ${formData.guests}\nAnreise: ${formData.checkin}\nAbreise: ${formData.checkout}\n\nNachricht:\n${formData.message}`
    )
    window.location.href = `mailto:info@grauer-baeren.at?subject=${subject}&body=${body}`
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-cream">

      {/* ── HERO ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
          alt="Bodensee und Bregenzer Berge bei Sonnenaufgang"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-forest/80 flex items-center justify-center backdrop-blur-sm border border-honey/30">
              <span className="text-3xl">🐻</span>
            </div>
          </div>
          <p className="font-sans text-honey uppercase tracking-[0.3em] text-sm md:text-base mb-4">
            Hotel Garni · Bregenz am Bodensee
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 text-shadow leading-tight">
            Hotel Garni<br />Zum Grauen Bären
          </h1>
          <p className="font-serif text-2xl md:text-3xl italic text-cream/90 mb-10 text-shadow">
            Gemütlichkeit am Bodensee
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#zimmer" className="btn-primary text-lg">
              Zimmer buchen
            </a>
            <a href="#kontakt" className="btn-secondary border-white text-white hover:bg-white hover:text-charcoal text-lg">
              Anfragen
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <div className="bg-forest text-cream py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-4 text-sm font-sans">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-honey" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Kirchstraße 10, 6900 Bregenz</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-cream/30" />
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-honey" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>+43 5574 421 78</span>
          </div>
          <div className="hidden md:block w-px h-4 bg-cream/30" />
          <div className="flex items-center gap-2 font-medium text-honey">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
            <span>Bregenz · Bodensee · Vorarlberg</span>
          </div>
        </div>
      </div>

      {/* ── WILLKOMMEN ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subheading">Willkommen</p>
              <h2 className="section-heading">Gemütlichkeit mit Blick auf den Bodensee</h2>
              <div className="w-16 h-1 bg-honey mb-8" />
              <p className="text-charcoal/80 font-sans leading-relaxed text-lg mb-6">
                Herzlich willkommen im Hotel Garni Zum Grauen Bären — Ihrem Wohlfühlhotel in Bregenz, 
                nur wenige Schritte vom Bodensee entfernt. Genießen Sie komfortable Zimmer, 
                ein reichhaltiges Frühstück und die alpine Gastlichkeit Vorarlbergs.
              </p>
              <p className="text-charcoal/80 font-sans leading-relaxed mb-8">
                Unser Haus verbindet traditionelle österreichische Gemütlichkeit mit modernem Komfort. 
                Ob für einen romantischen Kurztrip zu zweit, einen Familienurlaub am See oder 
                geschäftliche Aufenthalte — wir freuen uns auf Sie.
              </p>
              <div className="flex flex-wrap gap-6 text-sm font-sans text-forest">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-honey" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Frühstück inklusive</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-honey" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Free WiFi</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-honey" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Seeblick möglich</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80"
                alt="Gemütliches Hotelzimmer mit Holzdecke und Bergblick"
                className="rounded-lg shadow-2xl w-full h-[450px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-forest text-cream p-6 rounded-lg shadow-xl hidden md:block">
                <p className="font-serif text-3xl font-bold text-honey">15+</p>
                <p className="font-sans text-sm">Jahre Gastlichkeit</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZIMMER ── */}
      <section id="zimmer" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-subheading">Unsere Zimmer</p>
            <h2 className="section-heading">Wohnen in trauter Zweisamkeit</h2>
            <div className="w-16 h-1 bg-honey mx-auto mb-6" />
            <p className="text-charcoal/70 font-sans max-w-2xl mx-auto">
              Jedes Zimmer ist liebevoll eingerichtet und bietet alles für einen angenehmen Aufenthalt am Bodensee.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {/* Einzelzimmer */}
            <div className="bg-cream rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"
                  alt="Einzelzimmer Hotel Garni Zum Grauen Bären"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-forest text-cream px-4 py-1 rounded-full text-sm font-sans font-medium">
                  ab €75 / Nacht
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">Einzelzimmer</h3>
                <p className="text-charcoal/70 font-sans text-sm mb-4">
                  Komfortables Zimmer für Alleinreisende. Perfekt für Geschäftsreisende oder Kurztrips an den Bodensee.
                </p>
                <ul className="space-y-2 text-sm font-sans text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free WiFi
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Frühstück inklusive
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Eigenes Badezimmer
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Schreibtisch
                  </li>
                </ul>
                <a href="#kontakt" className="mt-6 block text-center btn-primary text-sm">
                  Anfragen
                </a>
              </div>
            </div>

            {/* Doppelzimmer */}
            <div className="bg-cream rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-honey/40 relative">
              <div className="absolute -top-0 left-1/2 -translate-x-1/2 bg-honey text-white text-xs font-sans font-bold px-4 py-1 rounded-b-md uppercase tracking-wider z-10">
                Beliebt
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?w=600&q=80"
                  alt="Doppelzimmer Hotel Garni Zum Grauen Bären"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-forest text-cream px-4 py-1 rounded-full text-sm font-sans font-medium">
                  ab €110 / Nacht
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">Doppelzimmer</h3>
                <p className="text-charcoal/70 font-sans text-sm mb-4">
                  Geräumiges Zimmer für Paare. Viele Zimmer mit Balkon und Seeblick — ideal für romantische Ausflüge.
                </p>
                <ul className="space-y-2 text-sm font-sans text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free WiFi
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Frühstück inklusive
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Balkon / Seeblick
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Minibar
                  </li>
                </ul>
                <a href="#kontakt" className="mt-6 block text-center btn-primary text-sm">
                  Anfragen
                </a>
              </div>
            </div>

            {/* Suite */}
            <div className="bg-cream rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80"
                  alt="Suite Hotel Garni Zum Grauen Bären"
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-forest text-cream px-4 py-1 rounded-full text-sm font-sans font-medium">
                  ab €150 / Nacht
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-charcoal mb-2">Suite</h3>
                <p className="text-charcoal/70 font-sans text-sm mb-4">
                  Große Suite mit separatem Wohnbereich. Für Gäste, die höchsten Komfort und viel Platz wünschen.
                </p>
                <ul className="space-y-2 text-sm font-sans text-charcoal/80">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Separater Wohnbereich
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Balkon mit Seeblick
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Bademantel & Slipper
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium Minibar
                  </li>
                </ul>
                <a href="#kontakt" className="mt-6 block text-center btn-primary text-sm">
                  Anfragen
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FRÜHSTÜCK ── */}
      <section className="py-20 px-6 bg-forest text-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="section-subheading text-honey">Frühstück</p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
                Ein reichhaltiges Frühstück für einen perfekten Start
              </h2>
              <div className="w-16 h-1 bg-honey mb-8" />
              <p className="text-cream/80 font-sans leading-relaxed mb-6">
                Beginnen Sie Ihren Tag am Bodensee mit unserem liebevoll zubereiteten Frühstücksbuffet. 
                Wir verwenden frische Produkte aus der Region Vorarlberg — Eier von lokalen Bauernhöfen, 
                Aufschnitt aus dem Bregenzerwald, knuspriges Gebäck und aromatischer Kaffee aus der 
                regionalen Rösterei.
              </p>
              <ul className="grid grid-cols-2 gap-3 text-sm font-sans text-cream/80">
                {[
                  'Frische Eier & Aufschnitt',
                  'Regionale Käsesorten',
                  'Gebäck vom Bäcker',
                  'Obst & Müsli',
                  'Kaffee & Tee',
                  'Honig aus Vorarlberg',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-honey flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800&q=80"
                alt="Reichhaltiges Frühstücksbuffet mit frischen Produkten aus Vorarlberg"
                className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LAGE ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-subheading">Lage & Erreichbarkeit</p>
            <h2 className="section-heading">Bregenz — Ihr perfekter Ausgangspunkt</h2>
            <div className="w-16 h-1 bg-honey mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z',
                title: 'Bodensee',
                desc: 'Nur 3 Minuten zu Fuß zum Seeufer — schwimmen, spazieren, bootfahren.',
              },
              {
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064',
                title: 'Pfänder',
                desc: 'Mit der Pfänderbahn auf 1.064 m — atemberaubende Aussicht auf den Bodensee.',
              },
              {
                icon: 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
                title: 'Bregenz Festival',
                desc: 'Sommerliche Festspiele auf der berühmten Seebühne — Kultur direkt vor der Haustür.',
              },
              {
                icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Grenznah',
                desc: 'Schnell in Deutschland oder der Schweiz — ideal als Reisebasis.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-forest/10 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-forest" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-serif text-lg font-semibold text-charcoal mb-2">{item.title}</h3>
                <p className="text-charcoal/70 font-sans text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEWERTUNGEN ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-subheading">Gästebewertungen</p>
            <h2 className="section-heading">Das sagen unsere Gäste</h2>
            <div className="w-16 h-1 bg-honey mx-auto mb-6" />
            <div className="flex justify-center gap-1">
              {[1,2,3,4,5].map((s) => (
                <svg key={s} className="w-5 h-5 text-honey" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="font-sans text-sm text-charcoal/60 mt-2">4.8 / 5 · Google Bewertung</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Wunderbare Lage — nur wenige Schritte vom Bodensee entfernt. Das Zimmer war gemütlich und sauber, das Personal sehr freundlich. Wir kommen wieder!",
                author: "Familie Steiner",
                from: "München, Deutschland",
                initials: "FS",
              },
              {
                quote: "Das perfekte Frühstück! So viele regionale Produkte und alles frisch zubereitet. Das Doppelzimmer mit Seeblick war wirklich traumhaft.",
                author: "Claudia M.",
                from: "Zürich, Schweiz",
                initials: "CM",
              },
              {
                quote: "Sehr freundliches Personal und eine tolle Atmosphäre. Wir haben uns vom ersten Moment an wohlgefühlt. Absolut empfehlenswert!",
                author: "Thomas & Anna",
                from: "Wien, Österreich",
                initials: "TA",
              },
            ].map((review) => (
              <div key={review.initials} className="bg-cream rounded-xl p-8 shadow-md relative">
                <svg className="absolute top-6 right-6 w-8 h-8 text-forest/10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <div className="w-12 h-12 bg-forest text-cream rounded-full flex items-center justify-center font-serif font-bold text-lg mb-4">
                  {review.initials}
                </div>
                <p className="text-charcoal/80 font-sans leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>
                <div className="flex gap-1 mb-2">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-4 h-4 text-honey" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-sans font-medium text-charcoal text-sm">{review.author}</p>
                <p className="font-sans text-xs text-charcoal/50">{review.from}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KONTAKT ── */}
      <section id="kontakt" className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-subheading">Kontakt & Anfrage</p>
            <h2 className="section-heading">Wir freuen uns auf Ihre Nachricht</h2>
            <div className="w-16 h-1 bg-honey mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-6">Zimmeranfrage senden</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-sm font-medium text-charcoal mb-1">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-charcoal/20 bg-white font-sans text-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-charcoal mb-1">E-Mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-charcoal/20 bg-white font-sans text-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-sm font-medium text-charcoal mb-1">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-charcoal/20 bg-white font-sans text-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-charcoal mb-1">Gäste</label>
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-charcoal/20 bg-white font-sans text-sm focus:outline-none focus:border-forest"
                    >
                      {[1,2,3,4].map((n) => (
                        <option key={n} value={n}>{n} {n === 1 ? 'Gast' : 'Gäste'}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-sm font-medium text-charcoal mb-1">Anreise</label>
                    <input
                      type="date"
                      name="checkin"
                      value={formData.checkin}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-charcoal/20 bg-white font-sans text-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                  <div>
                    <label className="block font-sans text-sm font-medium text-charcoal mb-1">Abreise</label>
                    <input
                      type="date"
                      name="checkout"
                      value={formData.checkout}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-md border border-charcoal/20 bg-white font-sans text-sm focus:outline-none focus:border-forest"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-sm font-medium text-charcoal mb-1">Ihre Nachricht</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Zimmerwünsche, Sonderanfragen, etc."
                    className="w-full px-4 py-3 rounded-md border border-charcoal/20 bg-white font-sans text-sm focus:outline-none focus:border-forest resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Anfrage senden
                </button>
                <p className="font-sans text-xs text-charcoal/50 text-center">
                  Wir antworten in der Regel innerhalb von 24 Stunden.
                </p>
              </form>
            </div>

            {/* Info + Map */}
            <div>
              <h3 className="font-serif text-2xl font-semibold text-charcoal mb-6">So finden Sie uns</h3>
              <div className="bg-white rounded-xl p-6 shadow-md mb-6">
                <div className="space-y-4 font-sans text-sm">
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium text-charcoal">Adresse</p>
                      <p className="text-charcoal/70">Kirchstraße 10<br />6900 Bregenz, Österreich</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="font-medium text-charcoal">Telefon</p>
                      <a href="tel:+43557442178" className="text-forest hover:text-forest-dark">+43 5574 421 78</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-medium text-charcoal">E-Mail</p>
                      <a href="mailto:info@grauer-baeren.at" className="text-forest hover:text-forest-dark">info@grauer-baeren.at</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium text-charcoal">Check-in / Check-out</p>
                      <p className="text-charcoal/70">Anreise ab 14:00 Uhr · Abreise bis 11:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2683.8!2d9.747!3d47.516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDMxJzAwLjAiTiA5wrA0NCcwMC4wIkE!5e0!3m2!1sde!2sat!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Garni Zum Grauen Bären auf Google Maps"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-charcoal text-cream/80 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center">
                  <span className="text-lg">🐻</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream">Hotel Garni<br />Zum Grauen Bären</h3>
              </div>
              <p className="font-sans text-sm text-cream/60 italic">
                Herzlich willkommen — seit über 15 Jahren Gastlichkeit am Bodensee.
              </p>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream mb-4">Kontakt</h4>
              <div className="space-y-2 font-sans text-sm text-cream/70">
                <p>Kirchstraße 10, 6900 Bregenz</p>
                <p>
                  <a href="tel:+43557442178" className="hover:text-honey transition-colors">+43 5574 421 78</a>
                </p>
                <p>
                  <a href="mailto:info@grauer-baeren.at" className="hover:text-honey transition-colors">info@grauer-baeren.at</a>
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-serif text-lg font-semibold text-cream mb-4">Schnelllinks</h4>
              <div className="space-y-2 font-sans text-sm">
                {['Zimmer', 'Frühstück', 'Lage', 'Kontakt'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} className="block text-cream/70 hover:text-honey transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-cream/40">
              © {new Date().getFullYear()} Hotel Garni Zum Grauen Bären · Kirchstraße 10, 6900 Bregenz · +43 5574 421 78
            </p>
            <p className="font-sans text-xs text-cream/40">
              Ein Projekt von Miro Digital · Bregenz
            </p>
          </div>
        </div>
      </footer>
      <WhatsAppButton phone="+43 5574 654 321" />

    </div>
  )
}
