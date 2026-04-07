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


export const createSupplierSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string(),
  address: z.string().max(255),
  contact: z.string(),
})


export const updateSupplierSchema = z.object({
  name: z.string().min(2).optional(),
  email: z.email().optional(),
  phone: z.string().optional(),
  address: z.string().max(255).optional(),
  contact: z.string().optional(),
})
