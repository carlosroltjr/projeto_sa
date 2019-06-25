var listProductLocalStorage = [];

listProduct();

function listProduct(){

    listProductLocalStorage = JSON.parse(localStorage.getItem('product'));
    //salvando produto no localstorage?
    if (typeof (Storage) !== "undefined"){
        if (listProductLocalStorage == null) {
            listProductLocalStorage = [];
        }
    }

    //atribuindo os produtos para as tabelas (criar elemento com quantidade de produtos?)
    $("#quantProducts").html(listProductLocalStorage.length.toString());

    var html = "";

    for (var i=0; i<listProductLocalStorage.length; i++) {

     if (foodtruck_id == listProductLocalStorage[i].codigo_foodtruck) {

        html += '<tr>' + '<th width="50">'+listProductLocalStorage[i].productCode+'</th>' +
        '<th>'+listProductLocalStorage[i].productName+'</th>'+
        '<th width="100">'+listProductLocalStorage[i].productType+'</th>'+
        '<th width="75">'+listProductLocalStorage[i].productPrice+'</th>'+
        '<th width="100">'+listProductLocalStorage[i].productStock+'</th>'+
        '<th width="100">'+'<button type="button" class="btn btn-secondary btn-small" onclick="javascript:getEditProduct(' + i + ')">Editar</button>' +
        '</th>' + '<th width="100">'+ '<button type="button" class="btn btn-danger btn-small" onclick="javascript:getDelProduct(' + i + ')">Excluir</button><br>' +'</th>'+ '</tr>';
    }
}

    $("#listProduct").append(html);

}


function insertProduct(){
    //salvando produto no localstorage
    listProductLocalStorage = JSON.parse(localStorage.getItem('product'));

    if(listProductLocalStorage == null) {
        listProductLocalStorage = [];
    }

    //atribuindo id automaticamente
    var nextId = listProductLocalStorage.length +1;


    //recuperar dados no formulário

    
    var product = new Product(nextId,  $("#productName").val(), $("#productType").val(), $("#productPrice").val(), $("#productStock").val(), foodtruck_id);

    listProductLocalStorage.push(product);

    var listProductSetLocalStorage = JSON.stringify(listProductLocalStorage);

    localStorage.setItem('product', listProductSetLocalStorage);

    alert("Produto inserido com sucesso");

    //recarrega a pagina
    location.reload();

}

function getEditProduct(id_Product){

    var productEdit = listProductLocalStorage[id_Product];

    $("#productCode").val(productEdit.productCode);
    $("#position_Product_Array").val(id_Product);
    $("#productName").val(productEdit.productName);
    $("#productType").val(productEdit.productType);
    $("#productPrice").val(productEdit.productPrice);
    $("#productStock").val(productEdit.productStock);
    $("#codigo_foodtruck").val(productEdit.codigo_foodtruck);

    $('#prodModal').modal('show');

}

function createEditProduct(){
    if ($("#productCode").val() !== "") {
        saveEditProduct();
    } else {
        insertProduct();
    }
}

function saveEditProduct(){

    var productEdited = new Product ($("#productCode").val(), $("#productName").val(), $("#productType").val(), $("#productPrice").val(), $("#productStock").val(), foodtruck_id);

    listProductLocalStorage[$("#position_Product_Array").val()] = productEdited;

    var listProductSetLocalStorage = JSON.stringify(listProductLocalStorage);

    localStorage.setItem('product', listProductSetLocalStorage);

    alert("Produto editado com sucesso.")

    //resetando valores
    $("#productCode").val(null);
    $("#position_Product_Array").val(null);

    //recarrega a pagina
    location.reload();

}

function getDelProduct(id_Product){
    $("#position_Product_Array_delete").val(id_Product);
    $('#delModal').modal('show');
}

function deleteProduct(){

    //remove item do array
    listProductLocalStorage.splice($("#position_Product_Array_delete").val(), 1);

    var listProductSetLocalStorage = JSON.stringify(listProductLocalStorage);

    localStorage.setItem('product', listProductSetLocalStorage);

    alert("Exclusão Realizada com Sucesso");

    $("#position_Product_Array_delete").val(null);

    //recarrega a pagina
    location.reload();


}
