import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(4, "სახელი უნდა შედგებოდეს მინიმუმ 4 სიმბოლოსგან.")
    .max(20, "სახელი არ უნდა აღემატებოდეს 20 სიმბოლოს"),
  email: z.string().email("ელ-ფოსტა არასწორია"),
  password: z
    .string()
    .min(8, "პაროლი უნდა შედგებოდეს მინიმუმ 8 სიმბოლოსგან")
    .max(50, "პაროლი არ უნდა აღემატებოდეს 50 სიმბოლოს")
    .regex(/[a-zA-Z]/, "პაროლი უნდა შეიცავდეს მინიმუმ ერთ ლათინურ ასოს")
    .regex(/\d/, "პაროლი უნდა შეიცავდეს მინიმუმ ერთ ციფრს")
    .regex(
      /[!@#$%^&*(),.?":{}|<>]/,
      "პაროლი უნდა შეიცავდეს მინიმუმ ერთ სიმბოლოს. მაგ: .%^&#"
    ),
});
