import Section from "../layout/Section";
import { siteContent } from "../../data/siteContent";
import hideImage from "../../assets/hide.jpg";

export default function PlaceSection() {
  const { venueName, address } = siteContent.details;

  return (
    <Section id="place" title="Место проведения">
      <div className="details-image-card" aria-hidden="true">
        <img src={hideImage} alt="" loading="lazy" />
      </div>
      <div className="card">
        <p>
          <strong>Площадка:</strong> {venueName}
        </p>
        <p>
            <strong>Адрес:</strong> <a href={'https://yandex.ru/maps/-/CPC748Ow'} target={'_blank'}>{address}</a>
        </p>
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A09aee2ffe464f2a48bad69a654bdc1f62158e3584d55e6575cb63246db794647&amp;source=constructor"
            width="100%" height="300" frameBorder="0"></iframe>
      </div>
    </Section>
  );
}
