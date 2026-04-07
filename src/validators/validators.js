import { z } from 'zod'


export const registerSchema = z.object({
  name: z.string().min(2).trim(),
  email: z.string().email(),
  password: z.string().min(8).trim(),
  role: z.enum(['client', 'admin']).default('client').optional(),
})

export const loginSchema = z.object({
  email: z.email(),
  password: z.string()
})
