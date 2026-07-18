import { useCallback, useState } from 'react';
import { BookOpenText, Mic2 } from 'lucide-react';
import SpeakerBioDialog from './SpeakerBioDialog';
import { speakerRoster } from './speakerData';

const SpeakerCard = ({ speaker, index, eager, onOpenBio }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-300 bg-white shadow-[0_12px_30px_rgba(15,35,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-[0_18px_38px_rgba(15,35,42,0.11)]">
    <figure
      className={`relative aspect-[4/3] overflow-hidden ${
        index % 2 === 0 ? 'bg-[#dce9e8]' : 'bg-[#e7eaee]'
      }`}
    >
      <img
        src={speaker.image}
        alt={`Portrait of ${speaker.name}`}
        loading={eager ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-[1.025]"
      />
    </figure>

    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <p className={`text-xs font-semibold ${speaker.role.startsWith('Chief Guest') ? 'text-[#d34a44]' : 'text-[#0a7784]'}`}>
        {speaker.role}
      </p>
      <h4 className="mt-3 text-xl font-bold leading-tight text-[#071820]">{speaker.name}</h4>
      <p className="mt-4 text-sm font-semibold leading-6 text-slate-900">{speaker.designation}</p>
      <div className="mt-1 space-y-2 text-sm leading-5 text-slate-600">
        {speaker.affiliations.map((affiliation) => (
          <p key={affiliation}>{affiliation}</p>
        ))}
      </div>

      {speaker.bio && (
        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={() => onOpenBio(speaker)}
            aria-haspopup="dialog"
            aria-controls="speaker-bio-dialog"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-[#0a7784]/35 px-4 py-2 text-sm font-semibold text-[#0a6670] transition hover:border-[#0a7784] hover:bg-[#e8f3f2] hover:text-[#074f57] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2"
          >
            <BookOpenText className="h-4 w-4" aria-hidden="true" />
            Bio
          </button>
        </div>
      )}
    </div>
  </article>
);

const KeynoteSpeakers = () => {
  const [activeBio, setActiveBio] = useState(null);
  const closeBio = useCallback(() => setActiveBio(null), []);
  const dignitaries = speakerRoster.slice(0, 2);
  const keynoteSpeakers = speakerRoster.slice(2);

  return (
    <section id="invited-lineup" className="scroll-mt-20 bg-[#f3f6f5]" aria-labelledby="lineup-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <header className="mb-10">
          <div>
            <p className="flex items-center gap-3 text-sm font-semibold text-[#0a7784]">
              <Mic2 className="h-4 w-4" aria-hidden="true" />
              ICCISD 2026 invited lineup
            </p>
            <h2 id="lineup-heading" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              Dignitaries &amp; keynote speakers
            </h2>
          </div>
        </header>

        <div className="mx-auto max-w-4xl">
          <h3 className="text-sm font-semibold text-[#0a7784]">Dignitaries</h3>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            {dignitaries.map((speaker, index) => (
              <SpeakerCard
                key={speaker.name}
                speaker={speaker}
                index={index}
                eager
                onOpenBio={setActiveBio}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-slate-300 pt-10">
          <h3 className="text-sm font-semibold text-[#0a7784]">Keynote Speakers</h3>
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {keynoteSpeakers.map((speaker, index) => (
              <SpeakerCard
                key={speaker.name}
                speaker={speaker}
                index={index}
                eager={index < 2}
                onOpenBio={setActiveBio}
              />
            ))}
          </div>
        </div>
      </div>

      {activeBio && <SpeakerBioDialog speaker={activeBio} onClose={closeBio} />}
    </section>
  );
};

export default KeynoteSpeakers;
