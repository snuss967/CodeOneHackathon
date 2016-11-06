const investmentTypes = [
{
	name: "Money Markets",
	id: "moneyMarkets",
	description: "Money Market Accounts are similar to savings accounts in that they are extremely liquid. However, here at First National Bank they receive a higher rate of return and require a $1000 minimum balance to open. They are a strong option for someone seeking to keep their funds liquid but would like to return a higher rate of return than a traditional savings account.",
	averageRateOfReturn: 0.01
},
{
	name: "Individual Retirement Account, Traditional and Roth (IRA)",
	id: "ira",
	description: "An Individual Retirement Account IRA is a Government protected tax free retirement account in which one can place $5,500 of their yearly income tax free those 	50 and over can contribute $6,500 per year. They come in a few forms including: The traditional where you pay taxes on your money when you receive it at Retirement and the Roth where you pay taxes on your money when you place it in your account. IRAs are great for those looking for a retirement account if they do not have a 401K or if they have already maxed out their 401K. ",
	averageRateOfReturn: 0.075
},
{
	name: "",
	id: "",
	description: "",
	averageRateOfReturn: 
},
{
	name: "",
	id: "",
	description: "",
	averageRateOfReturn: 
},
{
	name: "",
	id: "",
	description: "",
	averageRateOfReturn: 
},
{
	name: "",
	id: "",
	description: "",
	averageRateOfReturn: 
},


];

Money Markets</option>
	  <option value="Savings_Account">Savings Account</option>
	  <option value="Mutual_Fund">Mutual Fund</option>
	  <option value="IRA_Traditional_Roth">Individual Retirement account, Traditional and Roth</option>

Template.invest.helpers({
	investmentTypes: function() {
		return investmentTypes;
	}
});