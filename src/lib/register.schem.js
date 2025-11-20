import * as z from "zod";
 export const Rgisterscheme = z.object({
    name:z.string().nonempty("this faild is required").min(2,"min lenght is 2 char").max(10,"max length is 10 char"),
    email:z.string().nonempty("this faild is required").email('not valid email'),
password: z.string()
  .nonempty("this field is required")
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number"),   
   rePassword:z.string(),
    gender:z.enum(['male','female']),
    dateOfBirth:z.coerce.string().nonempty("this faild is required")
 }).refine((data)=>
    data.password===data.rePassword,{path:['rePassword'],message:'not the same'})