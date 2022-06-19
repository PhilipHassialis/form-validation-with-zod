import { z } from "zod";

export const newuser = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(8),
    email: z.string().email(),
    password: z.string().min(5),
    confirmPassword: z.string().min(5),
    country: z.string().min(2, { message: "Country is required" }),
    dateOfBirth: z.date(),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password and Confirm Password must match",
        path: ["password"],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password and Confirm Password must match",
        path: ["confirmPassword"],
      });
    }
  });
