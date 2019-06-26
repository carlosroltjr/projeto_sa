// global variables

var listFoodtruckLocalStorage = loadFromStorage('foodtruck');
var sales = loadFromStorage('venda')

google.charts.load('current', {'packages': ['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
  // Some raw data (not necessarily accurate)

  var arrayTitle = [];
  var salesMonth = [];
  var salesMonthFoodTruck = [];
  var arrayValues = [];

  arrayTitle.push('Month');

  for(let food of listFoodtruckLocalStorage)
  {
    arrayTitle.push(food.nome_foodtruck);
  }

  for (let sale of sales) {
    var date = new Date(sale.dateSale);
    var month = date.getFullYear() + '/' +
        (date.getMonth().toString().length == 1 ? '0' + date.getMonth() :
                                                  date.getMonth());

    if(salesMonth.indexOf(month) == -1)                                              
    salesMonth.push(month);
  }

  // montando os meses dos foodtrucks
  for (let sale of sales) {
    var date = new Date(sale.dateSale);
    var month = date.getFullYear() + '/' +
        (date.getMonth().toString().length == 1 ? '0' + date.getMonth() :
                                                  date.getMonth());
    const foodtruck = listFoodtruckLocalStorage.find(p => p.codigo_foodtruck == sale.codigo_foodtruck)

    salesMonthFoodTruck.push({month:month,foodtruck:foodtruck.nome_foodtruck});
  }

  for(let saleMonth of salesMonth)
  {
      arrayValues.push(saleMonth);

      for(let food of arrayTitle)
      {
        if(food != "Month")
        {
          var foodSales = salesMonthFoodTruck.filter(s => s.foodtruck == food && s.month == saleMonth);
          arrayValues.push(foodSales != undefined ? foodSales.length : 0);
        }
      }
  }

  var data = google.visualization.arrayToDataTable([arrayTitle,arrayValues]);

  var options = {
    title: 'Venda por mês dos Food Trucks',
    vAxis: {title: 'Venda'},
    hAxis: {title: 'Mês'},
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart =
      new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}


function saleReport() {
  // range de data - filtrando por data

  if (typeof (Storage) !== 'undefined') {
    if (sales == null) {
      sales = [];
    }
  }


  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const report = sales
                     .filter(v => {
                       if (checkAdmin) return true
                         return (v.codigo_foodtruck) == foodtruck_id
                     })
                     .filter(v => {
                       const saleTime = Date.parse(v.dateSale);
                       return saleTime < lastDay.valueOf() &&
                           saleTime > firstDay.valueOf();
                     });

  const reportPerFoodtruck = new Map();
  for (let sale of report) {
    const saleOwner = sale.codigo_foodtruck;
    if (!reportPerFoodtruck.has(saleOwner)) {
      reportPerFoodtruck.set(saleOwner, []);
    }
    reportPerFoodtruck.get(saleOwner).push(sale);
  }

  let owners = Array.from(reportPerFoodtruck.keys());
  for (let ownerId of owners) {
    let ownerReports = reportPerFoodtruck.get(ownerId);

    const foodtruck =
        listFoodtruckLocalStorage.find(p => p.codigo_foodtruck == ownerId)

    let html = `
      <table class="table table-bordered-striped" id="tabela">
        <tr>
          <th colspan="3">${foodtruck.nome_foodtruck}</th>
        </tr>
        <tr>
          <th>ID DA VENDA</th>
          <th>DATA E HORA</th>
          <th>VALOR</th>
        </tr>
        <tbody>`;

    var total = 0;
    for (let sale of ownerReports) {
      html += `
        <tr>
          <td>${sale.idSales}</td> 
          <td>${sale.dateSale}</td> 
          <td>${sale.valueSale}</td> 
        </tr>`;
      total += parseFloat(sale.valueSale);
    }

    html += `
        </tbody>
        <tfoot> 
          <tr>
            <th colspan="2">Total das Vendas:</th>
            <td>${total}</td>
          </tr>
        </tfoot>
      </table>`;
    $('#tables').append(html);
  }
}


saleReport()
