import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Configura la información de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBfWrydIPWRGSE2MLaA86SIb1zQwlIlN_w",
  authDomain: "proyectocoder-a60ff.firebaseapp.com",
  projectId: "proyectocoder-a60ff",
  storageBucket: "proyectocoder-a60ff.appspot.com",
  messagingSenderId: "608657119804",
  appId: "1:608657119804:web:74ac72687d90c520aec139"
};

// Inicializa Firebase con la configuración
const app = initializeApp(firebaseConfig);

// Obtiene una instancia de Firestore
const db = getFirestore(app);

export { db };




