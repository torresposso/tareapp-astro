import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
import { projects } from "./projects";
import { users } from "./users";

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  status: text("status").default("pending").notNull(),
  projectId: integer("project_id").notNull().references(() => projects.id),
  assignedTo: integer("assigned_to").references(() => users.id),
});
