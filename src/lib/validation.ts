export type RsvpFormData = {
  name: string;
  phoneOrTelegram: string;
  attending: "yes" | "no";
  guestsCount: number;
  dietaryNotes?: string;
  message?: string;
};

export type ValidationResult = {
  valid: boolean;
  errors: Partial<Record<keyof RsvpFormData, string>>;
};

export function validateRsvp(data: RsvpFormData): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Введите имя (минимум 2 символа)";
  }
  if (!data.phoneOrTelegram || data.phoneOrTelegram.trim().length < 5) {
    errors.phoneOrTelegram = "Укажите контакт (минимум 5 символов)";
  }
  if (data.guestsCount < 1 || data.guestsCount > 5) {
    errors.guestsCount = "Количество гостей: от 1 до 5";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
