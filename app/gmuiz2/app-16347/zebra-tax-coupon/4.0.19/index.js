define("mui/zebra-tax-coupon/index",["mui/kissy-polyfill/index","mui/zepto/event","mui/mtop/index","mui/popbox/index","mui/hybrid/index","mui/datalazyload/index","mui/crossimage/index"],function(e,i,a){e("mui/kissy-polyfill/index");var o=e("mui/zepto/event");var t=e("mui/mtop/index");var n=e("mui/popbox/index");var r=e("mui/hybrid/index");var d=e("mui/datalazyload/index");var u=e("mui/crossimage/index");var c="DCWLNKYGY1RN5U4YXSVI";var s="DCWS6JUCTDTU8EANC0UE";function l(e,i){i=JSON.parse(i);var a=d.instance();a.addStartListener(u.DatalazyPlugin(e));a.addElements(e);o(".j_coupon",e).on("click",function(e){e.stopPropagation();e.preventDefault();var a=o(e.currentTarget);var d=a.data("uuid");var u=a.data("limit");var p=a.data("sourceid");r&&r.ready&&r.ready(function(){var e=r.isWeb;var a={};var o={};if(e){a["ua"]=l()}else{o["isSec"]=1}a["asac"]=e?c:s;t.request(Object.assign({api:"mtop.tmall.hk.yx.TaxCouponApi.applycoupon",v:"1.0",ecode:0,data:Object.assign({sourceId:p,uuid:d},a)},o)).then(function(e){var a=e.data;var o=void 0;var t=i.succTipsImg?i.succTipsImg:"//img.alicdn.com/tps/TB1opKnLXXXXXazXpXXXXXXXXXX-560-470.png";var r=i.useHref?i.useHref:"//pages.tmall.com/wh/tmall/import/act/mp-pc-2015";if(a.successResult=="true"){n.confirm({showCloseBtn:true,content:"<style>.ui-dialog-content{padding:0;border-radius:5px 5px 0 0;overflow:hidden;}</style><img style='min-height:260px;width:100%;' src='"+t+"'>",btns:{cancel:"\u7acb\u5373\u4f7f\u7528",ok:"\u67e5\u770b\u5df2\u9886\u5238"}},function(){window.location.href="//h5.m.taobao.com/ump/coupon/hk-tax/index.html"},function(){window.location.href=r});return}var d="";switch(a.resultCode){case"APPLY_COUPON_RESULT_NOT_ENOUGH":o="\u60a8\u7684\u79ef\u5206\u4e0d\u591f\uff0c\u65e0\u6cd5\u5151\u6362!";break;case"APPLY_SINGLE_COUPON_COUNT_EXCEED_LIMIT":o="\u60a8\u4eca\u65e5\u5df2\u7ecf\u9886\u53d6!";break;case"COUPON_TOTAL_COUNT_EXCEED_LIMIT":o="<style>.ui-dialog-content{padding:0;border-radius:5px 5px 0 0;overflow:hidden;}</style><img style='min-height:260px;width:100%;' src='//img.alicdn.com/tps/TB1TsTKKpXXXXcvXVXXXXXXXXXX-560-569.png'>";break;default:o="\u9886\u53d6\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5\uff01"}n.alert({content:o,showCloseBtn:true})},function(e){var i=Array.isArray(e.ret)?e.ret[0]:e.ret;if(i==="FAIL_SYS_SESSION_EXPIRED::SESSION\u5931\u6548"||i==="FAIL_SYS_SESSION_EXPIRED"||i==="ERR_SID_INVALID"){var a=encodeURIComponent(window.location.href);window.location.href="//login.tmall.com/?redirectURL="+a}})})});function l(){var e=window[UA_Opt.LogVal];UA_Opt.Token=(new Date).getTime()+":"+Math.random();UA_Opt.reload&&UA_Opt.reload();return e}}a.exports=l});