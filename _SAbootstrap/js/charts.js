google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        // Some raw data (not necessarily accurate)
        var data = google.visualization.arrayToDataTable([
          ['Month', 'FoodTruck 1', 'FoodTruck 2 ', 'FoodTruck 3', 'FoodTruck 4', 'FoodTruck 5', 'FoodTruck 6'],
          ['2004/05',  165,      938,         522,             998,           450,      614.6],
          ['2005/06',  135,      1120,        599,             1268,          288,      682],
          ['2006/07',  157,      1167,        587,             807,           397,      623],
          ['2007/08',  139,      1110,        615,             968,           215,      609.4],
          ['2008/09',  136,      691,         629,             1026,          366,      569.6]
        ]);

        var options = {
          title : 'Venda por mês dos Food Trucks',
          vAxis: {title: 'Venda'},
          hAxis: {title: 'Mês'},
          seriesType: 'bars',
          series: {5: {type: 'line'}}
        };

        var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
        chart.draw(data, options);
      }


function saleReport (){

  //range de data - filtrando por data

  var sales = loadFromStorage("venda")

    if (typeof (Storage) !== "undefined"){
        if (sales == null) {
            sales = [];
        }
    }


  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const report = sales
    .filter(v => {
      if (checkAdmin)
        return true
      return (v.codigo_foodtruck) == foodtruck_id
    })
    .filter(v => {
      const saleTime = Date.parse(v.dateSale);
      return saleTime < lastDay.valueOf() && saleTime > firstDay.valueOf();
    });

  const reportPerFoodtruck = new Map();
  for(let sale of report) {
    const saleOwner = sale.codigo_foodtruck;
    if (!reportPerFoodtruck.has(saleOwner))
    {
      reportPerFoodtruck.set(saleOwner, []);
    }
    reportPerFoodtruck.get(saleOwner).push(sale);
  }

  let owners = Array.from(reportPerFoodtruck.keys());
  for (let ownerId of owners)
  {
    let ownerReports = reportPerFoodtruck.get(ownerId);

    var listFoodtruckLocalStorage = JSON.parse(localStorage.getItem('foodtruck'));

    const foodtruck = listFoodtruckLocalStorage.find(p => p.codigo_foodtruck == ownerId)

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

      html +=`
        <tr>
          <td>${sale.idSales}</td> 
          <td>${sale.dateSale}</td> 
          <td>${sale.valueSale}</td> 
        </tr>`;
      total+=parseFloat(sale.valueSale);
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
    $("#tables").append(html);
  }
}


saleReport ()
