
isLogged = JSON.parse(localStorage.getItem("logged"));
checkAdmin = JSON.parse(localStorage.getItem("checkAdmin"));

if (isLogged){
  if (checkAdmin){
    //desabilita botão de cadastrar produtos
  } else{
    //desabilita botão de cadastrar foodtrucks
  }
} else{
  alert("Você não está logado!");
  window.open('login.html', '_self');
}
