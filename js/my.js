// JavaScript Document
$(function(){
	$(".rankBox .tabtit span").each(function(index){
		$(this).click(function(){
			$(".rankBox .tabtit span").removeClass("cur");
			$(this).addClass("cur");
			$(".rankBox .rankCon").hide().eq(index).show();	
		})
	})	
})