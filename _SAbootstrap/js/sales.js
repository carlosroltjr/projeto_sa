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
        html += '<tr>' + '<th>'+listProductLocalStorage[i].id_Product+'</th>' + '<th>'+listProductLocalStorage[i].productName+'</th>'+ '<th>'+listProductLocalStorage[i].productType+'</th>'+ '<th>'+listProductLocalStorage[i].productPrice+'</th>'+ '<th>'+listProductLocalStorage[i].productStock+'</th>'+ '<th>'+'<input type="number" id="qtdeOrder'+i+'" class="input-number" max="'+ listProductLocalStorage[i].productStock +'"></input>' +'</th>' + '<th>'+ '<button type="button" class="btn btn-info btn-small" onclick="javascript:getSales(' + listProductLocalStorage[i].id_Product + ')">Adicionar Produto</button><br>' +'</th>'+ '</tr>';
    }

    $("#listSales").append(html);
}

function getSales(id_Product) {
    listProductLocalStorage = JSON.parse(localStorage.getItem('product'));

    var saleValue = "";
    var pedido = document.getElementById("qtdeOrder"+(id_Product-1)).value;
    var somaPedido = 0; 
    somaPedido += (listProductLocalStorage[id_Product-1].productPrice*pedido); 


    saleValue = somaPedido;
    

    $("#saleValue").val(saleValue);
    
    
   
}

function saveSales() {
    var venda = new Venda (nextId, saleDate, $("#productName").val(), $("#productType").val(), $("#productPrice").val(),)
    
    listSalesLocalStorage.push(venda);

    //= listSalesLocalStorage[i].productPrice * $("#qtdeOrder.value").val();
}

function registerSale() {

}
