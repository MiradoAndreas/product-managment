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