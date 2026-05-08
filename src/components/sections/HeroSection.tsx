import Section from "../layout/Section";
import { siteContent } from "../../data/siteContent";

export default function HeroSection() {
  const { bride, groom, weddingDate, city } = siteContent.couple;

  return (
    <Section id="main">
      <div className="main">
        <h1 className="muted">
            {bride}
            <div>&</div>
            {groom}
        </h1>
        <p className="muted">
          {weddingDate} · {city}
        </p>
      </div>
    </Section>
  );
}
