define({
	title: '图片',
	body:'<div id="imgone"><div class="page"></div><div class="swiper-container" id="slider"><div class="swiper-wrapper"><div class="swiper-slide"><img src="images/9.jpg"></div><div class="swiper-slide"><img src="images/10.jpg"></div><div class="swiper-slide"><img src="images/11.jpg"></div><div class="swiper-slide"><img src="images/12.jpg"></div><div class="swiper-slide"><img src="images/14.jpg"></div><div class="swiper-slide"><img src="images/15.jpg"></div><div class="swiper-slide"><img src="images/16.jpg"></div><div class="swiper-slide"><img src="images/17.jpg"></div></div></div></div>\
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
		$('.swiper-slide img').each(function(){
			var imgsrc = $(this).attr('src');
			var _that = $(this);
			var ImageObj = new Image();
			ImageObj.src = imgsrc;
			ImageObj.onload = function(){
				var w = this.width;
				var h = this.height;
				var winWidth = $window.width();
				var winHeight = $window.height();
				var realw = parseInt((winWidth - winHeight*w/h)/2);
				var realh = parseInt((winHeight - winWidth*h/w)/2);
				console.log(w,h);
				if(h/w>1.2){
					_that.attr('src',imgsrc).css('height',winHeight).css('padding-left',realw+'px');;
				}else{
					_that.attr('src',imgsrc).css('width',winWidth).css('padding-top',realh+'px');
				}
			}
		});

		var swiperNested = new Swiper('#slider',{

			pagination: '.page',

			mode:"horizontal",
			
			paginationClickable: true,

			mousewheelControl:true

		})

		$('.page-container-navbar', $view).trigger('spa:scroll')
	}
})