import { app } from "./firebaseHelper";
import { getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export { db };
