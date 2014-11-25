function render(){
	var $window = $(window);
	var winHeight =$window.height();
	$(".swiper-container,.swiper").css("height",winHeight); 
	$('.swiper-slide img').each(function(){
		var imgsrc = $(this).attr('data-src');
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
			$('.imgfor .swiper-slide').css('top',0);
			if(h/w>1.2){
				_that.attr('src',imgsrc).css('height',winHeight).css('padding-left',realw+'px').width('auto').css('top',0);
			}else{
				_that.attr('src',imgsrc).css('width',winWidth).css('padding-top',realh+'px').css('top',0);
			}
		}
	});
}