define({
	title: 'Cake',
	body:'<div class="swiper-slide" id="slideone"><div class="container"><div class="balloon"><div><span>☺</span></div><div><span>B</span></div><div><span>D</span></div><div><span>A</span></div><div><span>Y</span></div><div><span>!</span></div></div><div class="wallace_eat animated"><i><img src="images/wallaceeat.jpg"></i></div><div class="cakw"><i><img src="images/cake.png"></i></div></div></div>\
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
		
		$('#slideone .balloon').height(winHeight);

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