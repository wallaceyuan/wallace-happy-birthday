var rMain = '#main',
	rWork = '#work(_?\\d*)',
	rMood = '#mood(_?\\d*)',
	rPhoto = '#photo(_?\\d*)',
	rInfo = '#info(_?\\d*)',
	rDetail = '#detail(_?\\d*)';

var onDeviceReady = function(){
	Router.set_routes([
		[rMain, mainPage],
		[rWork, workPage],
		[rMood, moodPage],
		[rPhoto, photoPage],
		[rInfo, infoPage],
		[rDetail, detailPage]
	]);

	Router.set_position([
		[rMain, {leftOf: [rWork,rMood,rPhoto,rInfo,rDetail]}],
		[rWork, {rightOf: [rMain], leftOf: [rDetail]}],
		[rMood, {rightOf: [rMain], leftOf: [rDetail]}],
		[rPhoto, {rightOf: [rMain], leftOf: [rDetail]}],
		[rInfo, {rightOf: [rMain], leftOf: [rDetail]}],
		[rDetail, {rightOf: [rMain,rWork,rMood,rPhoto,rInfo,rDetail]}]
	]);

	Router.set_ignore("^#http(:?%3A|\:)");
	Router.check_url();

	document.addEventListener(START_EV, function(){tojump = true;}, false);
	document.addEventListener(MOVE_EV, function(){tojump = false;}, false);

	$(document).on(END_EV, '.link', function(){ if(tojump) {
		tojump = false;
		var hash = $(this).attr('rel');
		if (hash) location.hash = hash;
		hidebmenu();
		hidemenu();
	}});

	$(document).on(END_EV,'.backbtn',function(){
		if(!tojump) return false;
		Router.get_back_from(location.hash);
	});

	$(document).on(END_EV,'.menubtn',function(){
		if(!tojump) return false;
		togglemenu([{"title":"返回主页","link":"#main"},{"title":"弹出提示","link":"javascript:do_alert('测试成功');"}]);
		return false;
	});
	
	//键盘动作监听
	document.addEventListener('keydown', function(e){
		if(e.keyCode===27){
			togglebmenu();
			return false;
		}
	}, false);
	
	//视当前手机数据，决定默认页面
	location.hash='#main';
	hideloading();
};

function mainPage(u){
	//读取模板
	var html = $.tmpl('#tmpl_main');
	//新页面滑入
	slide_in(html, rMain, '.frame', function(){
		//滑入完成后的处理
		//开始联网获取数据
		var mainScroller = createIScroll('#mainbodycontainer',false,false,{mouseWheel:true,scrollbars:true,bounceLock:false});
	});
}

