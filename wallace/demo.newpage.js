define({
  title: 'SPA - 打开新页面视图demo',
  body: '<nav class="navbar navbar-default navbar-static-top" role="navigation">\
        <div class="navbar-header">\
          <a class="navbar-brand" href="#demo/newpage">新页面</a>\
        </div>\
        <a href="#" class="btn btn-default navbar-btn btn-link pull-left"><span class="glyphicon glyphicon-chevron-left"></span></a>\
      </nav>\
      <div class="page-container-navbar">\
        <div class="container" style="background:red;">\
          <ul class="img-container clearfix" id="container">\
              </ul>\
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
          var total = 17;
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
          
          $('.page-container-navbar', $view).trigger('spa:scroll')
        }
})