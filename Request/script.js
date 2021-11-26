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
const tbOvertime = document.getElementById('tbody-overtime');


//add leave request
function AddLeaveRequest(element, path){
    AddLeaveRequestRow(element.id, element.name, element.jobTitle, element.typeLeave, element.branch, element.department, element.registerDay, element.startDay + ' ' + element.startTime, element.endDay + ' ' + element.endTime, element.state, element.reason, path);
}

function AddLeaveRequestRow(id, name, jobTitle, typeLeave, branch, department, registerDay, startDate, endDate, a, reason, path){

    var trow = document.createElement('tr');
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

    td2.innerHTML = name;
    td3.innerHTML = jobTitle;
    td4.innerHTML = typeLeave;
    td5.innerHTML = branch;
    td6.innerHTML = department;
    td7.innerHTML = registerDay;
    td8.innerHTML = startDate;
    td9.innerHTML = endDate;
    td11.innerHTML = reason;
    if (a == 2){
        td10.innerHTML = 'Chờ duyệt';
        var approve = async function(){
            var ref = doc(db, "RequestLeave/" + path + "/request_leave_data/" + id + '/');
            console.log(ref);
            await updateDoc(ref, {
                state: 3
            });
        }

        var decline = async function(){
            var ref = doc(db, "RequestLeave/" + path + "/request_leave_data/" + id + '/');
            console.log(ref);
            await updateDoc(ref, {
                state: 1
            });
        }

        var aBtn = document.createElement('button');
        aBtn.innerHTML = "Duyệt";
        aBtn.style.width = '80px';
        aBtn.style.backgroundColor = '#00ff6a';
        aBtn.addEventListener("click", approve.bind(id, path));
        var dBtn = document.createElement('button');
        dBtn.innerHTML = "Duyệt";
        dBtn.style.width = '80px';
        dBtn.style.backgroundColor = '#ff0000';
        dBtn.innerHTML = "Từ chối";
        dBtn.addEventListener("click", decline.bind(id, path));

        td12.appendChild(aBtn);
        td12.appendChild(dBtn);
        
    }
    else {
        td12.innerHTML = '';
        if (a == 1) td11.innerHTML = 'Bác bỏ';
        else td11.innerHTML = 'Đã duyệt';
    }

    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.appendChild(td5);
    trow.appendChild(td6);
    trow.appendChild(td7);
    trow.appendChild(td8);
    trow.appendChild(td9);
    trow.appendChild(td11);
    trow.appendChild(td10);
    trow.appendChild(td12);
    tbRequest.appendChild(trow);
}

function AddOvertime(element, path){
    AddOvertimeRow(element.id, element.name, element.jobTitle, element.branch, element.department, element.registerDay, element.overtimeDay, element.hourStart, element.hourEnd, element.reason, element.state, path);
}

function AddOvertimeRow(id, name, jobTitle, branch, department, registerDay, overtimeDay, hourStart, hourEnd, reason, a, path){

    var trow = document.createElement('tr');
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

    td2.innerHTML = name;
    td3.innerHTML = jobTitle;
    td4.innerHTML = branch;
    td5.innerHTML = department;
    td6.innerHTML = registerDay;
    td7.innerHTML = overtimeDay;
    td8.innerHTML = hourStart;
    td9.innerHTML = hourEnd;
    td10.innerHTML = reason;
    td12.style.width = '80px';
    if (a == 2){
        td11.innerHTML = 'Chờ duyệt';
        var approve = async function(){
            var ref = doc(db, "RequestLeave/" + path + "/overtime_data/" + id + '/');
            console.log(ref);
            await updateDoc(ref, {
                state: 3
            });
        }

        var decline = async function(){
            var ref = doc(db, "RequestLeave/" + path + "/overtime_data/" + id + '/');
            console.log(ref);
            await updateDoc(ref, {
                state: 1
            });
        }

        var aBtn = document.createElement('button');
        aBtn.innerHTML = "Duyệt";
        aBtn.style.width = '80px';
        aBtn.style.backgroundColor = '#00ff6a';
        aBtn.addEventListener("click", approve.bind(id, path));
        var dBtn = document.createElement('button');
        dBtn.innerHTML = "Duyệt";
        dBtn.style.width = '80px';
        dBtn.style.backgroundColor = '#ff0000';
        dBtn.innerHTML = "Từ chối";
        dBtn.addEventListener("click", decline.bind(id, path));

        td12.appendChild(aBtn);
        td12.appendChild(dBtn);
        
    }
    else {
        td12.innerHTML = '';
        if (a == 1) td11.innerHTML = 'Bác bỏ';
        else td11.innerHTML = 'Đã duyệt';
    }

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
    tbOvertime.appendChild(trow);
}



async function get_leave_request(data){
    const dbRef = collection(db, 'RequestLeave', data.path, 'request_leave_data');
    onSnapshot(dbRef, (querySnapshot) =>{
        tbRequest.innerHTML = '';
        querySnapshot.forEach(doc=>{
            AddLeaveRequest(doc.data(),data.path);
        })
    })
}


async function get_overtime_(data){
    const dbRef = collection(db, 'RequestLeave', data.path, 'overtime_data');
    onSnapshot(dbRef, (querySnapshot) =>{
        tbOvertime.innerHTML = '';
        querySnapshot.forEach(doc=>{
            AddOvertime(doc.data(),data.path);
        })
    })
}

async function getAllDataOnce(){
    const querySnapshot = await getDocs(collection(db, "RequestLeave"));
    querySnapshot.forEach(doc => {
        var data = doc.data();
        get_leave_request(data);
        get_overtime_(data);
    });
}
window.onload = getAllDataOnce;
