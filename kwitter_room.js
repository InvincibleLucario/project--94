// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBL6DGiU07L1bt2KcfiU28MNHuh6O5OqO8",
    authDomain: "project-94-95-96.firebaseapp.com",
    datadaseURL: "https://project-94-95-96-default-rtdb.firebaseio.com",
    projectId: "project-94-95-96",
    storageBucket: "project-94-95-96.appspot.com",
    messagingSenderId: "403776912998",
    appId: "1:403776912998:web:2c4dbcd9ef29d4ce71f7a7",
    measurementId: "G-V54WWCPJJH"
  };
  // Initialize Firebase
  firebaseConfig.initialize(firebaseConfig);

     user_name = localStorage.getItem("username");
     document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

     function add_room(){
         room_name = document.getElementById("room_name").Value;

         localStorage.setItem("roomname", room_name);

         window.location="kwitter_page.html";

         firebaseConfig.database().rel("/").child(room_name).update({
             purpose: "Adding Room Name"
         });
    }

function getData{} (firebase.database().ref("/").on('value', function(snapshot) {document.getElementById}("output").innerHTML))
      room_names = childKey;
      //Start Code

      //End Code
      });}):}
getData();