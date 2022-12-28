// Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  import { getDatabase ,ref, set, onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyC9lfew4_0NghdmWG96xOw-1jK96FnneQc",
    authDomain: "registration-08.firebaseapp.com",
    projectId: "registration-08",
    storageBucket: "registration-08.appspot.com",
    messagingSenderId: "993031004574",
    appId: "1:993031004574:web:6536c2a2cd0c260fe0768f",
    measurementId: "G-X9ELK9TXR4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase();

  var inp = document.getElementById("input");

  var inp = document.getElementById("name");
var lastName = document.getElementById("lname");
var email = document.getElementById("email");
var number = document.getElementById("num");
var qual = document.getElementById("qual");
var cnic = document.getElementById("cnic");
var password = document.getElementById("password");

window.saveTask = function () {
    var obj = {
        task: inp.value,
        task2: lastName.value,
        task3: email.value,
        task4: number.value,
        task5: qual.value,
        task6: cnic.value,
        task7: password.value,
      
    }
    
    obj.id = Math.random().toString().slice(2);
    console.log(obj);
    const taskRef = ref(database, `tasks/${obj.id}/`);
    set(taskRef, obj);

};
function getData() {
    var dataList = [];
    const taskRef = ref(database, "tasks/");
    onChildAdded(taskRef, function (dt) {
        dataList.push(dt.val());
        parent.innerHTML = "";
        for (var i = 0; i < dataList.length; i++) {
            parent.innerHTML += `<li>${""}</li>`
        }
    })
}
getData();