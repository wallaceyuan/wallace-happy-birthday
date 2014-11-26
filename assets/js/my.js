function render(){
	var $window = $(window);
	var winHeight =$window.height();
	$(".swiper-container,.swiper").css("height",winHeight);
	var loadiv = $('<div id="mask"></div><div id="loader"><div id="fountainG"><div id="fountainG_1" class="fountainG"></div><div id="fountainG_2" class="fountainG"></div><div id="fountainG_3" class="fountainG"></div><div id="fountainG_4" class="fountainG"></div><div id="fountainG_5" class="fountainG"></div><div id="fountainG_6" class="fountainG"></div><div id="fountainG_7" class="fountainG"></div><div id="fountainG_8" class="fountainG"></div></div></div>');
	loadiv.appendTo($('.imgfor'));
	$('.swiper-slide img').each(function(){
		var imgsrc = $(this).attr('data-src');
		var _that = $(this);
		var ImageObj = new Image();
		ImageObj.src = imgsrc;
		ImageObj.onload = function(){
			$('#mask,#loader').show();
			var w = this.width;
			var h = this.height;
			var winWidth = $window.width();
			var winHeight = $window.height();
			var realw = parseInt((winWidth - winHeight*w/h)/2);
			var realh = parseInt((winHeight - winWidth*h/w)/2);
			var smW= w*winHeight /h;
			_that.css('width','auto').css('height','auto');
			_that.css('padding-left','0px').css('padding-top','0px');
			if(h/w>1.2){
				_that.attr('src',imgsrc).css('height',winHeight);
			}else{
				if(realh < 0){
					console.log(smW);
					_that.attr('src',imgsrc).css('height',winHeight).css('width',smW);
				}else{
					_that.attr('src',imgsrc).css('width',winWidth).css('padding-top',realh+'px');
				}
			} 
			$('#mask,#loader').hide();
		}
	});
}