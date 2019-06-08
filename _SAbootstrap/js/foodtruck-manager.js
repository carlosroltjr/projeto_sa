/*function cadastroFoodTruck(){
            if (typeof(Storage)!=="undefined") {
                if(localStorage.cont){
                    localStorage.cont=Number(localStorage.cont)+1;
                }else{
                    localStorage.cont = 1;
                }
            var cad = document.getElementById('nomeFoodTruck').value+";"+document.getElementById('codigo').value+";"+document.getElementsByClassName('tipoProduto').value+";"+document.getElementById('nomeResponsavel').value+";"+document.getElementById('telefoneResponsavel').value+";"+document.getElementById('emailLogin').value+";"+document.getElementById('dataEntrada').value;

            var cad_json = JSON.stringify(cad);
            localStorage.setItem("cad"+localStorage.cont, cad_json);

            var form = document.getElementById("fconf");
            form.style.display="none";

            var span = document.getElementById("mensagem");
            span.innerHTML = "Dados salvos!";

            }else{
            }
}


function mostraCadastro(){
        var form=document.getElementById("fconf");
        form.style.display="block"; 
}


function lerCadastro(){
            var cad_json = localStorage.getItem("cad");
            var cad = JSON.parse(cad_json);
            var span = document.getElementById("mensagem");
            span.innerHTML = "Não consigo fazer esse trem funcionar";
}


function apagarCadastro(){
            localStorage.removeItem("cad");
            var span = document.getElementById("mensagem");
            span.innerHTML = "Também não consigo :(";       
}*/

var listfoodtruckLocalStorage = [];
listFoodtruck();


function listFoodtruck()
{   
    listfoodtruckLocalStorage = JSON.parse(localStorage.getItem('foodtruck'));
    //salvando o foodtruck no localstorage
    if (typeof(Storage)!=="undefined") {

        if(typeof(listfoodtruckLocalStorage) == null)
        {
            listfoodtruckLocalStorage = [];
        }

    }

    for (var i = 0; i < listfoodtruckLocalStorage.length ; i++) {
    {
        var html = '<div class="col-sm-3">' +
        '<div class="card text-center" style="width:15rem; height:20rem;">'+
        '<div class="card text-center" style="width:15rem; height:20rem;">'+
        '<div class="card-header text-white bg-dark mb-2">'+
        '<h4 class="text">'+listfoodtruckLocalStorage[i].nome_foodtruck+'/h4>'+
        '</div>'+
        '<div class="card-body">'+
           '<h6 class="card-subtitle mb-3 text-muted">'+listfoodtruckLocalStorage[i].codigo_foodtruck+'</h6>'+
            '<ul class="list-group list-group-flush">'+
            '<li class="list-group-item">'+listfoodtruckLocalStorage[i].data+'</li>'+
            '<li class="list-group-item">'+listfoodtruckLocalStorage[i].responsavel+'</li>'+
            '<li class="list-group-item">'+listfoodtruckLocalStorage[i].telefone+'</li>'+
            '<li class="list-group-item">'+listfoodtruckLocalStorage[i].login+'</li>'+
            '</ul>'+
            '</div>'+
            '<div>'+
            '<button type="button" class="btn btn-secondary btn-small" data-toggle="modal" data-target="#editModal" onclick="javascript:getEditFoodtruck('+i+')">Editar</button>'+
            '<button type="button" class="btn btn-danger btn-small" data-toggle="modal" data-target="#delModal">Excluir</button><br>'+
            '</div>'+
            '</div>'+
            '</div>';
    }

}

function createFoodtruck()
{
    //recuperar os dados do formulario
    var foodtruck = new Foodtruck($("#codigo_foodtruck"),$("#nome_foodtruck"),$("#responsavel"),$("#data"),$("#telefone"),$("#login"),$("#senha"));

    //criar regra para validar unicidade de codigo


    //salvando o foodtruck no localstorage
    if (typeof(Storage)!=="undefined") {

        listfoodtruckLocalStorage = JSON.parse(localStorage.getItem('foodtruck'));

        if(typeof(listfoodtruckLocalStorage) == null)
        {
            listfoodtruckLocalStorage = [];
        }

        listfoodtruckLocalStorage.push(foodtruck);

        var listFoodtruckSetLocalStorage =  JSON.stringify(listfoodtruckLocalStorage);

        localStorage.setItem('foodtruck',listFoodtruckSetLocalStorage);
   
    }

    listFoodtruck();
    //var foodtruckJson = JSON.stringify(foodtruck);

}

function getEditFoodtruck(id)
{
    var foodtruckEdit = listfoodtruckLocalStorage[id];
}


function editFoodtruck()
{

}

function deleteFoodtruck()
{

}

