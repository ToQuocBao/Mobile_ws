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
  
const noti = document.getElementById('notification');
//add leave request
function AddNotification(element, path){
    AddNotificationRow(element.title, element.date_send, element.data, element.address, element.email, element.telephone, element.type, path);
}

function AddNotificationRow(title, date_send, data, address, email, telephone, type, path){

    var div = document.createElement('div');
    var td2 = document.createElement('h3');
    var td3 = document.createElement('div');
    var td4 = document.createElement('p');
    var td5 = document.createElement('div');
    var td6 = document.createElement('div');
    var td7 = document.createElement('div');
    var td8 = document.createElement('div');


    div.style.width = "100%";
    td3.style.fontSize = "15px";
    td4.style.fontSize = "30px";
    td4.style.margin = "20px";
    td5.style.fontSize = "15px";
    td6.style.fontSize = "15px";
    td7.style.fontSize = "15px";
    td8.style.fontSize = "15px";

    td2.innerHTML = title;
    td3.innerHTML = date_send;
    td4.innerHTML = data;
    td5.innerHTML = 'Địa chỉ: ' + address;
    td6.innerHTML = 'email: ' + email;
    td7.innerHTML = 'telephone: ' + telephone;
    td8.innerHTML = 'type:' + type;

    div.appendChild(td2);
    div.appendChild(td3);
    div.appendChild(document.createElement("hr"));
    div.appendChild(td4);
    div.appendChild(document.createElement("hr"));
    div.appendChild(td5);
    div.appendChild(td6);
    div.appendChild(td7);
    div.appendChild(td8);

    noti.appendChild(div);
}



async function get_notification(data){
    const querySnapshot = await getDocs(collection(db, "Notification/" + data.path + "/Notification_data"));
    querySnapshot.forEach(doc => {
        //leave_request.push(doc.data());
        AddNotification(doc.data(),data.path);
    });
}


async function getAllDataOnce(){
    const querySnapshot = await getDocs(collection(db, "RequestLeave"));
    querySnapshot.forEach(doc => {
        var data = doc.data();
        get_notification(data);
    });
}
window.onload = getAllDataOnce;
