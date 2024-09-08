import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCpUA4IrF7y2_3zCvnQMdjHoAeokTlYsdg",
    authDomain: "idyllic-script-414117.firebaseapp.com",
    databaseURL: "https://idyllic-script-414117-default-rtdb.firebaseio.com",
    projectId: "idyllic-script-414117",
    storageBucket: "idyllic-script-414117.appspot.com",
    messagingSenderId: "744621362744",
    appId: "1:744621362744:web:85382b266a2e54ce5e20cd",
    measurementId: "G-WXDPEJDXHQ"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
// Initialize Firebase

// Initialize Firestore
const db = getFirestore(app);

export { db };
