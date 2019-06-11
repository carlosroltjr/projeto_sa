
function login(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var logged;

  if (localStorage.length > 0){

    var listaFoodtrucks = JSON.parse(localStorage.getItem("foodtruck"));

    if (email !== "adm@ftmanager.com" || password !== "1234"){

      for (i=0; i<listaFoodtrucks.length; i++){
          if (email === listaFoodtrucks[i].login && password === listaFoodtrucks[i].senha){
            logged = true;
            alert("Logado com sucesso!");
            localStorage.setItem("checkAdmin", false);
            window.open('index.html', '_self');
          }
      }
    } else if (email === "adm@ftmanager.com" && password === "1234") {
      logged = true;
      alert("Logando como Admin...");
      localStorage.setItem("checkAdmin", true);
      window.open('index.html', '_self');
    }

    if (logged !== true) alert("E-mail e/ou senha inválidos!");

  } else if (email === "adm@ftmanager.com" && password === "1234") {
    logged = true;
    alert("Logando como Admin...");
    localStorage.setItem("checkAdmin", true);
    window.open('index.html', '_self');
  }
  else  alert("Ainda não existem Food Trucks cadastrados!\nFavor entrar em contato com o Administrador...");

}
