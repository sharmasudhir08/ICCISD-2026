import { useEffect, useRef, useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  Image,
  X,
} from 'lucide-react';
import { conferenceGallery, galleryHighlights, gallerySections } from '../utils/galleryData';

const GalleryPhoto = ({ photo, onOpen, featured = false }) => (
  <button
    type="button"
    onClick={() => onOpen(photo)}
    className={`group relative block w-full overflow-hidden rounded-lg bg-[#dfe7e6] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-4 ${
      featured ? 'sm:col-span-2' : ''
    }`}
    aria-label={`Open photograph: ${photo.title}`}
  >
    <img
      src={photo.thumbnailSrc || photo.src}
      alt={photo.alt}
      loading={featured ? 'eager' : 'lazy'}
      decoding="async"
      className={`h-full w-full object-contain transition duration-500 ease-out group-hover:brightness-95 ${
        featured ? 'aspect-[16/8]' : 'aspect-[4/3]'
      }`}
    />
    {photo.id === 'souvenir-release-stage' && (
      <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-[#071820]/80 via-[#071820]/20 to-transparent px-4 pb-4 pt-12 text-white">
        <span className="text-sm font-semibold leading-5">{photo.title}</span>
        <Expand className="h-4 w-4 shrink-0 opacity-80 transition group-hover:opacity-100" aria-hidden="true" />
      </span>
    )}
  </button>
);

const Gallery = () => {
  const [activePhoto, setActivePhoto] = useState(null);
  const closeButtonRef = useRef(null);

  const activeIndex = activePhoto
    ? conferenceGallery.findIndex((photo) => photo.id === activePhoto.id)
    : -1;

  useEffect(() => {
    if (!activePhoto) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActivePhoto(null);
      if (event.key === 'ArrowLeft') {
        setActivePhoto(conferenceGallery[(activeIndex - 1 + conferenceGallery.length) % conferenceGallery.length]);
      }
      if (event.key === 'ArrowRight') {
        setActivePhoto(conferenceGallery[(activeIndex + 1) % conferenceGallery.length]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activePhoto, activeIndex]);

  const showPrevious = () => {
    setActivePhoto(conferenceGallery[(activeIndex - 1 + conferenceGallery.length) % conferenceGallery.length]);
  };

  const showNext = () => {
    setActivePhoto(conferenceGallery[(activeIndex + 1) % conferenceGallery.length]);
  };

  return (
    <div className="min-h-screen bg-[#f3f6f5] text-[#071820]">
      <section className="relative overflow-hidden bg-[#071820] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 pb-14 pt-28 sm:px-6 md:pb-18 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:gap-16 lg:px-8">
          <div className="max-w-xl">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#071820]"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              ICCISD 2026
            </a>
            <p className="mt-10 text-sm font-semibold uppercase text-cyan-300">Conference memories</p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.08] sm:text-5xl">
              ICCISD-2026 in photographs
            </h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-300 sm:text-lg">
              A visual record of the opening ceremony, guest interactions, recognition moments, and the people who brought the conference together.
            </p>
            <a
              href="#gallery-grid"
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#071820] active:translate-y-0"
            >
              Browse the collection
              <ArrowUpRight className="h-4 w-4 text-cyan-300" aria-hidden="true" />
            </a>
          </div>

          <GalleryPhoto photo={galleryHighlights[0]} onOpen={setActivePhoto} featured />
        </div>
      </section>

      <main>
        <section className="border-b border-slate-200 bg-[#e6eceb]" aria-labelledby="highlights-heading">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="flex items-center gap-2 text-sm font-semibold text-[#0a7784]">
                  <Image className="h-4 w-4" aria-hidden="true" />
                  ICCISD-2026 highlights
                </p>
                <h2 id="highlights-heading" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                  Moments from ICCISD-2026
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Opening day scenes and shared moments from ICCISD-2026.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {galleryHighlights.slice(1).map((photo) => (
                <GalleryPhoto key={photo.id} photo={photo} onOpen={setActivePhoto} />
              ))}
            </div>
          </div>
        </section>

        <section id="gallery-grid" className="scroll-mt-24 bg-white" aria-labelledby="gallery-heading">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 md:py-20 lg:px-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#0a7784]">The full collection</p>
              <h2 id="gallery-heading" className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                Moments, people, and progress
              </h2>
            </div>

            <div className="mt-12 space-y-16">
              {gallerySections.map((section) => {
                const photos = conferenceGallery.filter((photo) => photo.section === section.label);

                return (
                  <section key={section.id} id={section.id} className="scroll-mt-24" aria-labelledby={`${section.id}-heading`}>
                    <div className="mb-6 flex flex-col gap-2 border-t border-slate-200 pt-5 sm:flex-row sm:items-end sm:justify-between">
                      <h3 id={`${section.id}-heading`} className="text-2xl font-bold text-[#071820]">
                        {section.label}
                      </h3>
                      {section.description && (
                        <p className="max-w-md text-sm leading-6 text-slate-600">{section.description}</p>
                      )}
                    </div>
                    <div className={`grid gap-5 sm:grid-cols-2 ${
                      section.sessionNumber && section.photoCount === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
                    }`}>
                      {photos.map((photo) => (
                        <GalleryPhoto key={photo.id} photo={photo} onOpen={setActivePhoto} featured={photo.featured} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {activePhoto && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#071820]/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="photo-dialog-heading"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActivePhoto(null);
          }}
        >
          <div className="flex max-h-[calc(100dvh-2rem)] w-full max-w-6xl flex-col">
            <div className="flex items-center justify-between gap-4 pb-3 text-white">
              <h2 id="photo-dialog-heading" className="sr-only">{activePhoto.title}</h2>
              <p className="text-sm font-medium text-slate-300">{activeIndex + 1} / {conferenceGallery.length}</p>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActivePhoto(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                aria-label="Close photograph"
                title="Close photograph"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="grid min-h-0 flex-1 grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 sm:gap-6">
              <button
                type="button"
                onClick={showPrevious}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                aria-label="Previous photograph"
                title="Previous photograph"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <figure className="min-w-0 text-center">
                <img
                  src={activePhoto.src}
                  alt={activePhoto.alt}
                  className="mx-auto max-h-[72dvh] w-auto max-w-full object-contain"
                />
                {activePhoto.id === 'souvenir-release-stage' && (
                  <figcaption className="mt-4 text-sm font-semibold text-white">{activePhoto.title}</figcaption>
                )}
              </figure>

              <button
                type="button"
                onClick={showNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                aria-label="Next photograph"
                title="Next photograph"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
