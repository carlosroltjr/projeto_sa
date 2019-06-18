//Produtos à venda
var listSalesLocalStorage = [];
salesProductsList();

function salesProductsList(){
    listProductLocalStorage = JSON.parse(localStorage.getItem('product'));

    if (typeof (Storage) !== "undefined"){
        if (listProductLocalStorage == null) {
            listProductLocalStorage = [];
        }
    }

    var html = "";

    for (var i=0; i<listProductLocalStorage.length; i++) {
        html += '<tr>' + '<th>'+listProductLocalStorage[i].id_Product+'</th>' + '<th>'+listProductLocalStorage[i].productName+'</th>'+ '<th>'+listProductLocalStorage[i].productType+'</th>'+ '<th>'+listProductLocalStorage[i].productPrice+'</th>'+ '<th>'+listProductLocalStorage[i].productStock+'</th>'+ '<th>'+'<input type="number" id="qtdeOrder'+i+'" class="input-number" max="'+ listProductLocalStorage[i].productStock +'"></input>' +'</th>' + '<th>'+ '<button type="button" class="btn btn-danger btn-small" onclick="javascript:getSales(' + listProductLocalStorage[i].id_Product + ')">Adicionar Produto</button><br>' +'</th>'+ '</tr>';
    }

    $("#listSales").append(html);
}

function getSales(id_Product) {
    listProductLocalStorage = JSON.parse(localStorage.getItem('product'));

    var htmlSales = "";
    var pedido = document.getElementById("qtdeOrder"+(id_Product-1)).value;
    var somaPedido = 0; 
    somaPedido += (listProductLocalStorage[id_Product-1].productPrice*pedido); 

    if (htmlSales ===""){
        htmlSales += '<div class = "col-sm-3">'+
        '<div class = "card text-center" style = "width:15rem;height:15rem;">'+ 
        '<div class="card-header text-white bg-dark mb-2">'+
        '<h4 class="text">'+
        'Informações da Venda'+
        '</h4>' +
        '</div>' + 
        '<div class="card-body">'+'<h6 class="card-subtitle mb-3 text-muted">'+
        'R$'+somaPedido + '</h6>'+ '<div class="btnCard">' +
        '<button type="button" class="btn btn-secondary btn-small" onclick="javascript:saveSales(' + id_Product + ')">Confirmar Venda</button>'+'</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    

    $("#confirmSale").append(htmlSales);
    } else {
        htmlSales += '<div class = "col-sm-3">'+
        '<div class = "card text-center" style = "width:15rem;height:15rem;">'+ 
        '<div class="card-header text-white bg-dark mb-2">'+
        '<h4 class="text">'+
        'Informações da Venda'+
        '</h4>' +
        '</div>' + 
        '<div class="card-body">'+'<h6 class="card-subtitle mb-3 text-muted">'+
        'R$'+somaPedido + '</h6>'+ '<div class="btnCard">' +
        '<button type="button" class="btn btn-secondary btn-small" onclick="javascript:saveSales(' + id_Product + ')">Confirmar Venda</button>'+'</div>' +
        '</div>' +
        '</div>' +
        '</div>';
    }
    
   
}

function saveSales() {
    var venda = new Venda (nextId, saleDate, $("#productName").val(), $("#productType").val(), $("#productPrice").val(),)
    
    listSalesLocalStorage.push(venda);

    //= listSalesLocalStorage[i].productPrice * $("#qtdeOrder.value").val();
}

function registerSale() {

}
