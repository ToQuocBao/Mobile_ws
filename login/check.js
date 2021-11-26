var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var users = [];

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

function checking(){
    let un = document.getElementById('formGroupExampleInput').value;
    var pw = document.forms["myForm"]["password"].value;
    console.log('executing checking');
    users.forEach(u => {
        validate(un, pw, u);
    });
}

function validate(username, password, user){
    console.log('executing validating');
    console.log(username);
    if ((user.email == username)&&(user.password = password)){
        console.log(user);
        if (user.Position == "Admin") {
            window.sessionStorage.setItem("isAdmin", true);
            console.log(sessionStorage.getItem('isAdmin'));
        }
        
        sessionStorage.setItem("name", user.Name);
        sessionStorage.setItem("id", user.Id);
        sessionStorage.setItem("company", user.Company);
        sessionStorage.setItem("department", user.Department);
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("phoneNumber", user.PhoneNumber);
        sessionStorage.setItem("isLogin", true);
        console.log('a');
        window.location.replace("./login.php");
    }
}
  
async function getAllDataOnce(){
    const querySnapshot = await getDocs(collection(db, "User"));
    querySnapshot.forEach(doc => {
        users.push(doc.data());
    });
}


document.getElementById("submitBtn").addEventListener('click', checking);
window.onload = getAllDataOnce;