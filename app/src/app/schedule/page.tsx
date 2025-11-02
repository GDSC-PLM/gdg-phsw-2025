import type { Metadata } from 'next';
import { EVENT_DETAILS, SCHEDULE } from '@/constants';

export const metadata: Metadata = {
  title: 'Schedule | SaaSified and Amplified 2025',
  description: 'Event schedule and agenda for SaaSified and Amplified 2025',
};

export default function SchedulePage() {
  return (
    <div className="schedule-page">
      <section className="page-header">
        <h1>Event Schedule</h1>
        <p>{EVENT_DETAILS.date} | {EVENT_DETAILS.time}</p>
        <p>{EVENT_DETAILS.venue}</p>
      </section>

      <section className="schedule-timeline">
        {SCHEDULE.map((item) => (
          <article key={item.id} className="schedule-item">
            <div className="schedule-time">
              <span>{item.time}</span>
            </div>
            <div className="schedule-details">
              <h3>{item.title}</h3>
              {item.description && <p>{item.description}</p>}
              {item.speaker && (
                <p className="schedule-speaker">
                  <strong>Speaker:</strong> {item.speaker}
                </p>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
