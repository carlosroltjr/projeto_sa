//Produtos à venda
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
        html += '<tr>' + '<th>'+listProductLocalStorage[i].id_Product+'</th>' + '<th>'+listProductLocalStorage[i].productName+'</th>'+ '<th>'+listProductLocalStorage[i].productType+'</th>'+ '<th>'+listProductLocalStorage[i].productPrice+'</th>'+ '<th>'+listProductLocalStorage[i].productStock+'</th>'+ '<th>'+'<input type="number" id="qtdeOrder" class="input-number" max="'+ listProductLocalStorage[i].productStock +'"></input>' +'</th>' + '<th>'+ '<button type="button" class="btn btn-danger btn-small" onclick="javascript:getSales(' + i + ')">Adicionar Produto</button><br>' +'</th>'+ '</tr>';
    }

    $("#listSales").append(html);
}

function getSales() {
    var venda = "";
    venda = listProductLocalStorage[i].productPrice * $("#qtdeOrder.value").val();
}

function saveSales() {

}

function registerSale() {

}