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
        html += '<tr>' + '<th>'+listProductLocalStorage[i].productCode+'</th>' + 
        '<th>'+listProductLocalStorage[i].productName+'</th>'+ 
        '<th>'+listProductLocalStorage[i].productType+'</th>'+ 
        '<th>'+listProductLocalStorage[i].productPrice+'</th>'+ 
        '<th id="estoque">'+listProductLocalStorage[i].productStock+'</th>'+ 
        '<th>'+'<input type="number" id="qtdeOrder'+i+'" class="input-number" max="'+ listProductLocalStorage[i].productStock +'"></input>' +'</th>' + 
        '<th>'+ '<button type="button" class="btn btn-info btn-small" onclick="javascript:getSales(' + listProductLocalStorage[i].productCode + ')">Adicionar Produto</button><br>' +'</th>'+ '</tr>';
    }

    $("#listSales").append(html);
}

var saleValue = 0;

function getSales(productCode) {
    listProductLocalStorage = JSON.parse(localStorage.getItem('product'));

    var pedido = document.getElementById("qtdeOrder"+(productCode-1)).value;
    var preco = parseFloat(listProductLocalStorage[productCode-1].productPrice);
    var somaPedido = preco*pedido;

    saleValue += somaPedido;

    $("#saleValue").val(saleValue);
    

    var prodName = listProductLocalStorage[productCode-1].productName;
    $("#ordList").append(prodName + " " + pedido +"x <br>");

}

function saveSales() {
    listSalesLocalStorage = JSON.parse(localStorage.getItem('venda'));
    if(listSalesLocalStorage == null) {
        listSalesLocalStorage = [];
    }
    date = new Date;
    //dateSale= now.getDay()+","+now.getMonth()+","+now.getFullYear();
    var nextIdSale = listSalesLocalStorage.length+1;
    var foodtruck_id = JSON.parse(localStorage.getItem("foodtruck",));
    

    var venda = new Venda (nextIdSale, date, saleValue, foodtruck_id)

    listSalesLocalStorage.push(venda);

    

    //= listSalesLocalStorage[i].productPrice * $("#qtdeOrder.value").val();
}

//o botão confirmar vendas ta chamando essa função
function registerSale() {
  /* isso é só pra testar, qnd der f5 na página volta as
  informações originais. */
  var pedido = document.getElementById("qtdeOrder0").value;
  var estoque = parseFloat(listProductLocalStorage[0].productStock);
  estoque = estoque-pedido;
  document.getElementById("estoque").innerHTML = estoque;
  
  //Ativa a função de salvar venda.
  saveSales();
}
