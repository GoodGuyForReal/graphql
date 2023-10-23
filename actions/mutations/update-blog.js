import db from "../../db.js";

export function updateBlog(args) {
  const selectedBlog = db.blogs.find((blog) => blog.id === args.id);
  console.log(selectedBlog)
  if (selectedBlog) {
    return { ...selectedBlog, ...args.update };
  }
  return selectedBlog;
}
