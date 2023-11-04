// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCK-152ZfXnyXJXil_LR0YqXU3j6IbQUXs",
  authDomain: "ecommerce-nadim.firebaseapp.com",
  projectId: "ecommerce-nadim",
  storageBucket: "ecommerce-nadim.appspot.com",
  messagingSenderId: "91104786042",
  appId: "1:91104786042:web:27296d7c327a15b1c42dc3"
};

// Initialize Firebase
const FIRBASE_APP = initializeApp(firebaseConfig);
// initializeAuth(FIRBASE_APP, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });
export const FIRBASE_AUTH = getAuth(FIRBASE_APP);