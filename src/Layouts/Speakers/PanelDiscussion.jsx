import { useCallback, useState } from 'react';
import {
  BookOpenText,
  CalendarDays,
  Clock3,
  MessageSquareText,
  UsersRound,
} from 'lucide-react';
import SpeakerBioDialog from './SpeakerBioDialog';
import { panelDiscussion } from './panelDiscussionData';

const PanelistCard = ({ panelist, index, onOpenBio }) => (
  <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-300 bg-white shadow-[0_12px_30px_rgba(15,35,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-400 hover:shadow-[0_18px_38px_rgba(15,35,42,0.11)]">
    <figure
      className={`relative aspect-[4/3] overflow-hidden ${
        index % 2 === 0 ? 'bg-[#dce9e8]' : 'bg-[#e7eaee]'
      }`}
    >
      <img
        src={panelist.image}
        alt={`Portrait of ${panelist.name}`}
        loading="lazy"
        className={`absolute inset-0 h-full w-full transition-transform duration-500 ease-out ${
          panelist.imageZoomClassName || 'group-hover:scale-[1.025]'
        } ${
          panelist.imageClassName || 'object-cover object-top'
        }`}
      />
    </figure>

    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <p className="text-xs font-semibold text-[#0a7784]">{panelist.role}</p>
      <h3 className="mt-3 text-xl font-bold leading-tight text-[#071820]">{panelist.name}</h3>
      <p className="mt-4 text-sm font-semibold leading-6 text-slate-900">{panelist.designation}</p>
      <div className="mt-1 space-y-2 text-sm leading-5 text-slate-600">
        {panelist.affiliations.map((affiliation) => (
          <p key={affiliation}>{affiliation}</p>
        ))}
      </div>

      {panelist.bio && (
        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={() => onOpenBio(panelist)}
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

const PanelDiscussion = () => {
  const [activeBio, setActiveBio] = useState(null);
  const closeBio = useCallback(() => setActiveBio(null), []);
  const participants = panelDiscussion.panelists;

  return (
    <section id="panel-discussion" className="scroll-mt-20 bg-[#e8efee]" aria-labelledby="panel-heading">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <header className="max-w-5xl">
          <h2 id="panel-heading" className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Keynote Speakers (online mode) on July 24, 2026
          </h2>

          <div className="mt-7">
            <p className="flex items-center gap-3 text-lg font-bold text-[#0a7784] sm:text-xl">
              <MessageSquareText className="h-5 w-5 shrink-0" aria-hidden="true" />
              Panel Discussion in online mode
            </p>
            <p className="mt-4 max-w-4xl text-lg font-semibold leading-8 text-[#071820] sm:text-xl">
              <span className="text-[#0a7784]">Theme:</span> {panelDiscussion.theme}
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-5 w-5 shrink-0 text-[#0a7784]" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium text-slate-500">Date</p>
                <p className="mt-0.5 font-semibold text-[#071820]">{panelDiscussion.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock3 className="h-5 w-5 shrink-0 text-[#0a7784]" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium text-slate-500">Time</p>
                <p className="mt-0.5 font-semibold text-[#071820]">{panelDiscussion.time}</p>
              </div>
            </div>
          </div>
        </header>

        <div className="mt-12">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="flex items-center gap-3 text-sm font-semibold text-[#0a7784]">
              <UsersRound className="h-4 w-4" aria-hidden="true" />
              Moderator &amp; distinguished panelists
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {participants.map((participant, index) => (
              <PanelistCard
                key={participant.name}
                panelist={participant}
                index={index}
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

export default PanelDiscussion;
