// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  
const firebaseConfig = {
  apiKey: "AIzaSyDUVG_nLum9RXsLch8IZAKJD28Z71oE0UE",
  authDomain: "kwitterpro-5ed3b.firebaseapp.com",
  projectId: "kwitterpro-5ed3b",
  storageBucket: "kwitterpro-5ed3b.appspot.com",
  messagingSenderId: "1055439814303",
  appId: "1:1055439814303:web:cd68384d78064da57d6caa",
  measurementId: "G-N70TH31JHY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });
  localStorage.setItem("Room_name",name);
  window.locaton=kwitter_room.html;
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code

//End code
});});}
getData();

function redirectToRoomName() {
  console.log(name);
  localStorage.setItem("Room_name",name);
  window.locaton=kwitter_room.html;
}