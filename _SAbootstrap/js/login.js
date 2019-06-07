
function login(){

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;



  if (email !== "adm@ftmanager.com" || password !== "1234"){

    var splitEmail = localStorage.getItem("emailArray").split(",");
    var splitPassword = localStorage.getItem("passwordArray").split(",");

    var logged = false;

    for (i=0; i<splitEmail.length; i++){

      if (email == splitEmail[i] && password == splitPassword[i]){
        alert("Logado com sucesso!");
        window.open('dashboard.html', '_self');
        logged = true;
      }
    }

    if(logged == false){
      alert("E-mail e/ou senha inválidos!");
    }
  } else{
    alert("Logando como Admin...");
    window.open('index.html', '_self');
  }
}
