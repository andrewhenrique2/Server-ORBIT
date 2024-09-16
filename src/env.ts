import { config } from 'dotenv'
import z from 'zod'

config()

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
})

export const env = envSchema.parse(process.env)
