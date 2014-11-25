define({
	title: '图片',
	body:'<div class="imgfor"><div class="pagetwo"></div><div class="swiper-container" id="slidertwo"><div class="swiper-wrapper"><div class="swiper-slide"><img src="images/loading.gif" data-src="images/18.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/19.jpg"></div>s<div class="swiper-slide"><img src="images/loading.gif" data-src="images/20.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/21.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/22.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/23.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/24.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/25.jpg"></div></div></div></div>\
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
		
		if(swiperNested){
			swiperNested.destroy();
		}
		var swiperNested = new Swiper('#slidertwo',{

			pagination: '.pagetwo',

			mode:"horizontal",

			paginationClickable: true,

			mousewheelControl:true

		})

		render();



		$('.page-container-navbar', $view).trigger('spa:scroll')
	}
})