# Local GraphQL Server with Mock Data

This project is a local GraphQL server that provides a set of mock data and CRUD (Create, Read, Update, Delete) functionality for two tables: "users" and "blogs." It's designed to help you get started with GraphQL development and allows you to experiment with queries in Apollo Client.

## Prerequisites

Before you get started with this project, ensure that you have the following prerequisites:

- Node.js: Make sure you have Node.js installed on your system.

## Getting Started

1. Clone the repository to your local machine:
 ```shell
   git clone https://github.com/GoodGuyForReal/graphql.git
   ```

2. Install project dependencies:
 ```shell
   npm install
   ```

3. Start the GraphQL server:
```shell
npm start
```
4. Open a web browser and navigate to http://localhost:4000 to access the GraphQL Playground.

## Project Structure
The project has the following directory structure:

* /actions: Resolver functions
* /queries.js: Some ready to use queries for apollo client
* db.js: Mock data.
* schema.js: GraphQL schema definitions.
* resolvers.js/: Resolver functions imported from action folder for handling queries and mutations.
* index.js: The main entry point for the GraphQL server.
* package.json: Node.js project configuration.

## Available Queries and Mutations
Available Queries and Mutations

Queries:
* users: [User] === Retrieve a list of all users.
* user(id: ID!): User === Retrieve a specific user by their ID.
* blogs: [Blog] === Retrieve a list of all blogs.
*  blog( id: ID! ): Blog === Retrieve a specific blog by its ID.


Mutations:
* addUser(user: AddUserInput!): User === Create a new user.
* addBlog(blog: AddBlogInput!): Blog === Create a new blog.
* deleteUser(id: ID!): [User] === Delete a user by ID.
* deleteBlog(id: ID!): [Blog] === Delete a blog by ID.
* updateUser(id: ID!, update: UpdateUserInput!): User === Update an existing user.
* updateBlog(id: ID!, update: UpdateBlogInput!): Blog === Update an existing blog.

## License
This repo is cretaed under the [MIT License](https://opensource.org/licenses/MIT). Please review the license terms and conditions before using our software.

