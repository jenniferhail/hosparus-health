var as,
aos = {
	settings: {
		heroCards: $('#hero-cards .intro .content'),
		firstLayout: $('#layout-1 .buttons'),
		openCards: $('#hero-cards .item-list')
	},
	init: function() {
		as = this.settings;
		this.bindUIActions();
		console.log('aos loaded!');
	},
	bindUIActions: function() {
		AOS.init({
		    easing: 'ease-in-out',
		    once: false,
		    duration: 800
		});
		window.addEventListener('load', AOS.refresh);
	}
};
