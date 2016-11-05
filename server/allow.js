import { Meteor } from 'meteor/meteor';

import { Profiles } from '../collections/profiles.js';
import { Investments } from '../collections/investments.js';

export function allowAll() {

	Profiles.allow({
		'insert': function(userId, doc) {
			return true;
		},
		'update': function(userId, doc) {
			return true;
		},
		'remove': function(userId, doc) {
			return true;
		}
	});

	Investments.allow({
		'insert': function(userId, doc) {
			return true;
		},
		'update': function(userId, doc) {
			return true;
		},
		'remove': function(userId, doc) {
			return true;
		}
	});

}