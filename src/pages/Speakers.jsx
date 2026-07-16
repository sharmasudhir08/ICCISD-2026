import { ArrowDown } from 'lucide-react';
import KeynoteSpeakers from '../Layouts/Speakers/KeynoteSpeakers';
import PanelDiscussion from '../Layouts/Speakers/PanelDiscussion';

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

    <KeynoteSpeakers />
    <PanelDiscussion />
  </div>
);

export default Speakers;
