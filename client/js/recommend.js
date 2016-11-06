google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

//Draws all the charts to the screen
function drawCharts() {
	drawRecommendedInvestmentChart();
}

function drawRecommendedInvestmentChart() {
	//var data = generateRecommendedInvestmentChartData();

	//var options = {
//		legend: { position: 'left' },
//		backgroundColor: { fill:'transparent' }
//	};

	//var chart = new google.visualization.LineChart(document.getElementById('recommendedInvestmentChart'));

	//chart.draw(data, options);
}

var getCompoundInterestAndSetMessage = function(numberOfYears, annualAddition) {
	if(numberOfYears == 0 || annualAddition == 0)
	{
		$('.advice-content').html(""); 
		$('.plan').html("");
		return 0;
	}

	if(numberOfYears <= 2 && annualAddition >= 9500)
	{
		$('.advice-content').html("Money Market Accounts are similar to savings accounts in that they are a very good option for keeping your money liquid or available. However, here at First National Bank they receive a higher rate of return and require a $1000 minimum balance to open. They are a strong option for someone seeking to keep their funds liquid but would like to return a higher rate of return than a traditional savings account.");
		$('.plan').html("A Money Market Account");
		return 0.01;
	}
	else if((numberOfYears == 3 || numberOfYears == 4) && annualAddition <= 5000)
	{
		$('.advice-content').html("Bonds are debt issued by Countires, Cities, or Corporations in an attempt to raise money. They have maturity lengths of different terms but are a relatively safe way to keep your money and earn interest. However, they are not liquid.");
		$('.plan').html("An Assortment Of Bonds");
		return 0.06;
	}
	else if(numberOfYears <= 2 && annualAddition <= 9500)
	{
		$('.advice-content').html("You are going to need your money extremely soon and you don’t want to take any risk losing it. A savings account is your best option.");
		$('.plan').html("A Savings Account");
		return 0.0008;
	}
	else if((numberOfYears <= 10 && numberOfYears >= 5) && annualAddition >= 7000)
	{
		$('.advice-content').html("A mutual fund is a collection of stocks that are managed and are owned by a collection of people. Low risk mutual funds are funds that will generate returns that are usually lower than a high or moderate risk mutual fund by the chance that one will lose a significant amount of money in the account is much lower. If you are willing to take more risk to hopefully see higher returns on your investment take a look at moderate risk mutual funds.");
		$('.plan').html("A Mutual Fund");
		return 0.08;
	}
	else if((numberOfYears <= 8 && numberOfYears >= 5) && annualAddition >= 3000)
	{
		$('.advice-content').html("You have a relatively moderate duration of time to invest and watch your money grow. You will most likely see the greatest returns during this time period in index funds with your money.");
		$('.plan').html("An Index Fund");
		return 0.084;
	}
	else if(((numberOfYears <= 15 && numberOfYears >= 10)) && annualAddition <= 4000)
	{
		$('.advice-content').html("A mutual fund is a collection of stocks that are managed and are owned by a collection of people. Moderate risk mutual funds are funds that will generate return rates that are usually higher than a low risk mutual fund, but lower than a high risk mutual fund. They run the risk of losing money but not as great as a High Risk mutual fund. Combined with some individidual stocks it allows you to take slightly more risk for the chance of having higher returns.");
		$('.plan').html("A Mutual Fund");
		return 0.092;
	}
	else if((numberOfYears <= 15 && numberOfYears >= 10) && annualAddition >= 4000)
	{
		$('.advice-content').html("A mutual fund is a collection of stocks that are managed and are owned by a collection of people. Moderate risk mutual funds are funds that will generate return rates that are usually higher than a low risk mutual fund, but lower than a high risk mutual fund. They run the risk of losing money but not as great as a High Risk mutual fund. These funds are taxed and may or may not charge commission, most usually charge management fees on both the initial principle as well as the returns that the fund yields.");
		$('.plan').html("A Mutual Fund");
		return 0.096;
	}
	else if((numberOfYears <= 25 && numberOfYears >= 15) && (annualAddition >= 2000))
	{
		$('.advice-content').html("A mutual fund is a collection of stocks that are managed and are owned by a collection of people. High risk mutual funds are funds that will generate return rates that are usually higher than a low or moderate risk mutual fund but run the risk one will lose a significant amount of money in the account. Combined with stocks peered for growth with a little more risk this will return dividends.");
		$('.plan').html("A Mutual Fund");
		return 0.095;
	}
	else if((numberOfYears >= 25) && (annualAddition <= 7000 && annualAddition >= 4500))
	{
		$('.advice-content').html("An Individual Retirement Account IRA is a Government protected tax free retirement account in which one can place $5,500 of their yearly income tax free those 	50 and over can contribute $6,500 per year. They come in a few forms including: The traditional where you pay taxes on your money when you receive it at Retirement and the Roth where you pay taxes on your money when you place it in your account. IRAs are great for those looking for a retirement account if they do not have a 401K or if they have already maxed out their 401K.");
		$('.plan').html("An IRA");
		return 0.1;
	}
	else if((numberOfYears >= 35) && annualAddition >= 10000)
	{
		$('.advice-content').html("Congratulations you are well on your way to becoming a multimillionaire. Invest in a distribution of high yielding securities, stocks, index funds and mutual funds and you will experience the success of reaching the top 1%. When you do be sure to use the resources available to you such as private banking to further increase and maintain your wealth. While benefiting both your family and your community.");
		$('.plan').html("A Diversified Portfolio");
		return 0.11;
	}
	else if((numberOfYears >= 40) && annualAddition >= 8000)
	{
		$('.advice-content').html("Congratulations you are well on your way to becoming a multimillionaire. Invest in a distribution of high yielding securities, stocks, index funds and mutual funds and you will experience the success of reaching the top 1%. When you do be sure to use the resources available to you such as private banking to further increase and maintain your wealth. While benefiting both your family and your community.");
		$('.plan').html("A Diversified Portfolio");
		return 0.115;
	}
	else if((numberOfYears >= 45) && annualAddition >= 5000)
	{
		$('.advice-content').html("Congratulations you are well on your way to becoming a multimillionaire. Invest in a distribution of high yielding securities, stocks, index funds and mutual funds and you will experience the success of reaching the top 1%. When you do be sure to use the resources available to you such as private banking to further increase and maintain your wealth. While benefiting both your family and your community.");
		$('.plan').html("A Diversified Portfolio");
		return 0.12;
	}
	else
	{
		$('.advice-content').html("For a long term approach when you are not investing a significant amount of money. It is smart to stay diversified in an assortment of funds that have significant risk, but also a much more significant chance for high reward over the long term.");
		$('.plan').html("A Diversified Portfolio");
		return 0.12;
	}



}

//Generates the data by using the compound interested with additions formula
var generateRecommendedInvestmentChartData = function() {
	var numberOfYears = parseInt($('.years-num').val());
	var annualAddition = parseInt($('.savings-num').val());
	var p = annualAddition;

	var r = getCompoundInterestAndSetMessage(numberOfYears, annualAddition);

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
