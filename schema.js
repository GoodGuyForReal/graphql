export const typeDefs = `#graphql

  type  Blog {
    id: ID
    timestamp: String
    title: String
    desc: String
    category: String
    author_id: String
   }

type User {
    id: ID
    email: String
    user_name: String
    bio: String
    avatar: String
    timestamp: String
    banner: String
}

  type Query {
    blogs: [Blog]
    users: [User]
  }
`