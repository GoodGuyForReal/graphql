import db from "../../db.js";

export function deletedUser(args) {
  const selectedUser = db.users.find((r) => r.id === args.id);
  if (!selectedUser) throw Error(`User with ID ${args.id} not found`);

  const relatedBlogs = db.blogs.filter((r) => r.author_id === selectedUser.id);
  console.log("relatedBlogs", relatedBlogs);
  const deletedUser = db.users.filter((r) => r.id !== args.id);
  const deletedUserBlogs = db.blogs.filter((r) => r.author_id !== args.id);
  console.log("deletedUserBlogs", deletedUserBlogs);
  return deletedUser;
}
