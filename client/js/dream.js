google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

var weeksYears = 0;

//Draws all the charts to the screen
function drawCharts() {
	drawRecommendedSavingsChart();
}

function drawRecommendedSavingsChart() {
	var data = generateRecommendedSavingsChartData();
	if(weeksYears == 0)
	{
		var options = {
			legend: { position: 'left' },
			backgroundColor: { fill:'transparent' },
			vAxis: {title: 'How Much $ Earned'},
			hAxis: {title: '# Weeks'}
		};
	} else
	{
		var options = {
			legend: { position: 'left' },
			backgroundColor: { fill:'transparent' },
			vAxis: {title: 'How Much $ Earned'},
			hAxis: {title: '# Years'}
		};
	}

	var chart = new google.visualization.LineChart(document.getElementById('recommendedSavingsChart'));

	chart.draw(data, options);
}

var getInterestRateInvestmentMethod = function (numberOfYears, weeklyAddition)
{
	if(numberOfYears < 1.5)
	{
		return 0;
	}
	else if(numberOfYears < 3 && weeklyAddition > 50)
	{
		//check out a CD
		return 0.0155;
	}
	else if(numberOfYears < 5 && weeklyAddition > 30)
	{
		//check out a bond
		return 0.055;
	}
	else if(numberOfYears <= 5)
	{
		//savinsg account
		return 0;
	}
	else if(numberOfYears < 9)
	{
		//check out an index fund
		return 0.095;
	}
	else if(numberOfYears < 15)
	{
		return 0.10;
	}
	else if(numberOfYears < 20)
	{
		return 0.107;
	}
	else if(numberOfYears < 25)
	{
		return 0.115;
	}
	else
	{
		return 0.12;
	}
}
var getInvestmentType = function(interestRate)
{
	switch(interestRate)
	{
		case interestRate == 0:
			return "Savings Account";
			break
		case interestRate == 0.0155:
			return "Certificate of Deposit";
			break;
		case interestRate == 0.055:
			return "Municipility or Corporate Bond";
			break;
		case interestRate == 0.095:
			return "Index Fund";
			break;
		case interestRate >= 0.107:
			return "Mutual Fund";
			break;
		default:
			return "A Well Diversified Portfolio";
			break;
	}
}
//take this function and pass in as a parameter to our call below when editing HTML
var generateResponseText = function(lengthOfTimeNoInvestment, lengthOfTimeInvestment, weeksYears, totalCostOfActivity, goal, interestRate) {
	if(interestRate > 0)
	{
		var text = "In order to help you accomplish your goal of " + goal + " we invested your money in a First National Bank " + getInvestmentType(interestRate) + " which allowed you to earn enough money to accomplish your goal in " + lengthOfTimeInvestment + " by using compound interest. If you would have just saved your money without taking any risk and reaping any reward it would have taken you " + lengthOfTimeNoInvestment + " in order to achieve the same goals. Contact First National today to learn how they can help you in achieving your goals and creating unforgettable firsts. Let us join you!";
		return text;
	}
	else
	{
		var text = "By putting your money for " + lengthOfTimeNoInvestment + " in a First National Bank Savings Account you can easily achieve your goal of " + goal + ". As you go through and life and have even bigger goals then your current please use the calculator again to see the power of compound interest and how First National Bank can use it to help you accomplish your goals sooner."
		return text;
	}
}

//Generates the data by using the compound interested with additions formula
var generateRecommendedSavingsChartData = function() {
	var totalCostOfActivity  = parseInt($('.price').val());
	var nameOfActivity= $('.dream').val();
	var weeklyAddition = parseInt($('.dream-savings-num').val());
	var annualAddition = weeklyAddition * 52;
	var numberOfWeeks = (totalCostOfActivity/weeklyAddition);
	var numberOfYears = (numberOfWeeks / 52);
	var p = annualAddition;

	var r = getInterestRateInvestmentMethod(numberOfYears, annualAddition);

	//The compounded interests from year 0 to year [numberOfYears]
	if(r != 0)
	{
		weeksYears = 1;
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
	else
	{
		weeksYears = 0;
		var compoundedInterest = new google.visualization.DataTable();
		compoundedInterest.addColumn('number', 'Week');
		compoundedInterest.addColumn('number', 'Final Value');
		var total = weeklyAddition;
		var row = [];
		row[0] = 0;
		row[1] = total;

		compoundedInterest.addRow(row);
		for(var n = 1; n < numberOfWeeks; n++) {
			row[0] = n;
			total += weeklyAddition;
			row[1] = total;
			compoundedInterest.addRow(row);
		}

		return compoundedInterest;
	}
}

$(document).ready(function() {
	setTimeout(function() {
		$('.savings').change(function() {
			$('.savings-num').val($(this).val());
			drawCharts();
		});
	}, 50);
});
