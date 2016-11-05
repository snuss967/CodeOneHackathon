import { Meteor } from 'meteor/meteor';

import { Profiles } from '../collections/profiles.js';

export function profilesMethods() {
	Meteor.methods({
		'createProfile':function(name, investments) {
			var profileObject = {
				name: name,
				investments: investments
			}
			
			Profiles.insert(profileObject);
		},
		'removeProfile':function(profileId) {
			Profiles.remove(profileId);
		}, 
		'updateProfile':function(profileId, name, investments) {
			Profiles.update({_id: profileId}, {
				$set: {
					name: name,
					investments: investments
				}
			});
		}
	});
}