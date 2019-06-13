class Foodtruck {
    constructor(codigo_foodtruck,nome_foodtruck,responsavel,data,telefone,login,senha) {
      this.codigo_foodtruck = codigo_foodtruck;
      this.nome_foodtruck = nome_foodtruck;
      this.responsavel = responsavel;
      this.data = data;
      this.telefone = telefone;
      this.login = login;
      this.senha = senha;
      this.produtos = [];
    }
  }

  class Product {
    constructor (id_Product, productName, productType,productPrice, productStock, codigo_foodtruck){
        this.id_Product = id_Product;
        this.productName = productName;
        this.productType = productType;
        this.productPrice = productPrice;
        this.productStock = productStock;
        this.vendas = [];
        this.codigo_foodtruck = codigo_foodtruck;
    }

}