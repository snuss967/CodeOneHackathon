google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

//Draws all the charts to the screen
function drawCharts() {
	drawRecommendedInvestmentChart();
}

function drawRecommendedInvestmentChart() {
	var data = generateRecommendedInvestmentChartData();

	var options = {
		legend: { position: 'left' },
		backgroundColor: { fill:'transparent' }
	};

	var chart = new google.visualization.LineChart(document.getElementById('recommendedInvestmentChart'));

	chart.draw(data, options);
}

//Generates the data by using the compound interested with additions formula
var generateRecommendedInvestmentChartData = function() {
	var numberOfYears = parseInt($('.years-num').val());
	var annualAddition = parseInt($('.savings-num').val());
	var p = annualAddition;
	
	//TODO CHANGE ONCE SPENCER GETS THE CONDITIONALS DONE
	var r = .115;
	
	//The compounded interests from year 0 to year [numberOfYears]
	var compoundedInterest = new google.visualization.DataTable();
	compoundedInterest.addColumn('number', 'Year');
	compoundedInterest.addColumn('number', 'Final Value');

	var row = [];
	row[0] = 0;
	row[1] = annualAddition;
	compoundedInterest.addRow(row);
	
	for(var n = 1; n < numberOfYears; n++) {
		row[0] = n;
		row[1] = p * Math.pow(1 + r, n) + annualAddition * ((Math.pow(1 + r, n + 1) - (1 + r)) / r); 
		
		compoundedInterest.addRow(row);
	}
	
	return compoundedInterest;
}

$(document).ready(function() {
	setTimeout(function() {
		$('.years-num').val($('.years').val());
		$('.savings-num').val($('.savings').val());

		$('.years').change(function() {
			$('.years-num').val($(this).val());
			drawCharts();
		});
		$('.savings').change(function() {
			$('.savings-num').val($(this).val());
			drawCharts();
		});

		$('.years-num').change(function() {
			$('.years').val($(this).val());
			drawCharts();
		});
		$('.savings-num').change(function() {
			$('.savings').val($(this).val());
			drawCharts();
		});
	}, 50);
});
