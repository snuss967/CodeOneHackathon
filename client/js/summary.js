import { Profiles } from '../../collections/profiles.js';
import { Investments } from '../../collections/investments.js';

Template.financialSummary.onCreated(function() {
    Meteor.subscribe('Profiles');
    Meteor.subscribe('Investments');
});

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);

//Draws all the charts to the screen
function drawCharts() {
	drawInvestmentSummaryPieChart();
	drawInvestmentChangeLineChart();
}

/*
 var data = new google.visualization.DataTable();
      data.addColumn('string', 'Pizza');
      data.addColumn('number', 'Populartiy');
      data.addRows([
        ['Pepperoni', 33],
        ['Hawaiian', 26],
        ['Mushroom', 22],
        ['Sausage', 10], // Below limit.
        ['Anchovies', 9] // Below limit.
      ]);
	*/

function drawInvestmentSummaryPieChart() {
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

	var options = {
		title: 'My Investments',
		legend: { position: 'right' }
	};

	var chart = new google.visualization.PieChart(document.getElementById('investmentSummaryPieChart'));

	chart.draw(data, options);
  }

  function drawInvestmentChangeLineChart() {
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
	
	var options = {
		title: 'Investment Change',
		legend: { position: 'right' }
	};

	var chart = new google.visualization.LineChart(document.getElementById('investmentChangeLineChart'));

	chart.draw(data, options);
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
		
		return totalValue;
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
			percent = -1 / percent;
		}
		
		return percent;
	}
});

