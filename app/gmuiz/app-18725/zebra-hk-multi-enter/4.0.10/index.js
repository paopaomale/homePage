define("mui/zebra-hk-multi-enter/index",["mui/kissy-polyfill/index","mui/zepto/zepto","mui/crossimage/index","mui/datalazyload/index"],function(i,e,t){"use strict";i("mui/kissy-polyfill/index");var n=i("mui/zepto/zepto");var a=i("mui/crossimage/index");var o=i("mui/datalazyload/index");function l(i){if(!window.$zebra||!window.$zebra.datalazyLoad){var e=o.instance();e.addStartListener(a.DatalazyPlugin(i));e.addElements(i)}}t.exports=l});