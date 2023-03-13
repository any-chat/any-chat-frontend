import Dexie from "dexie";

import type { Table } from "dexie";
import type { ISession } from "./sessions";

const DB_NAME = 'anychat-database'
const DB_VERISON = 1

export class AnyChatDexie extends Dexie {
  session!: Table<ISession>;

  constructor() {
    super(DB_NAME);
    this.version(DB_VERISON).stores({
      session: "++id, updateTime",
    });
  }
}

export const db = new AnyChatDexie();
