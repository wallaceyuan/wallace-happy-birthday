// JavaScript Document
$(function(){
		/*首页滚图star*/
		var len = $(".slide_show .swiper-slide").length; //获取焦点图个数 
		var sWidth = $('.swiper-slide').width();
		var index = 0; 
		var picTimer; 
		//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮 
		var btn = "<div class='btn'>"; 
		for(var i=0; i < len; i++) { 
			btn += '<span class="swiper-pagination-switch"></span>'; 
		}
		$(".slide_show .page").append(btn); 
		//为小按钮添加鼠标滑入事件，以显示相应的内容 
		$(".slide_show .page span").click(function() { 
			index = $(".slide_show .page span").index(this); 
			showPics(index); 
		}).eq(0).trigger("click"); 
		//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度 
		$(".slide_show .swiper-wrapper").css("width",sWidth * (len)); 
		//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放 
		$(".slide_show").hover(function() {
			$(".slide_show .page span").removeClass('swiper-active-switch');
			clearInterval(picTimer); 
		},function() { 
			$(".slide_show .page span").eq(index).addClass('swiper-active-switch');

			picTimer = setInterval(function() {
			index++; 
			if(index == len) {index = 0;} 
			showPics(index); 
		},5000); //此4000代表自动播放的间隔，单位：毫秒 
		}).trigger("mouseleave"); 


		//显示图片函数，根据接收的index值显示相应的内容 
		function showPics(index) { //普通切换
			var nowLeft = -index*sWidth; //根据index值计算ul元素的left值 
			$(".slide_show .page span").removeClass('swiper-active-switch swiper-visible-switch ');
			$(".slide_show .page span").eq(index).addClass('swiper-active-switch swiper-visible-switch ')
			$(".slide_show .swiper-wrapper").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position 
			$(".slide_show .page span").stop(true,false).eq(index).stop(true,false); //为当前的按钮切换到选中的效果 
		}
		/*首页滚图end*/
})

