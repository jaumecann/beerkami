

var form  = document.getElementById('form-login');
var email = document.getElementById('mail');
var password = document.getElementById('password');
var error = document.getElementById('mail-error');
var error2 = document.getElementById('pass-error');
var emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// possibles errors de camp buit o email incorrecte al fer submit

form.addEventListener("submit", function (event) {
  if (email.value.length == "0") { 
    error.className = "wrong";
    error.innerHTML = "Es necesario rellenar este campo";
    event.preventDefault();

  } else if (!emailRegExp.test(email.value)){
    error.className = "wrong";
    error.innerHTML = "Formato de mail no válido";
    event.preventDefault(); 
  } 
  
  if (password.value.length == "0") { 
    error2.className = "wrong";
    error2.innerHTML = "Es necesario rellenar este campo";
    event.preventDefault();
  }

});

//en introduir nou input borrar possibles errors

password.addEventListener("input", function (event) {
  if (!password.value.length == "0") {
    error2.innerHTML = ""; 
    error2.classList.remove = "wrong";
  }
});

email.addEventListener("input", function (event) {
  if (!email.value.length == "0") {
    error.innerHTML = ""; 
    error.classList.remove = "wrong";
  }
});