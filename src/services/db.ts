import { initializeApp } from "firebase/app";
import { collection, doc, setDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyB_Sl47MOGq1QY1O5x6_2ilHOVHw8qZhrM",
  authDomain: "projet-react-pokemon.firebaseapp.com",
  projectId: "projet-react-pokemon",
  storageBucket: "projet-react-pokemon.appspot.com",
  messagingSenderId: "177691630731",
  appId: "1:177691630731:web:75d8ec1b948604e4de088e",
  measurementId: "G-N29D4T14PE"
};

const app = initializeApp(firebaseConfig);