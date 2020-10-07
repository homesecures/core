jQuery(function ($) {

// 	geoip_detect.get_info().then(function(record) {
//     if (record.error()) {
//       console.error('WARNING Geodata Error:' + record.error() );
//       $('.geo-error').text(record.error());
//     }

//     // Debug: Show raw data of record. (Warning: No property in this object is guaranteed to exist.)
//     // console.log('Record', record.data);

//     // If no locales are given, use the website language
//     $('.geo-continent').text(record.get('continent'));

//     // Second parameter is the default value if the property value is empty or non-existent. For example, the IP might be from a satellite connection.
//     $('.geo-continent').text(record.get('continent', 'Weird: no country detected.'));

//     // Return the German name of the country, if not available, use English
//     $('.geo-country').text(record.get_with_locales('country', ['de']));

//     // Return the German name of the country, if not available, show "default text"
//     $('.geo-country-de').text(record.get('https://usmoneydaily.org/wp-content/themes/fwd/js/country.names.de', 'default text'));

//     // Try French first, then German, then English. The pseudo-property "name" is also supported ('city' would result in the same return value).
//     $('.geo-city').text(record.get_with_locales('https://usmoneydaily.org/wp-content/themes/fwd/js/city.name', ['fr', 'de', 'en'], 'No city detected.'));

//     // The same property names can be used as in the shortcode syntax
//     $('.geo-city-id').text(record.get('city.geoname_id'));
//     $('.geo-ip').text(record.get('traits.ip_address'));

//     $('.geo-state').text(record.get('https://usmoneydaily.org/wp-content/themes/fwd/js/most_specific_subdivision.name'));
//     $('.geo-postal').text(record.get('https://usmoneydaily.org/wp-content/themes/fwd/js/postal.code'));

//   });

//   // This will return the same JS promise as above, so that this will not result in a second AJAX request.
//   geoip_detect.get_info().then(function(record) {
//     $('.geo-country-2').text(record.get_with_locales('country', ['en']));
//   });

	var queryParams = new URL(location).searchParams;

	var page_views_count = parseInt(sessionStorage.getItem('page_views_count') || 1);
	if (page_views_count == 2) {
		setTimeout(function () {
			snaptr('track', 'ADD_CART');
			dataLayer.push({'event': 'trackSecondPageView'});
		}, 2000);
	}
	sessionStorage.setItem('page_views_count', ++page_views_count);

	$(document).on('click', 'a[href^=tel]', function() {

		fbq('trackCustom', 'CCDebt callfire');
		
		snaptr('track', 'SIGN_UP');
		sessionStorage.setItem('tracked', '1');

		if(parseInt(sessionStorage.getItem('user_session')) >= 30) {
			snaptr('track', 'CUSTOM_EVENT_4');
		}

		if (window.roinattrack) $.ajax({
			url: 'https://track.roinattrack.com/postback?cid=' + queryParams.get('cid'),
			type: 'POST',
			crossDomain: true
		});
	});

	setTimeout(function () {
		snaptr('track', 'START_CHECKOUT');
	}, 3e4);
	
	var counter = 0;
	setInterval(() => { 
		sessionStorage.setItem('user_session', counter++);
	}, 1000);
	
	
	$('#header .toggler').click(function () {
		$(this).toggleClass('open');
		$('#header .menu').slideToggle();
	});

	$('.player').click(function () {
		var video = this.querySelector('video');
		if (video.paused) {
			video.play();
			$(this).addClass('playing');
		} else {
			video.pause();
			$(this).removeClass('playing');
		}
	});

	$('[data-geo], .flag, form#debtrelief').length && $.get('https://api.ipify.org', function(res) {
		$.get('https://webdevtesting.com/ip-api/?ip='+res, function(data) {
			var geo = JSON.parse(data);
			$('[data-geo=state]').text(geo.regionName);
			$('[data-geo=city]').text(geo.city);
			$('.flag').prop('src', 'https://webdevtesting.com/states/'+geo.region+'.png');
			if (debtrelief && debtrelief.state) {
				debtrelief.state.value = geo.region;
			}
		});
	});

	$('#cta-header, #cta-footer, #cta-sidebar, #cta-footer-logo').click(function() {
		dataLayer.push({event: 'clicktocall', label: this.id.replace('cta-', '')});
	});

	var cta_bottom = $('#content .footerCTA a');
	cta_bottom.click(function() {
		dataLayer.push({event: 'clicktocall', label: 'content-bottom'});
	});

	$('#content article a[href^=tel]').not(cta_bottom).each(function (index) {
		$(this).click(function() {
			dataLayer.push({event: 'clicktocall', label: 'content-' + ++index});
		});
	});

	$('.page-template-credit-repair section a[href^=tel]').not(cta_bottom).each(function (index) {
		$(this).click(function() {
			dataLayer.push({event: 'clicktocall', label: 'content-' + ++index});
		});
	}); 
	
	var reviewslider = $('.reviewslider');
	if (reviewslider.length) {
		reviewslider.owlCarousel({
			items: 1,
			autoplay: 6000,
			nav: true,
			loop: true
		}).addClass('owl-carousel owl-theme');	
	}
	
	var proofrow = $('.proof-row');
	if (proofrow.length) {
		proofrow.owlCarousel({
			loop: true,
			responsiveClass: true,
			responsive: {
				0: {items: 1},
				600: {items: 2, dots: true},
				768: {items:5}
			}
		}).addClass('owl-carousel owl-theme');	
	}

	var reviews_slider = $('.reviews-slider');
	if (reviews_slider.length) {
		reviews_slider.owlCarousel({
			autoplay: 6000,
			loop: true,
			responsiveClass: true,
			responsive: {
				0: {items: 1},
				600: {items: 2},
				768: {items:3}
				
			}
		}).addClass('owl-carousel owl-theme');	
	}
	
	var product_slider_el = $('.sliderwrap .slides');
	if (product_slider_el.length) {
		var product_slider = product_slider_el.owlCarousel({
			items: 1,
			autoplay: 8000,
			dots: false
		}).addClass('owl-carousel owl-theme').data('owl.carousel');
		
		$('.sliderwrap .thumbs figure').click(function (e) {
			product_slider.to($(this).index());
		});
	}

	$('.faq').click(function () {
		var self = $(this);
		var others = self.siblings('.open');

		self.toggleClass('open');
		self.children('div').slideToggle(200);

		others.removeClass('open');
		others.children('div').slideUp(200);
	});
});
