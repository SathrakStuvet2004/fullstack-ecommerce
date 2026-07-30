import { email, z } from "zod";

export const signupSchema = z.object({

  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(8),

});

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Username or email is required"),
  password: z
    .string()
    .min(1, "Password is required"),
});