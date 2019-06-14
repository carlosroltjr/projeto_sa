//Produtos à venda
function salesProductsList(){
    listProductLocalStorage = JSON.parse(localStorage.getItem('product'));

    if (typeof (Storage) !== "undefined"){
        if (listProductLocalStorage == null) {
            listProductLocalStorage = [];
        }
    }

    for (var i=0; i<listProductLocalStorage.length; i++) {
        html += '<tr>' + '<th>'+listProductLocalStorage[i].id_Product+'</th>' + '<th>'+listProductLocalStorage[i].productName+'</th>'+ '<th>'+listProductLocalStorage[i].productType+'</th>'+ '<th>'+listProductLocalStorage[i].productPrice+'</th>'+ '<th>'+listProductLocalStorage[i].productStock+'</th>'+ '<th>'+'<button type="button" class="btn btn-secondary btn-small" onclick="javascript:getEditProduct(' + i + ')">Editar</button>' +'</th>' + '<th>'+ '<button type="button" class="btn btn-danger btn-small" onclick="javascript:getDelProduct(' + i + ')">Excluir</button><br>' +'</th>'+ '</tr>';
    }

    $("#listProduct").append(html);
}

function getSales() {

}

function saveSales() {

}

function registerSale() {

}