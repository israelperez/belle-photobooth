'use strict';

var UIEngine = {
  viewport: $(window),
  breakpoint: null,

  init: function() {
    this.addListeners();
    this.HEADER.updateSize();
    this._setBreakpoint();
  },
  _setBreakpoint: function(){
    this.breakpoint = window.getComputedStyle(
	     document.querySelector('body'), ':after'
     ).getPropertyValue('content');
  },
  addListeners: function(){
    this.viewport.resize(function() {
      var viewportWidth = UIEngine.viewport.width();
      UIEngine.HEADER.updateSize(viewportWidth);
      UIEngine.HEADER.updateNav(viewportWidth);
      UIEngine._setBreakpoint();
    });
    this.HEADER._elements.navBtn.on('click', function(){
      UIEngine.HEADER._elements.navList.slideToggle();
    });
    this.HEADER._elements.navList.on('click', 'li', function(){
      if(UIEngine.breakpoint === "mobile"){
        UIEngine.HEADER._elements.navList.slideToggle();
      }
    });
  },
  HEADER: {
    _elements: {
      navBtn: $('.hero_nav-mob-menu'),
      navList: $('.hero_nav-list'),
      headerElement: $('.hero_img')
    },

    imageRatio: 1440/850,
    updateSize: function(width) {
      width = width || UIEngine.viewport.width();

      if(width > 320){
        var newHeight = width / this.imageRatio,
          maxHeight = UIEngine.viewport.height() - 52;
        if(newHeight < maxHeight){
          this._elements.headerElement.height(newHeight);
        }else{
          this._elements.headerElement.height(maxHeight);
        }
      }
    },
    updateNav: function(width){
      if(width > 760){
        UIEngine.HEADER._elements.navList.show();
      }
    }
  }
};

$(document).ready(function() {
  UIEngine.init();
});