function workPage(u){
	var html = $.tmpl('#tmpl_work');
	slide_in(html, rWork, '.frame', function(){
		showloading();
		var zWin = $(window);

		
		var render = function(){
			var total = 28;
			var tmpl = '';
			var padding = 2 ;
			var scrollBarWidth = 0;
			var winWidth = $(window).width();
			var picWidth = Math.floor((winWidth-padding*3-scrollBarWidth)/4);
			var zWP = winWidth *0.2 +'px';
			for(var i=1;i<=total;i++){
				var p = padding;
				if(i%4==1){
				  p = 0;
				}
				tmpl+='<div class="pin"><div data-id="'+i+'" class="animated bounceIn box" ><img src="images/'+i+'.jpg" style="width:'+zWP+'"></div></div>';
			}
			$('#container').html(tmpl);
		}
		render();

		var mScroller = createIScroll('#mbodycontainer',function(){
			//刷新动作
			showloading();
		},function(){
			//加载更多动作
			showloading();
		},{mouseWheel:true,scrollbars:true,bounceLock:false});
		waterfall();

		function waterfall(parent,pin){
			var $aPin = $( "#container>.pin" );
			var iPinW = $aPin.eq( 0 ).width();// 一个块框pin的宽
			var num = Math.floor( $( window ).width() / iPinW );//每行中能容纳的pin个数【窗口宽度除以一个块框宽度】
			//oParent.style.cssText='width:'+iPinW*num+'px;ma rgin:0 auto;';//设置父级居中样式：定宽+自动水平外边距
			var iW = iPinW * 4 + 2+'px';
			$( "#container" ).css({
				'width':iW,
				'margin': '0 auto'
			});

			var pinHArr=[];//用于存储 每列中的所有块框相加的高度。

			$aPin.each( function( index, value ){
				var pinH = $aPin.eq( index ).height();
				if( index < num ){
					pinHArr[ index ] = pinH; //第一行中的num个块框pin 先添加进数组pinHArr
				}else{
					var minH = Math.min.apply( null, pinHArr );//数组pinHArr中的最小值minH
					var minHIndex = $.inArray( minH, pinHArr );
					$( value ).css({
						'position': 'absolute',
						'top': minH + 15,
						'left': $aPin.eq( minHIndex ).position().left
					});
					//数组 最小高元素的高 + 添加上的aPin[i]块框高
					pinHArr[ minHIndex ] += $aPin.eq( index ).height() + 15;//更新添加了块框后的列高
				
				}
			});
		}
		
		var cid;
		var wImage = $('#large_img');
		var domImage = wImage[0];

		var loadImg = function(id,callback){
		  $('#container').css({height:zWin.height(),'overflow':'hidden'});
		  var sHeight= Math.max(document.documentElement.scrollHeight,document.body.scrollHeight);
		  var bHeight = document.documentElement.clientHeight || document.body.clientHeight;
		  var sTop = document.documentElement.scrollTop || document.body.scrollTop

		  $('#large_container').css({
			width:zWin.width(),
			height:sHeight + bHeight
			//top:$(window).scrollTop()
		  }).show();
		  var imgsrc = 'images/'+id+'.jpg';
		  var ImageObj = new Image();
		  ImageObj.src = imgsrc;
		  ImageObj.onload = function(){
			var w = this.width;
			var h = this.height;
			var winWidth = zWin.width();
			var winHeight = zWin.height();
			var realw = parseInt((winWidth - winHeight*w/h)/2);
			var realh = parseInt((winHeight - winWidth*h/w)/2);
			if(realh < 0 ){
				realh = 0;
			}
			var topoffset =$('.box').eq(id-1).offset().top;
			console.log(sHeight - topoffset,winHeight);

			if(topoffset > winHeight/2){
				console.log(topoffset -sHeight/3,111);
				var pp = sHeight/2;
			}else{
				pp = 0
			}
			

			console.log(pp+realh);

			wImage.css('width','auto').css('height','auto');
			wImage.css('padding-left','0px').css('padding-top','0px');
			if(h/w>1.2){
			   wImage.attr('src',imgsrc).css('height',winHeight).css({
			   	'padding-top':pp+'px',
			   	'padding-left':realw+'px'
			   });
			} else{
				console.log(pp+realh);
				wImage.attr('src',imgsrc).css('width',winWidth).css('padding-top',pp+realh+'px');
			}
			  

			$(document).on( 'scroll', function(){
			    console.log('Event Fired');
			});
			callback&&callback();
		  }
		}
		$('#container').delegate('.box','tap',function(){
		  var _id = cid = $(this).attr('data-id');
		  var topoffset = $(this).offset().top;
		  loadImg(_id);
		});

		$('#large_container').tap(function(){
		  $('#container').css({height:'auto','overflow':'auto'});
		  $('#large_container').hide();
		});
		$('#large_container').mousedown(function(e){
		  e.preventDefault();
		});
		var lock = false;
		$('#large_container').swipeLeft(function(e){
		  if(lock){
			return;
		  }
		  cid++;
		  
		  lock =true;
		  loadImg(cid,function(){
			domImage.addEventListener('webkitAnimationEnd',function(){
			  wImage.removeClass('animated bounceInRight');
			  domImage.removeEventListener('webkitAnimationEnd');
			  lock = false;
			},false);
			wImage.addClass('animated bounceInRight');
		  });
		  e.preventDefault();
		});
		$('#large_container').swipeRight(function(e){
		  if(lock){
			return;
		  }
		  cid--;
		  lock =true;
		  if(cid>0){
			loadImg(cid,function(){
			  domImage.addEventListener('webkitAnimationEnd',function(){
				wImage.removeClass('animated bounceInLeft');
				domImage.removeEventListener('webkitAnimationEnd');
				lock = false;
			  },false);
			  wImage.addClass('animated bounceInLeft');
			});
		  }else{
			cid = 1;
		  }
		  e.preventDefault();
		});
	});
}

