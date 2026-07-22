import { email, z } from "zod";

export const signupSchema = z.object({

  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(8),

});

export const loginSchema = z.object({
  email : z.email(),
});