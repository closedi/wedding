import Section from "../layout/Section";
import { siteContent } from "../../data/siteContent";

export default function ContactsSection() {
  const { coordinatorName, coordinatorPhone, headPhone, headName } = siteContent.contacts;

  return (
    <Section id="contacts" title="Полезные контакты">
      <div className="card">
          <p>
              По всем организационным вопросам до и во время свадьбы вы можете обращаться к нашему организатору:<br/>
              <strong>{coordinatorName}</strong> {coordinatorPhone}
          </p>
          <p>
              Если у вас есть идея творческого номера или выступления на свадебном торжестве, не стесняйтесь обращаться к нашему ведущему:<br/>
              <strong>{headName}</strong> {headPhone}
          </p>
      </div>
    </Section>
  );
}
