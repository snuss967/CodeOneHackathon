import { Meteor } from 'meteor/meteor';

import { Investments } from '../collections/investments.js';
import { Profiles } from '../collections/profiles.js';

export function investmentsMethods() {
	Meteor.methods({
		'createInvestment':function(name, rateOfReturn, description, values) {
			var investmentObject = {
				name: name,
				rateOfReturn: rateOfReturn,
				description: description,
				values: values
			}
			
			Investments.insert(investmentObject);
		},
		'removeInvestment':function(investmentId) {
			var allProfiles = Profiles.find({}).fetch();
			for(var i = 0; i < allProfiles.length; i++) {
				var profileInvestments = allProfiles[i].investments;
				for(var j = 0; j < profileInvestments.length; j++) {
					if(profileInvestments[j] == investmentId) {
						profileInvestments.splice(j, 1);
						
						Profile.update({_id: allProfiles[i]._id}, {
							$set: {investments: profileInvestments}
						});
						
						break;
					}
				}
			}
			
			Investments.remove(investmentId);
		},
		'updateInvestment':function(investmentId, name, rateOfReturn, description, values) {
			Investments.update({_id: investmentId}, {
				$set: {
					name: name,
					rateOfReturn: rateOfReturn,
					description: description,
					values: values
				}
			});
		},
		'getPieChartData':function(userName) {
			console.log("CALLED");
			var profile = Profiles.findOne({name:userName})

			var rowData = [];
			for(var i = 0; i < profile.investments.length; i++) {
				var row = [];
				row[0] = profile.investments[i].name;
				row[1] = profile.investments[i].values[profile.investments[i].values.length - 1];
				
				rowData[i] = row;
			}
			
			console.log("ROW DATA: " + rowData);
			
			return rowData;
		},
		'getChangeLineChartData': function(userName) {
			var profile = Profiles.findOne({name: userName});

			var rowData = [];
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
				rowData[i] = row;
			}
			
			return rowData;
		}
	});
}