import { numeric } from "drizzle-orm/pg-core";
import { timestamp } from "drizzle-orm/pg-core";
import { serial, text } from "drizzle-orm/pg-core";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const productTable = pgTable("products", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    priceInCents: integer("price_in_cents"),

    stock: integer("stock").default(0).notNull(),
    category: text("category").notNull(),

    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at").defaultNow().notNull()
})

export const clientTable = pgTable('clients', {
  id: serial('id').primaryKey(),

  firstName: varchar('first_name', { length: 100 }).notNull(),

  lastName: varchar('last_name', { length: 100 }).notNull(),

  email: varchar('email', { length: 255 }).notNull().unique(),

  phone: varchar('phone', { length: 30 }),

  createdAt: timestamp('created_at').defaultNow().notNull(),

  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});