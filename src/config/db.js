import { db } from "./firebaseConfig";

export const createUserInDb = (id, username, email) => {
  console.log(id);
  return db.ref(`users/${id}`).set({
    username,
    email
  });
};

export const getUserInDb = () => db.ref("users").once("value");
