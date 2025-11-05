import { EventDetails, ExternalLink } from '@/types';

/**
 * Event details and configuration
 */

export const EVENT_DETAILS: EventDetails = {
  name: 'SaaSified and Amplified: Ascending Software to the Sky',
  theme: 'Scaling Filipino Innovation: Start Local, Go Global!',
  tagline: 'In collaboration with Philippine Startup Week 2025',
  date: 'November 13, 2025',
  time: '12:00 PM – 4:00 PM',
  venue: 'Bukod Tanging Bulwagan, Pamantasan ng Lungsod ng Maynila (PLM), Intramuros, Manila',
  format: 'Onsite Keynote Talk',
  audience: '100–150 PLM students',
};

export const EVENT_DATE = new Date('2025-11-13T12:00:00+08:00'); // Philippine Time

export const REGISTRATION_LINK: ExternalLink = {
  url: 'https://bit.ly/phsw25-SaasifiedandAmplified',
  label: 'Register Now',
  openInNewTab: true,
};

export const ABOUT_EVENT = {
  description: `"SaaSified and Amplified: Ascending Software to the Sky" is a flagship keynote event by GDGoC PLM, held in collaboration with Philippine Startup Week 2025, celebrating Filipino innovation in the digital age.

The event will dive into the world of Software as a Service (SaaS) — exploring how cloud-based software drives innovation, efficiency, and entrepreneurship. Industry experts and SaaS innovators will discuss key topics such as:`,
  topics: [
    'SaaS fundamentals and cloud architecture',
    'Scalability and flexibility in modern software',
    'Security, reliability, and data protection',
    'SaaS-driven entrepreneurship and digital transformation',
  ],
  objectives: [
    'Equip PLM students with insights on SaaS innovation and its real-world applications.',
    'Connect students with industry professionals and startup founders.',
    'Promote awareness of cloud-driven entrepreneurship within the academic community.',
    'Strengthen collaboration between academia and industry through shared learning and engagement.',
  ],
};

export const ABOUT_GDGOC = {
  name: 'Google Developer Groups on Campus – Pamantasan ng Lungsod ng Maynila (GDGoC PLM)',
  description: `GDGoC PLM is a student-led community that aims to build great solutions, transform communities, and connect Haribons through technology.

As part of the global Google Developer network, we continue to nurture future developers and innovators by bridging learning, collaboration, and community impact.`,
};

export const PARTNERSHIP_INFO = {
  benefits: [
    'Gain brand exposure among student participants from PLM.',
    'Be featured in official event materials (posters, slides, and acknowledgments).',
    "Receive promotion across GDGoC PLM's social media platforms and communication channels.",
    'Connect directly with students passionate about technology, SaaS, and innovation.',
    'Contribute to nationwide startup advocacy through Philippine Startup Week 2025.',
  ],
  inKindNote: 'We also welcome in-kind sponsorships such as company merchandise, giveaways, or learning resources to be distributed to attendees.',
};
