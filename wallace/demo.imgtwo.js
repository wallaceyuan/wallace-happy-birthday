define({
	title: '图片',
	body:'<div class="imgfor"><div class="page" id="sw"><img src="images/swipe.png" width="45"></div><div class="swiper-container" id="slidertwo"><div class="swiper-wrapper"><div class="swiper-slide"><img data-src="images/27.jpg"></div><div class="swiper-slide"><img data-src="images/13.jpg"></div><div class="swiper-slide"><img data-src="images/21.jpg"></div><div class="swiper-slide"><img data-src="images/33.jpg"></div><div class="swiper-slide"><img data-src="images/d2.jpg"></div><div class="swiper-slide"><img data-src="images/d1.jpg"></div><div class="swiper-slide"><img data-src="images/20.jpg"></div><div class="swiper-slide"><img data-src="images/d4.jpg"></div><div class="swiper-slide"><img data-src="images/d8.jpg"></div><div class="swiper-slide"><img data-src="images/d41.jpg"></div><div class="swiper-slide"><img data-src="images/d42.jpg"></div><div class="swiper-slide"><img data-src="images/d30.jpg"></div><div class="swiper-slide"><img data-src="images/d45.jpg"></div></div></div></div>\
		',
	init: function(pageData) {
		var $view = this
		
		// 获取hash
		function getHash(url) {
		url = url || location.href
		return url.replace(/^[^#]*#?\/?(.*)\/?$/, '$1')
		}
		
		$('pre', $view).each(function(i, e) { hljs.highlightBlock(e) })

		var $window = $(window);
		var winHeight =$window.height();
		$(".swiper-container,.swiper").css("height",winHeight);

		var swiperNested2 = new Swiper('#slidertwo',{

			mode:"horizontal",

		})

		render();



		$('.page-container-navbar', $view).trigger('spa:scroll')
	}
})