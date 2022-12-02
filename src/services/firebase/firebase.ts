import { initializeApp } from "firebase/app";
import { getAuth, } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsaLVivHac90DwmXn4vEJDF-7SGmn3z_8",
  authDomain: "mhduongtest2.firebaseapp.com",
  databaseURL: "https://mhduongtest2-default-rtdb.firebaseio.com",
  projectId: "mhduongtest2",
  storageBucket: "mhduongtest2.appspot.com",
  messagingSenderId: "437403138778",
  appId: "1:437403138778:web:ce51bd5df0975d405bc3e3",
  measurementId: "G-D0438N1DQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth();
export {auth}
