
/*
não faço ideia de como fazer esse link pro cadastro de foodtruck
aparecer e desaparecer conforme o usuário logado é ou não admim.

temos que tratar Food Trucks e Produtos, admin n pode ver Produtos
e usuário n pode Food Trucks.
*/

for (i=0; i<localStorage.length; i++){
  if (localStorage.key[i] === "logged"){

    var menu_li = document.createElement("li");
    menu_li.className = "nav-item";
    document.getElementById("menu").appendChild(menu_li);

    var menu_a = document.createElement("a");
    menu_a.className = "nav-link";
    document.getElementById("menu_li").appendChild(menu_a);

    var menu_i = document.createElement("i");
    menu_i.className = "fas fa-fw fa-tachometer-alt";
    document.getElementById("menu_a").appendChild(menu_i);

    var menu_span = document.createElement("span");

  }
}
