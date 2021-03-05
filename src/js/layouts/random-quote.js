var rq,
randomQuote = {
	settings: {
		quoteList: $('.splash li'),
		random: Math.floor(Math.random() * $('.splash li').length),
	},
	init: function() {
		rq = this.settings;
		this.bindUIActions();
		console.log('randomQuote loaded!');
	},
	bindUIActions: function() {
		rq.quoteList.hide().eq(rq.random).show();
	}
};
