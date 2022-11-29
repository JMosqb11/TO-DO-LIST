import { initializeApp } from "firebase/app";
import {collection, getDocs, getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyD03lqtfIVVK1872QAiHnHktUFdjwZQZ_s",
  authDomain: "task-c13.firebaseapp.com",
  projectId: "task-c13",
  storageBucket: "task-c13.appspot.com",
  messagingSenderId: "1022879864244",
  appId: "1:1022879864244:web:a0b34ab1d8a6b9fe0a0ee1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app) 


export const getCollection = async (coll) =>{
    const result ={

        statusResponse: false,
        Data: null,
        error: null

    } 
    
    try {

        const res = collection(db,coll);
        const data = await getDocs(res);
        const arrayData = data.docs.map((element) => (
            {
                id:element.id,
                ...element.data()
            }
        ))
        
        result.statusResponse = true
        result.data = arrayData

    } catch (error) {
        result.error = error
    }

    return result
}