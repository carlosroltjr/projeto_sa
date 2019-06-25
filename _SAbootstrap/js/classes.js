class Foodtruck {
    constructor(codigo_foodtruck,nome_foodtruck,responsavel,data,telefone,login,senha) {
      this.codigo_foodtruck = codigo_foodtruck;
      this.nome_foodtruck = nome_foodtruck;
      this.responsavel = responsavel;
      this.data = data;
      this.telefone = telefone;
      this.login = login;
      this.senha = senha;
      this.product = [];
    }
  }

class Product {
  constructor (productCode, productName, productType,productPrice, productStock, codigo_foodtruck){
      this.productCode = productCode;
      this.productName = productName;
      this.productType = productType;
      this.productPrice = productPrice;
      this.productStock = productStock;
      this.codigo_foodtruck = codigo_foodtruck;
      this.vendas = [];
      
  }

}

class Venda {
  constructor (idSales, dateSale, valueSale, codigo_foodtruck,products){
    this.idSales = idSales;
    this.dateSale = dateSale;
    this.valueSale = valueSale;
    this.codigo_foodtruck = codigo_foodtruck;
    this.products = products;
  }
}