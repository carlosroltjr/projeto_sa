var foodtrucklist = [];
listFoodtruck();


function listFoodtruck() {
    foodtrucklist = JSON.parse(localStorage.getItem('foodtruck'));
    //salvando o foodtruck no localstorage
    if (typeof (Storage) !== "undefined") {

        if (foodtrucklist == null) {
            foodtrucklist = [];
        }

    }

    //atribuindo a quantidade de foodtrucks
    $("#quantidadeFoodtrucks").html(foodtrucklist.length.toString());

    var html = "";

    for (var i = 0; i < foodtrucklist.length; i++) {
        html += '<div class="col-sm-3">' +
            '<div class="card text-center" style="width:15rem; height:25rem;">' +
            '<div class="card-header text-white bg-dark mb-2">' +
            '<h4 class="text">' + foodtrucklist[i].nome_foodtruck + '</h4>' +
            '</div>' +
            '<div class="card-body">' +
            '<h6 class="card-subtitle mb-3 text-muted">' + foodtrucklist[i].codigo_foodtruck + '</h6>' +
            '<ul class="list-group list-group-flush">' +
            '<li class="list-group-item">' + foodtrucklist[i].data + '</li>' +
            '<li class="list-group-item">' + foodtrucklist[i].responsavel + '</li>' +
            '<li class="list-group-item">' + foodtrucklist[i].telefone + '</li>' +
            '<li class="list-group-item">' + foodtrucklist[i].login + '</li>' +
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
    //criar regra para validar unicidade de codigo ---> BUG


    //salvando o foodtruck no localstorage

    foodtrucklist = JSON.parse(localStorage.getItem('foodtruck'));

    if (foodtrucklist == null) {
        foodtrucklist = [];
    }

    //atribuindo o id de forma automatica - vai sempre ser o max + 1
    var nextId = localStorage.codigoFoodTruck;

    if(localStorage.codigo_foodtruck){localStorage.codigo_foodtruck=Number(localStorage.codigo_foodtruck)+1;}
    else{  localStorage.setItem("codigo_foodtruck", 1);}

    //recuperar os dados do formulario
    var foodtruck = new Foodtruck(nextId, $("#nome_foodtruck").val(), $("#responsavel").val(), $("#data").val(), $("#telefone").val(), $("#login").val(), $("#senha").val());

    foodtrucklist.push(foodtruck);

    var foodtrucklistJson = JSON.stringify(foodtrucklist);

    localStorage.setItem('foodtruck', foodtrucklistJson);

    alert("Cadastro realizado com sucesso");

    //recarrega a pagina
    location.reload();

}

function getEditFoodtruck(id) {

    var foodtruckEdit = foodtrucklist[id];

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

  if ($("#codigo_foodtruck").val() !== "") { saveEditFoodtruck(); }
  else { createFoodtruck(); }

}


function saveEditFoodtruck() {

    var foodTruckEdited = new Foodtruck ($("#codigo_foodtruck").val(),$("#nome_foodtruck").val(), $("#responsavel").val(), $("#data").val(), $("#telefone").val(), $("#login").val(), $("#senha").val());

    foodtrucklist[$("#position_foodtruck_array").val()] = foodTruckEdited;

    var foodtrucklistJson = JSON.stringify(foodtrucklist);

    localStorage.setItem('foodtruck', foodtrucklistJson);

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
    foodtrucklist.splice($("#position_foodtruck_array_delete").val(), 1);

    var foodtrucklistJson = JSON.stringify(foodtrucklist);

    localStorage.setItem('foodtruck', foodtrucklistJson);

    alert("Exclusão realizada com sucesso");

    $("#position_foodtruck_array_delete").val(null);

    //recarrega a pagina
    location.reload();


}
