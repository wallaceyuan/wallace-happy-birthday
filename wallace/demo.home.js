define({
  title: 'SPA - 打开新页面视图demo',
  body: ' <ul class="img-container clearfix" id="container">\
          </ul>\
        ' ,
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
            var tmpl = '';
            var padding = 2;
            var scrollBarWidth = 0;
            var winWidth = $(window).width();
            var picWidth = Math.floor((winWidth-padding*3-scrollBarWidth)/4);
            for(var i=1;i<=total;i++){
              var p = padding;
              if(i%4==1){
                p = 0;
              }
              tmpl+='<li data-id="'+i+'" class="animated bounceIn" style="width:'+picWidth+'px;height:'+picWidth+'px;padding-left:'+p+'px;padding-top:'+padding+'px;"><img src="img/'+i+'.jpg"></li>';
            }
            $('#container').html(tmpl);
          }
          render();
          $('pre', $view).each(function(i, e) { hljs.highlightBlock(e) })
          
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