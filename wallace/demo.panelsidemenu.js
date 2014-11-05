define({
  body: '<div class="container">\
    <div class="panel panel-default">\
      <div id="wrapper">\
      <div class="panel-body">\
        菜单可以上下滚动，点击右侧空白区域可以自动收起\
      </div>\
      <audio preload></audio>\
      <ul class="list-group">\
        <li><a href="#" data-src="http://wallaceyuan.github.io/audiojs/demos/mp3/故乡香.mp3">故乡香</a></li>\
        <li><a href="#" data-src="http://wallaceyuan.github.io/audiojs/demos/mp3/救我.mp3">救我</a></li>\
        <li><a href="#" data-src="http://wallaceyuan.github.io/audiojs/demos/mp3/天下之风.mp3">天下之风</a></li>\
        <li><a href="#" data-src="http://wallaceyuan.github.io/audiojs/demos/mp3/天涯明月刀.mp3">天涯明月刀</a></li>\
        <li><a href="#" data-src="http://wallaceyuan.github.io/audiojs/demos/mp3/有一天我们都会老.mp3">有一天我们都会老</a></li>\
        <li><a href="#" data-src="http://wallaceyuan.github.io/audiojs/demos/mp3/中国山.mp3">中国山</a></li>\
        <li><a href="#" data-src="http://kolber.github.io/audiojs/demos/mp3/07-everyday-shelter.mp3">everyday shelter</a></li>\
        <li><a href="#" data-src="http://kolber.github.io/audiojs/demos/mp3/08-basic-hypnosis.mp3">basic hypnosis</a></li>\
        <li><a href="#" data-src="http://kolber.github.io/audiojs/demos/mp3/09-infinite-victory.mp3">infinite victory</a></li>\
        <li><a href="#" data-src="http://kolber.github.io/audiojs/demos/mp3/10-the-curious-incident-of-big-poppa-in-the-nighttime.mp3">the curious incident of big poppa in the nighttime</a></li>\
        <li><a href="#" data-src="http://kolber.github.io/audiojs/demos/mp3/11-mo-stars-mo-problems.mp3">mo stars mo problems</a></li>\
      </ul>\
    </div>\
  </div>\
  ',
  init: function(panelData) {
    var $view = this
  
    $(function() { 
      // Setup the player to autoplay the next track
      var a = audiojs.createAll({
        trackEnded: function() {
          var next = $('ul li.playing').next();
          if (!next.length) next = $('ul li').first();
          next.addClass('playing').siblings().removeClass('playing');
          audio.load($('a', next).attr('data-src'));
          audio.play();
        }
      });
      
      // Load in the first track
      var audio = a[0];
          first = $('ul a').attr('data-src');
      $('ul li').first().addClass('playing');
      audio.load(first);

      // Load in a track on click
      $('ul li').click(function(e) {
        e.preventDefault();
        $(this).addClass('playing').siblings().removeClass('playing');
        audio.load($('a', this).attr('data-src'));
        audio.play();
      });
      // Keyboard shortcuts
      $(document).keydown(function(e) {
        var unicode = e.charCode ? e.charCode : e.keyCode;
           // right arrow
        if (unicode == 39) {
          var next = $('li.playing').next();
          if (!next.length) next = $('ul li').first();
          next.click();
          // back arrow
        } else if (unicode == 37) {
          var prev = $('li.playing').prev();
          if (!prev.length) prev = $('ul li').last();
          prev.click();
          // spacebar
        } else if (unicode == 32) {
          audio.playPause();
        }
      })
    });
    $('.container', $view).trigger('spa:scroll')
  }
})