import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signOut } from "firebase/auth";
import { app } from "./firebaseHelper";

const auth = getAuth(app);
let user;

if (user) {
  console.log("user is present");
}

const signIn = (email, password) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        user = userCredential.user;
        console.log("admin loggedin");
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("user authentication failed");
        console.log(errorCode, errorMessage);
        reject(error);
      });
  });
};

const signOutCurrentUser = () => {
  signOut(auth)
    .then(() => {
      alert("User Signed Out");
    })
    .catch((error) => console.log(error));
};

export { signIn, signOutCurrentUser, user };
