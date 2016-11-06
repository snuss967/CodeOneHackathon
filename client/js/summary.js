import { Profiles } from '../../collections/profiles.js';
import { Investments } from '../../collections/investments.js';

Template.financialSummary.onCreated(function() {
    Meteor.subscribe('Profiles', function() {
		drawCharts();
	});
    Meteor.subscribe('Investments');
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

//Draws all the charts to the screen
function drawCharts() {
	drawInvestmentSummaryPieChart();
	drawInvestmentChangeLineChart();
}

function drawInvestmentSummaryPieChart() {
	var data = getPieChartData();

	var options = {
		legend: { position: 'right' },
		colors: [ '#00b2a9', '#d7c826', '#007396', '#ffaa4d', '#7c2529', '#f3dd6d' ],
		backgroundColor: { fill:'transparent' }
	};

	var chart = new google.visualization.PieChart(document.getElementById('investmentSummaryPieChart'));

	chart.draw(data, options);
}

function drawInvestmentChangeLineChart() {
	var data = getChangeLineChartData();

	var options = {
		legend: { position: 'left' },
		backgroundColor: { fill:'transparent' }
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
		var profile = Profiles.findOne({name: "Matthew"});

		var totalValueToday = 0;
		var totalValueYesterday = 0;
		for(var i = 0; i < profile.investments.length; i++) {
			totalValueToday += profile.investments[i].values[profile.investments[i].values.length - 1];
			totalValueYesterday += profile.investments[i].values[profile.investments[i].values.length - 2];
		}

		var percent = totalValueToday / totalValueYesterday;
		if(percent < 1.0) {
			percent = (-1 / percent).toFixed(2);
		}

		return percent.toFixed(2);
	}
});
