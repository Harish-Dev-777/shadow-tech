"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function submitContactForm(formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const validated = contactSchema.safeParse(rawData);

  if (!validated.success) {
    return {
      success: false,
      error: validated.error.errors[0].message,
    };
  }

  // Simulated backend delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  console.log("Form Submission Received:", validated.data);

  // In a real app, you would save to database here
  // e.g., await db.contacts.create({ data: validated.data })

  return {
    success: true,
    message: "Your message has been received! Our team will reach out soon.",
  };
}
