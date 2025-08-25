import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { teams } from "./teams";

export const projects = sqliteTable("projects", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  teamId: integer("team_id").notNull().references(() => teams.id),
});
