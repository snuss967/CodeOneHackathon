import { Meteor } from 'meteor/meteor';

import { Profiles } from '../collections/profiles.js';
import { Investments } from '../collections/investments.js';

export function allowAll() {

	Profiles.allow({
		'insert': function(userId, doc) {
			return false;
		},
		'update': function(userId, doc) {
			return false;
		},
		'remove': function(userId, doc) {
			return false;
		}
	});

	Investments.allow({
		'insert': function(userId, doc) {
			return false;
		},
		'update': function(userId, doc) {
			return false;
		},
		'remove': function(userId, doc) {
			return false;
		}
	});

}