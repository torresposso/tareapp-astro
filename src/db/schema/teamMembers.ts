import { sqliteTable, integer } from "drizzle-orm/sqlite-core";
import { users } from "./users";
import { teams } from "./teams";

export const teamMembers = sqliteTable("team_members", {
  userId: integer("user_id").notNull().references(() => users.id),
  teamId: integer("team_id").notNull().references(() => teams.id),
});
