import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { BookOpenText, X } from 'lucide-react';

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

const SpeakerBioDialog = ({ speaker, onClose }) => {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = Array.from(
        dialogRef.current?.querySelectorAll(focusableSelector) || [],
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [onClose]);

  return createPortal(
    <div
      className="bio-backdrop-enter fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#071820]/75 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <article
        ref={dialogRef}
        id="speaker-bio-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="speaker-bio-title"
        aria-describedby="speaker-bio-copy"
        className="bio-dialog-enter relative grid max-h-[calc(100vh-1.5rem)] w-full max-w-5xl grid-cols-1 overflow-x-hidden overflow-y-auto rounded-lg border border-white/60 bg-white shadow-[0_30px_90px_rgba(2,12,18,0.42)] sm:max-h-[calc(100vh-3rem)] md:h-[min(720px,calc(100vh-3rem))] md:grid-cols-[minmax(280px,0.78fr)_minmax(0,1.22fr)] md:overflow-hidden"
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close biography"
          title="Close biography"
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-300 bg-white/95 text-slate-700 shadow-sm transition hover:border-slate-400 hover:bg-white hover:text-[#071820] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0a7784] focus-visible:ring-offset-2 sm:right-4 sm:top-4"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <figure className="relative aspect-[4/3] w-full overflow-hidden bg-[#dce9e8] md:aspect-auto md:h-full">
          <img
            src={speaker.image}
            alt={`Portrait of ${speaker.name}`}
            className="absolute inset-0 h-full w-full object-contain object-bottom"
          />
        </figure>

        <div className="min-w-0 w-full overflow-x-hidden p-6 pr-14 sm:p-8 sm:pr-20 md:overflow-y-auto md:p-10 md:pr-20">
          <p className="flex items-center gap-2 text-xs font-semibold text-[#0a7784] sm:gap-3 sm:text-sm">
            <BookOpenText className="h-4 w-4 shrink-0" aria-hidden="true" />
            Speaker biography
          </p>
          <h2 id="speaker-bio-title" className="mt-4 break-words text-2xl font-bold leading-tight text-[#071820] sm:text-4xl">
            {speaker.name}
          </h2>
          <p className="mt-4 text-base font-semibold leading-7 text-slate-900">{speaker.designation}</p>
          <div className="mt-1 space-y-1 text-sm leading-6 text-slate-600">
            {speaker.affiliations.map((affiliation) => (
              <p key={affiliation}>{affiliation}</p>
            ))}
          </div>

          <div id="speaker-bio-copy" className="mt-7 space-y-5 text-[0.95rem] leading-7 text-slate-700 sm:mt-8 sm:text-base sm:leading-8">
            {speaker.bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>,
    document.body,
  );
};

export default SpeakerBioDialog;
