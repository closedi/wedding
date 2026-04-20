import type { RsvpFormData } from "./validation";

export async function submitRsvp(payload: RsvpFormData): Promise<void> {
  const endpoint = import.meta.env.VITE_RSVP_ENDPOINT;

  if (!endpoint) {
    throw new Error("Missing VITE_RSVP_ENDPOINT");
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("RSVP submit failed");
  }
}
