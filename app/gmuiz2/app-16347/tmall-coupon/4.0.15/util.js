define("mui/tmall-coupon/util",function(e,i,t){"use strict";e("mui/kissy-polyfill/index");e("mui/babel-polyfill/index");var o=e("mui/fetch/tool");t.exports={getCouponInfoFromUrl:function n(e){var i=this;if(!e)return{};var t=e.split("?")[1];var n=o.unparam(t);return{activityId:n.activityId||n["activity_id"],sellerId:n.sellerId||n["seller_id"]}}}});