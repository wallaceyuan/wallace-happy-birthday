define({
	title: '图片',
	body:'<div class="imgfor"><div class="page" id="sw"><img src="images/swipe.png" width="45"></div><div class="swiper-container" id="sliderfour"><div class="swiper-wrapper"><div class="swiper-slide"><img data-src="images/y79.jpg"></div><div class="swiper-slide"><img data-src="images/y10.jpg"></div><div class="swiper-slide"><img data-src="images/y54.jpg"></div><div class="swiper-slide"><img data-src="images/y65.jpg"></div><div class="swiper-slide"><img data-src="images/y76.jpg"></div></div></div></div>\
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

		var swiperNested4 = new Swiper('#sliderfour',{

			mode:"horizontal",

		})

		render();



		$('.page-container-navbar', $view).trigger('spa:scroll')
	}
})