/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: [null, '480px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Mobile?
	if (browser.mobile)
		$body.addClass('is-mobile');
	else {

		breakpoints.on('>medium', function () {
			$body.removeClass('is-mobile');
		});

		breakpoints.on('<=medium', function () {
			$body.addClass('is-mobile');
		});

	}

	// Scrolly.
	$('.scrolly')
		.scrolly({
			speed: 1500,
			offset: $header.outerHeight()
		});

	// Menu.
	$('#menu')
		.append('<a href="#menu" class="close"></a>')
		.appendTo($body)
		.panel({
			delay: 500,
			hideOnClick: true,
			hideOnSwipe: true,
			resetScroll: true,
			resetForms: true,
			side: 'right',
			target: $body,
			visibleClass: 'is-menu-visible'
		});

	// Header.
	if ($banner.length > 0
		&& $header.hasClass('alt')) {

		$window.on('resize', function () { $window.trigger('scroll'); });

		$banner.scrollex({
			bottom: $header.outerHeight() + 1,
			terminate: function () { $header.removeClass('alt'); },
			enter: function () { $header.addClass('alt'); },
			leave: function () { $header.removeClass('alt'); }
		});

	}
})(jQuery);

// clear form to avoid it still being filled after submission
window.onbeforeunload = () => {
	for (const form of document.getElementsByTagName('form')) {
		form.reset();
	}
}


$(window).scroll(function (e) { parallaxScroll(); });
function parallaxScroll() {
	var scrolled = $(window).scrollTop();
	$('.y1').css({ 'transform': 'translate3d(0,' + scrolled * -0.15 + 'px, 0)' });
	$('.y2').css({ 'transform': 'translate3d(0,' + scrolled * -0.25 + 'px, 0)' });
	$('.y3').css({ 'transform': 'translate3d(0,' + scrolled * -0.3 + 'px, 0)' });
	$('.y4').css({ 'transform': 'translate3d(0,' + scrolled * -0.4 + 'px, 0)' });
	$('.y5').css({ 'transform': 'translate3d(0,' + scrolled * -0.5 + 'px, 0)' });
	$('.y6').css({ 'transform': 'translate3d(0,' + scrolled * -0.6 + 'px, 0)' });
};



window.addEventListener('scroll', reveal);

function reveal() {
	var reveals = document.querySelectorAll('.reveal');

	for (var i = 0; i < reveals.length; i++) {

		var windowheight = window.innerHeight;
		var revealtop = reveals[i].getBoundingClientRect().top;
		var revealpoint = 150;

		if (revealtop < windowheight - revealpoint) {
			reveals[i].classList.add('active');
		}
		else {
			reveals[i].classList.remove('active');
		}
	}
}


var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 500, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
    // select video element         
    vid = document.getElementById('v0'); 

// dynamically set the page height according to video length
vid.addEventListener('loadedmetadata', function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
  var frameNumber  = window.pageYOffset/playbackConst;
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);