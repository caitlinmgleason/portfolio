var galleryFunction = function() {

//formatting for desktop effects
if ($(window).width() > 1000 && (window.innerHeight < window.innerWidth)) {



var right = $(".right");
var left = $(".left");

var hasOpened = false;
var leftOpen = false;
	
	//open and close portfolio + animations
	$(".left").click(function(){
			if (hasOpened && leftOpen) {
				return;
			}
			hasOpened = true;
			leftOpen = true;

			left.removeClass("closed");
			left.addClass("left-open");
			right.removeClass("right-open");
			right.addClass("closed");
			$(".left .open-arrow").css({"display": "none" , "opacity": "0"});
			
			//stop scrolling when mouseover on gallery
			$('.gallery').hover(function() {
				$("body").css("overflow","hidden");
			}, function() {
				 $("body").css("overflow","auto");
			});
			
			setTimeout(function() {
			  $(".right .draw2").removeClass("trigger2");
			  $(".right .draw").removeClass("trigger");
			  $(".left .draw2").addClass("trigger2");
			  $(".left .draw").addClass("trigger");
			}, 1600);
			setTimeout(function() {
				$(".right .open-arrow").css({"display": "block" , "opacity": "1"});
			}, 2200);
	});
	
	$(".right").click(function(){
			if (hasOpened && !leftOpen) {
				return;
			}
			hasOpened = true;
			leftOpen = false;
			
			right.removeClass("closed");
			right.addClass("right-open");
			left.removeClass("left-open");
			left.addClass("closed");
			$(".right .open-arrow").css({"display": "none" , "opacity": "0"});
			
			//stop scrolling when mouseover on gallery
			$('.gallery').hover(function() {
				$("body").css("overflow","hidden");
			}, function() {
				 $("body").css("overflow","auto");
			});
			
			setTimeout(function() {
			$(".left .draw2").removeClass("trigger2");
			  $(".left .draw").removeClass("trigger");
			  $(".right .draw2").addClass("trigger2");
			  $(".right .draw").addClass("trigger");
			}, 1600);
			setTimeout(function() {
				$(".left .open-arrow").css({"display": "block" , "opacity": "1"});
			}, 2200);
	});
		
		var $portfolio = $('.left .portfolio').flickity();
		var flkty = $portfolio.data('flickity');
		var selectedIndex = flkty.selectedIndex;
		
		//changing background colors on design
		$portfolio.on('select.flickity', function() {
			if (flkty.selectedIndex != selectedIndex) {
					if ( flkty.selectedIndex == 0 ) {
						// botanica
						$(".left .portfolio").css("background" , "#FC9");
						$(".left .portfolio .title").css("color" , "#335214");
					}
					if ( flkty.selectedIndex == 1 ) {
						// H2GO
						$(".left .portfolio").css("background" , "#8BC53F");
						$(".left .portfolio .title").css("color" , "#007399");
					}
					if ( flkty.selectedIndex == 2 ) {
						// Louboutin
						$(".left .portfolio").css("background" , "#191919");
						$(".left .portfolio .title").css("color" , "#FA2200");
					}
					if ( flkty.selectedIndex == 3 ) {
						// CPS
						$(".left .portfolio").css("background" , "#005D83");
						$(".left .portfolio .title").css("color" , "#FFCB27");
					}
					if ( flkty.selectedIndex == 4 ) {
						// Wendys
						$(".left .portfolio").css("background" , "#EFD7AF");
						$(".left .portfolio .title").css("color" , "#BF1122");
					}
					if ( flkty.selectedIndex == 5 ) {
						// BT
						$(".left .portfolio").css("background" , "#71C6A6");
						$(".left .portfolio .title").css("color" , "#434244");
					}
					selectedIndex = flkty.selectedIndex;
			}
		});
		
		
		//changing background colors on webdev
		var $portfolio2 = $('.right .portfolio').flickity();
		var flkty2 = $portfolio2.data('flickity');
		var selectedIndex2 = flkty2.selectedIndex;
			$portfolio2.on('select.flickity', function() {
				if (flkty2.selectedIndex != selectedIndex2) {
						if ( flkty2.selectedIndex == 0 ) {
							// sugi
							$(".right .portfolio").css("background" , "#474340");
							$(".right .portfolio .title").css("color" , "#FC9");
						}
						if ( flkty2.selectedIndex == 1 ) {
							// wild garden
							$(".right .portfolio").css("background" , "#013e22");
							$(".right .portfolio .title").css("color" , "#ffaf57");
						}
						if ( flkty2.selectedIndex == 2 ) {
							// fleurotica
							$(".right .portfolio").css("background" , "#000000");
							$(".right .portfolio .title").css("color" , "#870430");
						}
						if ( flkty2.selectedIndex == 3 ) {
							// misc
							$(".right .portfolio").css("background" , "#6B1841");
							$(".right .portfolio .title").css("color" , "#F470B9");
						}
						selectedIndex2 = flkty2.selectedIndex2;
				}
			});
		
		//animate knock knock 
		/*document.addEventListener('DOMContentLoaded', function(){
			var trigger = new ScrollTrigger({
			  toggle: {
				visible: 'visibleClass',
				hidden: 'hiddenClass'
			  },
			  offset: {
				x: 0,
				y: 20
			  },
			  addHeight: true,
			  once: true
			}, document.body, window);
		});*/
}

}

var flickFunction = function() {

	if ($(window).width() > 1000 && (window.innerHeight < window.innerWidth)) {
		$('.portfolio').flickity({
		cellAlign: 'center',
		contain: true,
		accessibility: false,
		pageDots: true,
		wrapAround: true,
		watchCSS: true,
		setGallerySize: false,
		draggable: false,
		cellSelector: '.carousel-cell'
	});
	}
	else {
		
	$('.gallery').flickity({
		cellAlign: 'center',
		contain: true,
		accessibility: false,
		pageDots: true,
		wrapAround: true,
		setGallerySize: true,
		watchCSS: true,
		imagesLoaded: true,
		cellSelector: '.gallery-img'
	});
	}
	
}


$(document).ready(function() {
	flickFunction();
	galleryFunction();
	stellarReact()
	
});


// Listen for orientation changes
window.addEventListener("orientationchange", function() {
	flickFunction();
	galleryFunction();
	stellarReact()
}, false);


window.addEventListener("resize", function() {
	flickFunction();
	galleryFunction();
	stellarReact()	
}, false);

//var stellarActivated = false;

function stellarReact() {

	if ($(window).width() > 1000 || (window.innerHeight < window.innerWidth)) {
		$.stellar({
				hideDistantElements: false,
				horizontalScrolling: false,
				responsive: true,
				horizontalOffset: 0,
			});
		// solutin from : https://stackoverflow.com/questions/12236631/can-stellar-js-readjust-element-offsets-on-window-resize
		// Find out all my elements that are being manipulated with stellar
		var particles = $(window).data('plugin_stellar').particles;
	
		// Temporarily stop stellar so we can move our elements around
		// data('plugin_stellar') let's me access the instance of stellar
		// So I can use any of its methods. See stellar's source code
		$(window).data('plugin_stellar').destroy();
	
		$.each(particles, function(i, el){
			// destroy() sets the positions to their original PIXEL values. 
			// Mine were percentages, so I need to restore that.
			this.$element.css('top', '');
	
			// Once the loop is finished, re-initialize stellar
			if(particles.length - 1 == i){
				$(window).data('plugin_stellar').init();
			}
	
		});
	}
}
	