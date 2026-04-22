import Section from "../layout/Section";
import { siteContent } from "../../data/siteContent";
import WeddingWeek from "../../shared/calendar/WeddingWeek";

export default function StorySection() {
  return (
    <Section id="story" title={siteContent.story.title}>
        <article className="card">
            <p>{siteContent.story.text}</p>
        </article>
       <WeddingWeek
        weddingDate="2026-08-15"   // автоматом покажет неделю с 17 по 23 августа
        highlightColor="#d4a3a6"   // опционально
        accentColor="#b89c8f"      // опционально
        />
    </Section>
  );
}
