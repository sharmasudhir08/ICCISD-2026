import { virtualMeetings } from './virtualMeetings';

export const programmeScheduleFile = '/schedules/iccisd-2026-program-schedule.pdf';

export const detailedScheduleNote = 'All events shall be held in Block 45.';

export const detailedScheduleDays = [
  {
    id: 'detailed-day-1',
    label: 'Day 01',
    weekday: 'Thursday',
    date: '23 July 2026',
    venue: 'Anand Swaroop Auditorium, 4th Floor, Block 45',
    items: [
      { time: '09:00-09:45', title: 'Registration & Welcome Kit Distribution' },
      { type: 'section', title: 'Inaugural Ceremony' },
      { time: '10:00-10:10', title: 'Lamp Lighting' },
      { time: '10:10-10:15', title: 'Felicitation of Guest and Dignitaries' },
      {
        time: '10:15-10:20',
        title: 'Curtain Raiser - Opening Speech by Dr. Rajneesh Kumar Singh, HoD - CSA',
      },
      {
        time: '10:20-10:25',
        title:
          'Address by Dean Prof. (Dr.) Geetha Ganesan, Conference Chair - ICCISD-2026, SSCSE, Sharda University',
      },
      {
        time: '10:25-10:30',
        title:
          "Address by Prof. (Dr.) Parma Nand, Hon'ble Vice Chancellor, Sharda University, Agra",
      },
      {
        time: '10:30-10:35',
        title:
          "Address by Prof. (Dr.) Sibaram Khara, Hon'ble Vice Chancellor, Sharda University, Greater Noida",
      },
      {
        time: '10:35-10:40',
        title:
          "Address by Prof. (Dr.) R. P. Singh, Advisor to the Hon'ble Chancellor, Sharda University, Greater Noida",
      },
      {
        time: '10:40-10:45',
        title: 'Address by Shri Prashant Gupta, CEO, Sharda University',
      },
      {
        time: '10:45-10:50',
        title: "Address by Shri Y. K. Gupta, Hon'ble Pro-Chancellor, Sharda University",
      },
      {
        time: '10:50-10:55',
        title: "Address by Shri P. K. Gupta, Hon'ble Chancellor, Sharda University",
      },
      {
        time: '10:55-11:00',
        title: 'Address by Chief Guest',
        speaker: 'Shri Ashok Gupta',
        details: ['Director, STPI & CEO, STPI Apiary, Gurugram, Haryana'],
      },
      {
        time: '11:00-11:05',
        title:
          'Vote of Thanks by Prof. (Dr.) Sudhir Kumar Sharma, Conference Convener, followed by the National Anthem',
      },
      {
        time: '11:05-11:30',
        title: 'High Tea & Networking',
        details: ['Guests, Organizing Team & Participants'],
        type: 'break',
      },
      {
        time: '11:30-12:00',
        title: 'Keynote I',
        speaker: 'Paulina Muszyńska',
        details: [
          'Head of Development Projects Department, Wrocław Agglomeration Development Agency, Poland',
        ],
        topic:
          'The Ecosystem Advantage: Bridging the Gap Between Academic Excellence and Entrepreneurial Success',
        type: 'keynote',
      },
      {
        time: '12:00-12:30',
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
        time: '12:30-13:00',
        title: 'Keynote III',
        speaker: 'Dr. Ankit Agrawal',
        details: ['Research Professor, Department of ECE, Northwestern University, USA'],
        topic: 'AI for Science and Engineering: Leveraging GNNs, LLMs, XAI, and Nanocombinatorics',
        type: 'keynote',
      },
      {
        time: '13:00-14:00',
        title: 'Networking Lunch',
        details: ['Anand Swaroop Auditorium, Block 45'],
        type: 'break',
      },
      {
        time: '14:00-16:30',
        title: 'Parallel Sessions (Track I to VII) for Paper Presentation',
        details: [
          'As per the presentation schedule on the website',
          'Venue: Hackathon Center, 3rd Floor, Block 45',
        ],
        directoryLink: '#parallel-session-directory',
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
    venue: 'Hackathon Center, 3rd Floor, Block 45',
    items: [
      { time: '09:00-09:30', title: 'Registration & Welcome Kit Distribution' },
      {
        time: '09:30-10:30',
        title: 'Panel Discussion (Online)',
        topic: 'AI Agents: Transforming Industry, Academia, and the Future of Intelligent Work',
        topicLabel: 'Theme',
        meeting: virtualMeetings.panelDiscussion,
        participants: [
          'Shri Yogesh Sharma, Co-Founder & Chairperson, Mamsys World',
          'Shri Vikram Singh, Delivery Coordinator, Tata Consultancy Services',
          'Shri Sarvesh Kumar Gupta, Senior Principal Engineer, Oracle',
          'Dr. Ishu Anand Jaiswal, Author & Senior IEEE Member, Intuit, United States',
          'Shri Ankur Khare, AI Innovation Advisor, SAP',
          'Shri Ashutosh Chandra Jha, Network Security Engineer, New York University',
          'Shri Prakhar Mittal, Digital Transformation Leader, AtriCure, Inc., USA',
          'Shri Justin Rajakumar Maria Thason, Manager, CareFirst BlueCross BlueShield',
        ],
        type: 'session',
      },
      {
        time: '10:15-10:45',
        title: 'High Tea & Networking',
        details: ['Guests, Organizing Team & Participants'],
        type: 'break',
      },
      {
        time: '10:30-13:00',
        title: 'Parallel Sessions (Track I to VII) for Paper Presentation',
        details: [
          'As per the presentation schedule on the website',
          'Venue: Hackathon Center, 3rd Floor, Block 45',
        ],
        directoryLink: '#parallel-session-directory',
        type: 'session',
      },
      { time: '13:00-14:00', title: 'Networking Lunch', type: 'break' },
      {
        time: '14:00-14:30',
        title: 'Keynote Speakers for Online Tutorial / Workshop',
        meeting: virtualMeetings.onlineTutorialWorkshop,
        type: 'session',
      },
      {
        time: '14:00-14:15',
        title: 'Keynote IV',
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
        title: 'Keynote V',
        speaker: 'Prof. Mohanad Alfiras',
        details: ['President, Gulf University, Kingdom of Bahrain'],
        topic: 'From Personalized Learning to Employability: The AI Transformation of Higher Education',
        type: 'keynote',
      },
      { type: 'section', title: 'Valedictory Session' },
      {
        time: '14:30-14:40',
        title: 'Felicitation of Guest and Dignitaries',
        type: 'ceremony',
      },
      {
        time: '14:40-14:55',
        title: 'Address by Chief Guest',
        speaker: 'Prof. (Dr.) S. N. Singh',
        details: [
          'Director, Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM), Gwalior',
        ],
        type: 'ceremony',
      },
      { time: '14:55-15:20', title: 'Certificate Distribution', type: 'ceremony' },
      {
        time: '15:20-15:25',
        title: 'Conference Report by Prof. (Dr.) Ajay Shriram Kushwaha, CSA, SSCSE, Sharda University',
        type: 'ceremony',
      },
      {
        time: '15:25-15:30',
        title: 'Vote of Thanks by Prof. (Dr.) Sudeep Varshney, Associate Dean, Sharda University',
        type: 'ceremony',
      },
      {
        time: '15:30-16:00',
        title: 'High Tea & Networking',
        details: ['Guests, Organizing Team & Participants'],
        type: 'break',
      },
    ],
  },
];

export const parallelSessionDays = [
  {
    id: 'parallel-day-1',
    label: 'Day 01',
    weekday: 'Thursday',
    date: '23 July 2026',
    time: '14:00-16:30',
    venue: 'Hackathon Center, 3rd Floor, Block 45',
    sessions: [
      {
        number: 1,
        room: 'Seminar Hall 1',
        paperIds: [279, 328, 515, 544, 564, 579, 580, 614, 754, 787],
        chairs: ['Dr. Akshat Agrawal', 'Dr. Rani Astya'],
      },
      {
        number: 2,
        room: 'Lab Hall 1',
        paperIds: [791, 818, 899, 912, 1041, 1316, 1400, 1527, 1529, 1570],
        chairs: ['Dr. Sameer Asthana', 'Dr. Amrit Kumar Agarwal'],
      },
      {
        number: 3,
        room: 'Lab Hall 1',
        paperIds: [1575, 1592, 1601, 1611, 1648, 1739, 1759, 1773, 940, 1818],
        chairs: ['Prof. (Dr.) Mohd Dilshad Ansari', 'Dr. Ravi Prakash Chaturvedi'],
      },
      {
        number: 4,
        room: 'Lab Hall 2',
        paperIds: [184, 551, 692, 718, 1712, 1713, 1748, 1816, 1814, 1815],
        chairs: ['Prof. (Dr.) Nihar Ranjan Roy', 'Dr. Deepthi P. S.'],
      },
      {
        number: 5,
        room: 'Lab Hall 2',
        paperIds: [187, 527, 542, 586, 672, 683, 867, 945, 1018, 1576],
        chairs: ['Dr. Gunjan Mittal Roy', 'Dr. Syed Arshad Ali'],
      },
      {
        number: 6,
        room: 'Lab Hall 3',
        paperIds: [674, 1612, 1653, 158, 469, 652, 772, 1460, 1670, 1760],
        chairs: ['Prof. (Dr.) Arun Prakash Agarwal', 'Prof. (Dr.) Kuldeep Chouhan'],
      },
      {
        number: 7,
        room: 'Lab Hall 3',
        paperIds: [467, 627, 982, 1459, 1503, 1569, 1578, 1687, 1724, 1756],
        chairs: ['Prof. (Dr.) Ganesh Kumar Dixit', 'Prof. (Dr.) Swati Sah'],
      },
      {
        number: 8,
        room: 'Multipurpose Hall 2',
        paperIds: [1605, 261, 489, 601, 704, 731, 733, 866, 1044, 1200],
        chairs: ['Prof. (Dr.) Lalit Kumar', 'Prof. (Dr.) Ajay Shriram Kushwaha'],
      },
      {
        number: 9,
        room: 'Multipurpose Hall 1',
        paperIds: [939, 1006, 1038, 1112, 1205, 1335, 1464, 1561, 1753, 1809],
        chairs: ['Dr. Pramod Kumar Soni', 'Dr. Sreejith S'],
      },
    ],
  },
  {
    id: 'parallel-day-2',
    label: 'Day 02',
    weekday: 'Friday',
    date: '24 July 2026',
    time: '10:30-13:00',
    venue: 'Hackathon Center, 3rd Floor, Block 45',
    sessions: [
      {
        number: 10,
        room: 'Seminar Hall 1',
        paperIds: [574, 900, 931, 992, 1125, 1304, 1528, 1542, 1568, 1657],
        chairs: ['Prof. (Dr.) Vishnu Sharma', 'Dr. Bharat Bhushan'],
      },
      {
        number: 11,
        room: 'Lab Hall 1',
        paperIds: [1771, 1819, 1820, 1821, 1822, 1835, 1192, 1237, 1817, 1694],
        chairs: ['Prof. (Dr.) Nishant Gupta', 'Prof. (Dr.) Parul Khurana'],
      },
      {
        number: 12,
        room: 'Lab Hall 2',
        paperIds: [1802, 1585, 1317, 1614, 1615, 1716, 1393, 1513, 1689, 1598],
        chairs: ['Dr. Pushpendra Singh', 'Dr. Avinash Kumar Sharma'],
      },
      {
        number: 13,
        room: 'Lab Hall 3',
        paperIds: [1224, 266, 920, 986, 1029, 1222, 1062, 777, 1216, 1427],
        chairs: ['Dr. Setu Garg', 'Prof. (Dr.) Anurag Rai'],
      },
      {
        number: 14,
        room: 'Multipurpose Hall 2',
        paperIds: [199, 494, 495, 590, 594, 870, 980, 981, 1667, 1685],
        chairs: ['Prof. (Dr.) Ashish Kumar Chakraverti', 'Dr. Anand Pandey'],
      },
      {
        number: 15,
        room: 'Multipurpose Hall 1',
        paperIds: [1132, 1790, 1791, 847, 925, 1142, 1627, 1023, 1551, 744],
        chairs: ['Dr. Shyam Pratap Singh', 'Prof. (Dr.) Sandeep Gupta'],
      },
    ],
  },
];
