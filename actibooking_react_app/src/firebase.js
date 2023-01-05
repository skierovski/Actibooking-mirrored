// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBKFDTcW4WWLqsODCYDNhabMX_RIWlRgIE",
  authDomain: "actibooking.firebaseapp.com",
  projectId: "actibooking",
  storageBucket: "actibooking.appspot.com",
  messagingSenderId: "337470745858",
  appId: "1:337470745858:web:001f5873e542c75eb6a61b",
  measurementId: "G-ENHK5C7VEE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)