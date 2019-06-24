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

        var produto = listProductLocalStorage[i]

        if (foodtruck_id == produto.codigo_foodtruck) {

          html += '<tr>' + '<th>'+produto.productCode+'</th>' + 
          '<th>'+produto.productName+'</th>'+ 
          '<th>'+produto.productType+'</th>'+ 
          '<th>'+produto.productPrice+'</th>'+ 
          '<th id="estoque'+produto.productCode+'">'+produto.productStock+'</th>'+ 
          '<th>'+'<input type="number" id="qtdeOrder'+produto.productCode+'" class="input-number" max="'+ produto.productStock +'"></input>' +'</th>' + 
          '<th>'+ '<button type="button" class="btn btn-info btn-small" onclick="javascript:getSales(' + produto.productCode + ')">Adicionar Produto</button><br>' +'</th>'+ '</tr>';
        }
    }

//id="estoque'+i+'" foi colocado 'i' - para que cada produto descremente no estoque 

    $("#listSales").append(html);
}

var saleValue = 0;

function getSales(productCode) {
    listProductLocalStorage = JSON.parse(localStorage.getItem('product'));

    const produto = listProductLocalStorage
        .find(p => p.productCode == productCode)

    var pedido = document.getElementById("qtdeOrder"+(produto.productCode)).value;
    var preco = parseFloat(produto.productPrice);
    var somaPedido = preco*pedido;

    saleValue += somaPedido;

    $("#saleValue").val(saleValue);
    

    var prodName = produto.productName
    $("#ordList").append(prodName + " " + pedido +"x <br>");

}

function saveSales() {
    listSalesLocalStorage = JSON.parse(localStorage.getItem('venda'));
    if(listSalesLocalStorage == null) {
        listSalesLocalStorage = [];
    }
//new date é dizer que a venda será na data atual
    const date = new Date;
    //dateSale= now.getDay()+","+now.getMonth()+","+now.getFullYear();
    var nextIdSale = listSalesLocalStorage.length+1;
    var saleValue = parseFloat($("#saleValue").val())
    var venda = new Venda (nextIdSale, date, saleValue, foodtruck_id)
    
    listSalesLocalStorage.push(venda);

//estava faltando salvar no localstorage novamente

    saveToStorage("venda", listSalesLocalStorage)

    

    //= listSalesLocalStorage[i].productPrice * $("#qtdeOrder.value").val();
}

//o botão confirmar vendas ta chamando essa função
function registerSale() {
  /* isso é só pra testar, qnd der f5 na página volta as
  informações originais. */
  for (var i = 0; listProductLocalStorage.length>i; i++){
      const produto = listProductLocalStorage[i];
      var qtdpedido = document.getElementById("qtdeOrder"+produto.productCode).value;
      var estoque = parseFloat(produto.productStock);
      estoque = estoque-qtdpedido;
      document.getElementById("estoque"+produto.productCode).innerHTML = estoque;

      produto.productStock = estoque
  }

  saveToStorage("product", listProductLocalStorage)
   
  alert("Venda confirmada!");    

  location.reload();             
  
  //Ativa a função de salvar venda.
 saveSales();
}

function cancelSale(){

  alert("Venda cancelada!");

  location.reload();
}
