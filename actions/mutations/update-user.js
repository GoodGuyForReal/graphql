import db from "../../db.js";

export function updateUser(args) {
  const selectedUser = db.users.find((user) => user.id === args.id);
  console.log(selectedUser)
  if (selectedUser) {
    return { ...selectedUser, ...args.update };
  }
  return selectedUser;
}
