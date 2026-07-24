import { useState } from 'react';
import {
  ArrowDown,
  BookOpenText,
  CalendarDays,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  Layers3,
  Video,
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

const conferenceSouvenir = {
  file: '/schedules/iccisd-2026-conference-souvenir.pdf',
  cover: '/schedules/iccisd-2026-souvenir-cover.jpg',
  pages: 124,
};

const onlinePresentationRooms = [
  {
    name: 'Paper Presentation 1',
    url: 'https://zoom.us/j/99288626715?pwd=iVyr7VRLrC5ODFzO55rcznRARWwcIc.1',
    meetingId: '992 8862 6715',
  },
  {
    name: 'Paper Presentation 2',
    url: 'https://zoom.us/j/99427202623?pwd=i8nhuO68DE2FUEzHCXhv4HfjXAMYZw.1',
    meetingId: '994 2720 2623',
  },
  {
    name: 'Paper Presentation 3',
    url: 'https://zoom.us/j/99848745825?pwd=GUgTLjlr2AhpkumbC8uMnmS9p4LaDw.1',
    meetingId: '998 4874 5825',
  },
  {
    name: 'Paper Presentation 4',
    url: 'https://zoom.us/j/94415538266?pwd=Qtaw4f5ptOzhomqrdq4jw6Liegtgkz.1',
    meetingId: '944 1553 8266',
  },
  {
    name: 'Paper Presentation 5',
    url: 'https://zoom.us/j/93959169851?pwd=U2l85rUqVKJbyJhaEKHMmTE8BiOPzK.1',
    meetingId: '939 5916 9851',
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
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 sm:px-6 md:pb-20 lg:px-8">
        <div>
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase text-cyan-300">
            ICCISD 2026 schedule
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] sm:text-5xl">
            Conference programme &amp; presentation schedules
          </h1>
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
            <a
              href="#conference-souvenir"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071820] active:translate-y-0"
            >
              <BookOpenText className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              Conference souvenir
            </a>
            <a
              href="#online-presentations"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071820] active:translate-y-0"
            >
              <Video className="h-4 w-4 text-cyan-300" aria-hidden="true" />
              Online paper presentations
            </a>
          </nav>
        </div>
      </div>
      </section>

      <main>
        <section
          id="conference-souvenir"
          className="scroll-mt-24 border-b border-slate-200 bg-[#e6eceb]"
          aria-labelledby="souvenir-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-9 px-4 py-12 sm:px-6 md:grid-cols-[240px_minmax(0,1fr)] md:items-center md:py-16 lg:gap-14 lg:px-8">
            <figure className="mx-auto w-full max-w-[240px] md:mx-0">
              <img
                src={conferenceSouvenir.cover}
                alt="Cover of the ICCISD-2026 Conference Souvenir"
                className="aspect-[0.707/1] w-full bg-white object-cover shadow-[0_18px_45px_rgba(15,35,42,0.2)]"
              />
            </figure>

            <div className="max-w-3xl">
              <p className="flex items-center gap-2 text-sm font-semibold text-[#0a7784]">
                <BookOpenText className="h-4 w-4" aria-hidden="true" />
                Conference publication
              </p>
              <h2 id="souvenir-heading" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                ICCISD-2026 Conference Souvenir
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Official {conferenceSouvenir.pages}-page souvenir of the International Conference on
                Computational Intelligence Systems and Devices.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={conferenceSouvenir.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#0a7784] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#075f69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2 active:translate-y-0"
                >
                  <BookOpenText className="h-4 w-4" aria-hidden="true" />
                  Open souvenir
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={conferenceSouvenir.file}
                  download
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition duration-200 hover:-translate-y-0.5 hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2 active:translate-y-0"
                >
                  <Download className="h-4 w-4 text-[#0a7784]" aria-hidden="true" />
                  Download souvenir
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="online-presentations"
          className="scroll-mt-24 border-b border-slate-200 bg-white"
          aria-labelledby="online-presentations-heading"
        >
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-[#0a7784]">
                  <Video className="h-4 w-4" aria-hidden="true" />
                  ICCISD-2026 virtual sessions
                </p>
                <h2
                  id="online-presentations-heading"
                  className="mt-3 text-3xl font-bold leading-tight sm:text-4xl"
                >
                  Online paper presentations
                </h2>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Clock3 className="h-5 w-5 shrink-0 text-[#0a7784]" aria-hidden="true" />
                <p>
                  <span className="font-semibold text-slate-900">24 July 2026</span>
                  <span className="mx-2 text-slate-300" aria-hidden="true">|</span>
                  10:00 AM IST
                </p>
              </div>
            </div>

            <div className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {onlinePresentationRooms.map((room, index) => (
                <article
                  key={room.meetingId}
                  className="flex min-h-56 flex-col rounded-lg border border-slate-200 bg-[#f5f8f7] p-6 transition duration-200 hover:-translate-y-0.5 hover:border-slate-400 hover:shadow-[0_14px_34px_rgba(15,35,42,0.08)]"
                >
                  <p className="text-xs font-semibold uppercase text-[#0a7784]">
                    Zoom room {index + 1}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-[#071820]">{room.name}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    <span className="font-semibold text-slate-800">Meeting ID:</span>{' '}
                    {room.meetingId}
                    <br />
                    <span className="font-semibold text-slate-800">Passcode:</span> 112233
                  </p>
                  <a
                    href={room.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#0a7784] px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:bg-[#075f69] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2"
                  >
                    <Video className="h-4 w-4" aria-hidden="true" />
                    Join Zoom room
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              ))}
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
