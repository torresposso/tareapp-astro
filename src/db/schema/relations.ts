import { relations } from "drizzle-orm";
import { users } from "./users";
import { teams } from "./teams";
import { teamMembers } from "./teamMembers";
import { projects } from "./projects";
import { tasks } from "./tasks";

// Users
export const usersRelations = relations(users, ({ many }) => ({
  memberships: many(teamMembers),
  tasks: many(tasks),
}));

// Teams
export const teamsRelations = relations(teams, ({ many }) => ({
  members: many(teamMembers),
  projects: many(projects),
}));

// TeamMembers
export const teamMembersRelations = relations(teamMembers, ({ one }) => ({
  user: one(users, {
    fields: [teamMembers.userId],
    references: [users.id],
  }),
  team: one(teams, {
    fields: [teamMembers.teamId],
    references: [teams.id],
  }),
}));

// Projects
export const projectsRelations = relations(projects, ({ one, many }) => ({
  team: one(teams, {
    fields: [projects.teamId],
    references: [teams.id],
  }),
  tasks: many(tasks),
}));

// Tasks
export const tasksRelations = relations(tasks, ({ one }) => ({
  project: one(projects, {
    fields: [tasks.projectId],
    references: [projects.id],
  }),
  assignee: one(users, {
    fields: [tasks.assignedTo],
    references: [users.id],
  }),
}));
