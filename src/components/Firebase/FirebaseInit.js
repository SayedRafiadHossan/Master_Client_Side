import { initializeApp } from "firebase/app";
import firebaseConfig from "./FIrebaseConfig";

const firebaseAuthentication = () => {
  initializeApp(firebaseConfig);
};
export default firebaseAuthentication;
