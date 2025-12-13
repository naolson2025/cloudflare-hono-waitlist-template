import { it, expect, mock, beforeEach } from "bun:test";
import { insertSubscriber } from "./queries";
import type { D1Database } from "@cloudflare/workers-types";
import type { NewSubscriber } from "./schema";
import { getTestDb } from "../../../test/get-test-db";
import { reset } from "drizzle-seed";
import * as schema from "./schema";

mock.module("./db.ts", () => {
  return {
    getDb: () => getTestDb(),
  };
});

beforeEach(async () => {
  const db = getTestDb();
  await reset(db, schema);
});

it("insert a new subscriber into the database", async () => {
  const newSub: NewSubscriber = { email: "test@test.com" };
  const subscriber = await insertSubscriber({} as D1Database, newSub);
  expect(subscriber.email).toBe(newSub.email);
  expect(subscriber.id).toBeDefined();
  expect(subscriber.createdAt).toBeDefined();
});

it("throws an error when inserting a duplicate email", async () => {
  const newSub: NewSubscriber = { email: "test@test.com" };
  await insertSubscriber({} as D1Database, newSub);
  expect(insertSubscriber({} as D1Database, newSub)).rejects.toThrow();
});

it("throws an error when trying to insert an invalid email", async () => {
  const newSub: NewSubscriber = { email: "test@test" };
  expect(insertSubscriber({} as D1Database, newSub)).rejects.toThrow();
});
