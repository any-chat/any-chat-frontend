import { createSignal } from "solid-js";
import { liveQuery } from "dexie";
import { db } from "./db";

/**
 * 对话
 */
export interface Chat {
  type: "assistant" | "user" | "system";
  content: string;
  time: number;
}

/**
 * 会话
 */
export type ISession = {
  id: number;
  updateTime: number;
  chats: Chat[];
};

/**
 * 获取所有会话
 */
export function getAllSessions() {
  const [sessions, setSessions] = createSignal([] as ISession[]);
  liveQuery(() => db.session.reverse().toArray()).subscribe(setSessions);
  return sessions;
}

/**
 * 创建新会话
 */
export async function createNewSession() {
  const session = new Session();
  const id = db.session.add({
    id: session.id,
    updateTime: session.updateTime,
    chats: session.chats,
  });
  return { id, session };
}

export function deleteSession(id: number) {
  db.session.delete(id);
}

/**
 * 会话类
 */
export class Session {
  public id: number;
  public updateTime: number;
  public chats: Chat[];

  constructor(id?: number, updateTime?: number, chats?: Chat[]) {
    this.id = id || Date.now();
    this.updateTime = updateTime || Date.now();
    this.chats = chats || [];
  }
}
