'use strict';

var UIEngine = {
  viewport: $(window),

  init: function() {
    this.addListeners();
    this.HEADER.updateSize();
  },
  addListeners: function(){
    this.viewport.resize(function() {
      UIEngine.HEADER.updateSize();
    });
  },
  HEADER: {
    headerElement: $('.hero_img'),
    imageRatio: 1440/850,
    updateSize: function() {
      if(UIEngine.viewport.width() > 320){
        var newHeight = UIEngine.viewport.width()/this.imageRatio,
          maxHeight = UIEngine.viewport.height() - 52;
        if(newHeight < maxHeight){
          this.headerElement.height(newHeight);
        }else{
          this.headerElement.height(maxHeight);
        }
      }
    }
  }
};

$(document).ready(function() {
  UIEngine.init();
});
