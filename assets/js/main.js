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


// var frameNumber = 0, // start video at frame 0
//     // lower numbers = faster playback
//     playbackConst = 500, 
//     // get page height from video duration
//     setHeight = document.getElementById("set-height"), 
//     // select video element         
//     vid = document.getElementById('v0'); 

// // dynamically set the page height according to video length
// vid.addEventListener('loadedmetadata', function() {
//   setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
// });

// // Use requestAnimationFrame for smooth playback
// function scrollPlay(){  
//   var frameNumber  = window.pageYOffset/playbackConst;
//   vid.currentTime  = frameNumber;
//   window.requestAnimationFrame(scrollPlay);
// }

// window.requestAnimationFrame(scrollPlay);


// const registerVideo = (bound, video) => {
// 	bound = document.querySelector(bound);
// 	video = document.querySelector(video);
// 	const scrollVideo = ()=>{
// 		if(video.duration) {
// 			const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
// 			const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
// 			const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);

// 			video.currentTime = video.duration * percentScrolled;
// 		}
// 		requestAnimationFrame(scrollVideo);
// 	}
// 	requestAnimationFrame(scrollVideo);
// }


// registerVideo("#bound-one", "#bound-one video");

// registerVideo("#bound-two", "#bound-two video")

// registerVideo("#bound-three", "#bound-three video")



//* Encoding is important!!!

gsap.registerPlugin(ScrollTrigger);

const toVid = document.querySelector("#tovideo");
let ToTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#to",
    start: "top top",
    end: "bottom+=200% bottom",
    scrub: true,
    // markers: true,
	pin: true
  }
});
// wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
toVid.onloadedmetadata = function () {
	ToTl.to(toVid, { currentTime: toVid.duration });
};
// Dealing with devices
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (isTouchDevice()) {
  toVid.play();
  toVid.pause();
}



const vehRecVid = document.querySelector("#vehrecvid");

let vehrecTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#vehrec",
    start: "top top",
    end: "bottom+=200% bottom",
    scrub: true,
    // markers: true,
	pin: true
  }
});

// wait until video metadata is loaded, so we can grab the proper duration before adding the onscroll animation. Might need to add a loader for loonng videos
vehRecVid.onloadedmetadata = function () {
  vehrecTl.to(vehRecVid, { currentTime: vehRecVid.duration });
};

// Dealing with devices
function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}
if (isTouchDevice()) {
  vehRecVid.play();
  vehRecVid.pause();
}