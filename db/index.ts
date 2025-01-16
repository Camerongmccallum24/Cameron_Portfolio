
import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is required");
}

console.log("Attempting database connection...");
const client = postgres(connectionString);
export const db = drizzle(client);
