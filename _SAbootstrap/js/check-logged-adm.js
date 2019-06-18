
isLogged = JSON.parse(localStorage.getItem("logged"));
checkAdmin = JSON.parse(localStorage.getItem("checkAdmin"));

if (isLogged){
  if (checkAdmin){
    document.getElementById('products').onclick = function(){ return false }
  } else{
    document.getElementById('foodtrucks').onclick = function(){ return false }
    document.getElementById('sales').onclick = function(){ return false }
  }
} else{
  alert("Você não está logado!");
  window.open('login.html', '_self');
}
