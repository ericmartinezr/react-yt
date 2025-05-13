import 'dotenv/config';
import { drizzle } from 'drizzle-orm/mysql2';
import { eq } from 'drizzle-orm';
import mysql from 'mysql2/promise';
import { subsTable, videosTable } from './schema';

const poolConnection = mysql.createPool({
  host: process.env.SQL_HOST,
  port: Number(process.env.SQL_PORT),
  user: process.env.SQL_USER,
  password: process.env.SQL_PWD,
  database: process.env.SQL_DB,
});
const db = drizzle({ client: poolConnection });

export async function getSubscriptions() {
  return await db.select().from(subsTable);
}

export async function getVideos() {
  return await db.select().from(videosTable);
}

export async function getVideoById(videoId: number) {
  return await db.select().from(videosTable).where(eq(videosTable.id, videoId));
}

export async function getVideosByChannelName(channelName: string) {
  return await db
    .select()
    .from(videosTable)
    .where(eq(videosTable.channelName, channelName));
}

export async function incrementViewers() {}
