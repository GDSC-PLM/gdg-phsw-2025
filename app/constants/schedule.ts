import { ScheduleItem } from '@/types';

/**
 * Event schedule and agenda
 */

export const SCHEDULE: ScheduleItem[] = [
  {
    id: 'schedule-1',
    time: '12:00 PM – 12:45 PM',
    title: 'Registration and Cloud Check-In',
    description: 'Participants sign in and check in the venue.',
  },
  {
    id: 'schedule-2',
    time: '12:45 PM – 1:00 PM',
    title: 'Opening Countdown and Hype Video',
    description: 'Countdown to the event before the first keynote session.',
  },
  {
    id: 'schedule-3',
    time: '1:20 PM – 1:45 PM',
    title: 'The SaaS Blueprint: Building in the Clouds',
    description: 'Keynote Session 1',
    speaker: 'Jazmine Claire Calma',
  },
  {
    id: 'schedule-4',
    time: '1:45 PM – 2:10 PM',
    title: 'Scaling Heights: The Art of Seamless Growth',
    description: 'Keynote Session 2',
    speaker: 'Sermil Matoto',
  },
  {
    id: 'schedule-5',
    time: '2:10 PM – 2:35 PM',
    title: 'Secured in the Skies: Trust and Safety in SaaS',
    description: 'Keynote Session 3',
  },
  {
    id: 'schedule-6',
    time: '2:35 PM – 2:50 PM',
    title: 'Innovation on Demand: SaaS and the Startup Mindset',
    description: 'Keynote Session 4',
    speaker: 'Shan Sebastian',
  },
  {
    id: 'schedule-7',
    time: '2:50 PM – 3:15 PM',
    title: 'SkyTalks Panel: "Above the Cloud Line"',
    description: 'Joint open forum featuring all speakers. Discussion focuses on career opportunities, startup pathways, and innovations shaping the future of SaaS.',
  },
  {
    id: 'schedule-8',
    time: '3:15 PM – 3:30 PM',
    title: 'Token of Appreciation Ceremony',
    description: 'Awarding of Certificates and Tokens to speakers, sponsors, and partners.',
  },
  {
    id: 'schedule-9',
    time: '3:30 PM – 3:45 PM',
    title: 'Closing Remarks and Flight Home',
    description: 'Closing message from GDGoC PLM Lead emphasizing key takeaways and the power of community and innovation.',
  },
  {
    id: 'schedule-10',
    time: '3:45 PM – 4:00 PM',
    title: 'Networking and Cloud Captures',
    description: 'Free time for attendees to interact with speakers, partners, and GDGoC members. Group photo session.',
  },
];
