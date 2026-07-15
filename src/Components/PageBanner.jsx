const PageBanner = ({ title, subtitle }) => (
  <section className="relative overflow-hidden bg-[#071820] text-white">
    <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-32 text-center sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{title}</h1>
      <p className="mt-4 text-lg text-slate-300 sm:text-xl">{subtitle}</p>
    </div>
  </section>
);

export default PageBanner;
