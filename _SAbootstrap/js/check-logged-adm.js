
isLogged = JSON.parse(localStorage.getItem("logged"));
checkAdmin = JSON.parse(localStorage.getItem("checkAdmin"));
foodtruck_id = loadFromStorage("id_foodtruck_logado");

if (isLogged){
  if (checkAdmin){
    document.getElementById('products').onclick = function(){ return false }
    document.getElementById('sales').onclick = function(){ return false }
  } else{
    document.getElementById('foodtrucks').onclick = function(){ return false }
  }
} else{
  alert("Você não está logado!");
  window.open('login.html', '_self');
}


function loadFromStorage(key){
	const data = localStorage.getItem(key)
	return JSON.parse(data)
}

function saveToStorage(key, value){
	const data = JSON.stringify(value)
	localStorage.setItem(key,data)
}