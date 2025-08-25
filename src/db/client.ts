import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "./schema/index"; // import everything

// Turso client
const client = createClient({
  url: import.meta.env.LIBSQL_DATABASE_URL!,
});

// Drizzle instance
export const db = drizzle(client, { schema });
