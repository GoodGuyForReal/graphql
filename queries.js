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
// Variables
// {
//     "blog": {
//       "title": "New agen is good",
//       "desc": "is gonna be new insta lock meta",
//       "category": "Valorant",
//       "author_id": "9c506193-f14b-469f-87fd-44267aa5a4d0",
//     }
//   }


// mutation AddUser($user: AddUserInput!) {
//     addUser(user: $user) {
//       id
//       email
//       user_name
//       bio
//       timestamp
//       banner
//       avatar
//     }
//        }
// Variables
//        {
//         "user": {
//           "email": "carter@gmail.com",
//           "user_name": "Carter",
//           "bio": "LAPD rush hour officer",
//           "avatar": null,
//           "banner": null,
//         }
//       }


// mutation UpdateBlog($id: ID!, $update: UpdateBlogInput!) {
//     updateBlog(id: $id, update: $update) {
//       id
//       title
//       desc
//       category
//       timestamp
//       author_id
//     }
//   }
// Variables
//   {  
//     "update": {
//       "title": "GraphQl Updated function",
//       "desc":"how to add update function to graph QL",
//       "category": "Programming"
//     },
//     "id": "b383c2e5-2c5d-4398-a0e3-4e22e779d198"
//   }


// mutation UpdateUser($id: ID!, $updateUser: UpdateUserInput!) {
//     updateUser(id: $id, update: $updateUser) {
//       id
//       email
//       user_name
//       bio
//       avatar
//       banner
//       timestamp
//     }
//    }
// Variables
//    {
//     "updateUser": {
//       "user_name": "GoodGuyForReal",
//       "bio": "I love writing code"
//     },
//     "id": "c7859b86-ac22-43a5-9a11-629a32cc7d5a"
//   }