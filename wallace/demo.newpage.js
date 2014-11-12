define({
	title: 'Wallace Pic',
	body: '<nav class="navbar navbar-default navbar-static-top" role="navigation">\
				<div class="navbar-header">\
					<a class="navbar-brand" href="#demo/newpage">新页面</a>\
				</div>\
				<a href="#" class="btn btn-default navbar-btn btn-link pull-left"><span class="glyphicon glyphicon-chevron-left"></span></a>\
			</nav>\
			<div class="page-container-navbar">\
				<div class="container">\
					<ul class="img-container clearfix" id="container">\
					</ul>\
				</div>\
			</div>\
			<div class="large animated fadeInDown" id="large_container" style="display:none">\
				<img id="large_img">\
			</div>\
			',
			init: function(pageData) {
				var $view = this
				// 获取hash
				function getHash(url) {
					url = url || location.href
					return url.replace(/^[^#]*#?\/?(.*)\/?$/, '$1')
				}
				var winWidth = $(window).width();
				var zWP = winWidth *0.2 +'px';
				var total = 17;
				var zWin = $(window);
				var url = "data.json";
				var ident = true;
				var wdent = true;
				var dataInt;
				render();
/*				$('.page-container-navbar').on('scroll',function(){
					if(checkscrollside() == 1){
						$.getJSON(url,function(data){
							dataInt = data;
							console.log(dataInt);
						},"json");
						$.each(dataInt.data, function( index, value ){
							console.log(value.src);
							var $oPin = $('<div>').addClass('pin').appendTo( $( "#container" ) );
							var $oBox = $('<div>').addClass('box').appendTo( $oPin );
							$('<img>').css().css('width',zWP).attr('data-original','images/' + value.src).appendTo($oBox);
						});
					}
					lazy();
				});*/
				function checkscrollside(){
					var $aPin = $(".pin");
					var lastPinH = $aPin.last().get(0).offsetTop + Math.floor($aPin.last().height()/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
					var scrollTop = $('.page-container-navbar').scrollTop();//注意解决兼容性
					var documentH = $(document).width();//页面高度
					console.log(lastPinH,scrollTop,documentH);
					return (lastPinH > scrollTop + documentH ) ? 1 : false;//到达指定高度后 返回true，触发waterfall()函数
				}
				/*图片加载*/
				function render(){
					var total = 28;
					var tmpl = '';
					var response ='';
/*					$.get(url, function (data)
					{
					    if (data.length)
					    {
					    	for(var i=0;i<data.length;i++){
					    		response += '<div class="pin"></div>';
					    	}
					    	$(".sumbox").prepend(response);
					    	$("#pullDown").hide();
					    }
					});*/
					
					
					$.getJSON(url,function(data){
						var dataInt = data;
						console.log(data);
						$.each(dataInt.data, function( index, value ){
							console.log(value.src);
							var $oPin = $('<div>').addClass('pin').appendTo( $( "#container" ) );
							var $oBox = $('<div>').addClass('box').appendTo( $oPin );
							$('<img>').css().css('width',zWP).attr('data-original','images/' + value.src).appendTo($oBox);
						});
					},"json");
					
					lazy();
				}
				function lazy(){
					$('.pin img').lazyload({
						effect:'fadeIn',
						event: 'scrollstop'
					});
				}
				var int= setInterval(waterfall,2000);
				/*瀑布流*/
				function waterfall(parent,pin){
					var $aPin = $( ".pin" );
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
						var pinH = $aPin.eq(index).height();
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
				/*加载图片*/
				var loadImg = function(id,callback){
					$('#container').css({height:zWin.height(),'overflow':'hidden'});
					$('#large_container').css({
						width:zWin.width(),
						height:zWin.height()
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
						wImage.css('width','auto').css('height','auto');
						wImage.css('padding-left','0px').css('padding-top','0px');
						if(h/w>1.2){
							 wImage.attr('src',imgsrc).css('height',winHeight).css('padding-left',realw+'px');;
						}else{
							 wImage.attr('src',imgsrc).css('width',winWidth).css('padding-top',realh+'px');
						}
						callback&&callback();
					}
				}
				/*点击图片*/
				$('#container').delegate('.box','tap',function(){
					var _id = cid = $(this).attr('data-id');
					console.log(cid);
					loadImg(_id);
				});
				/*点击返回*/
				$('#large_container').tap(function(){
					$('#container').css({height:'auto','overflow':'visible'});
					$('#large_container').hide();
				});
				$('#large_container').mousedown(function(e){
					e.preventDefault();
				});
				var lock = false;
				/*左滑动*/
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
				/*右滑动*/
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
				$('.page-container-navbar', $view).trigger('spa:scroll')
			}
})