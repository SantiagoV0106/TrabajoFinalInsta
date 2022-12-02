var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyDuNgLBpAvPOeZ8GW1q9dOXSCqTLBdeIPo",
    authDomain: "insta-final-e42f1.firebaseapp.com",
    projectId: "insta-final-e42f1",
    storageBucket: "insta-final-e42f1.appspot.com",
    messagingSenderId: "835420421402",
    appId: "1:835420421402:web:5c037dab8b934423e700a3"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const usersRef = collection(db, "usuarios");
export const queryUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const q = query(usersRef, where("email", "==", email), where("password", "==", password));
        const querySnapshot = yield getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
        });
        return !querySnapshot.empty;
    }
    catch (error) {
        return false;
    }
});
export const addUser = ({ email, password }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, "usuarios"), { email, password });
        console.log(docRef.id);
        return true;
    }
    catch (error) {
        console.error(error);
        return false;
    }
});
const addPost = (post) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const docRef = yield addDoc(collection(db, "Posts"), post);
        console.log("Document written with ID: ", docRef.id);
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
});
const leerPosts = (cb) => {
    onSnapshot(collection(db, "Posts"), (documents) => {
        const postspintar = documents.docs.map((doc) => doc.data());
        cb(postspintar);
        console.log(postspintar);
    });
};
export default { leerPosts, addPost };
