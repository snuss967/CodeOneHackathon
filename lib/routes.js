
var main = "main"

FlowRouter.route('/', {
	name: 'home',
	action: function() {
		BlazeLayout.render(main, {content: 'financialSummary'});
	}
});

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

FlowRouter.route('/recommend', {
	name: 'recommend', 
	action: function() {
		BlazeLayout.render(main, {content: 'recommend'});
	}
});