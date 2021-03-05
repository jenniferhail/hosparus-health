var hc,
heroCards = {
	settings: {
		images: $('.home .hero.style-cards .image-wrapper'),
		close: $('.home .hero.style-cards .close-btn')
	},
	init: function() {
		hc = this.settings;
		this.bindUIActions();
		this.initStyleCards();
		console.log('hero cards loaded!');
	},
	bindUIActions: function() {

		// Hide the intro & reveal the cards
		$('.home .hero.style-cards .btn-start').on('click', function(evt) {
			evt.preventDefault();
			var intro = $(this).closest('.intro');
			for ( var i = 0; i < intro.length; i++ ) {
				intro[i].classList.toggle('hide');
			}
			var itemWrapper = $(this).closest('.col').find('.item-wrapper');
			for ( var i = 0; i < itemWrapper.length; i++ ) {
				itemWrapper[i].classList.toggle('hide');
			}
		});

		// Hide the cards & reveal the intro
		$('.home .hero.style-cards .back-btn').on('click', function(evt) {
			evt.preventDefault();
			var intro = $(this).closest('.col').find('.intro');
			for ( var i = 0; i < intro.length; i++ ) {
				intro[i].classList.toggle('hide');
			}
			var itemWrapper = $(this).closest('.col').find('.item-wrapper');
			for ( var i = 0; i < itemWrapper.length; i++ ) {
				itemWrapper[i].classList.toggle('hide');
			}
		});

		hc.images.click( function() {
			var $this = $(this);
			$this.closest('.item-list').find('.item').removeClass('active');
			$this.closest('.item').addClass('active');
			$this.closest('.item-list').addClass('opened');
			$('.item-list').css('transform', 'translate3d(' + $this.data('translate-x') + ',0,0)');
		});

		hc.close.click(function(){
			var $this = $(this);
			$this.closest('.item').removeClass('active');
			$this.closest('.item-list').removeClass('opened');
			$('.item-list').css('transform', 'translate3d(0,0,0)');
		});

		$(window).resize(function(){
			heroCards.initStyleCards();
		});

	},
	calculatePos: function($el) {
		var itemPosX = $el.offset().left;
		var targetPosX = ($(window).width() - 840) / 2;
		var translateX = targetPosX - itemPosX;
		$el.attr('data-translate-x', translateX + 'px');
	},
	initStyleCards: function() {
		$('.home .layout.style-cards').each(function(){
			$(this).find('.image-wrapper').each(function(){
				heroCards.calculatePos($(this));
			});
		});
	}
};
