import db from "../../db.js";

export function deleteBlog(args) {
  return db.blogs.filter((r) => r.id !== args.id);
}
