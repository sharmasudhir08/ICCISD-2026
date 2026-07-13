export const detailedScheduleFile = '/schedules/iccisd-2026-detailed-schedule.xlsx';

export const detailedScheduleDays = [
  {
    id: 'detailed-day-1',
    label: 'Day 01',
    weekday: 'Thursday',
    date: '23 July 2026',
    venue: 'Anand Swaroop Auditorium, Block 45, 4th Floor',
    items: [
      {
        time: '09:00-09:45',
        title: 'Registration & Welcome Kit Distribution',
        details: ['Anand Swaroop Auditorium, Block 45, 4th Floor'],
      },
      { type: 'section', title: 'Inaugural ceremony' },
      { time: '09:45-09:50', title: 'Welcome & About the Conference' },
      { time: '09:50-09:55', title: 'Lamp Lighting' },
      {
        time: '09:55-10:00',
        title: 'Felicitation of Guests and Dignitaries after inviting all guests on stage',
      },
      {
        time: '10:00-10:05',
        title: 'Curtain Raiser - Opening Speech by Dr. Rajneesh Kumar Singh, HoD - CSA',
      },
      { time: '10:05-10:10', title: 'Release of Conference Souvenir' },
      {
        time: '10:10-10:15',
        title:
          'Address by Dean Prof. (Dr.) Geetha Ganesan, Conference Chair - ICCISD-2026, SSCSE, Sharda University',
      },
      {
        time: '10:15-10:20',
        title:
          "Address by Vice Chancellor Prof. (Dr.) Parma Nand, Hon'ble Vice Chancellor, Sharda University, Agra",
      },
      {
        time: '10:20-10:25',
        title:
          "Address by Vice Chancellor Prof. (Dr.) Sibaram Khara, Hon'ble Vice Chancellor, Sharda University, Greater Noida",
      },
      { time: '10:25-10:30', title: 'Address by Management' },
      {
        time: '10:30-10:35',
        title: 'Address by Chief Guest - Shri Ashok Gupta, Director STPI & CEO STPI Apiary, Gurugram, Haryana',
      },
      {
        time: '10:35-10:40',
        title: 'Address by Guest of Honour - Dr. Pankaj Kumar Rawat, Scientist E, ANRF',
      },
      {
        time: '10:40-10:45',
        title: 'Address by Guest of Honour - Dr. Pramod Kumar Prasad, Scientist E, ANRF',
      },
      {
        time: '10:45-10:55',
        title:
          'Vote of Thanks by Dr. Sudhir Kumar Sharma, Conference Convener, followed by the National Anthem',
      },
      {
        time: '10:55-11:30',
        title: 'Tea Break & Networking',
        details: ['Guests, Organizing Team & Participants'],
        type: 'break',
      },
      {
        time: '11:30-12:00',
        title: 'Keynote I',
        speaker: 'Paulina Muszyńska',
        details: [
          'Head of Development Projects Department',
          'Wrocław Agglomeration Development Agency, Poland',
          'Head of Startup Wrocław | Chief Ecosystem Officer',
          'Startup Ecosystem Strategist | Women in Tech Advocate',
        ],
        type: 'keynote',
      },
      {
        time: '12:00-12:30',
        title: 'Keynote II',
        speaker: 'Shri Akash Takyar',
        details: ['Founder and CEO, LeewayHertz'],
        type: 'keynote',
      },
      {
        time: '12:30-13:00',
        title: 'Keynote III',
        speaker: 'Dr. Ankit Agrawal',
        details: ['Research Professor, Department of ECE, Northwestern University, USA'],
        type: 'keynote',
      },
      {
        time: '13:00-13:45',
        title: 'Networking Lunch',
        details: ['Anand Swaroop Auditorium, Block 45'],
        type: 'break',
      },
      {
        time: '13:45-16:30',
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
    venue: 'Anand Swaroop Auditorium, Block 45, 3rd Floor',
    items: [
      { time: '09:00-09:30', title: 'Registration & Welcome Kit Distribution' },
      { time: '09:30-10:30', title: 'Panel Discussion', details: ['Online'] },
      {
        time: '10:30-13:00',
        title: 'Technical Sessions (Track I to VII)',
        details: ['Paper presentations as per the presentation schedule'],
        type: 'session',
      },
      { time: '13:00-14:00', title: 'Networking Lunch', type: 'break' },
      {
        time: '14:00-14:30',
        title: 'Keynote IV',
        speaker: 'Dr. Yash Chawla',
        type: 'keynote',
      },
      { time: '14:30-15:10', title: 'Valedictory Session', details: ['Conference summary'] },
      { time: '15:10-15:15', title: 'Vote of Thanks by Co-Convener' },
      {
        time: '15:15-15:20',
        title: 'High Tea & Networking',
        details: ['Guests, Organizing Team & Participants'],
        type: 'break',
      },
    ],
  },
];
