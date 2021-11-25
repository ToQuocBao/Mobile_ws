<?php
    header("Location: ./Home");
?>

<head>

</head>

<body>

    <div id = 'a'></div>
    <table>
        <thead>
            <th>Sno</th>
            <th>Name</th>
            <th>mail</th>
        </thead>
        <tbody id = 'tbody'>
        </tbody>
    </table>

<script type="module">

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
  

  const tbody = document.getElementById('tbody');
  var stNo;
  function addItem(name, email){
      let trow = document.createElement("tr");
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let td3 = document.createElement('td');
      
      td1.innerHTML = ++stNo;
      td2.innerHTML = name;
      td3.innerHTML = email;
      trow = appendChild(td1);
      trow = appendChild(td2);
      trow = appendChild(td3);
      
      tbody.apeenchild(trow);
  }

  function addAllItem(user){
      stNo = 0;
      tbody.innerHTML = '';
      user.forEach(element =>{
          addItem(element.email, element.password);
      })
  }

  async function getAllDataOnce(){
      const querySnapshot = await getDocs(collection(db, "User"));

      var user =[];
      querySnapshot.forEach(doc => {
        user.push(doc.data());
        console.log(user);
      });

      addAllItem(user);
  }
  window.onload = getAllDataOnce;
</script>
</body>