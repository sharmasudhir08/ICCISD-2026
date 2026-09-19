const sessions = [
  {
    "number": 1,
    "photos": [
      "A presenter speaking beside the session display during ICCISD-2026 Session 1",
      "A participant receiving a certificate during ICCISD-2026 Session 1",
      "Participants and session chairs gathered together during ICCISD-2026 Session 1",
      "A presenter explaining a research slide during ICCISD-2026 Session 1"
    ]
  },
  {
    "number": 2,
    "photos": [
      "A participant receiving a certificate from the session chairs during ICCISD-2026 Session 2",
      "A presenter addressing the seated audience during ICCISD-2026 Session 2",
      "A presenter discussing research beside the display during ICCISD-2026 Session 2",
      "A presenter sharing research with the session chairs during ICCISD-2026 Session 2"
    ]
  },
  {
    "number": 3,
    "photos": [
      "A presenter discussing research with the session chairs during ICCISD-2026 Session 3",
      "A presenter explaining a slide to the audience during ICCISD-2026 Session 3",
      "A participant receiving a certificate during ICCISD-2026 Session 3",
      "Session participants gathered in front of the conference display during ICCISD-2026 Session 3"
    ]
  },
  {
    "number": 4,
    "photos": [
      "A presenter discussing the research methodology during ICCISD-2026 Session 4",
      "A presenter explaining the research problem during ICCISD-2026 Session 4",
      "A presenter pointing to the session display during ICCISD-2026 Session 4",
      "Session chairs and participants presenting a certificate during ICCISD-2026 Session 4"
    ]
  },
  {
    "number": 5,
    "photos": [
      "A presenter discussing research with the session chairs during ICCISD-2026 Session 5",
      "A presenter answering questions from the session chairs during ICCISD-2026 Session 5",
      "A group gathered for a certificate presentation during ICCISD-2026 Session 5",
      "A participant receiving a certificate during ICCISD-2026 Session 5"
    ]
  },
  {
    "number": 6,
    "photos": [
      "A presenter addressing the session during ICCISD-2026 Session 6",
      "A participant receiving a certificate during ICCISD-2026 Session 6",
      "A presenter explaining a research slide during ICCISD-2026 Session 6",
      "Session chairs presenting a participant certificate during ICCISD-2026 Session 6"
    ]
  },
  {
    "number": 7,
    "photos": [
      "A presenter explaining research findings during ICCISD-2026 Session 7",
      "A presenter discussing a paper with the session chairs during ICCISD-2026 Session 7",
      "A presenter addressing the audience beside the display during ICCISD-2026 Session 7",
      "A participant receiving a certificate during ICCISD-2026 Session 7"
    ]
  },
  {
    "number": 8,
    "photos": [
      "The audience watching a paper presentation during ICCISD-2026 Session 8",
      "Session representatives gathered for recognition during ICCISD-2026 Session 8",
      "A participant receiving a certificate during ICCISD-2026 Session 8",
      "Participants and session representatives gathered together during ICCISD-2026 Session 8"
    ]
  },
  {
    "number": 9,
    "photos": [
      "Participants gathered with a certificate during ICCISD-2026 Session 9",
      "Conference participants gathered for a group photograph during ICCISD-2026 Session 9",
      "A presenter discussing research with the session chairs during ICCISD-2026 Session 9",
      "A participant receiving a certificate during ICCISD-2026 Session 9"
    ]
  },
  {
    "number": 10,
    "photos": [
      "A presenter explaining a research slide during ICCISD-2026 Session 10",
      "A presenter addressing the session during ICCISD-2026 Session 10",
      "A presenter discussing the findings beside the display during ICCISD-2026 Session 10",
      "A participant receiving a certificate during ICCISD-2026 Session 10"
    ]
  },
  {
    "number": 11,
    "photos": [
      "A presenter discussing research with the session chairs during ICCISD-2026 Session 11",
      "A presenter addressing the seated audience during ICCISD-2026 Session 11",
      "Conference representatives gathered for recognition during ICCISD-2026 Session 11",
      "A participant receiving a certificate during ICCISD-2026 Session 11"
    ]
  },
  {
    "number": 12,
    "photos": [
      "A presenter explaining a research slide during ICCISD-2026 Session 12",
      "A presenter speaking to the session chairs during ICCISD-2026 Session 12",
      "A participant receiving a certificate during ICCISD-2026 Session 12",
      "A presenter discussing a paper beside the display during ICCISD-2026 Session 12"
    ]
  },
  {
    "number": 13,
    "photos": [
      "A view of the paper presentation session and its audience during ICCISD-2026 Session 13",
      "Conference representatives gathered for recognition during ICCISD-2026 Session 13",
      "Session representatives presenting a certificate during ICCISD-2026 Session 13"
    ]
  },
  {
    "number": 14,
    "photos": [
      "Conference representatives gathered for recognition during ICCISD-2026 Session 14",
      "An online presenter sharing research on text-based emotion detection during ICCISD-2026 Session 14",
      "An online presenter sharing a paper on muscle mass assessment during ICCISD-2026 Session 14",
      "An online presenter sharing a paper on dementia detection during ICCISD-2026 Session 14"
    ]
  },
  {
    "number": 15,
    "photos": [
      "Session representatives presenting a certificate during ICCISD-2026 Session 15",
      "Conference representatives gathered for recognition during ICCISD-2026 Session 15",
      "An online presenter sharing an introductory research slide during ICCISD-2026 Session 15",
      "An online presenter sharing a conference paper during ICCISD-2026 Session 15"
    ]
  }
];

export const sessionGalleryPhotos = sessions.flatMap(({ number, photos }) =>
  photos.map((alt, index) => {
    const id = `session-${String(number).padStart(2, '0')}-${String(index + 1).padStart(2, '0')}`;
    return {
      id,
      src: `/images/conference-gallery/sessions/${id}.webp`,
      thumbnailSrc: `/images/conference-gallery/sessions/${id}-thumb.webp`,
      section: `Session ${number}`,
      sessionNumber: number,
      title: `Session ${number}, photograph ${index + 1}`,
      alt,
    };
  }),
);

export const sessionGallerySections = sessions.map(({ number, photos }) => ({
  id: `session-${String(number).padStart(2, '0')}`,
  label: `Session ${number}`,
  sessionNumber: number,
  photoCount: photos.length,
}));

