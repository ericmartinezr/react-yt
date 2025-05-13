import {
  mysqlTable,
  int,
  varchar,
  boolean,
  serial,
} from 'drizzle-orm/mysql-core';

export const videosTable = mysqlTable('videos', {
  id: serial('id').primaryKey(), // AUTO_INCREMENT PRIMARY KEY
  title: varchar('title', { length: 255 }).notNull(),
  channelName: varchar('channelName', { length: 255 }).notNull(),
  viewersNum: int('viewersNum').notNull(),
  live: boolean('live').notNull(),
  src: varchar('src', { length: 255 }).notNull(),
});

export const subsTable = mysqlTable('subscriptions', {
  id: serial('id').primaryKey(),
  channelName: varchar('channelName', { length: 255 }).notNull(),
});
