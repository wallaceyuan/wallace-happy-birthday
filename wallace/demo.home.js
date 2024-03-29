define({
  title: 'Wallace Happy Birthday',
  body: '<nav class="navbar navbar-default navbar-static-top" role="navigation">\
         <div class="navbar-header">\
         <a class="navbar-brand" href="#demo/newpage">首页面</a>\
         </div>\
         </nav>\
         <div class="page-container-navbar">\
           <div class="container">\
             <div class="page-header"></div>\
             <p><a href="#demo/newpage" class="btn main_btn btn-info">图片</a></p>\
             <p><a href="#demo/newpageright" class="btn main_btn btn-info">百科</a></p>\
             <p><a href="#" data-panel="demoPanelSidemenu" class="btn main_btn btn-info btn-demo-panel">音乐</a>\
                <a href="#" data-panel="demoPanelAlert" class="btn main_btn btn-info btn-demo-panel">提示对话框</a>\
                <a href="#" data-panel="demoPanelConfirm" class="btn main_btn btn-info btn-demo-panel">确认对话框</a>\
             </p>\
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