import db from "../../db.js";

export function blog(args) {
  return db.blogs.find((blog) => blog.id === args.id);
}
