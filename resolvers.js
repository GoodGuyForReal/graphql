import db from "./db.js";
import { deleteBlog } from "./actions/mutations/delete-blog.js";
import { deletedUser } from "./actions/mutations/delete-user.js";
import { addBlog } from "./actions/mutations/add-blog.js";
import { user } from "./actions/Query/user.js";
import { blog } from "./actions/Query/blog.js";

export const resolvers = {
  Query: {
    users: () => db.users,
    blogs: () => db.blogs,
    user: (_, args) => user(args),
    blog: (_, args) => blog(args),
  },
  User: {
    blogs: (parent) => db.blogs.filter((r) => r.author_id === parent.id),
  },
  Blog: {
    user: (parent) => db.users.find((r) => r.id === parent.author_id),
  },
  Mutation: {
    deleteBlog: (_, args) => deleteBlog(args),
    deleteUser: (_, args) => deletedUser(args),
    addBlog: (_, args) => addBlog(args),
  },
};
