class Product {
    constructor (id_Product, productName, productType,productPrice, productStock){
        this.id_Product = id_Product;
        this.productName = productName;
        this.productType = productType;
        this.productPrice = productPrice;
        this.productStock = productStock;
        this.vendas = [];
    }

}  

var listProductLocalStorage = [];
listProduct();

function listProduct(){

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
    var product = new Product(nextId, $("#productName").val(), $("#productType").val(), $("#productPrice").val(), $("#productStock").val());

    listProductLocalStorage.push(product);

    var listProductSetLocalStorage = JSON.stringify(listProductLocalStorage);

    localStorage.setItem('foodtruck', listProductSetLocalStorage);

    alert("Produto inserido com sucesso");

    //recarrega a pagina
    location.reload();

}

function getEditProduct(idProduct){

    var productEdit = listProductLocalStorage[id];

    $("#id_Product").val(productEdit.id_Product);
    $("#position_Product_Array").val(id);
    $("#productName").val(productEdit.productName);
    $("#productType").val(productEdit.productType);
    $("#productPrice").val(productEdit.productPrice);
    $("#productStock").val(productEdit.productStock);

    $('#prodModal').modal('show');

}

function createEditProduct(){
    if ($("#id_product").val() !== "") {
        saveEditProduct();
    } else { 
        inserProduct();
    }
}

function saveEditProduct(){

    var productEdited = new Product ($("#productId").val(), $("#productName").val(), $("#productType").val(), $("#productPrice").val(), $("#productStock").val());

    listProductLocalStorage[$("#position_Product_Array").va()] = productEdited;

    localStorage.setItem('product', listProductSetLocalStorage);

    alert("Produto editado com sucesso.")

    //resetando valores
    $("#productId").val(null);
    $("#position_Product_Array").val(null);

    //recarrega a pagina
    location.reload();

}

function getDelProduct(){

}

function deleteProduct(){

}