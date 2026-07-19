export const detailedScheduleFile = '/schedules/iccisd-2026-detailed-schedule.xlsx';

export const detailedScheduleDays = [
  {
    id: 'detailed-day-1',
    label: 'Day 01',
    weekday: 'Thursday',
    date: '23 July 2026',
    venue: 'Anand Swaroop Auditorium, 4th Floor, Block 45',
    items: [
      {
        time: '09:00-09:45',
        title: 'Registration & Welcome Kit Distribution',
        details: ['Anand Swaroop Auditorium, 4th Floor, Block 45'],
      },
      { type: 'section', title: 'Inaugural ceremony' },
      { time: '10:30-10:35', title: 'Welcome & About the Conference' },
      { time: '10:35-10:40', title: 'Lamp Lighting' },
      { time: '10:40-10:45', title: 'Felicitation of Guests and Dignitaries' },
      {
        time: '10:45-10:50',
        title: 'Curtain Raiser - Opening Speech by Dr. Rajneesh Kumar Singh, HoD - CSA',
      },
      { time: '10:50-10:55', title: 'Release of Conference Souvenir' },
      {
        time: '10:55-11:00',
        title:
          'Address by Dean Prof. (Dr.) Geetha Ganesan, Conference Chair - ICCISD-2026, SSCSE, Sharda University',
      },
      {
        time: '11:00-11:05',
        title:
          "Address by Prof. (Dr.) Parma Nand, Hon'ble Vice Chancellor, Sharda University, Agra",
      },
      {
        time: '11:05-11:10',
        title:
          "Address by Prof. (Dr.) Sibaram Khara, Hon'ble Vice Chancellor, Sharda University, Greater Noida",
      },
      {
        time: '11:10-11:15',
        title:
          "Address by Prof. (Dr.) R. P. Singh, Advisor to the Hon'ble Chancellor, Sharda University, Greater Noida",
      },
      {
        time: '11:15-11:20',
        title: 'Address by Shri Prashant Gupta, CEO, Sharda University',
      },
      {
        time: '11:20-11:25',
        title: "Address by Shri Y. K. Gupta, Hon'ble Pro-Chancellor, Sharda University",
      },
      {
        time: '11:25-11:30',
        title: "Address by Shri P. K. Gupta, Hon'ble Chancellor, Sharda University",
      },
      {
        time: '11:30-11:35',
        title: 'Address by Chief Guest',
        speaker: 'Shri Ashok Gupta',
        details: ['Director, STPI & CEO, STPI Apiary, Gurugram, Haryana'],
      },
      {
        time: '11:35-11:40',
        title:
          'Vote of Thanks by Prof. (Dr.) Sudhir Kumar Sharma, Conference Convener, followed by the National Anthem',
      },
      {
        time: '11:40-12:10',
        title: 'High Tea & Networking',
        details: ['Guests, Organizing Team & Participants'],
        type: 'break',
      },
      {
        time: '12:10-12:25',
        title: 'Keynote I',
        speaker: 'Paulina Muszyńska',
        details: [
          'Head of Development Projects Department, Wrocław Agglomeration Development Agency, Poland',
          'Head of Startup Wrocław | Chief Ecosystem Officer',
          'Startup Ecosystem Strategist | Women in Tech Advocate',
        ],
        topic:
          'The Ecosystem Advantage: Bridging the Gap Between Academic Excellence and Entrepreneurial Success',
        type: 'keynote',
      },
      {
        time: '12:25-12:40',
        title: 'Keynote II',
        speaker: 'Dr. Yash Chawla',
        details: [
          'Founder and Head of CRAFT',
          'Faculty of Management, Wroclaw University of Science and Technology, Poland',
        ],
        topic: 'Responsible Everyday AI and Human-Centric Sustainable Technologies',
        type: 'keynote',
      },
      {
        time: '12:40-12:55',
        title: 'Keynote III',
        speaker: 'Dr. Ankit Agrawal',
        details: ['Research Professor, Department of ECE, Northwestern University, USA'],
        topic: 'AI for Science and Engineering: Leveraging GNNs, LLMs, XAI, and Nanocombinatorics',
        type: 'keynote',
      },
      {
        time: '12:55-14:00',
        title: 'Networking Lunch',
        details: ['Anand Swaroop Auditorium, Block 45'],
        type: 'break',
      },
      {
        time: '14:00-16:30',
        title: 'Technical Sessions (Track I to VII)',
        details: ['Paper presentations as per the presentation schedule'],
        type: 'session',
      },
      {
        time: '16:30-17:00',
        title: 'High Tea & Networking',
        details: ['Guests, Organizing Team & Participants'],
        type: 'break',
      },
    ],
  },
  {
    id: 'detailed-day-2',
    label: 'Day 02',
    weekday: 'Friday',
    date: '24 July 2026',
    venue: 'Anand Swaroop Auditorium, 4th Floor, Block 45',
    items: [
      { time: '09:00-09:30', title: 'Registration & Welcome Kit Distribution' },
      {
        time: '09:30-10:30',
        title: 'Panel Discussion',
        details: ['Online mode'],
        type: 'session',
      },
      {
        time: '10:30-10:45',
        title: 'High Tea & Networking',
        details: ['Guests, Organizing Team & Participants'],
        type: 'break',
      },
      {
        time: '10:45-13:00',
        title: 'Technical Sessions (Track I to VII)',
        details: ['Paper presentations as per the presentation schedule'],
        type: 'session',
      },
      { time: '13:00-14:00', title: 'Networking Lunch', type: 'break' },
      {
        time: '14:00-14:15',
        title: 'Online Speaker',
        speaker: 'Karel L. Sterckx, PhD',
        details: [
          'Director, Bangkok University Centre of Research in Optoelectronics, Communications and Computational Systems',
          'School of Engineering, Bangkok University, Thailand',
        ],
        topic: 'LED Lighting and Visible Light Communication (VLC)',
        type: 'keynote',
      },
      {
        time: '14:15-14:30',
        title: 'Online Speaker',
        speaker: 'Prof. Mohanad Alfiras',
        details: ['President, Gulf University, Kingdom of Bahrain'],
        topic: 'From Personalized Learning to Employability: The AI Transformation of Higher Education',
        type: 'keynote',
      },
      { time: '14:30-14:35', title: 'Valedictory Session', type: 'ceremony' },
      {
        time: '14:35-14:40',
        title: 'Felicitation of Guests and Dignitaries',
        type: 'ceremony',
      },
      {
        time: '14:40-14:45',
        title: 'Address by Chief Guest',
        speaker: 'Prof. (Dr.) S. N. Singh',
        details: [
          'Director, Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior',
        ],
        type: 'ceremony',
      },
      { time: '14:45-15:00', title: 'Certificate Distribution', type: 'ceremony' },
      {
        time: '15:00-15:05',
        title: 'Conference Report by Prof. (Dr.) Ajay Kushwaha',
        type: 'ceremony',
      },
      {
        time: '15:05-15:10',
        title: 'Vote of Thanks by Prof. (Dr.) Sudeep Varshney, Associate Dean, Sharda University',
        type: 'ceremony',
      },
      {
        time: '15:10-15:30',
        title: 'High Tea & Networking',
        details: ['Guests, Organizing Team & Participants'],
        type: 'break',
      },
    ],
  },
];
