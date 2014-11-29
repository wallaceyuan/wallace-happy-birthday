function render(){
	var $window = $(window);
	var winHeight =$window.height();
	$(".swiper-container,.swiper").css("height",winHeight);
	var loadiv = $('<div id="mask"></div><div id="loader"><div id="fountainG"><div id="fountainG_1" class="fountainG"></div><div id="fountainG_2" class="fountainG"></div><div id="fountainG_3" class="fountainG"></div><div id="fountainG_4" class="fountainG"></div><div id="fountainG_5" class="fountainG"></div><div id="fountainG_6" class="fountainG"></div><div id="fountainG_7" class="fountainG"></div><div id="fountainG_8" class="fountainG"></div></div></div>');
	loadiv.appendTo($('.imgfor'));
	$('#mask,#loader').show();
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
		}

	});
	$('#mask,#loader').hide();

}

var dataForWeixin={ 
appId:"", 
MsgImg:"http://wallaceyuan.github.io/wallace/images/index1.jpg", 
TLImg:"http://wallaceyuan.github.io/wallace/images/index1.jpg", 
url:"http://wallaceyuan.github.io",
title:"钟汉良，生日快乐！", 
desc:"脑残花痴梅菜花技术渣粉圆大圈送上，做得不好求轻拍", 
fakeid:"", 
callback:function(){} 
}; 
(function(){ 
var onBridgeReady=function(){ 
WeixinJSBridge.on('menu:share:appmessage', function(argv){ 
WeixinJSBridge.invoke('sendAppMessage',{ 
"appid":dataForWeixin.appId, 
"img_url":dataForWeixin.MsgImg, 
"img_width":"120", 
"img_height":"120", 
"link":dataForWeixin.url, 
"desc":dataForWeixin.desc, 
"title":dataForWeixin.title 
}, function(res){(dataForWeixin.callback)();}); 
}); 
WeixinJSBridge.on('menu:share:timeline', function(argv){ 
(dataForWeixin.callback)(); 
WeixinJSBridge.invoke('shareTimeline',{ 
"img_url":dataForWeixin.TLImg, 
"img_width":"120", 
"img_height":"120", 
"link":dataForWeixin.url, 
"desc":dataForWeixin.desc, 
"title":dataForWeixin.title 
}, function(res){}); 
}); 
WeixinJSBridge.on('menu:share:weibo', function(argv){ 
WeixinJSBridge.invoke('shareWeibo',{ 
"content":dataForWeixin.title, 
"url":dataForWeixin.url 
}, function(res){(dataForWeixin.callback)();}); 
}); 
WeixinJSBridge.on('menu:share:facebook', function(argv){ 
(dataForWeixin.callback)(); 
WeixinJSBridge.invoke('shareFB',{ 
"img_url":dataForWeixin.TLImg, 
"img_width":"120", 
"img_height":"120", 
"link":dataForWeixin.url, 
"desc":dataForWeixin.desc, 
"title":dataForWeixin.title 
}, function(res){}); 
}); 
}; 
if(document.addEventListener){ 
document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false); 
}else if(document.attachEvent){ 
document.attachEvent('WeixinJSBridgeReady' , onBridgeReady); 
document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady); 
} 
})(); 