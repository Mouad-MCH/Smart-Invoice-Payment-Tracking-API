import { z } from 'zod'


export const facturesSchema = z.object({
    amount: z.number().positive().min(0.01, "amount must be gt 0"),
    dueDate: z.coerce.date(),
    supplierId: z.string().min(24, "Id must be equale 24")
})
