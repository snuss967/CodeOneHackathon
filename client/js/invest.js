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
	description: "An Individual Retirement Account IRA is a Government protected tax free retirement account in which one can place $5,500 of their yearly income tax free those 	50 and over can contribute $6,500 per year. They come in a few forms including: The traditional where you pay taxes on your money when you receive it at Retirement and the Roth where you pay taxes on your money when you place it in your account. IRAs are great for those looking for a retirement account if they do not have a 401K or if they have already maxed out their 401K.",
	averageRateOfReturn: 0.075
},
{
	name: "Low Risk Mutual Funds",
	id: "lowRiskMutualFunds",
	description: "A mutual fund is a collection of stocks that are managed and are owned by a collection of people. Low risk mutual funds are funds that will generate returns that are usually lower than a high or moderate risk mutual fund by the chance that one will lose a significant amount of money in the account is much lower. These funds are taxed and may or may not charge commission, most usually charge management fees on both the initial principle as well as the returns that the fund yields. Low risk mutual funds are a good option for those looking for a short term investment vehicle.",
	averageRateOfReturn: 0.08
},
{
	name: "High Risk (Aggressive Growth) Mutual Funds",
	id: "highRiskMutualFunds",
	description: "A mutual fund is a collection of stocks that are managed and are owned by a collection of people. High risk mutual funds are funds that will generate return rates that are usually higher than a low or moderate risk mutual fund but run the risk one will lose a significant amount of money in the account. These funds are taxed and may or may not charge commission, most usually charge management fees on both the initial principle as well as the returns that the fund yields. High risk mutual funds are a good option for those looking for a long term investment vehicle.",
	averageRateOfReturn: 0.1
},
{
	name: "Moderate Risk Mutual Funds",
	id: "moderateRiskMutualFunds",
	description: "A mutual fund is a collection of stocks that are managed and are owned by a collection of people. Moderate risk mutual funds are funds that will generate return rates that are usually higher than a low risk mutual fund, but lower than a high risk mutual fund. They run the risk of losing money but not as great as a High Risk mutual fund. These funds are taxed and may or may not charge commission, most usually charge management fees on both the initial principle as well as the returns that the fund yields. Moderate risk mutual funds are a good option for those looking for an investment vehicle of at least eight years. ",
	averageRateOfReturn: 0.09
},
{
	name: "Stocks, Blue Chip",
	id: "stocksBlueChip",
	description: "Blue chip stocks are stocks that are invested in well established companies that are proven to steadily grow albeit slowly and will earn money in both good economic times and bad economic times. They are a strong moderate risk investment option that usually provide strong dividends, however, they do not return as great as returns as more risky stock holdings such as Growth Stocks and Small Company Stocks. They still have potential to yield great returns if you pick stocks wisely. ",
	averageRateOfReturn: 0.083
},
{
	name: "Stocks, Growth",
	id: "stocksGrowth",
	description: "Growth stocks are stocks that are invested in companies whose income is expected to grow at a much faster rate than the rest of the market. However, they are risker than blue chip stocks. They are commonly price higher than they may be worth because the market sees potential in them to grow. They play am important role in composing a well-diversified fund. ",
	averageRateOfReturn: 0.11
},
{
	name: "Stocks, Small Company (Small Cap)",
	id: "stocksSmallCompanySmallCap",
	description: "Small Company stocks are stocks that have relatively low market caps usually less than 2 Billion USD. Small Cap stocks are generally more capable of generating high rates of return but are also more open to risk than larger cap stocks. They have historically outperformed large cap stocks, however, this is a vanity metric that varies greatly depending on the time period.",
	averageRateOfReturn: 0.12
},
{
	name: "Stocks, Value",
	id: "stocksValue",
	description: "Value Stocks are stocks that undervalued, meaning they tend to trade lower than their metric would infer. Commonly characterized by a low price to book ratio, a low earnings to price ratio, and high dividends. Should ideally eventually tend towards their fair market value creating potential opportunity for the investor who is willing to look towards the long term. ",
	averageRateOfReturn: 0.12
},
{
	name: "Bonds, Municipal",
	id: "bondsMunicipal",
	description: "Debt that issued by cities usually to fund improvement projects. It is not as safe as Government bonds, but is the second most secure form of general bonds. They are free from federal tax and are sometimes tax free to local residents. The yield is thus usually lower than a taxable bond, but is still higher than placing your money in a savings or money market account. Municipal Bonds present a strong opportunity for those looking for a safe investment in which to place their money. The time until maturity for bonds does vary and can run from one year to thirty years. ",
	averageRateOfReturn: 0.055
}
];

Template.invest.helpers({
	investmentTypes: function() {
		return investmentTypes;
	}
});