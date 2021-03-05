var sl,
slider = {
	settings: {
		sliderEls: document.getElementsByClassName('carousel'),
		blogSliderEls: document.getElementsByClassName('blog-slider'),
		maxDots: 5,
		transformXIntervalNext: -18,
		transformXIntervalPrev: 18,
	},
	init: function() {
		sl = this.settings;
		this.bindUIActions();
		console.log('slider loaded!');
	},
	bindUIActions: function() {

		if (sl.sliderEls.length > 0) {
			for (var i = 0; i < sl.sliderEls.length; i++) {

				$('.carousel .item-list').on('init', function (event, slick) {
					// console.log('A slick slider has been initialized.');
					$(this).find('ul.slick-dots').wrap("<div class='slick-dots-container'></div>");
					$(this).find('ul.slick-dots li').each(function (index) {
						$(this).addClass('dot-index-' + index);
					});
					$(this).find('ul.slick-dots').css('transform', 'translateX(0)');
					slider.setBoundries($(this),'default');
				});

				var transformCount = 0;
				$('.carousel .item-list').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
					var totalCount = $(this).find('.slick-dots li').length;
					if (totalCount > sl.maxDots) {
						if (nextSlide > currentSlide) {
							if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('n-small-1')) {
								if (!$(this).find('ul.slick-dots li:last-child').hasClass('n-small-1')) {
									transformCount = transformCount + sl.transformXIntervalNext;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('n-small-1');
									var nextSlidePlusOne = nextSlide + 1;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('n-small-1');
									$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
									var pPointer = nextSlide - 3;
									var pPointerMinusOne = pPointer - 1;
									$(this).find('ul.slick-dots li').eq(pPointerMinusOne).removeClass('p-small-1');
									$(this).find('ul.slick-dots li').eq(pPointer).addClass('p-small-1');
								}
							}
						}
						else {
							if ($(this).find('ul.slick-dots li.dot-index-' + nextSlide).hasClass('p-small-1')) {
								if (!$(this).find('ul.slick-dots li:first-child').hasClass('p-small-1')) {
									transformCount = transformCount + sl.transformXIntervalPrev;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlide).removeClass('p-small-1');
									var nextSlidePlusOne = nextSlide - 1;
									$(this).find('ul.slick-dots li.dot-index-' + nextSlidePlusOne).addClass('p-small-1');
									$(this).find('ul.slick-dots').css('transform', 'translateX(' + transformCount + 'px)');
									var nPointer = currentSlide + 3;
									var nPointerMinusOne = nPointer - 1;
									$(this).find('ul.slick-dots li').eq(nPointer).removeClass('n-small-1');
									$(this).find('ul.slick-dots li').eq(nPointerMinusOne).addClass('n-small-1');
								}
							}
						}
					}
				});

				$('.carousel .item-list').not('.slick-initialized').slick({
					dots: true,
					infinite: false,
					speed: 500,
					slidesToShow: 3,
					slidesToScroll: 3,
					cssEase: 'linear',
					responsive: [
						{
							breakpoint: 1045,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 2
							}
						},
						{
							breakpoint: 800,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1
							}
						},
						{
							breakpoint: 600,
							settings: {
								arrows: false,
								slidesToShow: 1,
								slidesToScroll: 1
							}
						}
					]
				});

			}
		}

		if (sl.blogSliderEls.length > 0) {
			for (var i = 0; i < sl.blogSliderEls.length; i++) {
				$('.blog-slider').not('.slick-initialized').slick({
					dots: false,
					arrows: false,
					fade: true,
					infinite: true,
					speed: 500,
					cssEase: 'linear',
					asNavFor: '.blog-slider-nav',
					adaptiveHeight: true
				});
				$('.blog-slider-nav').not('.slick-initialized').slick({
					slidesToShow: 4,
					slidesToScroll: 1,
					asNavFor: '.blog-slider',
					arrows: true,
					dots: false,
					centerMode: false,
					focusOnSelect: true
				});
			}
		}

	},
	setBoundries: function(slick, state) {
		if (state === 'default') {
			slick.find('ul.slick-dots li').eq(4).addClass('n-small-1');
		}
	}
};
