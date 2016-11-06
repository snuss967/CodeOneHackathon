import { Profiles } from '../../collections/profiles.js';
import { Investments } from '../../collections/investments.js';

Template.financialSummary.onCreated(function() {
    Meteor.subscribe('Profiles', function() {
		drawCharts();
	});
    Meteor.subscribe('Investments');
});

google.charts.load('current', {'packages':['corechart']});

//Draws all the charts to the screen
function drawCharts() {
	drawInvestmentSummaryPieChart();
	drawInvestmentChangeLineChart();
}

function drawInvestmentSummaryPieChart() {
	var data = getPieChartData();

	var options = {
		legend: { position: 'bottom' },
		colors: [ '#006633', '#001e0f', '#004723', '#32845b', '#99c1ad', '#197547' ],
		backgroundColor: { fill:'transparent' }
	};

	var chart = new google.visualization.PieChart(document.getElementById('investmentSummaryPieChart'));

	chart.draw(data, options);
}

function drawInvestmentChangeLineChart() {
	var data = getChangeLineChartData();

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

	var chart = new google.visualization.LineChart(document.getElementById('investmentChangeLineChart'));

	chart.draw(data, options);
}

var getPieChartData = function() {
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Investment');
	data.addColumn('number', 'Total Value');

	//TODO Hard code for now
	var profile = Profiles.findOne({name: "Matthew"});

	for(var i = 0; i < profile.investments.length; i++) {
		var row = [];
		row[0] = profile.investments[i].name;
		row[1] = profile.investments[i].values[profile.investments[i].values.length - 1];
		data.addRow(row);
	}

	return data;
}

var getChangeLineChartData = function() {
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'Year');
	data.addColumn('number', 'Total Value');

	//TODO Hard code for now
	var profile = Profiles.findOne({name: "Matthew"});

	var totals = [];
	for(var i = 0; i < profile.investments.length; i++) {
		for(var j = 0; j < profile.investments[i].values.length; j++) {
			if(i == 0) totals[j] = 0;
			totals[j] += profile.investments[i].values[j];
		}
	}

	for(var i = 0; i < totals.length; i++) {
		var row = [];
		row[0] = i;
		row[1] = totals[i];
		data.addRow(row);
	}

	return data;
	}

Template.financialSummary.helpers({
    profileName: function() {
		//TODO Hard code for now
		var profile = Profiles.findOne({name: "Matthew"});
        return profile.name;
    },
	totalValue: function() {
		//TODO Hard code for now
		var profile = Profiles.findOne({name: "Matthew"});

		var totalValue = 0;
		for(var i = 0; i < profile.investments.length; i++) {
			totalValue += profile.investments[i].values[profile.investments[i].values.length - 1];
		}

		totalValue += profile.balance;

		return totalValue.toLocaleString();
	},
	todaysChange: function() {
		//TODO hard code for now
		var profile = Profiles.findOne({name: "Matthew"});

		var totalValueToday = 0;
		var totalValueYesterday = 0;
		for(var i = 0; i < profile.investments.length; i++) {
			totalValueToday += profile.investments[i].values[profile.investments[i].values.length - 1];
			totalValueYesterday += profile.investments[i].values[profile.investments[i].values.length - 2];
		}

		var percent = totalValueToday / totalValueYesterday;
		if(percent < 1.0) {
			percent = (-1.0 / percent);
		}

		percent--;
		percent = percent * 100;
		return percent.toFixed(2);
	},
	todaysChangeSeparated: function() {
		//TODO hard code for now
		var profile = Profiles.findOne({name: "Matthew"});

		var changes = [];

		//Changes will have, a color, the investment thats changing, the percent change
		for(var i = 0; i < profile.investments.length; i++) {
			var percentChange = profile.investments[i].values[profile.investments[i].values.length - 1] / profile.investments[i].values[profile.investments[i].values.length - 2];
			if(percentChange < 1.0) {
				percentChange = (-1.0 / percentChange);
			}
			percentChange--;

			var color = (percentChange < 0) ? 'red' : '#063';
			var prefix = (percentChange < 0) ? "-" : "+";

			changes.push({
				name: profile.investments[i].name,
				percentChange: prefix + (percentChange * 100).toFixed(2),
				color: color
			});
		}

		console.log(changes);

		return changes;
	},
	comparedToDifferentTimes: function() {
		//TODO hard code for now
		var profile = Profiles.findOne({name: "Matthew"});

		var comparedTo = [];

		//Compared to will have a time difference, and a multiplier
		var totalValues = [];
		for(var i = 0; i < profile.investments.length; i++) {
			for(var j = 0; j < profile.investments[i].values.length; j++) {
				if(i == 0) totalValues[j] = 0;
				totalValues[j] += profile.investments[i].values[j];
			}
		}

		for(var i = 0; i < totalValues.length - 1; i += 3) {
			var multiplier = totalValues[totalValues.length - 1] / totalValues[i];
			if(multiplier < 1.0) {
				multiplier = (-1.0 / percentChange);
			}

			comparedTo.push({
				yearsAgo: totalValues.length - i,
				multiplier: multiplier.toFixed(2),
				color: (multiplier < 0) ? 'red' : '#063',
				preposition: (multiplier < 0) ? 'worse' : 'better'
			});
		}

		return comparedTo.reverse();
	}
});

// $(document).ready(function() {
// 	$(".total-value, .change").hover(function() {
// 		alert("hey");
// 		$(this).css({
// 			"top": "320px",
// 			"transition-duration": "0.25s"
// 		});
// 	});
// });
