
var main = "main"

FlowRouter.route('/', {
	name: 'home',
	action: function() {
		BlazeLayout.render(main, {content: 'financialSummary'});
	}
});

FlowRouter.route('/summary/assetbreakdown', {
	name: 'assetbreakdown',
	action: function() {
		BlazeLayout.render(main, {content: 'assetbreakdown'});
	}
});

FlowRouter.route('/summary/pastperformance', {
	name: 'pastperformance',
	action: function() {
		BlazeLayout.render(main, {content: 'pastperformance'});
	}
});

FlowRouter.route('/summary', {
	name: 'home',
	action: function() {
		BlazeLayout.render(main, {content: 'financialSummary'});
	}
});

FlowRouter.route('/dream', {
	name: 'dream',
	action: function() {
		BlazeLayout.render(main, {content: 'dream'});
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