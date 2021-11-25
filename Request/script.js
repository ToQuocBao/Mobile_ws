var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);
var user = [];

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
  
const tb = document.getElementById('tbody');

function AddData(users){
    tbody.innerHTML = "";
    users.forEach(element => {
        AddRow(element.Id, element.Name, element.PhoneNumber, element.email, element.Company, element.Department, element.Position);
    })
}

function AddRow(id, name, phoneNumber, email, company, department, position){
    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');

    td1.innerHTML = id;
    td2.innerHTML = name;
    td3.innerHTML = phoneNumber;
    td4.innerHTML = email;
    td5.innerHTML = company;
    td6.innerHTML = department;
    td7.innerHTML = position;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);

    tb.appendChild(trow);
}

async function getAllDataOnce(){
    const querySnapshot = await getDocs(collection(db, "RequestLeave/user1/request_leave_data"));
    
    querySnapshot.forEach(doc => {
        user.push(doc.data());
    });
    console.log(user);

    AddData(user);
}
window.onload = getAllDataOnce;
