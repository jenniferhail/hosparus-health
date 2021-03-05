var ac,
accordions = {
	settings: {
		accListItem: $('.layout.accordion.list-view .accordion-item'),
		accTabItem: $('.layout.accordion.tab-view .accordion-item'),
		accItem: $('.layout.accordion.tab-view details'),
		accMenuTab: $('.layout.accordion.tab-view .accordion-title'),
		breakpoint: 860
	},
	init: function() {
		ac = this.settings;
		this.bindUIActions();
		console.log('accordions loaded!');
	},
	bindUIActions: function() {
		// Add media query to tab view at ac.breakpoint
		var windowSize = $(window).width();
		// Get width of window on load or resize
		$(window).on('load resize', function() {
			windowSize = $(window).width();

			if ( windowSize >= ac.breakpoint ) {
				$('.layout.accordion.tab-view .accordion-content').css('display', 'block');

				// console.log(ac.accTabItem);
				var hasActiveClass = false;
				for ( var i = 0; i < ac.accTabItem.length; i++ ) {
					if ( $(ac.accTabItem[i]).hasClass('active') ) {
						hasActiveClass = true;
						// console.log('An accordion was found with an active class.');
						break
					}
				}

				if (hasActiveClass == false) {
					// console.log('None of the accordions have an active class.');
					// Add active class to first accordion in tab view when screens are larger than ac.breakpoint
					$('.layout.accordion.tab-view .accordion-item:first-child').addClass('active');
				}
			} else if ( windowSize < ac.breakpoint ) {
				$('.layout.accordion.tab-view .accordion-item').removeClass('active');
				$('.accordion-content').css('display', 'none');
			}
		});

		// List View
		$('.layout.accordion.list-view .accordion-item').on('click', function (evt) {
			evt.preventDefault();
			this.classList.toggle('active');
			$(this).find('.accordion-content').slideToggle( '3000', function() {
				// Animation complete.
			});
		});

		// Tab View, < ac.breakpointpx
		$('.layout.accordion.tab-view .accordion-item').on('click', function (evt) {
			if ( windowSize < ac.breakpoint ) {
				evt.preventDefault();
				this.classList.toggle('active');
				$(this).find('.accordion-content').slideToggle( '3000', function() {
					// Animation complete.
				});
			}
		});

		// Tab View — Disable accordion functionality
		$('.layout.accordion.tab-view summary').on('click', function(evt) {
			if ( windowSize >= ac.breakpoint ) {
				evt.preventDefault();
			}
		});

		// Tab View — Menu Selection
		$('.layout.accordion.tab-view .accordion-title').on('click', function (evt) {

			// Define elements
			var parentElement = accordions.getClosest(this, '.layout.accordion.tab-view');
			var accTitleItems = parentElement.querySelectorAll('.accordion-title');
			var accMenuItems = parentElement.querySelectorAll('.accordion-menu');
			var accNavItems = parentElement.querySelectorAll('.accordion-nav-item');
			var accGroups = parentElement.querySelectorAll('.accordion-group');

			// Remove active class from all selected tabs, accordion groups, nav item, and accordion item
			for ( var i = 0; i < accTitleItems.length; i++ ) {
				accTitleItems[i].classList.remove('active');
			}
			for ( var i = 0; i < accMenuItems.length; i++ ) {
				accMenuItems[i].classList.remove('active');
			}
			for ( var i = 0; i < accNavItems.length; i++ ) {
				accNavItems[i].classList.remove('active');
			}
			for ( var i = 0; i < accGroups.length; i++ ) {
				accGroups[i].classList.remove('active');
			}

			// Add active class to selected tab
			this.classList.add('active');
			var selectedItem = this.dataset.tab - 1;

			// Add active class to accordion menu & first nav item
			var thisMenu = accMenuItems[selectedItem];
			thisMenu.classList.add('active');
			var thisNavItem = thisMenu.querySelectorAll('.accordion-nav-item');
			thisNavItem[0].classList.add('active');

			// Add active class to accordion group
			var thisGroup = accGroups[selectedItem];
			thisGroup.classList.add('active');

		});

		// Tab View — Show selected accordion
		$('.layout.accordion.tab-view .accordion-nav-item').on('click', function (evt) {

			$(this).siblings().removeClass('active');
			$(this).addClass('active');

			// Define elements
			var parentElement = accordions.getClosest(this, '.accordion-menu').dataset.tab;
			var accordionElement = this.dataset.accordion;

			// Remove active class from all accordions
			$(this).closest('.row').find('.accordion-group[data-tab="' + parentElement + '"] .accordion-item').removeClass('active');
			// Add active class to selected accordion
			$(this).closest('.row').find('.accordion-group[data-tab="' + parentElement + '"] .accordion-item[data-accordion="' + accordionElement + '"]').addClass('active');

		});

	},
	getClosest: function (elem, selector) {
		// Element.matches() polyfill
		if (!Element.prototype.matches) {
			Element.prototype.matches =
				Element.prototype.matchesSelector ||
				Element.prototype.mozMatchesSelector ||
				Element.prototype.msMatchesSelector ||
				Element.prototype.oMatchesSelector ||
				Element.prototype.webkitMatchesSelector ||
				function(s) {
					var matches = (this.document || this.ownerDocument).querySelectorAll(s),
						i = matches.length;
					while (--i >= 0 && matches.item(i) !== this) {}
					return i > -1;
				};
		}
		// Get the closest matching element
		for ( ; elem && elem !== document; elem = elem.parentNode ) {
			if ( elem.matches( selector ) ) return elem;
		}
		return null;
	}
};
