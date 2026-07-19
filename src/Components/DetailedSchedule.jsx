import { useState } from 'react';
import { Clock3, Download, FileSpreadsheet, MapPin } from 'lucide-react';
import { detailedScheduleDays, detailedScheduleFile } from '../utils/detailedSchedule';

const eventStyles = {
  break: 'border-l-[#d5a21a] bg-[#fffdf2]',
  ceremony: 'border-l-[#d34a44] bg-[#fff7f6]',
  keynote: 'border-l-[#0a7784] bg-[#f1f8f8]',
  session: 'border-l-[#071820] bg-[#f5f7f7]',
};

const DetailedSchedule = () => {
  const [activeDay, setActiveDay] = useState(0);
  const selectedDay = detailedScheduleDays[activeDay];

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
        </div>
        <a
          href={detailedScheduleFile}
          download
          className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-md border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition duration-200 hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2 sm:self-auto"
        >
          <FileSpreadsheet className="h-4 w-4 text-[#0a7784]" aria-hidden="true" />
          Download Excel
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
                      <span className="font-bold text-[#071820]">Title:</span> {item.topic}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      </article>
    </section>
  );
};

export default DetailedSchedule;
