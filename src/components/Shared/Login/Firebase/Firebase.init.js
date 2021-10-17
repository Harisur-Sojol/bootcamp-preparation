import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const authInit = () => {

    initializeApp(firebaseConfig);
}

export default authInit;