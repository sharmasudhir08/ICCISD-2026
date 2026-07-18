import { useCallback, useState } from 'react';
import { BookOpenText, CalendarClock, Clock3, Link2, MonitorPlay } from 'lucide-react';
import SpeakerBioDialog from './SpeakerBioDialog';
import { onlineKeynoteSpeakers } from './onlineKeynoteData';

const OnlineKeynoteSpeakers = () => {
  const [activeBio, setActiveBio] = useState(null);
  const closeBio = useCallback(() => setActiveBio(null), []);

  return (
    <section id="online-keynotes" className="scroll-mt-20 bg-white" aria-labelledby="online-keynote-heading">
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <header className="max-w-4xl">
        <p className="flex items-center gap-3 text-sm font-semibold text-[#0a7784]">
          <MonitorPlay className="h-4 w-4" aria-hidden="true" />
          ICCISD 2026 virtual programme
        </p>
        <h2 id="online-keynote-heading" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
          Keynote Speakers for Online Tutorial/ WorkShop
        </h2>

        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4 text-sm">
          <div className="flex items-center gap-3">
            <CalendarClock className="h-5 w-5 shrink-0 text-[#0a7784]" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-slate-500">Date</p>
              <p className="mt-0.5 font-semibold text-[#071820]">July 24, 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock3 className="h-5 w-5 shrink-0 text-[#0a7784]" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-slate-500">Time</p>
              <p className="mt-0.5 font-semibold text-[#071820]">2:00 PM to 2:30 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link2 className="h-5 w-5 shrink-0 text-[#d34a44]" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-slate-500">Meeting link</p>
              <p className="mt-0.5 font-semibold text-[#071820]">Coming soon</p>
            </div>
          </div>
        </div>
      </header>

      <div className="mt-10 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-2">
        {onlineKeynoteSpeakers.map((speaker, index) => (
          <article
            key={speaker.name}
            className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-300 bg-white shadow-[0_12px_30px_rgba(15,35,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-[0_18px_38px_rgba(15,35,42,0.11)]"
          >
            <figure
              className={`relative aspect-[4/3] overflow-hidden ${
                index === 0 ? 'bg-[#dce9e8]' : 'bg-[#e7eaee]'
              }`}
            >
              <img
                src={speaker.image}
                alt={`Portrait of ${speaker.name}`}
                loading="lazy"
                className={`absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.025] ${
                  speaker.imageClassName || 'object-cover object-top'
                }`}
              />
            </figure>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <p className="text-xs font-semibold text-[#0a7784]">{speaker.role}</p>
              <h3 className="mt-3 text-2xl font-bold leading-tight text-[#071820]">{speaker.name}</h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-slate-900">{speaker.designation}</p>
              {speaker.affiliations.length > 0 && (
                <div className="mt-1 space-y-2 text-sm leading-5 text-slate-600">
                  {speaker.affiliations.map((affiliation) => (
                    <p key={affiliation}>{affiliation}</p>
                  ))}
                </div>
              )}

              {speaker.bio && (
                <div className="mt-auto pt-6">
                  <button
                    type="button"
                    onClick={() => setActiveBio(speaker)}
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
        ))}
      </div>
    </div>

      {activeBio && <SpeakerBioDialog speaker={activeBio} onClose={closeBio} />}
    </section>
  );
};

export default OnlineKeynoteSpeakers;
