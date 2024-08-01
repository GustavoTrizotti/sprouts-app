import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid e-mail address!"),
  password: z.string().min(1, "Password must be 4 characters long!"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
