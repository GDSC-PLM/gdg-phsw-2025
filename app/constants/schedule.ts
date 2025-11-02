import { ScheduleItem } from '@/types';

/**
 * Event schedule and agenda
 */

export const SCHEDULE: ScheduleItem[] = [
  {
    id: 'schedule-1',
    time: '12:00 PM - 12:30 PM',
    title: 'Registration and Welcome',
    description: 'Check-in and networking with fellow attendees',
  },
  {
    id: 'schedule-2',
    time: '12:30 PM - 12:45 PM',
    title: 'Opening Remarks',
    description: 'Welcome address by GDGoC PLM organizers',
  },
  {
    id: 'schedule-3',
    time: '12:45 PM - 1:30 PM',
    title: 'The SaaS Blueprint: Building in the Clouds',
    description: 'Keynote Session 1',
    speaker: 'Jazmine Claire Calma',
  },
  {
    id: 'schedule-4',
    time: '1:30 PM - 2:15 PM',
    title: 'Scaling Heights: The Art of Seamless Growth',
    description: 'Keynote Session 2',
    speaker: 'Sermil Matoto',
  },
  {
    id: 'schedule-5',
    time: '2:15 PM - 2:30 PM',
    title: 'Break',
    description: 'Refreshments and networking',
  },
  {
    id: 'schedule-6',
    time: '2:30 PM - 3:15 PM',
    title: 'Innovation on Demand: SaaS and the Startup Mindset',
    description: 'Keynote Session 3',
    speaker: 'Shan Sebastian',
  },
  {
    id: 'schedule-7',
    time: '3:15 PM - 3:45 PM',
    title: 'Panel Discussion & Q&A',
    description: 'Open discussion with all speakers',
  },
  {
    id: 'schedule-8',
    time: '3:45 PM - 4:00 PM',
    title: 'Closing Remarks',
    description: 'Thank you and next steps',
  },
];
