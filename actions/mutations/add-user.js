import db from "../../db.js";
import timestamp from "time-stamp";
import { v4 as uuid4 } from "uuid";

export function addUser(args) {
  let user = {
    ...args.user,
    id: uuid4(),
    timestamp: timestamp("YYYYMMDD"),
  };

  db.users.push(user);
  return user;
}
