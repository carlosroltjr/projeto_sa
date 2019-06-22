var foodtrucklist = [];
listFoodtruck();


function listFoodtruck() {
    foodtrucklist = JSON.parse(localStorage.getItem('foodtruck'));
   

    //verifica se o navegador tem suporte para localStorage
    if (typeof (Storage) !== "undefined") {

        if (foodtrucklist == null) {
            foodtrucklist = [];
        }

    }

    //atribuindo a quantidade de foodtrucks
    $("#quantidadeFoodtrucks").html(foodtrucklist.length.toString());

    //cria a lista de food trucks em cards
    var html = "";

    for (var i = 0; i < foodtrucklist.length; i++) {
        html += '<div class="col-sm-4">' +
            '<div class="card text-center" style="width:20rem; height:23rem;";>' +
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

    //insere conteúdo ao final da lista
    $("#listFoodtruck").append(html);

}



function createOrEditFoodtruck() {
//diferencia as ações - por usar o mesmo modal 

    if ($("#codigo_foodtruck").val() !== "") { 
        saveEditFoodtruck(); 
    }else{ 
        createFoodtruck(); 
    }

}



function createFoodtruck() {
//salvando o foodtruck no localstorage

    foodtrucklist = JSON.parse(localStorage.getItem('foodtruck'));


    //atribuindo o id de forma automatica - para não haver ID repetido em caso de exclusão
    var nextId;
    
    if(localStorage.codigo_foodtruck){
        nextId =Number(localStorage.codigo_foodtruck)+1;
    }else{ 
        nextId = 1;
    }
   
    localStorage.setItem("codigo_foodtruck", nextId);

    //recuperando os dados do formulario
    var foodtruck = new Foodtruck(nextId, $("#nome_foodtruck").val(), $("#responsavel").val(), $("#data").val(), $("#telefone").val(), $("#login").val(), $("#senha").val());

    //inserindo novo foodtruck criado na lista
    foodtrucklist.push(foodtruck);

    //criando a lista em string para salvar no localStorage    
    var foodtrucklistJson = JSON.stringify(foodtrucklist);
    localStorage.setItem('foodtruck', foodtrucklistJson);


    alert("Cadastro realizado com sucesso!");

    //recarregando a página - para gerar novo foodtrucklist
    location.reload();

}

function getEditFoodtruck(id) {
//mostrando o modal para editar food truck - pelo ID html

    var foodtruckEdit = foodtrucklist[id];    //foodtruckEdit = valores que serão editados


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






function saveEditFoodtruck() {
//valores editados são colocados de volta no array da lista

    var foodTruckEdited = new Foodtruck ($("#codigo_foodtruck").val(),$("#nome_foodtruck").val(), $("#responsavel").val(), $("#data").val(), $("#telefone").val(), $("#login").val(), $("#senha").val());

    foodtrucklist[$("#position_foodtruck_array").val()] = foodTruckEdited;     //foodtruckEdited são os valores que foram editados
    
    // resetando os valores
    $("#codigo_foodtruck").val(null);
    $("#position_foodtruck_array").val(null);

    
    //recarregando a pagina
    location.reload();

}


function getDelFoodtruck(id) {
    $("#position_foodtruck_array_delete").val(id);
    $('#delModal').modal('show');
}


function deleteFoodtruck() {

    //remove o item do array
    foodtrucklist.splice($("#position_foodtruck_array_delete").val(), 1);  //índice inicial do elemento ,  a quantidade de elementos que serão retirados

    var foodtrucklistJson = JSON.stringify(foodtrucklist);

    localStorage.setItem('foodtruck', foodtrucklistJson);

    alert("Exclusão realizada com sucesso!");


    //resetando
    $("#position_foodtruck_array_delete").val(null);

    //recarrega a pagina
    location.reload();

}
