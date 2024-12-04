import { z } from "zod";

export const messageSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be 100 characters or fewer" }),
  email: z
    .string()
    .email({ message: "Invalid email address" }),
  phone_number: z
    .string()
    .regex(/^\d{10,15}$/, { message: "Phone number must be between 10 and 15 digits" })
    .optional(),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(500, { message: "Message must be 500 characters or fewer" }),
});