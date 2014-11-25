define({
	title: '图片',
	body:'<div class="imgfor"><div class="pageone"></div><div class="swiper-container" id="sliderone"><div class="swiper-wrapper"><div class="swiper-slide"><img src="images/loading.gif" data-src="images/9.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/10.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/11.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/12.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/14.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/15.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/16.jpg"></div><div class="swiper-slide"><img src="images/loading.gif" data-src="images/17.jpg"></div></div></div></div>\
		',
	init: function(pageData) {
		var $view = this
		
		// 获取hash
		function getHash(url) {
		url = url || location.href
		return url.replace(/^[^#]*#?\/?(.*)\/?$/, '$1')
		}
		
		$('pre', $view).each(function(i, e) { hljs.highlightBlock(e) })
		
		if(swiperNested){
			swiperNested.destroy();
		}
		
		var swiperNested = new Swiper('#sliderone',{

			pagination: '.pageone',

			mode:"horizontal",
			
			paginationClickable: true,

			mousewheelControl:true

		})

		render();

		$('.page-container-navbar', $view).trigger('spa:scroll')
	}
})

