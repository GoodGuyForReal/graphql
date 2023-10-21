import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import db from "./db.js";
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    users: () => db.users,
    blogs: () => db.blogs,
    user: (_, args) => db.users.find((user) => user.id === args.id),
    blog: (_, args) => db.blogs.find((blog) => blog.id === args.id),
  },
  User: {
    blogs: (parent) => db.blogs.filter((r) => r.author_id === parent.id),
  },
  Blog: {
    user: (parent) => db.users.find((r) => r.id === parent.author_id),
  },
  Mutation: {
    deleteBlog: (_, args) => db.blogs.filter((r) => r.id !== args.id),
    deleteUser: (_, args) => db.users.filter((r) => r.id !== args.id),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
