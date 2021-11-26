import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyD2VjsjyrsD85T0FzBYtC_-ZSDlxsWyR3w",
    authDomain: "timekeeping-d46cd.firebaseapp.com",
    projectId: "timekeeping-d46cd",
    storageBucket: "timekeeping-d46cd.appspot.com",
    messagingSenderId: "198453191162",
    appId: "1:198453191162:web:592c67a935f342b3a8c443",
    measurementId: "G-R0Y0EX6ED3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getFirestore, doc, getDocs, setDoc, collection, addDoc, updateDoc, deleteDoc, deleteField, onSnapshot} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-firestore.js";

const db = getFirestore();


  
async function AddDocument_CustomID(){
    var title = document.getElementById("title").value;
    var date_send = document.getElementById("date").value; 
    var data = document.getElementById("content").value;    
    var address = document.getElementById("address").value; 
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var type = document.getElementById("type").value;
    let id = 'noti';
    const dArray = date_send.split("-")
    for (let i = 0; i < dArray.length; i++) {
        id += dArray[i];
    }
    id += Math.random().toString(36).substr(2, 4);
    var def = doc(db, "Notification", "user1" , "Notification_data", id);

    const docRef = await setDoc(
        def, {
            title: title,
            date_send: date_send,
            data: data,
            address: address,
            email: email,
            telephone: telephone,
            type: type,
            id: id
        }
    )
    .then(()=>{        
        alert("success");
        window.location.href = "../";
    })
    .catch((error)=>{
        alert("error:" + error);
    })
}

document.getElementById("submitBtn").addEventListener("click", AddDocument_CustomID);