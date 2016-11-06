google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

var weeksYears = 0;
var maxYValue = 10000;
var maxXValue = 70;

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
			vAxis: {
				title: 'Money Earned',
				format: 'currency',
				minValue: 0,
			},
			hAxis: {
				title: '# Weeks',
				minValue: 0,
			}
		};
	} else
	{
		var options = {
			legend: { position: 'left' },
			backgroundColor: { fill:'transparent' },
			vAxis: {
				title: 'Money Earned',
				format: 'currency',
				minValue: 0,
			},
			hAxis: {
				title: 'Years',
				minValue: 0,
			}
		};
	}

	var chart = new google.visualization.LineChart(document.getElementById('recommendedSavingsChart'));

	chart.draw(data, options);
}

var getInterestRateInvestmentMethodDream = function (numberOfYears, weeklyAddition)
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
	console.log(interestRate);
	if(interestRate == 0)
	{
		return "Savings Account";
	}
	else if(interestRate == 0.0155)
	{
		return "Certificate of Deposit";
	}
	else if(interestRate == 0.055)
	{
		return "Municipility or Corporate Bond";
	}
	else if(interestRate == 0.095)
	{
		return "Index Fund";
	}
	else if(interestRate >= 0.107)
	{
		return "Mutual Fund";
	}
	else
	{
		return "Diversified Portfolio";
	}
}
//take this function and pass in as a parameter to our call below when editing HTML
var generateResponseText = function(lengthOfTimeNoInvestment, lengthOfTimeInvestment, totalCostOfActivity, goal, interestRate) {
	if(interestRate > 0)
	{
		console.log(getInvestmentType(interestRate));
		console.log(interestRate);
		var text = "In order to help you accomplish your goal of " + goal + " we invested your money in a First National Bank " + getInvestmentType(interestRate) + " which allowed you to earn enough money to accomplish your goal in " + lengthOfTimeInvestment + " by using compound interest. If you would have just saved your money without taking any risk and reaping any reward it would have taken you " + lengthOfTimeNoInvestment + " in order to achieve the same goals. Contact First National today to learn how we can help you in achieving your goals and creating unforgettable firsts. Let us join you!";
		console.log(text);
		return text;
	}
	else
	{
		var text = "By putting your money for " + lengthOfTimeNoInvestment + " in a First National Bank Savings Account you can easily achieve your goal of " + goal + ". As you go through and life and have even bigger goals then your current please use the calculator again to see the power of compound interest and how First National Bank can use it to help you accomplish your goals sooner."
		console.log(text);
		return text;
	}
}

var calculateNumberOfYears = function(futureValue, interestRate, principal)
{
	var years = Math.log(1 + ((futureValue * interestRate)/principal))/(Math.log(1 + interestRate));
	return years - 1;
}

//Generates the data by using the compound interested with additions formula
var generateRecommendedSavingsChartData = function() {
	var totalCostOfActivity  = parseInt($('.price').val());
	maxYValue = totalCostOfActivity;
	var nameOfActivity= $('.dream').val();
	var weeklyAddition = parseInt($('.dream-savings-num').val());
	var annualAddition = weeklyAddition * 52;
	var numberOfWeeks = (totalCostOfActivity/weeklyAddition);
	var numberOfYears = (numberOfWeeks / 52);

	var compoundedInterest = new google.visualization.DataTable();
	compoundedInterest.addColumn('number', 'Year');
	compoundedInterest.addColumn('number', 'Final Value');
	compoundedInterest.addColumn('number', 'Goal');

	if(!isFinite(numberOfWeeks)) {
		return compoundedInterest;
	}

	var p = annualAddition;

	console.log("TOTAL COST: " + totalCostOfActivity);
	console.log("WEEKLY ADDITION: " + weeklyAddition);
	console.log("ANNUAL ADDITION: " + annualAddition);
	console.log("NUMBER OF WEEKS: " + numberOfWeeks);
	console.log("NUMBER OF YEARS: " + numberOfYears);

	var r = getInterestRateInvestmentMethodDream(numberOfYears, annualAddition);
	console.log("R: " + r);

	//The compounded interests from year 0 to year [numberOfYears]
	if(r != 0)
	{
		weeksYears = 1;
		maxXValue = numberOfYears;

		var row = [];
		row[0] = 0;
		row[1] = annualAddition;
		row[2] = totalCostOfActivity;
		compoundedInterest.addRow(row);

		for(var n = 1; n < numberOfYears; n++) {
			row[0] = n;
			row[1] = p * Math.pow(1 + r, n) + annualAddition * ((Math.pow(1 + r, n + 1) - (1 + r)) / r);
			row[2] = totalCostOfActivity;

			compoundedInterest.addRow(row);
		}
		$('#feedback_box').html(generateResponseText(Math.round(numberOfYears) + " years", Math.round(calculateNumberOfYears(totalCostOfActivity, r, annualAddition)) + " years", totalCostOfActivity, nameOfActivity, r));
		return compoundedInterest;
	}
	else
	{
		if(!isFinite(numberOfWeeks)) {
			return compoundedInterest;
		}

		weeksYears = 0;
		maxXValue = numberOfWeeks;

		var total = weeklyAddition;
		var row = [];
		row[0] = 0;
		row[1] = total;
		row[2] = totalCostOfActivity;

		compoundedInterest.addRow(row);
		for(var n = 1; n < numberOfWeeks; n++) {
			row[0] = n;
			total += weeklyAddition;
			row[1] = total;
			row[2] = totalCostOfActivity;

			compoundedInterest.addRow(row);
		}
		$('#feedback_box').html(generateResponseText(Math.round(numberOfWeeks) + " weeks", 0, totalCostOfActivity, nameOfActivity, 0));
		return compoundedInterest;
	}
}

$(document).ready(function() {
	setTimeout(function() {
		$('.dream-savings').change(function() {
			$('.dream-savings-num').val($(this).val());
			drawCharts();
		});

		$('.dream-savings-num').change(function() {
			$('.dream-savings').val($(this).val());
			drawCharts();
		});

		$('.price').change(function() {
			drawCharts();
		});
	}, 50);
});
