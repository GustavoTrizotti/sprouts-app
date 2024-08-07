import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Invalid e-mail address!"),
  password: z.string().min(1, "Password is required!"),
});

export type SignInSchema = z.infer<typeof signInSchema>;
