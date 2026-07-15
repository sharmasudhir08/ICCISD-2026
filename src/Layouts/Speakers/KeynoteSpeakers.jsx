import { Mic2 } from 'lucide-react';
import { speakerRoster } from './speakerData';

const KeynoteSpeakers = () => (
  <section id="invited-lineup" className="scroll-mt-20 bg-[#f3f6f5]" aria-labelledby="lineup-heading">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <header className="mb-10 grid gap-5 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <p className="flex items-center gap-3 text-sm font-semibold text-[#0a7784]">
            <Mic2 className="h-4 w-4" aria-hidden="true" />
            ICCISD 2026 invited lineup
          </p>
          <h2 id="lineup-heading" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
            Dignitaries &amp; keynote speakers
          </h2>
        </div>
        <p className="text-sm font-semibold text-slate-500 lg:pb-1">
          8 invited guests · 23 July 2026
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {speakerRoster.map((speaker, index) => (
          <article
            key={speaker.name}
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-300 bg-white shadow-[0_12px_30px_rgba(15,35,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-[0_18px_38px_rgba(15,35,42,0.11)]"
          >
            <figure
              className={`relative aspect-[4/3] overflow-hidden ${
                index % 2 === 0 ? 'bg-[#dce9e8]' : 'bg-[#e7eaee]'
              }`}
            >
              <img
                src={speaker.image}
                alt={`Portrait of ${speaker.name}`}
                loading={index < 4 ? 'eager' : 'lazy'}
                className="absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.025]"
              />
            </figure>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className={`text-xs font-semibold ${index === 0 ? 'text-[#d34a44]' : 'text-[#0a7784]'}`}>
                {speaker.role}
              </p>
              <h3 className="mt-3 text-xl font-bold leading-tight text-[#071820]">{speaker.name}</h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-slate-900">{speaker.designation}</p>
              <div className="mt-1 space-y-2 text-sm leading-5 text-slate-600">
                {speaker.affiliations.map((affiliation) => (
                  <p key={affiliation}>{affiliation}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default KeynoteSpeakers;
