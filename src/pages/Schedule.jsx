import { useState } from 'react';
import {
  ArrowDown,
  CalendarDays,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  Layers3,
  MapPin,
} from 'lucide-react';
import ContactUsLayout from '../Layouts/ContactUs/ContactUsLayout';
import DetailedSchedule from '../Components/DetailedSchedule';

const scheduleDays = [
  {
    id: '23-july',
    day: 'Day 01',
    weekday: 'Thursday',
    date: '23 July 2026',
    sessions: 'Sessions 01-09',
    pages: '9-page programme',
    tracks: '7 tracks',
    file: '/schedules/iccisd-2026-presentation-schedule-23-july.pdf',
    preview: '/schedules/iccisd-2026-schedule-23-july-preview.png',
    pageImages: Array.from(
      { length: 9 },
      (_, index) => `/schedules/pages/23-july/page-${index + 1}.jpg`,
    ),
    description:
      'The opening presentation programme, with nine parallel sessions and complete paper, author, room and session-chair details.',
  },
  {
    id: '24-july',
    day: 'Day 02',
    weekday: 'Friday',
    date: '24 July 2026',
    sessions: 'Sessions 10-15',
    pages: '6-page programme',
    tracks: '7 tracks',
    file: '/schedules/iccisd-2026-presentation-schedule-24-july.pdf',
    preview: '/schedules/iccisd-2026-schedule-24-july-preview.png',
    pageImages: Array.from(
      { length: 6 },
      (_, index) => `/schedules/pages/24-july/page-${index + 1}.jpg`,
    ),
    description:
      'The concluding presentation programme, covering six parallel sessions with full paper and venue information.',
  },
];

