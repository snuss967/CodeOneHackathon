import { Session } from 'meteor/session';

const investmentTypes = [
{
	name: "Money Markets",
	id: "moneyMarkets",
	description: "Money Market Accounts are similar to savings accounts in that they are extremely liquid. However, here at First National Bank they receive a higher rate of return and require a $1000 minimum balance to open. They are a strong option for someone seeking to keep their funds liquid but would like to return a higher rate of return than a traditional savings account.",
	averageRateOfReturn: 0.01,
	fluidity: 4.7,
	security: 4.8,
	rateOfReturn: 1.2,
	accessiblity: 4.9,
	manageability: 4.9
},
{
	name: "Individual Retirement Account, Traditional and Roth (IRA)",
	id: "ira",
	description: "An Individual Retirement Account IRA is a Government protected tax free retirement account in which one can place $5,500 of their yearly income tax free those 	50 and over can contribute $6,500 per year. They come in a few forms including: The traditional where you pay taxes on your money when you receive it at Retirement and the Roth where you pay taxes on your money when you place it in your account. IRAs are great for those looking for a retirement account if they do not have a 401K or if they have already maxed out their 401K.",
	averageRateOfReturn: 0.075,
	fluidity: 1.5,
	security: 4.4,
	rateOfReturn: 4.8,
	accessiblity: 4.7,
	manageability: 4.5
},
{
	name: "Low Risk Mutual Funds",
	id: "lowRiskMutualFunds",
	description: "A mutual fund is a collection of stocks that are managed and are owned by a collection of people. Low risk mutual funds are funds that will generate returns that are usually lower than a high or moderate risk mutual fund by the chance that one will lose a significant amount of money in the account is much lower. These funds are taxed and may or may not charge commission, most usually charge management fees on both the initial principle as well as the returns that the fund yields. Low risk mutual funds are a good option for those looking for a short term investment vehicle.",
	averageRateOfReturn: 0.08,
	fluidity: 3.5,
	security: 4.1,
	rateOfReturn: 3.8,
	accessiblity: 4.0,
	manageability: 4.5
},
{
	name: "High Risk (Aggressive Growth) Mutual Funds",
	id: "highRiskMutualFunds",
	description: "A mutual fund is a collection of stocks that are managed and are owned by a collection of people. High risk mutual funds are funds that will generate return rates that are usually higher than a low or moderate risk mutual fund but run the risk one will lose a significant amount of money in the account. These funds are taxed and may or may not charge commission, most usually charge management fees on both the initial principle as well as the returns that the fund yields. High risk mutual funds are a good option for those looking for a long term investment vehicle.",
	averageRateOfReturn: 0.1,
	fluidity: 2.5,
	security: 2.4,
	rateOfReturn: 4.2,
	accessiblity: 3.9,
	manageability: 4.5
},
{
	name: "Moderate Risk Mutual Funds",
	id: "moderateRiskMutualFunds",
	description: "A mutual fund is a collection of stocks that are managed and are owned by a collection of people. Moderate risk mutual funds are funds that will generate return rates that are usually higher than a low risk mutual fund, but lower than a high risk mutual fund. They run the risk of losing money but not as great as a High Risk mutual fund. These funds are taxed and may or may not charge commission, most usually charge management fees on both the initial principle as well as the returns that the fund yields. Moderate risk mutual funds are a good option for those looking for an investment vehicle of at least eight years. ",
	averageRateOfReturn: 0.09,
	fluidity: 3.9,
	security: 3.7,
	rateOfReturn: 3.4,
	accessiblity: 4.0,
	manageability: 4.5
},
{
	name: "Stocks, Blue Chip",
	id: "stocksBlueChip",
	description: "Blue chip stocks are stocks that are invested in well established companies that are proven to steadily grow albeit slowly and will earn money in both good economic times and bad economic times. They are a strong moderate risk investment option that usually provide strong dividends, however, they do not return as great as returns as more risky stock holdings such as Growth Stocks and Small Company Stocks. They still have potential to yield great returns if you pick stocks wisely. ",
	averageRateOfReturn: 0.083,
	fluidity: 4.1,
	security: 4.2,
	rateOfReturn: 3.8,
	accessiblity: 4.3,
	manageability: 4.6
},
{
	name: "Stocks, Growth",
	id: "stocksGrowth",
	description: "Growth stocks are stocks that are invested in companies whose income is expected to grow at a much faster rate than the rest of the market. However, they are risker than blue chip stocks. They are commonly price higher than they may be worth because the market sees potential in them to grow. They play am important role in composing a well-diversified fund. ",
	averageRateOfReturn: 0.11,
	fluidity: 3.5,
	security: 3.7,
	rateOfReturn: 4.0,
	accessiblity: 4.2,
	manageability: 4.0
},
{
	name: "Stocks, Small Company (Small Cap)",
	id: "stocksSmallCompanySmallCap",
	description: "Small Company stocks are stocks that have relatively low market caps usually less than 2 Billion USD. Small Cap stocks are generally more capable of generating high rates of return but are also more open to risk than larger cap stocks. They have historically outperformed large cap stocks, however, this is a vanity metric that varies greatly depending on the time period.",
	averageRateOfReturn: 0.12,
	fluidity: 3.5,
	security: 3.2,
	rateOfReturn: 4.1,
	accessiblity: 4.3,
	manageability: 3.7
},
{
	name: "Stocks, Value",
	id: "stocksValue",
	description: "Value Stocks are stocks that undervalued, meaning they tend to trade lower than their metric would infer. Commonly characterized by a low price to book ratio, a low earnings to price ratio, and high dividends. Should ideally eventually tend towards their fair market value creating potential opportunity for the investor who is willing to look towards the long term. ",
	averageRateOfReturn: 0.12,
	fluidity: 3.5,
	security: 3.5,
	rateOfReturn: 3.9,
	accessiblity: 4.3,
	manageability: 3.9
},
{
	name: "Bonds, Municipal",
	id: "bondsMunicipal",
	description: "Debt that issued by cities usually to fund improvement projects. It is not as safe as Government bonds, but is the second most secure form of general bonds. They are free from federal tax and are sometimes tax free to local residents. The yield is thus usually lower than a taxable bond, but is still higher than placing your money in a savings or money market account. Municipal Bonds present a strong opportunity for those looking for a safe investment in which to place their money. The time until maturity for bonds does vary and can run from one year to thirty years. ",
	averageRateOfReturn: 0.055,
	fluidity: 4.1,
	security: 4.8,
	rateOfReturn: 2.4,
	accessiblity: 4.7,
	manageability: 4.8
},
{
	name: "Bonds, Corporate",
	id: "bondsCorporate",
	description: "Debt issued by companies, usually publically traded companies, to fund expansion, acquisitions, to pay down other debt or other company operations. They have higher yields than Government or Municipal Bonds as they are more risky. These can also include convertible bonds which can be converted into stock and callable issues which allow a company to pay off the bonds prior to maturity. The companies credit rating is very important as the higher the rating ideally the lower the risk and thus the lower the rate of return. Can run from short term, (3 -5) years, mid term (5 – 12 years), or long term (over 12 years).",
	averageRateOfReturn: 0.075,
	fluidity: 2.8,
	security: 4.4,
	rateOfReturn: 2.7,
	accessiblity: 4.8,
	manageability: 4.8
},
{
	name: "Bonds, Zero-Coupon",
	id: "bondsZeroCoupon",
	description: "Bonds that make no coupon payments, payments similar to interest payments to the holder while the bond matures, but are bought at a fraction of the of the value at the age of maturity.",
	averageRateOfReturn: 0.08,
	fluidity: 1.8,
	security: 4.4,
	rateOfReturn: 2.6,
	accessiblity: 4.8,
	manageability: 4.7
}
,
{
	name: "Bonds, Government",
	id: "bondsGovernment",
	description: "Debt issued by the United States Federal Government or another government which for almost all stable countries is considered extremely safe. The debt of developing countries, however, is considered significantly more risky. As such they usually have a lower rate of return than some forms of bonds and still may take a significant portion of time to mature. However, government bonds can be bought, sold, and traded. Government bonds present a strong opportunity for those who are looking for a safe place to invest their money. The time until maturity for bonds does vary and can run from one year to thirty years.",
	averageRateOfReturn: 0.05,
	fluidity: 1.4,
	security: 5.0,
	rateOfReturn: 2.0,
	accessiblity: 4.9,
	manageability: 4.8
},
{
	name: "Tax Deferred Fixed Annuity",
	id: "taxDeferredFixedAnnuity",
	description: "An annuity is a fund in which a person gives an investment company, usually an insurance company, money upfront to invest for them and they then receive payouts from the fund. With a fixed Annuity an insurance company assumes the risks and the rewards of the performance of the annuity and guarantees that the unit will deliver a consistent rate of return, which can be adjusted but cannot go below a minimum rate of return. This is a secure and stable form of income, taxes are paid when one receives the money upon payout.",
	averageRateOfReturn: 0.07,
	fluidity: 2.4,
	security: 4.4,
	rateOfReturn: 4.1,
	accessiblity: 4.5,
	manageability: 3.6
},
{
	name: "Tax Deferred Variable Annuity",
	id: "taxDeferredVariableAnnuity",
	description: "An annuity is a fund in which a person gives an investment company, usually an insurance company, money upfront to invest for them and they then receive payouts from the fund. With a variable annuity the investor takes on more risk and thus the potential to both earn a higher rate of return and has no guaranteed returns. Is a less stable form of income, but is able to keep up with the rate of inflation over time, taxes are paid when money is received upon payout.",
	averageRateOfReturn: 0.1,
	fluidity: 2.8,
	security: 3.6,
	rateOfReturn: 3.3,
	accessiblity: 4.7,
	manageability: 3.9
},
{
	name: "Private Banking",
	id: "privateBanking",
	description: "For high net worth individuals is a more personalized form of banking and investment strategies. Has access to alternative funds of investing money such as Private Equity, Hedge Funds etc. As well as normal funds such as Mutual Funds, CDs, ETFs etc.  Rates of return very greatly depending on the strategy that one and their advisor take. ",
	averageRateOfReturn: .12,
	fluidity: 5.0,
	security: 5.0,
	rateOfReturn: 5.0,
	accessiblity: 5.0,
	manageability: 5.0
},
{
	name: "Balanced Fund",
	id: "balancedFund",
	description: "A balanced Fund combines a stock component and sometimes a money market component in a single portfolio. Stick to a mixed set of stocks and bonds that is proportionally depending on if it is more conservative, higher equity, or higher-fixed income. It is a well-diversified investment vehicle that is a fairly safe investment generating returns over both the long and the moderate term.",
	averageRateOfReturn: 0.1,
	fluidity: 4.2,
	security: 4.4,
	rateOfReturn: 4.1,
	accessiblity: 4.3,
	manageability: 4.8
},
{
	name: "Growth Opportunities Fund",
	id: "growthOpportunitiesFund",
	description: "A portfolio of stocks that has capital appreciation as its primary goal. Prefers companies that reinvest their dividends into growth over companies that pay out dividends. Technology funds play a major part in many growth funds. It is a strong investment vehicle for durations over 5-10 years.",
	averageRateOfReturn: 0.1,
	fluidity: 3.9,
	security: 4.2,
	rateOfReturn: 4.6,
	accessiblity: 4.4,
	manageability: 4.7
},
{
	name: "Small Company Fund",
	id: "smallCompanyFund",
	description: "A small company fund is a portfolio of stocks that invests in small cap stocks, usually companies with market caps, or the value of the stocks in the market times outstanding shares, of under 2 billion USD. Small company stocks are much more volatile than larger company stocks and thus have both a chance for stronger returns as well as greater losses. The diversification of this portfolio should help ensure however that the fund never tanks. It is a great play for investors looking to invest for over 10 years.",
	averageRateOfReturn: 0.11,
	fluidity: 3.9,
	security: 3.9,
	rateOfReturn: 4.7,
	accessiblity: 4.5,
	manageability: 4.7
},
{
	name: "Income Fund",
	id: "incomeFund",
	description: "An Income fund bases its portfolio after a company’s income that is currently being realized and positions those companies with high income as valuable. It is a diversified portfolio of many stocks and bonds that have been judged based off of their income potential. Usually excel at times when interest rates are falling and suffer when interest rates are rising. They are a great long term to intermediate stage play. ",
	averageRateOfReturn: 0.1,
	fluidity: 4.0,
	security: 4.3,
	rateOfReturn: 4.5,
	accessiblity: 4.3,
	manageability: 4.7
},
{
	name: "Short – Intermediate",
	id: "shortIntermediate",
	description: "An Intermediate Short fund is a portfolio that usually entails investing the majority of its money in securities and restructuring debt. It also looks for places where it can short and capitalize off of those opportunities. As it is heavily security based the risk is there, but this is a safer investment than some of the straight market holdings we offer. ",
	averageRateOfReturn: 0.12,
	fluidity: 3.8,
	security: 3.6,
	rateOfReturn: 4.8,
	accessiblity: 4.4,
	manageability: 4.8
},
{
	name: "529 Savings Plan",
	id: "529SavingsPlan",
	description: "A 529 is an educational savings plan that is tax free that is operated by the state allowing families to save money for their kid’s college.",
	averageRateOfReturn: 0.0,
	fluidity: 2.0,
	security: 4.8,
	rateOfReturn: 4.3,
	accessiblity: 5.0,
	manageability: 4.8
},
{
	name: "Certificate of Deposit",
	id: "certificateOfDesposit",
	description: "A certificate of Deposit is an investment where you place money in an investment and leave it there for a set period of time. You can access the money but you will accrue penalties. If you instead leave the money alone you can realize greater returns that what you would have in a traditional savings account. They are extremely safe investments and thus have relatively low return rates.",
	averageRateOfReturn: 0.0155,
	fluidity: 4.6,
	security: 4.9,
	rateOfReturn: 1.9,
	accessiblity: 4.8,
	manageability: 4.9
},
{
	name: "Coverdell Educational Savings Account",
	id: "coverdellEducationalSavingsAccount",
	description: "Is a savings account that allows one to put money away for their child for college. It is taxfree and allows for anyone to make contributions to the students college funding account. ",
	averageRateOfReturn: 0.09,
	fluidity: 2.0,
	security: 4.8,
	rateOfReturn: 4.3,
	accessiblity: 4.7,
	manageability: 4.5
},
{
	name: "Minor Savings Account",
	id: "minorSavingsAccount",
	description: "A savings account opened by the parent(s) of a child for the child. It is held jointly with the child.",
	averageRateOfReturn: 0.0008,
	fluidity: 5.0,
	security: 5.0,
	rateOfReturn: 0.3,
	accessiblity: 1.2,
	manageability: 4.8
},
{
	name: "Savings Account",
	id: "savingsAccount",
	description: "A savings account is a bank account with a low interest rate intended for the savings of money. There are usually no restrictions on the withdrawal or deposit of money in the account. They are not a great investment for generating returns on the capital you have in them, but they do not charge fees and are extremely liquid.",
	averageRateOfReturn: 0.0008,
	fluidity: 5.0,
	security: 5.0,
	rateOfReturn: 0.3,
	accessiblity: 1.2,
	manageability: 4.8
},
{
	name: "Real Estate Investment Trust",
	id: "realEstateInvestmentTrust",
	description: "A real estate investment trust is a publically traded collection of managed real estate that allows people the ability to invest in real estate without the capital requirements required. Allows real estate investors to have a stake in a diverse portfolio of properties.",
	averageRateOfReturn: .10,
	fluidity: 4.1,
	security: 4.4,
	rateOfReturn: 4.7,
	accessiblity: 3.9,
	manageability: 4.1
},
{
	name: "Foreign Exchange (FOREX)",
	id: "foreignExchange",
	description: "A Foreign Exchange or forex fund is an investment fund that holds positions in Foreign Currencies. As currencies change in value relative to each other forex funds allow investors to take advantage of the value of changing currencies.  ",
	averageRateOfReturn: 0.096,
	fluidity: 4.4,
	security: 3.8,
	rateOfReturn: 4.2,
	accessiblity: 4.4,
	manageability: 4.5
},
{
	name: "Exchange Traded Fund",
	id: "exchangeTradedFund",
	description: "An Exchange Traded Fund or ETF is like a mutual fund in that it is usually a diversified holding of some asset class. However, an exchange trade fund is traded on the stock change and is much easier to take a short term stake in. ETFs pay dividends on their profits like the returns that Mutual Funds Provide, however, unlike Mutual Funds the money they have for investment has been raised through selling shares.",
	averageRateOfReturn: 0.103,
	fluidity: 4.2,
	security: 4.8,
	rateOfReturn: 4.6,
	accessiblity: 4.3,
	manageability: 4.6
},
{
	name: "Treasury Inflation Protected Securites (TIPS)",
	id: "treasuryInflationProtectedSecurities",
	description: "Treasury Inflation Protected Securities are investments whose value changes with the rate of inflation. Those if inflation goes up the value will go up if the rate of inflation goes negative and the dollar becomes more powerful then it goes negative. Great to hold in good times of low interest rates.",
	averageRateOfReturn: 0.04,
	fluidity: 4.8,
	security: 5.0,
	rateOfReturn: 1.4,
	accessiblity: 4.8,
	manageability: 4.6
},
{
	name: "Venture Capital",
	id: "ventureCapital",
	description: "Venture capital is an investment vehicle where Venture Funds look to start a fund and recruit capital. One commits capital to the Venture Capital fund the fund then takes it and invests it in early stage companies. This puts them in a high-risk/high-reward situation where they usually then commit other resources such as industry expertise and connections to help their investments succeed. They achieve their return or exit when the company issues an IPO buys off the venture capitalists, gets acquired, or other venture capitalists buy the outstanding shares. It is usually limited to high net worth individuals who can contribute a significant amount to a Venture Capital fund.",
	averageRateOfReturn: .259,
	fluidity: 0.8,
	security: 2.2,
	rateOfReturn: 5.0,
	accessiblity: 0.3,
	manageability: 0.4
},
{
	name: "Commodities",
	id: "commodities",
	description: "Commodities are usually raw materials that are needed in some production service. Commodities across the market are essentially the same thus the lowest price usually takes the contract. Leading other commodities to drop their price down to match in order to ensure that their goods are bought. Examples of Commodities include: Corn, Wheat, Pigs, Cattle, Chicken, and oil. Commodities can fit into any trading strategy.",
	averageRateOfReturn: 0.0,
	fluidity: 3.6,
	security: 3.1,
	rateOfReturn: 4.3,
	accessiblity: 3.3,
	manageability: 2.2
},
{
	name: "Precious Metals",
	id: "preciousMetals",
	description: "Investing in one of the four core valuable metals, platinum, palladium, gold, and silver. All of these metals are ideally limited so that the value is there and increases. They are used for important components in computers, automotive parts, and medical equipment. Is say to hold its value over time, however, this is not necessarily true and we advise you from investing in Precious Metals without first talking to your financial advisor.",
	averageRateOfReturn: 0.0812,
	fluidity: 1.9,
	security: 2.4,
	rateOfReturn: 2.3,
	accessiblity: 3.1,
	manageability: 4.7
},
{
	name: "Index Funds",
	id: "indexFunds",
	description: "An Index fund is a collection of stocks that tracks an index, or a group of diversified stocks such as the S&P 500, very closely. Index funds have a consistent track record of returning steady gains and outperforming many types of managed funds. However, index funds do not outperform all managed funds and are best if one is looking to invest for the long term. They should be considered in conjunction with other securities to create a well-diversified portfolio. ",
	averageRateOfReturn: 0.105,
	fluidity: 4.8,
	security: 4.9,
	rateOfReturn: 4.6,
	accessiblity: 4.9,
	manageability: 4.9
},
{
	name: "Hedge Funds",
	id: "hedgeFunds",
	description: "A hedge fund is an actively managed investment fund that makes investments in almost every investment realm from ETFs, to Bonds, to individual Stocks and so on in an attempt to generate the greatest returns. Investing in Hedge Funds is often limited to high net worth individuals.",
	averageRateOfReturn: .136,
	fluidity: 1.4,
	security: 3.2,
	rateOfReturn: 4.8,
	accessiblity: 0.7,
	manageability: 4.5
},
{
	name: "Private Equity Funds",
	id: "privateEquityFunds",
	description: "A private equity fund is an investment fund that purchases companies with the intent of selling them a few years down the line at a profit. They also can take stakes in companies without fully purchasing them providing equity for the company’s growth. Investing in Private Equity firms is often limited to high net worth individuals and pension funds. They often use a variety of strategies to purchase companies such as the Leveraged Buyout where they purchase a company with a very small portion of their own money and instead use debt to finance the deal loading the purchased company with debt and using the company’s profits over their ownership to pay off the debt.",
	averageRateOfReturn: 0.14,
	fluidity: 0.4,
	security: 4.0,
	rateOfReturn: 4.8,
	accessiblity: 0.8,
	manageability: 4.5
},
{
	name: "Options",
	id: "options",
	description: "Give investors the right to buy or sell a stock on a certain date at a certain price although they are not required too. Options can be bought, sold, and trade just like any normal security. They are purchased originally and are not free, but they lock in the seller although the buyer is free to move. There are two types Calls which give the right to purchase stocks within a certain period of time at a certain price and Puts which give the right to sell stocks within a certain period of time at a certain price.",
	averageRateOfReturn: 0.055,
	fluidity: 3.7,
	security: 2.3,
	rateOfReturn: 4.7,
	accessiblity: 3.2,
	manageability: 2.3
},
{
	name: "Security Futures",
	id: "securityFutures",
	description: "A securities Future is a contract to buy a certain amount of securities on a certain date at a certain price. If one is in the position to buy the securities they are said to be long if one is in the position of the seller they are said to be short. If you have not resolved your outstanding contract by negotiating or selling your contract to someone with a contradictory position. You must execute the contract on the day that it becomes due.",
	averageRateOfReturn: 0.09,
	fluidity: 3.4,
	security: 1.6,
	rateOfReturn: 4.6,
	accessiblity: 2.6,
	manageability: 1.5
},
{
	name: "US Treasury Bills ",
	id: "usTreasuryBills",
	description: "Treasury Bills, known as T Bills are currency Bills bought from the treasury of the United States that are purchased at one price, usually discounted, but not always, and at a set time later mature and become worth their full price. For example bills may be bought at $490 and sold one year later at their maturity for $500.",
	averageRateOfReturn: 0.04,
	fluidity: 4.0,
	security: 4.9,
	rateOfReturn: 1.2,
	accessiblity: 4.7,
	manageability: 4.8
}
];

