define("mui/pull-to-request/index",function(e,i,n){"use strict";var t=function(){function e(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||false;t.configurable=true;if("value"in t)t.writable=true;Object.defineProperty(e,t.key,t)}}return function(i,n,t){if(n)e(i.prototype,n);if(t)e(i,t);return i}}();function s(e,i){if(!(e instanceof i)){throw new TypeError("Cannot call a class as a function")}}var l="The listener has been destroyed.";var o=function(){function e(i,n){s(this,e);this.config=Object.assign({buffer:50,once:false,scrollEl:window},i);if(typeof this.config.scrollEl==="string"){this.config.scrollEl=document.querySelector(this.config.scrollEl)}this.listener=function(){if(this.check()){if(this.config.once){this.destroy()}n&&n.apply(this)}}.bind(this);this.resume()}t(e,[{key:"check",value:function i(){var e=(this.config.scrollEl===window?document.body:this.config.scrollEl).scrollHeight,i=this.config.scrollEl===window?window.pageYOffset:this.config.scrollEl.scrollTop,n=this.config.scrollEl===window?window.innerHeight:this.config.scrollEl.clientHeight;return e-i-n<=this.config.buffer}},{key:"resume",value:function n(){if(!this.listener){console.warn(l)}else{this.config.scrollEl.addEventListener("scroll",this.listener)}return this}},{key:"pause",value:function o(){if(!this.listener){console.warn(l)}else{this.config.scrollEl.removeEventListener("scroll",this.listener)}return this}},{key:"destroy",value:function r(){this.pause(this.listener);this.listener=null}}]);return e}();n.exports=o});