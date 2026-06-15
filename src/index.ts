import 'dotenv/config';
import { drizzle } from 'drizzle-orm/neon-http';

console.log("DATABASE URL from index.ts : ", process.env.DATABASE_URL)

export const db = drizzle(process.env.DATABASE_URL!);
