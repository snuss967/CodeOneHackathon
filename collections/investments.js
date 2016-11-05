import { Mongo } from 'meteor/mongo';

export const Investments = new Mongo.Collection('Investments');

export const InvestmentSchema = new SimpleSchema({
	name: {
		type: String,
		label: "Name",
		optional: false
	},
	rateOfReturn: {
		type: Number,
		label: "Rate of Return",
		optional: false,
		decimal: true
	},
	description: {
		type: String,
		label: "Description",
		optional: false
	},
	values: {
		type: [Number],
		label: "Values",
		optional: false,
		decimal: true
	}
});

Investments.attachSchema(InvestmentSchema);