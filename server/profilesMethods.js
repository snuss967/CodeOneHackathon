import { Meteor } from 'meteor/meteor';

import { Profiles } from '../collections/profiles.js';

export function profilesMethods() {
	Meteor.methods({
		'createProfile':function(name, investments, balance) {
			var profileObject = {
				name: name,
				investments: investments,
				balance: balance
			}
			
			Profiles.insert(profileObject);
		},
		'removeProfile':function(profileId) {
			Profiles.remove(profileId);
		}, 
		'updateProfile':function(profileId, name, investments, balance) {
			Profiles.update({_id: profileId}, {
				$set: {
					name: name,
					investments: investments,
					balance: balance
				}
			});
		}
	});
}