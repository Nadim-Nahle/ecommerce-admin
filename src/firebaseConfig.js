// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"

const appId = process.env.REACT_APP_ID
const storageBucket = process.env.REACT_APP_BUCKET
const messagingSenderId = process.env.REACT_APP_MESSAGE
const apiKey = process.env.REACT_APP_API_KEY

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "ecommerce-nadim.firebaseapp.com",
  projectId: "ecommerce-nadim",
  storageBucket:storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId
};

// Initialize Firebase
const FIRBASE_APP = initializeApp(firebaseConfig);
// initializeAuth(FIRBASE_APP, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });
export const FIRBASE_AUTH = getAuth(FIRBASE_APP);
export const storage = getStorage(FIRBASE_APP)
