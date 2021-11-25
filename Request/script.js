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
  
const tbRequest = document.getElementById('tbody-leave-request');

function AddLeaveRequest(users){
    console.log(users);
    tbRequest.innerHTML = "";
    users.forEach(element => {
        AddLeaveRequestRow(element.id, element.name, element.jobTitle, element.typeLeave, element.branch, element.department, element.registerDay, element.startDate + ' ' + element.startTime, element.endDate + ' ' + element.endTime, element.state, element.reason);
    })
}

function AddLeaveRequestRow(id, name, jobTitle, typeLeave, branch, department, registerDay, startDate, endDate, state){

    console.log("a");

    var trow = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var td5 = document.createElement('td');
    var td6 = document.createElement('td');
    var td7 = document.createElement('td');
    var td8 = document.createElement('td');
    var td9 = document.createElement('td');
    var td10 = document.createElement('td');
    var td11 = document.createElement('td');
    var td12 = document.createElement('td');

    td1.innerHTML = id;
    td2.innerHTML = name;
    td3.innerHTML = jobTitle;
    td4.innerHTML = typeLeave;
    td5.innerHTML = branch;
    td6.innerHTML = department;
    td7.innerHTML = registerDay;
    td8.innerHTML = startDate;
    td9.innerHTML = endDate;
    td10.innerHTML = state;
    td11.innerHTML = reason;
    td12.innerHTML = '';

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td10);
    trow.appendChild(td11);
    trow.appendChild(td12);
    tbRequest.appendChild(trow);
}

async function get_leave_request(data, leave_request){
    const querySnapshot = await getDocs(collection(db, "RequestLeave/" + data.path + "/request_leave_data"));
    querySnapshot.forEach(doc => {
        leave_request.push(doc.data());
    });
}

async function get_overtime_(data, overtime){
    const querySnapshot = await getDocs(collection(db, "RequestLeave/" + data.path + "/overtime_data"));
    querySnapshot.forEach(doc => {
        overtime.push(doc.data());
    });
}

async function getAllDataOnce(){
    const querySnapshot = await getDocs(collection(db, "RequestLeave"));
    var leave_request = [];
    var overtime = [];
    querySnapshot.forEach(doc => {
        var data = doc.data();
        get_leave_request(data, leave_request);
        get_overtime_(data, overtime);
    });
    console.log(leave_request);
    AddLeaveRequest(leave_request);
}
window.onload = getAllDataOnce;