function moodPage(u){
	var html = $.tmpl('#tmpl_mood');
	slide_in(html, rMood, '.frame', function(){
		showloading();
		$.getp(API+'jsondata/mood.json',null,false,function(json){
			$('#mbody ul').remove();
			$('#mbody').append('<ul class="list_ul"></ul>');
			for(var i=0;i<json.Data.length;i++){
				$('#mbody>ul').append('<li class="link" rel="'+json.Data[i].link+'">'+json.Data[i].title+'</li>');
			}
			
			var mScroller = createIScroll('#mbodycontainer',function(){
				//刷新动作
				showloading();
				$.getp(API+'jsondata/mood.json',null,true,function(json){
					$('#mbody ul').remove();
					$('#mbody').append('<ul class="list_ul"></ul>');
					for(var i=0;i<json.Data.length;i++){
						$('#mbody>ul').append('<li class="link" rel="'+json.Data[i].link+'">'+json.Data[i].title+'</li>');
					}

					mScroller.refresh();
					hideloading();
				});
			},function(){
				//加载更多动作
				showloading();
				$.getp(API+'jsondata/mood.json',null,true,function(json){
					for(var i=0;i<json.Data.length;i++){
						$('#mbody>ul').append('<li class="link" rel="'+json.Data[i].link+'">'+json.Data[i].title+'</li>');
					}

					mScroller.refresh();
					hideloading();
					do_timeout(function(){
						mScroller.scrollBy(0, -30);
					},500);
				});
			},{mouseWheel:true,scrollbars:true,bounceLock:false});
			hideloading();
		});
	});
}

function photoPage(u){
	var html = $.tmpl('#tmpl_photo');
	slide_in(html, rPhoto, '.frame', function(){
		showloading();
		$.getp(API+'jsondata/photo.json',null,false,function(json){
			$('#mbody ul').remove();
			$('#mbody').append('<ul class="list_ul"></ul>');
			for(var i=0;i<json.Data.length;i++){
				$('#mbody>ul').append('<li class="link" rel="'+json.Data[i].link+'">'+json.Data[i].title+'</li>');
			}
			
			var mScroller = createIScroll('#mbodycontainer',function(){
				//刷新动作
				showloading();
				$.getp(API+'jsondata/photo.json',null,true,function(json){
					$('#mbody ul').remove();
					$('#mbody').append('<ul class="list_ul"></ul>');
					for(var i=0;i<json.Data.length;i++){
						$('#mbody>ul').append('<li class="link" rel="'+json.Data[i].link+'">'+json.Data[i].title+'</li>');
					}

					mScroller.refresh();
					hideloading();
				});
			},function(){
				//加载更多动作
				showloading();
				$.getp(API+'jsondata/photo.json',null,true,function(json){
					for(var i=0;i<json.Data.length;i++){
						$('#mbody>ul').append('<li class="link" rel="'+json.Data[i].link+'">'+json.Data[i].title+'</li>');
					}

					mScroller.refresh();
					hideloading();
					do_timeout(function(){
						mScroller.scrollBy(0, -30);
					},500);
				});
			},{mouseWheel:true,scrollbars:true,bounceLock:false});
			hideloading();
		});
	});
}

function infoPage(u){
	var html = $.tmpl('#tmpl_info');
	slide_in(html, rInfo, '.frame', function(){
		showloading();
		$.getp(API+'jsondata/info.json',null,false,function(json){
					$('#mbody dl').remove();
			for(var i=0;i<json.Data.length;i++){
				$('#mbody').append('<dl class="list_dl"><dt>'+json.Data[i].title+'</dt><dd>'+json.Data[i].content+'</dd></dl>');
			}
			
			var mScroller = createIScroll('#mbodycontainer',function(){
				showloading();
				$.getp(API+'jsondata/info.json',null,true,function(json){
					$('#mbody dl').remove();
					for(var i=0;i<json.Data.length;i++){
						$('#mbody').append('<dl class="list_dl"><dt>'+json.Data[i].title+'</dt><dd>'+json.Data[i].content+'</dd></dl>');
					}

					mScroller.refresh();
					hideloading();
				});
			},false,{mouseWheel:true,scrollbars:true,bounceLock:false});
			hideloading();
		});
	});
}

function detailPage(u){
	var html = $.tmpl('#tmpl_detail');
	slide_in(html, rDetail, '.frame', false);
}
