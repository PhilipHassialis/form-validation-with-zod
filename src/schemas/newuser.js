import { z } from "zod";

export const phoneCategories = ["Home", "Work", "Personal", "Other"];
export const initialPhoneType = {phoneType:"", phone:""}
const phoneCategoryEnums = z.enum(phoneCategories);

export const newuser = z
  .object({
    firstName: z.string().min(1, { message: "First name is required" }),
    lastName: z.string().min(4, {
      message: "Last name is required and must be over 4 characters long",
    }),
    email: z.string().email(),
    password: z
      .string()
      .min(5, { message: "Password must be at least 5 characters long" }),
    confirmPassword: z
      .string()
      .min(5, { message: "Password must be at least 5 characters long" }),
    countryOfBirth: z
      .string()
      .min(2, { message: "Country of birth is required" }),
    dateOfBirth: z.date(),
    phones: z
      .object({
        phoneType: phoneCategoryEnums,
        phone: z.string().min(1, "Phone number is required"),
      })
      .array(),
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
