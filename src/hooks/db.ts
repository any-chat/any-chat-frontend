import Dexie from "dexie";

import type { Table } from "dexie";
import type { ISession } from "./sessions";

export class SessionDexie extends Dexie {
  session!: Table<ISession>;

  constructor() {
    super("chatgpt-database");
    this.version(1).stores({
      session: "++id, updateTime",
    });
  }
}

export const db = new SessionDexie();
