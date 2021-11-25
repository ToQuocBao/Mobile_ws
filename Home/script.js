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


//add overtime request
function AddData(element, user){
    AddRow(element.date, user, element.begin, element.end, element.hours, element.rHours, element.onTime, element.overtime)
}

function AddRow(date, user, begin, end, hours, rHours, onTime, overtime){

    var trow = document.createElement('tr');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');


    td2.innerHTML = date;
    td3.innerHTML = user;
    td4.innerHTML = begin;
    td5.innerHTML = end;
    td6.innerHTML = hours;
    td7.innerHTML = rHours;
    if (onTime) td8.innerHTML = onTime;
    if (overtime) td9.innerHTML = overtime;


    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);

    tb.appendChild(trow);
}


async function getData(data){
    console.log(data.path);
    var querySnapshot = await getDocs(collection(db, "Timekeeping/"+ data.path +"/11-2021"));
    querySnapshot.forEach(doc => {
        //overtime.push(doc.data());
        AddData(doc.data(),data.user);
    });
    querySnapshot = await getDocs(collection(db, "Timekeeping/"+ data.path +"/12-2021"));
    querySnapshot.forEach(doc => {
        //overtime.push(doc.data());
        AddData(doc.data(),data.user);
    });
}

async function getAllDataOnce(){
    const querySnapshot = await getDocs(collection(db, "Timekeeping"));
    querySnapshot.forEach(doc => {
        getData(doc.data());
    });
}
window.onload = getAllDataOnce;
