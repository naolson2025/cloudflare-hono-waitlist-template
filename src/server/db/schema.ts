import { sqliteTable, text, integer, check } from "drizzle-orm/sqlite-core";
import { sql } from "drizzle-orm";

export const subscribers = sqliteTable("subscribers", {
  id: integer("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(new Date()),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(new Date()),
  trafficSource: text("traffic_source"),
  device: text("device"),
  emailVerified: integer("email_verified", { mode: "timestamp" }),
  unsubscribed: integer("unsubscribed", { mode: "timestamp" }),
  confirmationToken: text("confirmation_token"),
}, (table) => [
  check('email', sql`${table.email} LIKE '%@%.%'`)
]);

export type NewSubscriber = typeof subscribers.$inferInsert