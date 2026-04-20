import Section from "../layout/Section";
import { siteContent } from "../../data/siteContent";

export default function StorySection() {
  return (
    <Section id="story" title={siteContent.story.title}>
        <article className="card">
            <p>{siteContent.story.text}</p>
        </article>
    </Section>
  );
}
