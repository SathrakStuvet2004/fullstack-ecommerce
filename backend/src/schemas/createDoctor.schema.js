import { z } from "zod";

export const createDoctorSchema = z.object({

  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters"),

  username: z
    .string()
    .trim()
    .min(4, "Username must be at least 4 characters")
    .max(20),

  email: z
    .email("Invalid email address"),

  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Invalid phone number"),

  gender: z.enum(["Male", "Female", "Other"]),

  dateOfBirth: z.string(),

  address: z
    .string()
    .trim()
    .min(5, "Address is required"),

  departmentId: z.number().int().positive(),

  specialization: z
    .string()
    .trim()
    .min(2, "Specialization is required"),

  qualification: z
    .string()
    .trim()
    .min(2, "Qualification is required"),

  experience: z
    .number()
    .min(0),

  consultationFee: z
    .number()
    .positive(),

  licenseNumber: z
    .string()
    .trim()
    .min(5, "License number is required"),

  status: z.enum(["Active", "Inactive"]),
});