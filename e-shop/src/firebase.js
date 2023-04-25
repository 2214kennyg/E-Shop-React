// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
    apiKey: "AIzaSyDV1j6eXveQ9xjTyRwN1x4qE0T0TGPiZLo",
    authDomain: "eshop-react-products.firebaseapp.com",
    projectId: "eshop-react-products",
    storageBucket: "eshop-react-products.appspot.com",
    messagingSenderId: "456957237028",
    appId: "1:456957237028:web:9dcae64c9522a1431045b1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
