import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const usersTable = sqliteTable("users_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  email: text().notNull(),
  password: text().notNull(),
});

export const teamsTable = sqliteTable("teams_table", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text().notNull(),
});

export const userTeamsTable = sqliteTable("user_teams_table", {
  id: int().primaryKey({ autoIncrement: true }),
  user_id: int()
    .notNull()
    .references(() => usersTable.id),
  team_id: int()
    .notNull()
    .references(() => teamsTable.id),
});

export const ticketsTable = sqliteTable("tickets_table", {
  id: int().primaryKey({ autoIncrement: true }),
  title: text().notNull(),
  summary: text().notNull(),
  inprogress: text().notNull(),
  status: text().notNull(),
  user_id: int()
    .notNull()
    .references(() => usersTable.id),
  team_id: int()
    .notNull()
    .references(() => teamsTable.id),
});

export const commentsTable = sqliteTable("comments_table", {
  id: int().primaryKey({ autoIncrement: true }),
  comment: text().notNull(),
  ticket_id: int()
    .notNull()
    .references(() => ticketsTable.id),
  user_id: int()
    .notNull()
    .references(() => usersTable.id),
  created_at: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
});
