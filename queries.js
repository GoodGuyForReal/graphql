// query GetAllBlogsQuery {
//     blogs {
//       id
//       title
//     }
//    }

//    query GetAllUsersQuery {
//     users {
//       id
//       user_name
//     }
//     }

//     query UserQuery($userId: ID!) {
//         user(id: $userId) {
//           user_name
//           email
//           blogs {
//             title
//             desc
//           }
//         }
//       }

//       mutation DeleteBlog ($id:ID!) {
//         deleteBlog(id: $id) {
//           id
//           title
//         }
//       }

//       mutation DeleteUser ($id:ID!) {
//         deleteUser(id: $id) {
//           id
//           user_name
//         }
//       }

// mutation AddBlog($blog: AddBlogInput!) {
//     addBlog(blog: $blog) {
//       author_id
//       category
//       id
//       title
//       desc
//       user {
//         user_name
//         email
//       }
//     }
//   }
// {
//     "blog": {
//       "title": "New agen is good",
//       "desc": "is gonna be new insta lock meta",
//       "category": "Valorant",
//       "author_id": "9c506193-f14b-469f-87fd-44267aa5a4d0",
//     }
//   }
