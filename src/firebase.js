
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAl1HnYwl2eInP_UnHeX6TZTT_85GEw9gc",
  authDomain: "disneyplus-clone-5b601.firebaseapp.com",
  projectId: "disneyplus-clone-5b601",
  storageBucket: "disneyplus-clone-5b601.appspot.com",
  messagingSenderId: "393022117161",
  appId: "1:393022117161:web:da3146b09267a645a7d338",
  measurementId: "G-T12SEJ4QNV",
//   databaseURL: "https://DATABASE_NAME.firebaseio.com",
};


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
