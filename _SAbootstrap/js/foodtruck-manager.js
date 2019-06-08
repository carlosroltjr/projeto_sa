var listfoodtruckLocalStorage = [];
listFoodtruck();


function listFoodtruck() {
    listfoodtruckLocalStorage = JSON.parse(localStorage.getItem('foodtruck'));
    //salvando o foodtruck no localstorage
    if (typeof (Storage) !== "undefined") {

        if (listfoodtruckLocalStorage == null) {
            listfoodtruckLocalStorage = [];
        }

    }

    //atribuindo a quantidade de foodtrucks p/ o label da template
    $("#quantidadeFoodtrucks").html(listfoodtruckLocalStorage.length.toString());

    var html = "";

    for (var i = 0; i < listfoodtruckLocalStorage.length; i++) {
        html += '<div class="col-sm-3">' +
            '<div class="card text-center" style="width:15rem; height:24rem;">' +
            '<div class="card-header text-white bg-dark mb-2">' +
            '<h4 class="text">' + listfoodtruckLocalStorage[i].nome_foodtruck + '</h4>' +
            '</div>' +
            '<div class="card-body">' +
            '<h6 class="card-subtitle mb-3 text-muted">' + listfoodtruckLocalStorage[i].codigo_foodtruck + '</h6>' +
            '<ul class="list-group list-group-flush">' +
            '<li class="list-group-item">' + listfoodtruckLocalStorage[i].data + '</li>' +
            '<li class="list-group-item">' + listfoodtruckLocalStorage[i].responsavel + '</li>' +
            '<li class="list-group-item">' + listfoodtruckLocalStorage[i].telefone + '</li>' +
            '<li class="list-group-item">' + listfoodtruckLocalStorage[i].login + '</li>' +
            '</ul>' +
            '<div class="btnCard">' +
            '<button type="button" class="btn btn-secondary btn-small" onclick="javascript:getEditFoodtruck(' + i + ')">Editar</button>' +
            '<button type="button" class="btn btn-danger btn-small" onclick="javascript:getDelFoodtruck(' + i + ')">Excluir</button><br>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    $("#listFoodtruck").append(html);

}

function createFoodtruck() {
    //criar regra para validar unicidade de codigo


    //salvando o foodtruck no localstorage

    listfoodtruckLocalStorage = JSON.parse(localStorage.getItem('foodtruck'));

    if (listfoodtruckLocalStorage == null) {
        listfoodtruckLocalStorage = [];
    }

    //atribuindo o id de forma automatica - vai sempre ser o max + 1
    var nextId = listfoodtruckLocalStorage.length + 1;

    //recuperar os dados do formulario
    var foodtruck = new Foodtruck(nextId, $("#nome_foodtruck").val(), $("#responsavel").val(), $("#data").val(), $("#telefone").val(), $("#login").val(), $("#senha").val());

    listfoodtruckLocalStorage.push(foodtruck);

    var listFoodtruckSetLocalStorage = JSON.stringify(listfoodtruckLocalStorage);

    localStorage.setItem('foodtruck', listFoodtruckSetLocalStorage);

    alert("Cadastro realizado com sucesso");

    //recarrega a pagina
    location.reload();

}

function getEditFoodtruck(id) {

    var foodtruckEdit = listfoodtruckLocalStorage[id];

    $("#codigo_foodtruck").val(foodtruckEdit.codigo_foodtruck);
    $("#position_foodtruck_array").val(id);
    $("#nome_foodtruck").val(foodtruckEdit.nome_foodtruck);
    $("#data").val(foodtruckEdit.data);
    $("#responsavel").val(foodtruckEdit.responsavel);
    $("#telefone").val(foodtruckEdit.telefone);
    $("#login").val(foodtruckEdit.login);
    $("#senha").val(foodtruckEdit.senha);

    $('#cadModal').modal('show');
}


function createOrEditFoodtruck() {
    if ($("#codigo_foodtruck").val() !== null) { saveEditFoodtruck(); }
    else { createFoodtruck(); }
}


function saveEditFoodtruck() {

    var foodTruckEdited = new Foodtruck ($("#codigo_foodtruck").val(),$("#nome_foodtruck").val(), $("#responsavel").val(), $("#data").val(), $("#telefone").val(), $("#login").val(), $("#senha").val());

    listfoodtruckLocalStorage[$("#position_foodtruck_array").val()] = foodTruckEdited;

    var listFoodtruckSetLocalStorage = JSON.stringify(listfoodtruckLocalStorage);

    localStorage.setItem('foodtruck', listFoodtruckSetLocalStorage);

    alert("Edição realizada com sucesso");

    // resetando os valores
    $("#codigo_foodtruck").val(null);
    $("#position_foodtruck_array").val(null);

    //recarrega a pagina
    location.reload();

}


function getDelFoodtruck(id) {
    $("#position_foodtruck_array_delete").val(id);
    $('#delModal').modal('show');
}


function deleteFoodtruck() {

    //remove o item do array
    listfoodtruckLocalStorage.splice($("#position_foodtruck_array_delete").val(), 1);

    var listFoodtruckSetLocalStorage = JSON.stringify(listfoodtruckLocalStorage);

    localStorage.setItem('foodtruck', listFoodtruckSetLocalStorage);

    alert("Exclusão realizada com sucesso");

    $("#position_foodtruck_array_delete").val(null);

    //recarrega a pagina
    location.reload();


}