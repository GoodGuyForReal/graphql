export const typeDefs = `#graphql

  type  Blog {
    id: ID
    timestamp: String
    title: String
    desc: String
    category: String
    author_id: String
    user: User!
   }

type User {
    id: ID
    email: String
    user_name: String
    bio: String
    avatar: String
    timestamp: String
    banner: String
    blogs: [Blog!]
}

  type Query {
    blogs: [Blog]
    blog( id: ID! ): Blog
    users: [User]
    user( id: ID! ): User
  }


type Mutation {
  deleteBlog( id: ID! ): [Blog] 
  deleteUser( id: ID! ): [User] 
}

`;
