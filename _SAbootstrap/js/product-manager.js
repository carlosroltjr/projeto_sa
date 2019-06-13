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
        html += '<tr>' + '<th>'+listProductLocalStorage[i].id_Product+'</th>' + '<th>'+listProductLocalStorage[i].productName+'</th>'+ '<th>'+listProductLocalStorage[i].productType+'</th>'+ '<th>'+listProductLocalStorage[i].productPrice+'</th>'+ '<th>'+listProductLocalStorage[i].productStock+'</th>'+ '<th>'+'<button type="button" class="btn btn-secondary btn-small" onclick="javascript:getEditProduct(' + i + ')">Editar</button>' +'</th>' + '<th>'+ '<button type="button" class="btn btn-danger btn-small" onclick="javascript:getDelProduct(' + i + ')">Excluir</button><br>' +'</th>'+ '</tr>';
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

    /*if(localStorage.id_Product){localStorage.id_Product=Number(localStorage.id_Product)+1;}
    else{  localStorage.setItem("id_Product", 1);} */

    //recuperar dados no formulário
    var product = new Product(nextId, $("#productName").val(), $("#productType").val(), $("#productPrice").val(), $("#productStock").val());

    listProductLocalStorage.push(product);

    var listProductSetLocalStorage = JSON.stringify(listProductLocalStorage);

    localStorage.setItem('product', listProductSetLocalStorage);

    alert("Produto inserido com sucesso");

    //recarrega a pagina
    location.reload();

}

function getEditProduct(id_Product){

    var productEdit = listProductLocalStorage[id_Product];

    $("#id_Product").val(productEdit.id_Product);
    $("#position_Product_Array").val(id_Product);
    $("#productName").val(productEdit.productName);
    $("#productType").val(productEdit.productType);
    $("#productPrice").val(productEdit.productPrice);
    $("#productStock").val(productEdit.productStock);

    $('#prodModal').modal('show');

}

function createEditProduct(){
    if ($("#id_Product").val() !== "") {
        saveEditProduct();
    } else {
        insertProduct();
    }
}

function saveEditProduct(){

    var productEdited = new Product ($("#id_Product").val(), $("#productName").val(), $("#productType").val(), $("#productPrice").val(), $("#productStock").val());

    listProductLocalStorage[$("#position_Product_Array").val()] = productEdited;

    var listProductSetLocalStorage = JSON.stringify(listProductLocalStorage);

    localStorage.setItem('product', listProductSetLocalStorage);

    alert("Produto editado com sucesso.")

    //resetando valores
    $("#id_Product").val(null);
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
