import { Mongo } from 'meteor/mongo';
import { InvestmentSchema } from './investments.js';

export const Profiles = new Mongo.Collection('Profiles');

ProfileSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		optional: false
	},
	investments: {
		type: [InvestmentSchema],
		label: "Investments",
		optional: true
	}
});

Profiles.attachSchema(ProfileSchema);