define({
	title: 'Wallace Pic',
	body: '<div class="container" id="img_container">\
				<ul class="img-container clearfix" id="container">\
					<div class="pin">\
						<div data-id="1" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="2" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="3" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="4" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="5" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="6" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="7" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="8" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="9" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="10" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="11" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="12" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="13" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="14" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="15" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="16" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="17" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="18" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="19" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="20" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="21" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="22" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
					<div class="pin">\
						<div data-id="23" class="animated bounceIn box">\
							<img src="wallace.gif">\
						</div>\
					</div>\
				</ul>\
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
				var total = 23;
				var zWin = $(window);
				var urloru = "data";
				var ident = true;
				var wdent = true;
				var dataInt;
				var jsonid = 0;
				render();
				$('#img_container').on('scroll',function(){
					if(checkscrollside()){
						jsonid++;
						var url = urloru+jsonid+".json";
						console.log(url);
						$.getJSON(url,function(data){
							if (data.length == 0)
							{
								$('#img_container').html('<p style="padding: 15px 0" align="center">' + ('没有内容了') + '</p>');
								return;
							}
							else{
								dataInt = data;
								$.each(dataInt.data, function(index,value){
									var $oPin = $('<div>').addClass('pin').appendTo( $( "#container" ) );
									var $oBox = $('<div>').addClass('box').appendTo( $oPin );
									$('<img>').css().css('width',zWP).attr({"data-original":value.src,"src":"images/wallace.gif"}).appendTo($oBox);
								});
							}
						},"json");

					}
					lazy();
				});
				function checkscrollside(){
					var $aPin = $(".pin");
					var lastPinH = $aPin.last().get(0).offsetTop + Math.floor($aPin.last().height()/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
					var scrollTop = $('#img_container').scrollTop();//注意解决兼容性
					var documentH = $(document).height();//页面高度
					console.log(lastPinH,scrollTop,documentH);
					return (lastPinH < scrollTop + documentH ) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
				}
				/*图片加载*/
				function render(){
					var tmpl = '';
					for(var i=1;i<=total;i++){
						if(device.type === "mobile"){
							var imgsrc = 'images/'+i+'.ss.jpg';
						}else{
							var imgsrc = 'images/'+i+'.jpg';
						}
						$('.pin').eq(i-1).find('img').css('width',zWP);
						$('.pin').eq(i-1).find('img').attr('data-original',imgsrc);
					}
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
				var loadImg = function(id,imgurl,callback){
					$('#container').css({height:zWin.height(),'overflow':'hidden'});
					$('#large_container').css({
						width:zWin.width(),
						height:zWin.height()
						//top:$(window).scrollTop()
					}).show();
					var imgsrc = imgurl;
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
				$('.pin').on('tap',function(){
					var _id = cid = $(this).index();
					var imgurl = $(this).find('img').attr('src');
					console.log(cid,imgurl);
					loadImg(cid,imgurl);
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
					imgurl =  $('.pin').eq(cid).find('img').attr('src');
					lock =true;
					loadImg(cid,imgurl,function(){
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
					imgurl =  $('.pin').eq(cid).find('img').attr('src');
					lock =true;
					if(cid>0){
					loadImg(cid,imgurl,function(){
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