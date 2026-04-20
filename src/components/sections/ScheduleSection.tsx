import Section from "../layout/Section";
import { siteContent } from "../../data/siteContent";

export default function ScheduleSection() {
  return (
    <Section id="schedule">
      <h2>Программа вечера</h2>
      <div className="timeline" aria-label="Программа вечера">
        {siteContent.timeline.map((item) => (
          <article key={`${item.time}-${item.title}`} className="timeline-item">
            <span className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <p className="timeline-time">{item.time}</p>
              <p className="timeline-title">{item.title}</p>
              {item.description ? (
                <p className="timeline-description">{item.description}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
