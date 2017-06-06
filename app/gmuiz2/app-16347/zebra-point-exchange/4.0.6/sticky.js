define("mui/zebra-point-exchange/sticky",function(i,t,e){var n=function(){function i(i,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(i,n.key,n)}}return function(t,e,n){if(e)i(t.prototype,e);if(n)i(t,n);return t}}();function o(i,t){if(!(i instanceof t)){throw new TypeError("Cannot call a class as a function")}}var r=i("mui/zepto/touch"),a=window,s="onorientationchange"in a?"orientationchange":"resize";var u=function(){function t(e){o(this,t);var n=r(e).get(0);if(n&&n.nodeType){window.console&&console.log("mui/tabs/sticky\u7684\u8be5\u7528\u6cd5\u5df2\u7ecf\u5e9f\u5f03\uff0c\u8bf7\u5c3d\u5feb\u5207\u6362\u4f7f\u7528\u63d2\u4ef6\u7684\u7528\u6cd5\uff01");return new(i("mui/tabs/"))(e,arguments[1]).plug(new t(e))}e=this.options=e||{};if(!e.offsetTop){e.offsetTop=0}}n(t,[{key:"pluginInitializer",value:function e(i){var e=this;var n=this,o=i.$el;n.tabs=i;n.elHeight=o.height();if(n.options.disableNativeSticky||!t.supportSticky()){n.$pholder=r('<div style="display:none;height: '+n.elHeight+'px"></div>').insertAfter(o);n.stickyChange=1;n._stickyEvt();r(a).on("scroll touchmove",function(){a.rAF(function(){n._stickyEvt()})});r(a).on(s,function(){a.rAF(function(){var i;if(o.hasClass("fixed")){i=n.$pholder}else{i=o}n.options.offsetTop=i.show().offset().top;r(a).trigger("scroll")})})}else{o.addClass("sticky")}i.on("open",function(){var i=r(a).scrollTop();var t=e._getOffset();if(i<t){a.scrollTo(0,t)}})}},{key:"_stickyEvt",value:function u(){var i=this,t=i.tabs.$el,e=this._getOffset();if(a.scrollY>e){if(i.stickyChange===1){i.stickyChange=0;t.addClass("fixed");i.$pholder.show()}}else{if(i.stickyChange===0){i.stickyChange=1;t.removeClass("fixed");i.$pholder.hide()}}}},{key:"_getOffset",value:function l(){var i=this;if(i.options.offsetTop){return i.options.offsetTop}if(i.$pholder.css("display")!=="none"){return Math.min(i.$pholder.offset().top,i.tabs.$el.offset().top)}return i.tabs.$el.offset().top}}],[{key:"supportSticky",value:function c(){var i,t="-webkit-sticky",e=document.createElement("i");e.style.position=t;i=e.style.position;e=null;return i===t}}]);return t}();e.exports=u});