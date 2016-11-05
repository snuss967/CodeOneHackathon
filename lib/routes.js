
var main = "main"



FlowRouter.route('/summary', {
	name: 'summary',
	action: function() {
		BlazeLayout.render(main, {content: 'financialSummary'});
	}
});

FlowRouter.route('/invest', {
	name: 'invest',
	action: function() {
		BlazeLayout.render(main, {content: 'invest'});
	}
});
