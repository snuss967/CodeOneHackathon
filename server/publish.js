import { Meteor } from 'meteor/meteor';

import { Profiles } from '../collections/profiles.js'
import { Investments } from '../collections/investments.js';

export function publishAll() {

	Meteor.publish("Profiles", function() {
        return Profiles.find();
    });

	Meteor.publish("Investments", function(){
		return Investments.find();
	});
	
}