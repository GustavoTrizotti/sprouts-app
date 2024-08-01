import { z } from "zod";

export const registerAccountSchema = z.object({
  name: z.string(),
  email: z.string().email("Invalid e-mail address!"),
  password: z.string().min(1, "Password must be 4 characters long!"),
});

export type RegisterAccountSchema = z.infer<typeof registerAccountSchema>;
