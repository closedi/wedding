import Section from "../layout/Section";
import { siteContent } from "../../data/siteContent";

export default function FaqSection() {
  return (
    <Section id="faq" title="Вопросы и ответы">
      <div className="grid">
        {siteContent.faq.map((item) => (
          <article key={item.question} className="card">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
