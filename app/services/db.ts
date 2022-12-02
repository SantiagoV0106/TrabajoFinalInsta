import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";



const firebaseConfig = {
    apiKey: "AIzaSyDuNgLBpAvPOeZ8GW1q9dOXSCqTLBdeIPo",
    authDomain: "insta-final-e42f1.firebaseapp.com",
    projectId: "insta-final-e42f1",
    storageBucket: "insta-final-e42f1.appspot.com",
    messagingSenderId: "835420421402",
    appId: "1:835420421402:web:5c037dab8b934423e700a3"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const usersRef = collection(db,"usuarios");

export const queryUser = async ({ email, password }: { email: string; password: string; }) => {

    try {
        const q = query(usersRef, where("email", "==", email), where("password","==", password));
        const querySnapshot = await getDocs(q);

        querySnapshot.forEach((doc:any) => {
            console.log(doc.id,"=>",doc.data());
        });

        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
}

export const addUser = async ({ email, password }: { email: string; password: string; }) => {
    
    try {
        const docRef = await addDoc(collection(db,"usuarios"), { email, password });
        console.log(docRef.id);
        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

const addPost = async (post) => {
    try {
      const docRef = await addDoc(collection(db, "Posts"), post);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

}


const leerPosts = (cb: (posts)=> void) => {
  onSnapshot(collection(db,"Posts"),(documents) => { 
     const postspintar = documents.docs.map((doc) => doc.data());
     cb(postspintar)
     console.log(postspintar);
     

      });

  };

  export default {leerPosts, addPost}