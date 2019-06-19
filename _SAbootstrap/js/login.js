
localStorage.removeItem("checkAdmin");
localStorage.removeItem("logged");
localStorage.removeItem("id_foodtruck_logado");

function login(){

  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var logged;

  if (localStorage.length > 0){

    var listaFoodtrucks = JSON.parse(localStorage.getItem("foodtruck"));

    if (email !== "adm@ftmanager.com" || password !== "1234"){

      for (i=0; i<listaFoodtrucks.length; i++){
          if (email === listaFoodtrucks[i].login && password === listaFoodtrucks[i].senha){
            alert("Logado com sucesso!");
            logged = true;
            localStorage.setItem("id_foodtruck_logado", listaFoodtrucks[i].codigo_foodtruck);
            localStorage.setItem("logged", true);
            localStorage.setItem("checkAdmin", false);
            window.open('index.html', '_self');
          }
      }
    } else if (email === "adm@ftmanager.com" && password === "1234") {
      alert("Logando como Admin...");
      logged = true;
      localStorage.setItem("logged", true);
      localStorage.setItem("checkAdmin", true);
      window.open('index.html', '_self');
    }

    if (logged !== true) alert("E-mail e/ou senha inválidos!");

  } else if (email === "adm@ftmanager.com" && password === "1234") {
    alert("Logando como Admin...");
    logged = true;
    localStorage.setItem("logged", true);
    localStorage.setItem("checkAdmin", true);
    window.open('index.html', '_self');
  }
  else  alert("Ainda não existem Food Trucks cadastrados!\nFavor entrar em contato com o Administrador...");

}
