google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

//Draws all the charts to the screen
function drawCharts() {
	drawInvestmentSummaryPieChart();
	drawInvestmentChangeLineChart();
}
  
function drawInvestmentSummaryPieChart() {
	var data = google.visualization.arrayToDataTable([
		['Investment', 'Total Value'],
		['Roth IRA', 105.3],
		['ETF', 20.3],
		['Stocks', 50.23],
		['Hedge', 70.203],
		['Liquid', 30.232]
	]);

	var options = {
		title: 'My Investments', 
		legend: { position: 'right' }
	};

	var chart = new google.visualization.PieChart(document.getElementById('investmentSummaryPieChart'));

	chart.draw(data, options);
}
  
function drawInvestmentChangeLineChart() {
	var data = google.visualization.arrayToDataTable([
		['Month', 'Expected', 'Realized'],
		['January', 1000, 400],
		['February', 1170, 460],
		['March', 660, 1120],
		['April', 1030, 540],
		['May', 660, 1120],
		['June', 123, 421],
		['July', 423, 1111],
		['August', 789, 321],
		['September', 432, 543],
		['October', 12, 423],
		['November', 1233, 412],
		['December', 660, 1120],

	]);

	var options = {
		title: 'Investment Change',
		legend: { position: 'right' }
	};

	var chart = new google.visualization.LineChart(document.getElementById('investmentChangeLineChart'));

	chart.draw(data, options);
}
	  