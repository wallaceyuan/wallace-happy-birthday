define({
	title: '图片',
	body:'<div class="img-container spa-scroll"><div id="imgshow"><div class="container"><div class="banner"><img src="images/imgbanner.jpg" width="100%"></div><div class="img-list"><div class="img-content"><div class="title-nav"><span class="fenlei">电视电影</span></div><div class="clearfix"><div class="img-in"><a href="#demo/imgone"><img src="images/gxz.jpg"></a></div><div class="img-in"><a href="#demo/imgtwo"><img src="images/fm2.jpg"></a></div></div></div><div class="img-content"><div class="title-nav"><span class="fenlei">生活音乐</span></div><div class="clearfix"><div class="img-in"><a href="#demo/imgthree"><img src="images/fm3.jpg"></a></div><div class="img-in"><a href="#demo/imgfour"><img src="images/fm4.jpg"></a></div></div></div></div></div></div></div>\
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