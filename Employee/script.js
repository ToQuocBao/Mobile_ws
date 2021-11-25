var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

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
    var tid = document.createElement('td');
    var tname = document.createElement('td');
    var tphoneNumber = document.createElement('td');
    var temail = document.createElement('td');
    var tcompany = document.createElement('td');
    var tdepartment = document.createElement('td');
    var tposition = document.createElement('td');

    tid.innerHTML = id;
    tname.innerHTML = name;
    tphoneNumber.innerHTML = phoneNumber;
    temail.innerHTML = email;
    tcompany.innerHTML = company;
    tdepartment.innerHTML = department;
    tposition.innerHTML = position;

    trow.appendChild(tid);
    trow.appendChild(tname);
    trow.appendChild(tphoneNumber);
    trow.appendChild(temail);
    trow.appendChild(tcompany);
    trow.appendChild(tdepartment);
    trow.appendChild(tposition);

    tb.appendChild(trow);
}

async function getAllDataOnce(){
    const querySnapshot = await getDocs(collection(db, "User"));
    var user =[];
    querySnapshot.forEach(doc => {
        user.push(doc.data());
    });
    console.log(user);

    AddData(user);
}
window.onload = getAllDataOnce;
