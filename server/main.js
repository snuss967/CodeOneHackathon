import { Meteor } from 'meteor/meteor';

import { Profiles } from '../collections/profiles.js';
import { Investments } from '../collections/investments.js';

import { publishAll } from './publish.js';
import { allowAll } from './allow.js';
import { profilesMethods } from './profilesMethods.js'
import { investmentsMethods } from './investmentsMethods.js';

Meteor.startup(() => {
	allowAll();
	publishAll();
	
	profilesMethods();
	investmentsMethods();

	Investments.remove({});
	Profiles.remove({});
	
	//TODO initialize database
	if(Profiles.find({}).fetch().length < 1) { 
		var values = [1000, 2000, 3000, 4500, 6250, 9000, 13250, 19500, 27000, 38000, 50000, 65000];
		Investments.insert({
			name: "Roth IRA",
			rateOfReturn: 1.0,
			description: "A Roth IRA is a ...[INSERT REAL DESCRIPTION HERE]...",
			values: values
		});
		
		values = [1000, 2000, 3000, 5000, 7500, 11000, 15250, 22500, 34500, 47250, 58250, 69000];
		Investments.insert({
			name: "Securities",
			rateOfReturn: 1.5,
			description: "A ETF is ...[INSERT REAL DESCRIPTION HERE]...",
			values: values
		});
		
		values = [1000, 2000, 10000, 4500, 11000, 3000, 25000, 15000, 9500, 2000, 13500, 14000];
		Investments.insert({
			name: "Mutual Funds",
			rateOfReturn: 5.0,
			description: "A Hedge fund is ...[INSERT REAL DESCRIPTION HERE]...",
			values: values
		});
		
		values = [1000, 2000, 3000, 4000, 5250, 7000, 9000, 11250, 13500, 15750, 18000, 21000];
		Investments.insert({
			name: "Stocks",
			rateOfReturn: 0.5,
			description: "A Stock is ...[INSERT REAL DESCRIPTION HERE]...",
			values: values
		});
		
		values = [1000, 2000, 3500, 4500, 2000, 9000, 11750, 15500, 20000, 23500, 19000, 27500];
		Investments.insert({
			name: "Certificates of Deposits",
			rateOfReturn: 2.5,
			description: "A some other investment option is...[INSERT REAL DESCRIPTION HERE]...",
			values: values
		});

		var investments = Investments.find({}).fetch();
		var balance = 25304.75;
		
		Profiles.insert({
			name: "Matthew",
			investments: investments,
			balance: balance
		});
	}
	
});