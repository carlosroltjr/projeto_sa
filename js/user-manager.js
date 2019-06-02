
var emailArray = [], passwordArray = [];

function register(){

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  emailArray.push(email);
  passwordArray.push(password);

  localStorage.setItem("emailArray", emailArray);
  localStorage.setItem("passwordArray", passwordArray);

  alert("Cliente cadastrado com sucesso!")

}
