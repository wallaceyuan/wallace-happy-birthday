define({
	title: '档案',
	body:'<div class="wallace_data"><div class="wa_img"><img src="images/ms_pic.jpg"></div><div class="intro"><p class="about_pp">中文名：钟汉良<br>英文名：Wallace Chung<br>生肖：虎<br>星座：射手座<br>祖籍：广东省惠州市惠阳区<br>家庭成员：父，母，两姐，一妹<br>语言：国语，粤语，英语<br>爱好：网球，游泳，跑步，摄影，看书，背唐诗，晒太阳<br>对自己的评价：对任何事物都有好奇心，更因为有趣而激起好学心。</p></div></div>\
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
		$('.wallace_data').height(winHeight);
		$('.page-container-navbar', $view).trigger('spa:scroll')
	}
})