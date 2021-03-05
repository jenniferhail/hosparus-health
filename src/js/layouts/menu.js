var mu,
menu = {
	settings: {
		body: $('body'),
		menuSub: $('.menu-center .menu-item-has-children'),
		menuBtn: $('.menu-right .menu-item.drawer a'),
		menuDrawer: $('#menu-drawer'),

		menuRight: $('.menu-right'),
		openSearch: $('.menu-item.search .open-search'),
		closeSearch: $('.menu-item.search .close-btn'),
		mobilePadding: '15px',
		desktopPadding: '30px',
	},
	init: function() {
		mu = this.settings;
		this.bindUIActions();
		console.log('menu loaded!');
	},
	bindUIActions: function() {
		// Submenu hover effect
		mu.menuSub.mouseover( function() {
			var subMenuHeight = $(this).find('.sub-menu').outerHeight();
			subMenuHeight = subMenuHeight - 20;
			$('.header').css('padding-bottom', subMenuHeight);
		});

		var windowSize = $(window).width();
		// Get width of window on load or resize
		$(window).on('load resize', function() {
			windowSize = $(window).width();
			if ( windowSize < 1058 ) {
				// console.log('Set bottom padding to ' + mu.mobilePadding);
				$('.header').css('padding-bottom', mu.mobilePadding);
			} else {
				$('.header').css('padding-bottom', mu.desktopPadding);
			}
		});

		mu.menuSub.mouseleave( function() {
			// Remove bottom padding from header
			$('.header').css('padding-bottom', mu.desktopPadding);
		});

		mu.menuBtn.click( function(evt) {
			evt.preventDefault();
			mu.menuDrawer.toggleClass('active');
			mu.body.toggleClass('stopScroll');
			$('header').toggleClass('drawer-open');
			if ($('.menu-item.drawer a').html() == 'Close') {
				$('.menu-item.drawer a').html('Menu');
			} else {
				$('.menu-item.drawer a').html('Close');
			}
		});
		mu.openSearch.click( function(evt) {
			$('#nav-search').css('display', 'block');
			evt.preventDefault();
			$('.menu-center').addClass('hide-center-nav');
			mu.menuRight.addClass('reveal-search');
			$('#nav-search .search-field').focus();
		});
		mu.closeSearch.click( function(evt) {
			evt.preventDefault();
			mu.menuRight.removeClass('reveal-search');
			$('.menu-center').removeClass('hide-center-nav');
		});

		var menuItems = document.querySelectorAll('.menu-drawer li.menu-item-has-children');
		Array.prototype.forEach.call(menuItems, function(el, i){
			var activatingA = el.querySelector('a');
			var btn = '<button class="mobile-submenu" aria-expanded="false"><i class="fal fa-plus"></i><span><span class="visuallyhidden">Show Submenu for “' + activatingA.text + '”</span></span></button>';
			activatingA.insertAdjacentHTML('afterend', btn);

			el.querySelector('.mobile-submenu').addEventListener("click",  function(event){
				if ($(this).parent().hasClass('active')) {
					$(this).parent().removeClass('active');
					this.parentNode.querySelector('a').setAttribute('aria-expanded', "false");
					this.parentNode.querySelector('button').setAttribute('aria-expanded', "false");
				} else {
					$(this).parent().addClass('active');
					this.parentNode.querySelector('a').setAttribute('aria-expanded', "true");
					this.parentNode.querySelector('button').setAttribute('aria-expanded', "true");
				}
				event.preventDefault();
			});
		});
	}
};
