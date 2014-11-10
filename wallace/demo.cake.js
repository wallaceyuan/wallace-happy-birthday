define({
  title: 'SPA - 打开新页面视图demo',
  body:'<div class="swiper-slide" id="slideone"><div class="container"><div class="balloon"><div><span>☺</span></div><div><span>B</span></div><div><span>D</span></div><div><span>A</span></div><div><span>Y</span></div><div><span>!</span></div></div><div class="cakw"><i><img src="images/cake.png"></i></div></div><svg class="swiper-polyline"><polyline points="0 10,10 2,20 10" stroke="white" stroke-width="3" fill="none"><animate attributename="opacity" from="1" to="0.2" dur="1s" accumulate="none" repeatcount="indefinite"></animate></polyline><polyline points="0 20,10 12,20 20" stroke="white" stroke-width="3" fill="none"><animate attributename="opacity" from="1" to="0.2" dur="1s" accumulate="none" repeatcount="indefinite"></animate></polyline></svg></div>\
  ',
  init: function(pageData) {
    var $view = this;
    var $window = $(window);

    var winHeight =$window.height();
    
    $(".swiper-slide").css("height",winHeight);
    $(".container").css("height",winHeight);
    $('.page-container-navbar', $view).trigger('spa:scroll')
  }
})