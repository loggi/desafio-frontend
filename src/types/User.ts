import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  username: z.string(),
  email: z.string(),
  password: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  role: z.string(),
  address: z.string(),
  phone: z.string(),
  cpf: z.string().max(11),
});

export type User = z.infer<typeof userSchema>;
