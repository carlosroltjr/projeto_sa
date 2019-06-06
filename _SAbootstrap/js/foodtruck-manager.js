localStorage.nomeFT;
localStorage.codeFT;
localStorage.tipoP;
localStorage.nomeR;
localStorage.tele;
localStorage.emailR;
localStorage.dataE;

function dados() {
    var nomeFoodTruck = document.getElementById("nomeFoodTruck").value;
    var codigo = parseInt(document.getElementById("codigo").value);
    var tipoProduto = document.getElementById("tipoProduto").value;
    var nomeResponsavel = document.getElementById("nomeResponsavel").value;
    var telefoneResponsavel = parseInt(document.getElementById("telefoneResponsavel").value);
    var emailLogin = document.getElementById("emailLoja").value;
    var dataEntrada = parseInt(document.getElementById("dataEntrada")).value;
}


function gravarDados() {
    var nome = document.getElementById("nomeFoodTruck").value;
    var code = document.getElementById("codigo").value;
    var tipo = document.getElementById("tipoProduto").value;
    var nomeResp = document.getElementById("nomeResponsavel").value;
    var telefone = document.getElementById("telefoneResponsavel").value;
    var email = document.getElementById("emailLogin").value;
    var data = document.getElementById("dataEntrada").value;

    var foodTruck = { nome: nome, code: code, tipo: tipo, nomeResp: nomeResp, telefone: telefone, email: email, data: data }
    var foodTruck_json = JSON.stringify(foodTruck);
    localStorage.setItem("foodTruck", foodTruck_json);

    var form = document.getElementById("fconf");
    form.style.display = "none";

    //alert("Cadastro realizado com sucesso!");

    var span = document.getElementById("mensagem");
    span.innerHTML = "Dados salvos!";

}

function mostraCadastro() {
    var form = document.getElementById("fconf");
    form.style.display = "block";
}

function lerCadastro() {
    var foodTruck_json = localStorage.getItem("foodTruck");
    var foodTruck = JSON.parse(foodTruck_json);
    var span = document.getElementById("mensagem");
    span.innerHTML = "Nome da unidade Food Truck: " + foodTruck.nome
        + "<br><br>Código: " + foodTruck.code
        + "<br><br>Tipo de Produtos: " + foodTruck.tipo
        + "<br><br>Nome do Responsável: " + foodTruck.nomeResp
        + "<br><br>Telefone do Responsável: " + foodTruck.telefone
        + "<br><br>Email do Responsável: " + foodTruck.email
        + "<br><br>Data de entrada: " + foodTruck.data;
}

function apagarCadastro() {
    localStorage.removeItem("foodTruck");
    var span = document.getElementById("mensagem");
    span.innerHTML = "Cadastro apagado!";
}