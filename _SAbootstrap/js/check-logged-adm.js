
isLogged = JSON.parse(localStorage.getItem("logged"));
checkAdmin = JSON.parse(localStorage.getItem("checkAdmin"));

if (isLogged){
  if (checkAdmin){
    document.getElementById('products').onclick = function(){ return false }
  } else{
    document.getElementById('foodtrucks').onclick = function(){ return false }
<<<<<<< HEAD
    document.getElementById('sales').onclick = function(){ return false }
=======
>>>>>>> fa8ed899ff911782e60adddc415d93b6ed77a58f
  }
} else{
  alert("Você não está logado!");
  window.open('login.html', '_self');
}
