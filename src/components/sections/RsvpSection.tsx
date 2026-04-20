import { FormEvent, useState } from "react";
import Section from "../layout/Section";
import { submitRsvp } from "../../lib/rsvpApi";
import { RsvpFormData, validateRsvp } from "../../lib/validation";
import NativeDialog from '../../shared/NativeDialog';

const initialForm: RsvpFormData = {
  name: "",
  phoneOrTelegram: "",
  attending: "yes",
  guestsCount: 1,
  dietaryNotes: "",
  message: "",
};

export default function RsvpSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<RsvpFormData>(initialForm);
  const [errors, setErrors] = useState<
    Partial<Record<keyof RsvpFormData, string>>
  >({});
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = validateRsvp(form);
    setErrors(result.errors);

    if (!result.valid) {
      setStatus("Проверьте поля формы.");
      return;
    }

    try {
      setSubmitting(true);
      await submitRsvp(form);
      setStatus("Спасибо! Мы получили ваш ответ.");
      setForm(initialForm);
    } catch {
      setStatus("Не удалось отправить RSVP. Попробуйте позже.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
      <Section id="rsvp" title="Анкета гостя">
        <article className="card">
          <p>Пожалуйста, заполните анкету до 15.05.2026.</p>
          <p>Это поможет нам лучше спланировать этот день и учесть ваши пожелания.</p>
          <button className="form-button" onClick={() => setIsOpen(true)} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            Заполнить
          </button>
        </article>

        <NativeDialog
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
        >
          <div className="iframe-wrapper">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSduRGajq7faJtd_hBHtvrhMAuOWFXh6gZ-5xb-TJLPNJN-qTw/viewform?embedded=true"
                width="100%" height="983" frameBorder="0" marginHeight="0" marginWidth="0">Загрузка…
            </iframe>
          </div>
        </NativeDialog>
      </Section>
  );
}
