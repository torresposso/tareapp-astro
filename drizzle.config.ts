import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema/index.ts", // where all tables/relations are exported
  out: "./src/db/migrations",                   // migrations folder
  dialect: "turso",
  dbCredentials: {
    url: process.env.LIBSQL_DATABASE_URL!,
  },
  verbose: true,
  strict: true,
} satisfies Config;
