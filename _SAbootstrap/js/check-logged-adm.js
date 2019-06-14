
checkLogged = JSON.parse(localStorage.getItem("logged"));
checkAdmin = JSON.parse(localStorage.getItem("checkAdmin"));

if (!checkLogged){
  alert("Você não está logado!");
  window.open('login.html', '_self');
}

if (checkAdmin){
  if (checkAdmin === true){
    //desabilita botão de cadastrar produtos
  } else{
    //desabilita botão de cadastrar foodtrucks
  }
}
