import * as z from "zod"

export const userAuthSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
})
