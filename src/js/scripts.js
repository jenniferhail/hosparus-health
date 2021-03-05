'use strict';

// var app = new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'Hello Vue!',
// 	}
// });

jQuery(document).ready(function( $ ) {

	// =require vendor/jquery-ui.js
	//=require vendor/slick.js
	//=require vendor/fancybox.js
	//=require vendor/rellax.js

    //=require layouts/accordions.js
	//=require layouts/aos.js
    //=require layouts/cookie-notice.js
    //=require layouts/notification.js
    //=require layouts/random-quote.js
    //=require layouts/slider.js
    //=require layouts/hero-cards.js
    //=require layouts/fancybox.js
    //=require layouts/menu.js
    //=require layouts/wizard.js
	//=require layouts/google-map.js
	//=require layouts/facet.js
	//=require layouts/rellax.js
	//=require layouts/events.js

    //=require components/style-guide.js
    //=require components/style-guide-hide-nav.js

	// $('select').selectmenu();

    accordions.init();
	aos.init();
    cookieNotice.init();
    notification.init();
    randomQuote.init();
    slider.init();
    styleGuide.init();
    styleGuideHideNav.init();
    heroCards.init();
    fancybox.init();
    menu.init();
	wizard.init();
	googleMap.init();
	facet.init();
	rellax.init();
	events.init();

});
