
function login(){

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  var listaFoodtrucks = JSON.parse(localStorage.getItem("foodtruck"));

  if (email !== "adm@ftmanager.com" || password !== "1234"){

    for (i=0; i<listaFoodtrucks.length; i++){
      if (email === listaFoodtrucks[i].login && password === listaFoodtrucks[i].senha){
         alert("Logado com sucesso!");
         window.open('index.html', '_self');
       }
       else alert("E-mail e/ou senha inválidos!");
    }
  } else{
    var logged = true;
    alert("Logando como Admin...");
    window.open('index.html', '_self');
  }
}
