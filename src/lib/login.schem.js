import * as z from "zod";
 export const Loginscheme = z.object({
    email:z.string().nonempty("this faild is required").email('not valid email'),
    password: z.string()
      .nonempty("this field is required")
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number"),
 })