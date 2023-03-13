/** chat type */
export type Chat = {
  type: "assistant" | "user" | "system";
  content: string;
  time: number;
}