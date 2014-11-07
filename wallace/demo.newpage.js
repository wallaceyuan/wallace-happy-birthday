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
						<div class="pin">\
							<div data-id="1" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="2" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="3" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="4" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="5" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="6" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="7" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="8" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="9" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="10" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="11" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="12" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="13" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="14" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="15" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="16" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="17" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="18" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="19" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="20" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="21" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="22" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="23" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="24" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="25" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="26" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="27" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
						<div class="pin">\
							<div data-id="28" class="animated bounceIn box">\
								<img src="">\
							</div>\
						</div>\
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
				var total = 17;
				var zWin = $(window);
				function addLoadEvent(func) { //define a new function called addLoadEvent which takes in one param which should be function
					var oldonload = window.onload; //assign window.onload event to variable oldonload
						if (typeof window.onload != 'function') { //if window.onload is not a function,  and thus has never been defined before elsewhere
							window.onload = func; //assign 'func' to window.onload event. set the function you passed in as the onload function
						} else {             //if window.onlad is a function - thus already defined, we dont want to overwrite it so we will..
							window.onload = function() {  //define a new onload function that does the following:
							oldonload();  //do whatever the old onload function did
							func();       //and then do whatever your new passed in function does
						}
					}
				}
				$('.page-container-navbar').on('scroll',function(){
					var dataInt={'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'3.jpg'},{'src':'4.jpg'}]};
					if(checkscrollside()){
						alert(1);
						$.each( dataInt.data, function( index, value ){
							var $oPin = $('<div>').addClass('pin').appendTo( $( "#container" ) );
							var $oBox = $('<div>').addClass('box').appendTo( $oPin );
							$('<img>').attr('src','./images/' + $( value).attr( 'src') ).appendTo($oBox);
						});
						waterfall();
					};
				});
/*				$(window).scroll=function(){
					alert(1);
					if(checkscrollside()){
						$.each( dataInt.data, function( index, value ){
							var $oPin = $('<div>').addClass('pin').appendTo( $( "#main" ) );
							var $oBox = $('<div>').addClass('box').appendTo( $oPin );
							$('<img>').attr('src','./images/' + $( value).attr( 'src') ).appendTo($oBox);
						});
						waterfall();
					};
				}*/
				function checkscrollside(){
					var $aPin = $(".pin");
					var lastPinH = $aPin.last().get(0).offsetTop + Math.floor($aPin.last().height()/2);//创建【触发添加块框函数waterfall()】的高度：最后一个块框的距离网页顶部+自身高的一半(实现未滚到底就开始加载)
					var scrollTop = $('.page-container-navbar').scrollTop();//注意解决兼容性
					var documentH = $(document).width();//页面高度
					console.log(lastPinH,scrollTop,documentH);
					console.log($aPin.eq(0));
					return (lastPinH < scrollTop + documentH ) ? true : false;//到达指定高度后 返回true，触发waterfall()函数
				}

				render();

				/*图片加载*/
				function render(){
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
						var imgsrc = 'images/'+i+'.jpg';
						var ImageObj = new Image();
						ImageObj.src = imgsrc;
						ImageObj.onload = function (){
							if(ImageObj.complete){
								waterfall();
							}
						}
						$('.pin').eq(i-1).find('img').css('width',zWP);
						$('.pin').eq(i-1).find('img').attr('src',imgsrc);
					}
					setTimeout(function () {
						waterfall()
					}, 1000);
				}
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