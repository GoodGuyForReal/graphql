import db from "../../db.js";

export function user(args) {
  return db.users.find((user) => user.id === args.id);
}
