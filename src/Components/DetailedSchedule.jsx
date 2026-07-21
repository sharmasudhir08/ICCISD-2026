import { useState } from 'react';
import {
  ArrowDown,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  MapPin,
  UsersRound,
  Video,
} from 'lucide-react';
import {
  detailedScheduleDays,
  detailedScheduleNote,
  parallelSessionDays,
  programmeScheduleFile,
} from '../utils/detailedSchedule';

const eventStyles = {
  break: 'border-l-[#d5a21a] bg-[#fffdf2]',
  ceremony: 'border-l-[#d34a44] bg-[#fff7f6]',
  keynote: 'border-l-[#0a7784] bg-[#f1f8f8]',
  session: 'border-l-[#071820] bg-[#f5f7f7]',
};

const DetailedSchedule = () => {
  const [activeDay, setActiveDay] = useState(0);
  const [activeParallelDay, setActiveParallelDay] = useState(0);
  const selectedDay = detailedScheduleDays[activeDay];
  const selectedParallelDay = parallelSessionDays[activeParallelDay];

  return (
    <section
      id="conference-programme"
      className="scroll-mt-24 mx-auto max-w-7xl px-4 pb-12 pt-16 sm:px-6 md:pb-16 md:pt-20 lg:px-8"
    >
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold text-[#0a7784]">
            International Conference on Computational Intelligence Systems and Devices
          </p>
          <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
            ICCISD-2026 programme calendar
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Department of Computer Science and Applications · Sharda School of Computing Science &amp;
            Engineering, Sharda University, Greater Noida, India
          </p>
          <p className="mt-2 text-sm font-medium text-slate-500">{detailedScheduleNote}</p>
        </div>
        <a
          href={programmeScheduleFile}
          download
          className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition duration-200 hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2 sm:self-auto"
        >
          <FileText className="h-4 w-4 text-[#0a7784]" aria-hidden="true" />
          Download PDF
          <Download className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div
        className="mb-5 inline-flex w-full rounded-md border border-slate-300 bg-white p-1 sm:w-auto"
        role="tablist"
        aria-label="Choose a detailed schedule day"
      >
        {detailedScheduleDays.map((day, index) => (
          <button
            key={day.id}
            type="button"
            role="tab"
            aria-selected={activeDay === index}
            onClick={() => setActiveDay(index)}
            className={`min-h-10 flex-1 rounded px-5 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] sm:flex-none ${
              activeDay === index
                ? 'bg-[#071820] text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
            }`}
          >
            {day.label} · {day.date.replace(' 2026', '')}
          </button>
        ))}
      </div>

      <article className="overflow-hidden rounded-lg border border-slate-300 bg-white shadow-[0_18px_50px_rgba(15,35,42,0.08)]">
        <header className="grid gap-5 bg-[#071820] px-5 py-6 text-white sm:px-7 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold text-cyan-300">{selectedDay.label}</p>
            <h3 className="mt-1 text-2xl font-bold">
              {selectedDay.weekday}, {selectedDay.date}
            </h3>
          </div>
          <div className="space-y-2 text-sm text-slate-300 md:text-right">
            <p className="flex items-start gap-2 md:justify-end">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
              <span>{selectedDay.venue}</span>
            </p>
            <p className="flex items-center gap-2 md:justify-end">
              <Clock3 className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              Indian Standard Time (IST)
            </p>
          </div>
        </header>

        <ol aria-live="polite">
          {selectedDay.items.map((item, index) => {
            if (item.type === 'section') {
              return (
                <li
                  key={`${item.title}-${index}`}
                  className="border-y border-[#e8c9c7] bg-[#faefee] px-5 py-3 text-sm font-bold text-[#9f302c] sm:px-7"
                >
                  {item.title}
                </li>
              );
            }

            const style = eventStyles[item.type] || 'border-l-transparent bg-white';

            return (
              <li
                key={`${item.time}-${item.title}`}
                className={`grid grid-cols-[116px_minmax(0,1fr)] border-b border-l-2 border-slate-200 last:border-b-0 sm:grid-cols-[145px_minmax(0,1fr)] ${style}`}
              >
                <time className="whitespace-nowrap border-r border-slate-200 px-3 py-4 text-xs font-semibold tabular-nums text-slate-600 sm:px-5 sm:text-sm">
                  {item.time}
                </time>
                <div className="min-w-0 px-4 py-4 sm:px-6">
                  <p className="font-semibold leading-6 text-slate-900">{item.title}</p>
                  {item.speaker && <p className="mt-1 font-semibold text-[#0a7784]">{item.speaker}</p>}
                  {item.details?.map((detail) => (
                    <p key={detail} className="mt-1 text-sm leading-5 text-slate-600">
                      {detail}
                    </p>
                  ))}
                  {item.topic && (
                    <p className="mt-3 border-l-2 border-[#0a7784] pl-3 text-sm font-medium leading-6 text-slate-700">
                      <span className="font-bold text-[#071820]">{item.topicLabel || 'Title'}:</span>{' '}
                      {item.topic}
                    </p>
                  )}
                  {item.meeting && (
                    <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <a
                        href={item.meeting.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center justify-center gap-2 self-start rounded-md bg-[#0a7784] px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#075f69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2"
                      >
                        <Video className="h-4 w-4" aria-hidden="true" />
                        Join Zoom meeting
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                      <p className="text-xs leading-5 text-slate-600 sm:text-right">
                        <span className="font-semibold text-slate-800">Meeting ID:</span>{' '}
                        {item.meeting.id}
                        <span className="mx-2 text-slate-300" aria-hidden="true">
                          |
                        </span>
                        <span className="font-semibold text-slate-800">Passcode:</span>{' '}
                        {item.meeting.passcode}
                      </p>
                    </div>
                  )}
                  {item.participants && (
                    <div className="mt-4 border-t border-slate-200 pt-4">
                      <p className="flex items-center gap-2 text-xs font-bold uppercase text-slate-500">
                        <UsersRound className="h-4 w-4 text-[#0a7784]" aria-hidden="true" />
                        Panelists
                      </p>
                      <ol className="mt-3 grid gap-x-8 gap-y-2 sm:grid-cols-2">
                        {item.participants.map((participant, participantIndex) => (
                          <li
                            key={participant}
                            className="grid grid-cols-[22px_minmax(0,1fr)] text-sm leading-5 text-slate-600"
                          >
                            <span className="font-semibold tabular-nums text-[#0a7784]">
                              {participantIndex + 1}.
                            </span>
                            <span>{participant}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                  {item.directoryLink && (
                    <a
                      href={item.directoryLink}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0a7784] underline decoration-[#0a7784]/30 underline-offset-4 transition hover:decoration-[#0a7784] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2"
                    >
                      View room and paper allocation
                      <ArrowDown className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </article>

      <div id="parallel-session-directory" className="scroll-mt-24 pt-16 md:pt-20">
        <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#0a7784]">Paper presentation allocation</p>
            <h2 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">
              Parallel session directory
            </h2>
          </div>

          <div
            className="inline-flex w-full rounded-md border border-slate-300 bg-white p-1 sm:w-auto"
            role="tablist"
            aria-label="Choose a parallel session day"
          >
            {parallelSessionDays.map((day, index) => (
              <button
                key={day.id}
                type="button"
                role="tab"
                aria-selected={activeParallelDay === index}
                onClick={() => setActiveParallelDay(index)}
                className={`min-h-10 flex-1 rounded px-5 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] sm:flex-none ${
                  activeParallelDay === index
                    ? 'bg-[#071820] text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                }`}
              >
                {day.label} · {day.date.replace(' 2026', '')}
              </button>
            ))}
          </div>
        </div>

        <article className="overflow-hidden rounded-lg border border-slate-300 bg-white shadow-[0_18px_50px_rgba(15,35,42,0.08)]">
          <header className="grid gap-4 bg-[#071820] px-5 py-5 text-white sm:px-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-semibold text-cyan-300">{selectedParallelDay.label}</p>
              <h3 className="mt-1 text-xl font-bold sm:text-2xl">
                {selectedParallelDay.weekday}, {selectedParallelDay.date}
              </h3>
            </div>
            <div className="space-y-2 text-sm text-slate-300 md:text-right">
              <p className="flex items-center gap-2 md:justify-end">
                <Clock3 className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                {selectedParallelDay.time} IST
              </p>
              <p className="flex items-start gap-2 md:justify-end">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                {selectedParallelDay.venue}
              </p>
            </div>
          </header>

          <div className="hidden grid-cols-[88px_180px_minmax(0,1fr)_310px] border-b border-slate-300 bg-[#e8efee] px-6 py-3 text-xs font-bold uppercase text-slate-600 md:grid">
            <span>Session</span>
            <span>Room</span>
            <span>Paper IDs</span>
            <span>Session chairs</span>
          </div>

          <ol aria-live="polite">
            {selectedParallelDay.sessions.map((session) => (
              <li
                key={session.number}
                className="grid gap-5 border-b border-slate-200 px-5 py-5 last:border-b-0 sm:px-7 md:grid-cols-[64px_180px_minmax(0,1fr)_310px] md:gap-6"
              >
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500 md:hidden">Session</p>
                  <p className="mt-1 text-2xl font-bold tabular-nums text-[#0a7784] md:mt-0">
                    {String(session.number).padStart(2, '0')}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500 md:hidden">Room</p>
                  <p className="mt-1 font-semibold text-slate-900 md:mt-0">{session.room}</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500 md:hidden">Paper IDs</p>
                  <p className="mt-1 font-mono text-sm leading-6 text-slate-600 md:mt-0">
                    {session.paperIds.join(', ')}
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase text-slate-500 md:hidden">
                    Session chairs
                  </p>
                  <div className="mt-1 space-y-1 text-sm leading-5 text-slate-700 md:mt-0">
                    {session.chairs.map((chair) => (
                      <p key={chair}>{chair}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
};

export default DetailedSchedule;
