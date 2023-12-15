// Fagutao, Arvin Rey M.  CITCS 2F  October 18,2023

const userNameInput = document.getElementById('userName');
const passwordInput = document.getElementById('password');
const iconUpperCaseName = document.getElementById('iconUpperCaseName');
const iconLowerCaseName = document.getElementById('iconLowerCaseName');
const iconUpperCasePass = document.getElementById('iconUpperCasePass');
const iconLowerCasePass = document.getElementById('iconLowerCasePass');
const iconSpCharPass = document.getElementById('iconSpCharPass');
const iconNumPass = document.getElementById('iconNumPass');
const iconLengthPass = document.getElementById('iconLengthPass');


userNameInput.addEventListener('input', () => {
  const userName = userNameInput.value.trim();
  const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*]).+$/;

  if (userName.match(/[A-Z]/)) {
    iconUpperCaseName.classList.remove('fa-circle-xmark', 'red');
    iconUpperCaseName.classList.add('fa-circle-check', 'green');
  } else {
    iconUpperCaseName.classList.remove('fa-circle-check', 'green');
    iconUpperCaseName.classList.add('fa-circle-xmark', 'red');
  }

  if (userName.match(/[a-z]/)) {
    iconLowerCaseName.classList.remove('fa-circle-xmark', 'red');
    iconLowerCaseName.classList.add('fa-circle-check', 'green');
  } else {
    iconLowerCaseName.classList.remove('fa-circle-check', 'green');
    iconLowerCaseName.classList.add('fa-circle-xmark', 'red');
  }


passwordInput.addEventListener('input', () => {
  const password = passwordInput.value.trim();
  const regexUpperCase = /^(?=.*[A-Z]).+$/;
  const regexLowerCase = /^(?=.*[a-z]).+$/;
  const regexSpChar = /^(?=.*[!@#$%^&*]).+$/;
  const regexNum = /^(?=.*\d).+$/;

  if (password.match(regexUpperCase)) {
    iconUpperCasePass.classList.remove('fa-circle-xmark', 'red');
    iconUpperCasePass.classList.add('fa-circle-check', 'green');
  } else {
    iconUpperCasePass.classList.remove('fa-circle-check', 'green');
    iconUpperCasePass.classList.add('fa-circle-xmark', 'red');
  }

  if (password.match(regexLowerCase)) {
    iconLowerCasePass.classList.remove('fa-circle-xmark', 'red');
    iconLowerCasePass.classList.add('fa-circle-check', 'green');
  } else {
    iconLowerCasePass.classList.remove('fa-circle-check', 'green');
    iconLowerCasePass.classList.add('fa-circle-xmark', 'red');
  }


  if (password.match(regexNum)) {
    iconNumPass.classList.remove('fa-circle-xmark', 'red');
    iconNumPass.classList.add('fa-circle-check', 'green');
  } else {
    iconNumPass.classList.remove('fa-circle-check', 'green');
    iconNumPass.classList.add('fa-circle-xmark', 'red');
  }

  if (password.length >= 8) {
    iconLengthPass.classList.remove('fa-circle-xmark', 'red');
    iconLengthPass.classList.add('fa-circle-check', 'green');
  } else {
    iconLengthPass.classList.remove('fa-circle-check', 'green');
    iconLengthPass.classList.add('fa-circle-xmark', 'red');
  }
});

