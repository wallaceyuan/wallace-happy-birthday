requirejs.config({
  baseUrl: '',
  // urlArgs: "v=" +  (new Date()).getTime(),
  urlArgs: 'v=20140320',
  paths: {}
})


var $doc = $(document)

// 首页
var pageHome = {
  route: '',
  classname: 'home',
  animate: 'fadeIn',
  view: function() {
    var $page = this
    requirejs(['demo.index'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}

// demo:打开新页面视图（图片）
var demoNewPage = {
  route: 'demo/newpage',
  classname: 'demo-newpage',
  animate: 'slideInRight',
  view: function() {
    var $page = this
    requirejs(['demo.newpage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}
/*图片二*/
var demoPic = {
  route: 'demo/pic',
  classname: 'demo-pic',
  animate: 'slideInRight',
  view: function() {
    var $page = this
    requirejs(['demo.pic'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}
/*图片二一*/
var demoPicOne = {
  route: 'demo/imgone',
  classname: 'demo-imgone',
  animate: 'slideInLeft',
  view: function() {
    var $page = this
    requirejs(['demo.imgone'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}
/*图片二一*/
var demoPicTwo = {
  route: 'demo/imgtwo',
  classname: 'demo-imgtwo',
  animate: 'slideInRight',
  view: function() {
    var $page = this
    requirejs(['demo.imgtwo'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}
/*图片二一*/
var demoPicThree = {
  route: 'demo/imgthree',
  classname: 'demo-imgthree',
  animate: 'slideInUp',
  view: function() {
    var $page = this
    requirejs(['demo.imgthree'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}
/*图片二一*/
var demoPicFour = {
  route: 'demo/imgfour',
  classname: 'demo-imgfour',
  animate: 'slideInLeft',
  view: function() {
    var $page = this
    requirejs(['demo.imgfour'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}
/*蛋糕*/
var demoNew = {
  route: 'demo/newpageright',
  classname: 'demo-cake',
  animate: 'slideInLeft',
  view: function() {
    var $page = this
    requirejs(['demo.cake'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}
/*百科*/
var demoNewMes = {
  route: 'demo/message',
  classname: 'demo-message',
  animate: 'slideInRight',
  view: function() {
    var $page = this
    requirejs(['demo.message'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}



// demo:页面视图转换动画
var demoTransitPage = {
  route: 'demo/transitpage',
  classname: 'demo-transitpage',
  animate: 'default',
  view: function() {
    var $page = this
    requirejs(['demo.transitpage'], function(viewData) {
      $doc.trigger('spa:initpage', [$page, viewData])
    })
  }
}


$doc.trigger('spa:route', [pageHome, demoNewPage,demoNew,demoNewMes,demoTransitPage,demoPic,demoPicOne,demoPicTwo,demoPicThree,demoPicFour])

// 导航菜单面板
var panelMenu = {
  id: 'menu',
  classname: 'menu',
  animate: 'overlayInRight',
  view: function() {
    var $panel = this
    requirejs(['menu'], function(menuView) {
      $doc.trigger('spa:initpanel', [$panel, viewData])
    })
  }
}

// demo:侧边栏菜单（音乐）
var demoPanelSidemenu = {
  id: 'demoPanelSidemenu',
  classname: 'demo-panel-sidemenu',
  animate: 'revealInRight',
  view: function() {
    var $panel = this
    requirejs(['demo.panelsidemenu'], function(viewData) {
      $doc.trigger('spa:initpanel', [$panel, viewData])
    })
  }
}

// demo:提示对话框
var demoPanelAlert = {
  id: 'demoPanelAlert',
  classname: 'demo-panel-alert',
  animate: 'zoomIn',
  view: function() {
    var $panel = this
    requirejs(['demo.panelalert'], function(viewData) {
      $doc.trigger('spa:initpanel', [$panel, viewData])

      var $dialog = $('.panel', $panel)

      //高度居中
      $dialog.css({marginTop: ($panel.height() - $dialog.prop('offsetHeight')) / 2})
      
      $panel.on('click touchstart', 'button', function(event) {
        $panel.trigger('spa:closepanel')
        event.stopPropagation()
        event.preventDefault()
      })
    })
  }
}

// demo:确认对话框
var demoPanelConfirm = {
  id: 'demoPanelConfirm',
  classname: 'demo-panel-confirm',
  animate: 'overlayInUp',
  view: function() {
    var $panel = this
    requirejs(['demo.panelconfirm'], function(viewData) {
      $doc.trigger('spa:initpanel', [$panel, viewData])
    })
  }
}

// demo:面板视图转换动画
var demoPanelTransit = {
  id: 'demoPanelTransit',
  classname: 'demo-panel-transit',
  animate: 'overlayInLeft',
  view: function() {
    var $panel = this
    requirejs(['demo.paneltransit'], function(viewData) {
      $doc.trigger('spa:initpanel', [$panel, viewData])
    })
  }
}

$doc.trigger('spa:panel', [panelMenu, demoPanelSidemenu, demoPanelAlert, demoPanelConfirm, demoPanelTransit])


$(function() {
  $doc.trigger('spa:boot')
})
