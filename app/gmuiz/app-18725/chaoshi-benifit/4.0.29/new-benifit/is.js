define("mui/chaoshi-benifit/new-benifit/is",["mui/mtop/index","mui/chaoshi-app/site-info","mui/chaoshi-app/user-info","mui/zepto/zepto"],function(a,t,e){"use strict";var n=function(){function a(a,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(a,n.key,n)}}return function(t,e,n){if(e)a(t.prototype,e);if(n)a(t,n);return t}}();function i(a,t){if(!(a instanceof t)){throw new TypeError("Cannot call a class as a function")}}var r=a("mui/mtop/index");var o=a("mui/chaoshi-app/site-info");var s=a("mui/chaoshi-app/user-info");var l=a("mui/zepto/zepto");var d="quanyizhenghe";var c=function(){function t(a){i(this,t);var e=this;o.request().then(function(t){r.request({api:"mtop.taobao.newcustgift.show",v:"1.0",ecode:0,data:{areaId:t.cityId}}).then(function(n){var i=n.data;i.areaId=t.cityId;i.safety=n.data.config;Object.assign(i,a);if(i.expand&&i.show&&!i.done){}e.show(i)})})}n(t,[{key:"show",value:function t(e){if(e.show=="true"){a(["./index"],function(a){if(e.expand!="true"){e.fold=true}new a(e)})}}}]);return t}();e.exports=c});