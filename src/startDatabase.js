//Importar funciones de firebase
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';


//Obtiene la llave de la base de datos
const firebaseApp = initializeApp({
  apiKey: "AIzaSyAbB5YTMV3gkN-VvegI39ogGyeJBo0Ng5I",
  authDomain: "school-5aab5.firebaseapp.com",
  projectId: "school-5aab5"
});

const db = getFirestore(firebaseApp);

const consulta = query(collection(db, 'school'));

export let queryData = await getDocs(consulta)
.catch(e => console.log(e));