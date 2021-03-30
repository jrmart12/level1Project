const sign_in_btn = document.querySelector('#sign-in-btn');
const sign_up_btn = document.querySelector('#sign-up-btn');
const container = document.querySelector('.container');
console.log('asdas');
sign_up_btn.addEventListener('click', () => {
  container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
  container.classList.remove('sign-up-mode');
});

function store() {
  var username = document.getElementById('username');
  var email = document.getElementById('email');
  var password = document.getElementById('password');
  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;

  if (email.value.length == 0) {
    alert('Please fill in email');
  } else if (password.value.length == 0) {
    alert('Please fill in password');
  } else if (username.value.length == 0) {
    alert('Please fill in username');
  } else if (
    email.value.length == 0 &&
    password.value.length == 0 &&
    username.value.length == 0
  ) {
    alert('Please fill in email, password and username');
  } else if (password.value.length < 8) {
    alert('Minumum of 8');
  } else if (!password.value.match(numbers)) {
    alert('please add 1 number');
  } else if (!password.value.match(upperCaseLetters)) {
    alert('please add 1 uppercase letter');
  } else if (!password.value.match(lowerCaseLetters)) {
    alert('please add 1 lowercase letter');
  } else {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('username', username.value);
    window.location = 'index.html';
    return false;
  }
}

function check() {
  var storedUserName = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');

  var signinusername = document.getElementById('signinusername');
  var signinpassword = document.getElementById('signinpassword');

  if (
    signinusername.value == storedUserName &&
    signinpassword.value == storedPassword
  ) {
    window.location = 'index.html';
    return false;
  } else {
    alert('Error on login');
  }
}
