define({
	title: 'Wallace Happy Birthday',
	body:'<div class="swiper-container" id="slider1">\
			<div class="swiper-wrapper">\
				<div class="swiper-slide" id="slide_three"><div class="container"><div class="indeximg" id="indexo"><i><img src="images/index1.jpg"></i></div><div class="indeximg" id="indext"><i><img src="images/index2.jpg"></i></div><p class="name">钟汉良</p></div></div>\
				<div class="swiper-slide" id="slideone"><div class="container"><div class="balloon"><div><span>☺</span></div><div><span>B</span></div><div><span>D</span></div><div><span>A</span></div><div><span>Y</span></div><div><span>!</span></div></div><div class="cakw"><i><img src="images/cake.png"></i></div></div><svg class="swiper-polyline"><polyline points="0 10,10 2,20 10" stroke="white" stroke-width="3" fill="none"><animate attributename="opacity" from="1" to="0.2" dur="1s" accumulate="none" repeatcount="indefinite"></animate></polyline><polyline points="0 20,10 12,20 20" stroke="white" stroke-width="3" fill="none"><animate attributename="opacity" from="1" to="0.2" dur="1s" accumulate="none" repeatcount="indefinite"></animate></polyline></svg></div>\
				<div class="swiper-slide" id="slidetwo"><div class="container"><div class="left_img"><i class="move-down"><img src="images/bg.png"></i></div><div class="right_img"><i class="move-up"><img src="images/bg2.png"></i></div><div class="right_inf"><div id="slogan_1"><p>淡定 从容 优雅的小太阳</p><p>愿你的每一天 都是风和日丽</p><p>生日快乐</p></div></div></div></div>\				<div class="swiper-slide"><p><a href="#demo/newpage" class="btn main_btn btn-info">图片</a></p><p><a href="#demo/newpageright" class="btn main_btn btn-info">百科</a></p><p><a href="#" data-panel="demoPanelSidemenu" class="btn main_btn btn-info btn-demo-panel">音乐</a><a href="#" data-panel="demoPanelAlert" class="btn main_btn btn-info btn-demo-panel">提示对话框</a><a href="#" data-panel="demoPanelConfirm" class="btn main_btn btn-info btn-demo-panel">确认对话框</a></p><svg class="swiper-polyline"><polyline points="0 10,10 2,20 10" stroke="white" stroke-width="3" fill="none"><animate attributename="opacity" from="1" to="0.2" dur="1s" accumulate="none" repeatcount="indefinite"></animate></polyline><polyline points="0 20,10 12,20 20" stroke="white" stroke-width="3" fill="none"><animate attributename="opacity" from="1" to="0.2" dur="1s" accumulate="none" repeatcount="indefinite"></animate></polyline></svg></div>\
		  	</div>\
		  </div>\
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

		var swiperNested1 = new Swiper("#slider1",{

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