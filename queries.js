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
