import { z } from "zod";

export const doctorSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(1, "Name is required")
    .max(100, "Name cannot exceed 100 characters"),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(1, "Email is required")
    .email("Invalid email address"),

  username: z
    .string({ required_error: "Username is required" })
    .trim()
    .min(1, "Username is required")
    .min(3, "Username must be at least 3 characters")
    .max(10, "Username cannot exceed 10 characters")
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "Username can contain only letters, numbers, and underscores"
    ),

phone: z
  .string({
    required_error: "Phone number is required",
  })
  .trim()
  .min(1, "Phone number is required")
  .refine((value) => /^\d+$/.test(value), {
    message: "Phone number must contain only numbers",
  })
  .refine((value) => value.length >= 10 && value.length <= 15, {
    message: "Phone number must be between 10 and 15 digits",
  }),

  gender: z.enum(["Male", "Female", "Other"], {
    required_error: "Gender is required",
  }),

 dob: z
  .string({
    required_error: "Date of birth is required",
  })
  .trim()
  .min(1, "Date of birth is required")
  .regex(
    /^\d{4}-\d{2}-\d{2}$/,
    "Date of birth must be in YYYY-MM-DD format"
  ),

  address: z
    .string({ required_error: "Address is required" })
    .trim()
    .min(1, "Address is required"),

department: z.coerce
  .number({
    required_error: "Department is required",
    invalid_type_error: "Department is required",
  })
  .refine((value) => [1, 2, 3, 4, 5].includes(value), {
    message: "Selected department does not exist",
  }),

  specialization: z
    .string({ required_error: "Specialization is required" })
    .trim()
    .min(1, "Specialization is required")
    .max(100),

  qualification: z
    .string({ required_error: "Qualification is required" })
    .trim()
    .min(1, "Qualification is required")
    .max(150),

  experience: z.coerce
    .number({
      required_error: "Experience is required",
      invalid_type_error: "Experience is required",
    })
    .int("Experience must be a whole number")
    .min(0, "Experience cannot be negative"),

  consultationFee: z.coerce
    .number({
      required_error: "Consultation fee is required",
      invalid_type_error: "Consultation fee is required",
    })
    .positive("Consultation fee must be greater than 0"),

  licenseNumber: z
    .string({ required_error: "License number is required" })
    .trim()
    .min(1, "License number is required")
    .max(100),

  status: z.enum(["Active", "Inactive"], {
    required_error: "Status is required",
  }),
});