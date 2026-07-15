import { ArrowDown, CalendarDays, Clock3, MapPin } from 'lucide-react';
import KeynoteSpeakers from '../Layouts/Speakers/KeynoteSpeakers';

const Speakers = () => (
  <div className="min-h-screen bg-[#f3f6f5] text-[#071820]">
    <section className="relative overflow-hidden bg-[#071820] text-white">
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-28 sm:px-6 sm:pb-12 lg:px-8">
        <div className="animate-fadeSlideUp max-w-6xl">
          <p className="text-sm font-semibold text-cyan-300">
            ICCISD 2026 · Opening Ceremony
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-5xl">
            Dignitaries &amp; Keynote Speakers
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300 sm:text-base">
            International Conference on Computational Intelligence Systems and Devices (ICCISD-2026)
          </p>
          <a
            href="#invited-lineup"
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071820] active:translate-y-0"
          >
            View invited lineup
            <ArrowDown className="h-4 w-4 text-cyan-300" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>

    <section className="border-b border-slate-200 bg-white" aria-label="Opening ceremony details">
      <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 px-4 sm:px-6 md:grid-cols-[0.8fr_0.7fr_1.5fr] md:divide-x md:divide-y-0 lg:px-8">
        <div className="flex items-center gap-4 py-5 md:pr-8">
          <CalendarDays className="h-5 w-5 shrink-0 text-[#0a7784]" aria-hidden="true" />
          <div>
            <p className="text-xs font-medium text-slate-500">Date</p>
            <p className="mt-0.5 font-semibold">23rd July 2026</p>
          </div>
        </div>
        <div className="flex items-center gap-4 py-5 md:px-8">
          <Clock3 className="h-5 w-5 shrink-0 text-[#0a7784]" aria-hidden="true" />
          <div>
            <p className="text-xs font-medium text-slate-500">Time</p>
            <p className="mt-0.5 font-semibold">9:00 AM</p>
          </div>
        </div>
        <div className="flex items-start gap-4 py-5 md:pl-8">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#d34a44]" aria-hidden="true" />
          <div>
            <p className="text-xs font-medium text-slate-500">Venue</p>
            <p className="mt-0.5 text-sm font-semibold leading-6">
              Anand Swaroop Auditorium, Block 45, Sharda University, Greater Noida
            </p>
          </div>
        </div>
      </div>
    </section>

    <KeynoteSpeakers />
  </div>
);

export default Speakers;
