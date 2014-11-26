define({
	title: '图片',
	body:'<div class="imgfor"><div class="page" id="sw"><img src="images/swipe.png" width="45"></div><div class="swiper-container" id="sliderthree"><div class="swiper-wrapper"><div class="swiper-slide"><img data-src="images/18.jpg"></div><div class="swiper-slide"><img data-src="images/19.jpg"></div><div class="swiper-slide"><img data-src="images/20.jpg"></div><div class="swiper-slide"><img data-src="images/21.jpg"></div><div class="swiper-slide"><img data-src="images/22.jpg"></div><div class="swiper-slide"><img data-src="images/23.jpg"></div><div class="swiper-slide"><img data-src="images/24.jpg"></div><div class="swiper-slide"><img data-src="images/25.jpg"></div></div></div></div>\
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

		var swiperNested3 = new Swiper('#sliderthree',{

			mode:"horizontal",

		})

		render();



		$('.page-container-navbar', $view).trigger('spa:scroll')
	}
})