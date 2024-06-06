/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


const form = document.getElementById('contactForm');
const alertElement = document.getElementById('myAlert');

  // Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvdNdHfdIMqVRA0q8AGc5ZznMobedP0yY",
  authDomain: "contactform-efe7a.firebaseapp.com",
  databaseURL: "https://contactform-efe7a-default-rtdb.firebaseio.com",
  projectId: "contactform-efe7a",
  storageBucket: "contactform-efe7a.appspot.com",
  messagingSenderId: "136919636406",
  appId: "1:136919636406:web:14df42195e59b79b510917"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref("Send");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Get form data
  const Fname = document.getElementById('Fname').value;
  const Lname = document.getElementById('Lname').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const inputAddress = document.getElementById('inputAddress').value;
  const inputAddress2 = document.getElementById('inputAddress2').value;
  const inputCity = document.getElementById('inputCity').value;
  const inputState = document.getElementById('inputState').value;
  const inputZip = document.getElementById('inputZip').value;
  const country = document.getElementById('country').value;
  const message = document.getElementById('message').value;

  // Save message to Firebase
  saveMessage(Fname, Lname, email, phone, inputAddress, country, message, inputAddress2, inputCity, inputState, inputZip);

  // Show success alert
  showAlert();

  // Reset form
  form.reset();
});

function saveMessage(Fname, Lname, email, phone, inputAddress, country, message, inputAddress2, inputCity, inputState, inputZip) {
  const newMessageRef = ref.push();
  newMessageRef.set({
    Fname: Fname,
    Lname: Lname,
    email: email,
    country: country,
    message: message,
    phone: phone,
    inputAddress: inputAddress,
    inputAddress2: inputAddress2,
    inputCity: inputCity,
    inputState: inputState,
    inputZip: inputZip
  });
}

function showAlert() {
  alertElement.style.display = 'block';
  setTimeout(() => {
    alertElement.style.display = 'none';
  }, 3000);
}

// Close button event listener
const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
  alertElement.style.display = 'none';
});
