import { defineConfig } from 'drizzle-kit'
import { env } from './src/env'

export default defineConfig({
  schema: './src/db/schema.ts', // Verifique se este caminho está correto
  out: './.migrations', // O diretório onde as migrações estão sendo geradas
  dialect: 'postgresql', // Ou 'pg', tente ambas as opções
  dbCredentials: {
    url: env.DATABASE_URL,
  },
})
