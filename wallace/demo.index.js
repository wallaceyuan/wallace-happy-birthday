define({
	title: 'Wallace Happy Birthday',
	body:'<div class="swiper-container" id="slider1">\
			<div class="swiper-wrapper">\
				<div class="swiper-slide" id="slide_three"><div class="container"><div class="indeximg" id="indexo"><i><img src="images/index1.jpg"></i></div><div class="indeximg" id="indext"><i><img src="images/index2.jpg"></i></div><p class="name">钟汉良</p></div></div>\
				<div class="swiper-slide" id="slidetwo"><div class="container"><div class="left_img"><i class="move-down"><img src="images/bg.png"></i></div><div class="right_img"><i class="move-up"><img src="images/bg3.png"></i></div><div class="right_inf"><div id="slogan_1"><p>淡定 从容 优雅的小太阳</p><p>愿你的每一天 都是风和日丽</p><p>生日快乐</p></div></div></div></div>\
				<div class="swiper-slide" id="index_home"><div class="container"><div class="homeW"><div class="portrait"><i><img src="images/indexshow.jpg"></i></div><div class="food cool"><a href="#demo/newpageright"><i><img src="images/eatcake.png"><span>蛋糕</span></i></a></div><div class="music cool"><a href="#" data-panel="demoPanelSidemenu" class="btn-demo-panel"><i><img src="images/indexmusic.png"><span>音乐</span></i></a></div><div class="pic cool"><a href="#demo/pic"><i><img src="images/indexpic.png"><span>图片</span></i></a></div><div class="message cool"><a href="#demo/message"><i><img src="images/indexmes.png"><span>百科</span></i></a></div></div></div></div>\
			</div>\
		  </div>\
		  <div class="pagination"></div>\
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
		
		$(".swiper-slide").css("height",winHeight);
		$(".container").css("height",winHeight);
		
		
		var  cWidth = $('.cool').width();
		$('.cool').height(cWidth);

		var swiperNested = new Swiper("#slider1",{

			pagination: '.pagination',

			mode:"vertical",

			mousewheelControl:true

		});


		$view.on('click', '.btn-demo-panel', function(event) {
		event.preventDefault()
		var $btn = $(this),
			panelid = $btn.attr('data-panel')
		
		$doc.trigger('spa:openpanel', [panelid])
		})

		$view.on('click', '.btn-transitpage', function(event) {
		event.preventDefault()
		var $btn = $(this),
			animate = $btn.attr('data-animate'),
			hash = getHash($btn.attr('href'))
		
		$doc.trigger('spa:navigate', {hash: hash, pushData: {animate: animate}})
		})

		$view.on('click', '.btn-transitpanel', function(event) {
		event.preventDefault()
		var $btn = $(this),
			animate = $btn.attr('data-animate')
		
		$doc.trigger('spa:openpanel', ['demoPanelTransit', {animate: animate}])
		})
		
		$('.page-container-navbar', $view).trigger('spa:scroll')
	}
})