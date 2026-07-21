import { virtualMeetings } from '../../utils/virtualMeetings';

export const onlineKeynoteSession = {
  date: 'July 24, 2026',
  time: '2:00 PM to 2:30 PM',
  meeting: virtualMeetings.onlineTutorialWorkshop,
};

export const onlineKeynoteSpeakers = [
  {
    name: 'Karel L. Sterckx, PhD',
    role: 'Online Speaker',
    designation: 'Director, BU-CROCCS',
    affiliations: [
      'Bangkok University, School of Engineering',
      'Center of Research in Optoelectronics, Communications and Computational Systems (BU-CROCCS)',
      'Phahonyothin Road, Pathum Thani 12120, Thailand',
    ],
    topic: 'LED Lighting and Visible Light Communication (VLC)',
    image: '/images/online-keynote-speakers/karel-sterckx-transparent.png',
    imageClassName: 'object-contain object-bottom',
    education: [
      {
        year: '1986',
        qualification: 'Master of Applied Engineering in Electrical and Electronic Engineering, Catholic University Leuven, Belgium',
      },
      {
        year: '1997',
        qualification: 'Master of Science in Optoelectronics and Communications Systems, Northumbria University, UK',
      },
      {
        year: '2000',
        qualification: 'Ph.D., Swansea University, UK',
      },
    ],
    bio: [
      'Dr. Karel Sterckx is a Belgian engineer and academic with experience in the audio-visual industry. He has taught at colleges and universities in Thailand since 1993. He joined Bangkok University as a Research Scholar in 2010 and has served as Director of BU-CROCCS since 2012.',
      'His research focuses on broadband indoor optical wireless communication and software-defined communication systems.',
    ],
  },
  {
    name: 'Prof. Mohanad Alfiras',
    role: 'Online Speaker',
    designation: 'President',
    affiliations: ['Gulf University, Kingdom of Bahrain'],
    topic: 'From Personalized Learning to Employability: The AI Transformation of Higher Education',
    image: '/images/online-keynote-speakers/mohanad-alfiras.png',
    imageClassName: 'object-cover object-top',
    bio: [
      'Professor Mohanad Alfiras is President of Gulf University in the Kingdom of Bahrain. An engineer and experienced higher education administrator, he leads the university’s academic and institutional strategy. His leadership supports academic excellence, regional impact, and the continued development of higher education in Bahrain.',
      'He earned a B.Sc. (Honors) in Electrical and Electronic Engineering from the University of Technology, Iraq, in 1998. He completed his M.Sc. and Ph.D. in Communication System Engineering at the same institution in 2000 and 2006, respectively. He also holds a Ph.D. in Education Technology from Brunel University London, UK.',
      'Professor Alfiras joined Gulf University in 2006 as an Assistant Professor in the Department of Computer Communication Engineering. He became Head of the department in 2008 and later served as Dean of Admissions and Registration. He was appointed Acting President in 2015 and President in 2017.',
      'He has authored or co-authored more than 80 peer-reviewed research publications, presented papers at numerous conferences, and served as a keynote speaker at many conferences and events. He received a Principal Fellow Certificate from the Higher Education Academy in 2018 and was appointed full Professor in April 2021.',
    ],
    highlights: {
      title: 'Patents and inventions',
      intro: 'Professor Alfiras holds five internationally registered patents and industrial designs across the United Kingdom, India, and Germany:',
      items: [
        {
          title: 'AI-Based Safety and Health Devices (2025)',
          description: 'Devices for fraud-call detection, doctors’ location tracking, and real-time health problem detection.',
        },
        {
          title: 'Autonomous Agricultural Field Robot (2026)',
          description: 'An autonomous system designed to support smart agriculture and field operations.',
        },
        {
          title: 'Solar-Powered Cyber Car (2026)',
          description: 'A sustainable transportation concept combining solar energy with intelligent vehicle technology.',
        },
      ],
    },
    bioClosing: [
      'These innovations reflect Gulf University’s commitment to artificial intelligence, smart agriculture, and sustainable transportation.',
    ],
  },
];