Template.invest.onCreated(function() {
	Session.set("data", []);
	Session.set("selectedInvestmentTypes", []);
});

Template.invest.helpers({
	comparisonRadarGraph: function() {
		return {
			chart: {
				polar: true,
				type: 'area'
			},
			
			plotOptions: {
				series: {
					animation: false
				}
			},

			title: {
				text: 'Investment Comparison',
				x: -80
			},

			pane: {
				size: '80%'
			},

			xAxis: {
				categories: ['Fluidity', 'Security', 'Rate Of Return', 'Accessiblity', 'Manageability'],
				tickmarkPlacement: 'on',
				lineWidth: 0
			},

			yAxis: {
				gridLineInterpolation: 'polygon',
				lineWidth: 0,
				min: 0
			},

			tooltip: {
				shared: true,
			},
			
			credits: {
				enabled: false
			},

			legend: {
				align: 'right',
				verticalAlign: 'top',
				y: 70,
				layout: 'vertical'
			},
						
			series: Session.get("data")
		}
	}
});


Template.invest.events({
	'change .investmentTypesCheckbox':function(event) {		
		var inputs = document.getElementsByTagName("INPUT");
	
		var finalData = [];
		var selected = [];
		for(var i = 0; i < inputs.length; i++) {
			if(inputs[i].type === 'checkbox' && inputs[i].checked) {
				selected.push({
					name: investmentTypes[i].name,
					averageRateOfReturn: investmentTypes[i].averageRateOfReturn * 100,
					description: investmentTypes[i].description
				});
				
				var data = [];
				data[0] = investmentTypes[i].fluidity;
				data[1] = investmentTypes[i].security;
				data[2] = investmentTypes[i].rateOfReturn;
				data[3] = investmentTypes[i].accessiblity;
				data[4] = investmentTypes[i].manageability;

				var object = {
					name: investmentTypes[i].name,
					data: data,
					pointPlacement: 'on'
				}
				
				finalData.push(object);	
			}
		}
		
		Session.set("selectedInvestmentTypes", selected);
		Session.set("data", finalData);
	}
});

Template.invest.helpers({
	investmentTypes: function() {
		return investmentTypes;
	},
	selectedInvestmentTypes: function() {
		var selectedInvestmentTypes = Session.get("selectedInvestmentTypes");
		
		if(selectedInvestmentTypes.length <= 1) {
			//Set that description part to some text
			document.getElementById('invest-single-description').innerHTML = selectedInvestmentTypes[0].description;
		} else {
			document.getElementById('invest-single-description').innerHTML = "";
		}
		
		return selectedInvestmentTypes;
	}
});