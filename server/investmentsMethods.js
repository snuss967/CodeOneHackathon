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
		}
	});
}