const Schedule = () => {
  const [activeDay, setActiveDay] = useState(0);
  const selectedSchedule = scheduleDays[activeDay];

  const showInViewer = (index) => {
    setActiveDay(index);
    window.setTimeout(() => {
      document.getElementById('schedule-viewer')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 0);
  };

  return (
    <div className="min-h-screen bg-[#f3f6f5] text-slate-950">
      <section className="relative overflow-hidden bg-[#071820] text-white">
        <div className="absolute inset-y-0 left-[7%] hidden w-px bg-white/10 lg:block" />
        <div className="absolute inset-y-0 right-[7%] hidden w-px bg-white/10 lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-16 pt-32 sm:px-6 md:pb-20 lg:grid-cols-[1.45fr_1fr] lg:items-end lg:px-8">
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase text-cyan-300">
            <span className="h-px w-9 bg-cyan-300" />
            ICCISD 2026 schedule
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            Conference programme &amp; presentation schedules
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            View the full two-day conference programme or go directly to the paper presentation schedules.
          </p>
          <nav className="mt-8 flex flex-wrap gap-3" aria-label="Schedule sections">
            <a
              href="#conference-programme"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#071820] transition duration-200 hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071820] active:translate-y-0"
            >
              <CalendarDays className="h-4 w-4 text-[#0a7784]" aria-hidden="true" />
              Conference programme
            </a>
            <a
              href="#presentation-schedules"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071820] active:translate-y-0"
            >
              <ArrowDown className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              Presentation schedules
            </a>
          </nav>
        </div>

          <dl className="grid grid-cols-3 border-y border-white/15">
            <div className="py-5 pr-3">
              <dt className="text-xs font-medium text-slate-400">Programme</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">2 days</dd>
            </div>
            <div className="border-x border-white/15 px-4 py-5">
              <dt className="text-xs font-medium text-slate-400">Sessions</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">15</dd>
            </div>
            <div className="py-5 pl-4">
              <dt className="text-xs font-medium text-slate-400">Each slot</dt>
              <dd className="mt-1 text-2xl font-semibold tabular-nums">15 min</dd>
            </div>
          </dl>
        </div>
      </section>

      <main>
        <section className="border-b border-slate-200 bg-white" aria-label="Schedule essentials">
          <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
            <div className="flex items-center gap-4 py-5 md:pr-8">
              <CalendarDays className="h-5 w-5 shrink-0 text-[#0a7784]" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium text-slate-500">Presentation dates</p>
                <p className="mt-0.5 font-semibold">23-24 July 2026</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-5 md:px-8">
              <Clock3 className="h-5 w-5 shrink-0 text-[#0a7784]" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium text-slate-500">Presentation sessions</p>
                <p className="mt-0.5 text-sm font-semibold">23 July: 1:45-4:15 PM</p>
                <p className="mt-0.5 text-sm font-semibold">24 July: 10:30 AM-1:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-5 md:pl-8">
              <MapPin className="h-5 w-5 shrink-0 text-[#0a7784]" aria-hidden="true" />
              <div>
                <p className="text-xs font-medium text-slate-500">Session venues</p>
                <p className="mt-0.5 font-semibold">Block 45, 3rd Floor</p>
              </div>
            </div>
          </div>
        </section>

        <DetailedSchedule />

      <section
        id="presentation-schedules"
        className="scroll-mt-24 mx-auto max-w-7xl border-t border-slate-200 px-4 pb-12 pt-16 sm:px-6 md:pb-16 md:pt-20 lg:px-8"
      >
          <h2 className="mb-10 text-3xl font-bold leading-tight sm:text-4xl">
            Presentation schedules
          </h2>

          <div className="space-y-8">
            {scheduleDays.map((schedule, index) => {
              const previewOnRight = index === 1;

              return (
                <article
                  key={schedule.id}
                  className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,35,42,0.08)] lg:grid-cols-[1.12fr_0.88fr]"
                >
                  <figure
                    className={`relative flex min-h-80 items-center justify-center overflow-hidden bg-[#dfe7e6] p-5 sm:p-8 ${
                      previewOnRight ? 'lg:order-2' : ''
                    }`}
                  >
                    <div className="absolute inset-x-0 top-0 h-1 bg-[#0a7784]" />
                    <img
                      src={schedule.preview}
                      alt={`First page preview of the ${schedule.date} presentation schedule`}
                      className="relative aspect-[1.414/1] w-full max-w-3xl object-contain shadow-[0_16px_40px_rgba(15,35,42,0.18)]"
                    />
                    <figcaption className="sr-only">Preview of {schedule.pages}</figcaption>
                  </figure>

                  <div
                    className={`flex flex-col justify-center p-7 sm:p-10 lg:p-12 ${
                      previewOnRight ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="border-l-2 border-[#d34a44] pl-3 text-sm font-semibold text-slate-500">
                        {schedule.day}
                      </span>
                      <span className="text-sm font-medium text-[#0a7784]">{schedule.weekday}</span>
                    </div>

                    <h3 className="mt-6 text-3xl font-bold leading-tight">{schedule.date}</h3>
                    <p className="mt-4 text-base leading-7 text-slate-600">{schedule.description}</p>

                    <div className="mt-7 grid grid-cols-3 border-y border-slate-200 py-4 text-sm">
                      <div>
                        <Layers3 className="mb-2 h-4 w-4 text-[#0a7784]" aria-hidden="true" />
                        <p className="font-semibold">{schedule.sessions}</p>
                      </div>
                      <div className="border-x border-slate-200 px-4">
                        <FileText className="mb-2 h-4 w-4 text-[#0a7784]" aria-hidden="true" />
                        <p className="font-semibold">{schedule.pages}</p>
                      </div>
                      <div className="pl-4">
                        <CalendarDays className="mb-2 h-4 w-4 text-[#0a7784]" aria-hidden="true" />
                        <p className="font-semibold">{schedule.tracks}</p>
                      </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => showInViewer(index)}
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#0a7784] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#075f69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2 active:translate-y-0"
                      >
                        View on this page
                        <ArrowDown className="h-4 w-4" aria-hidden="true" />
                      </button>
                      <a
                        href={schedule.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2 active:translate-y-0"
                      >
                        Open PDF
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                      <a
                        href={schedule.file}
                        download
                        aria-label={`Download the ${schedule.date} presentation schedule`}
                        className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-300 text-slate-700 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2 active:translate-y-0"
                        title={`Download ${schedule.date} schedule`}
                      >
                        <Download className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section id="schedule-viewer" className="scroll-mt-24 bg-[#e6eceb] py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-7 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold text-[#0a7784]">Full document viewer</p>
                <h2 className="mt-2 text-3xl font-bold">{selectedSchedule.date}</h2>
              </div>

              <div
                className="inline-flex w-full rounded-md border border-slate-300 bg-white p-1 sm:w-auto"
                role="tablist"
                aria-label="Choose a schedule day"
              >
                {scheduleDays.map((schedule, index) => (
                  <button
                    key={schedule.id}
                    type="button"
                    role="tab"
                    aria-selected={activeDay === index}
                    onClick={() => setActiveDay(index)}
                    className={`min-h-10 flex-1 rounded px-4 py-2 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] sm:flex-none ${
                      activeDay === index
                        ? 'bg-[#071820] text-white shadow-sm'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                    }`}
                  >
                    {schedule.day} · {schedule.date.replace(' 2026', '')}
                  </button>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-slate-300 bg-white shadow-[0_22px_60px_rgba(15,35,42,0.12)]">
              <div className="flex flex-col gap-4 border-b border-slate-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded bg-[#e4f0f1] text-[#0a7784]">
                    <FileText className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">ICCISD 2026 presentation schedule</p>
                    <p className="text-xs text-slate-500">{selectedSchedule.pages} · PDF</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href={selectedSchedule.file}
                    download
                    className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition duration-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2 sm:flex-none"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download
                  </a>
                  <a
                    href={selectedSchedule.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-md bg-[#0a7784] px-4 py-2 text-sm font-semibold text-white transition duration-200 hover:bg-[#075f69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2 sm:flex-none"
                  >
                    Open PDF
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>

              <div
                key={selectedSchedule.id}
                className="max-h-[78vh] overflow-auto bg-[#cfd9d7] p-3 sm:p-7 md:p-10"
                aria-live="polite"
              >
                <div className="w-[720px] space-y-7 md:mx-auto md:w-full md:max-w-6xl">
                  {selectedSchedule.pageImages.map((pageImage, index) => (
                    <figure key={pageImage}>
                      <img
                        src={pageImage}
                        alt={`${selectedSchedule.date} presentation schedule, page ${index + 1} of ${selectedSchedule.pageImages.length}`}
                        loading={index === 0 ? 'eager' : 'lazy'}
                        className="h-auto w-full bg-white shadow-[0_15px_35px_rgba(15,35,42,0.16)]"
                      />
                      <figcaption className="mt-2 text-center text-xs font-medium text-slate-600">
                        Page {index + 1} of {selectedSchedule.pageImages.length}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <ContactUsLayout />
        </section>
      </main>
    </div>
  );
};

export default Schedule;
