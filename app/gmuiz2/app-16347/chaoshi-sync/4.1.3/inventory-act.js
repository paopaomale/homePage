define("mui/chaoshi-sync/inventory-act",function(e,t,n){"use strict";var i=e("./util");var r=e("mui/mtop/index");var o=e("mui/chaoshi-app/site-info");var c=e("mui/zepto/zepto");var a=function u(e,t,n,i){function o(e,i){r.request({api:"mtop.chaoshi.supermarket.acLimitAdvanced",v:"1.0",ecode:0,data:{camItemIds:e.join(";"),sellerId:t,channel:n}}).then(function(e){i(e.data.model)},function(e){console.warn("sync activity inventory error",e)})}var c=20,a=0,s={};function u(){o(e.slice(a*c,(a+1)*c),function(t){if(t){t.forEach(function(e){s[e.id]=e})}if((a+1)*c>=e.length){i(s)}else{a++;u()}})}u()};var s=function l(e){return new Promise(function(t,n){e=i.config(e);var r=["0","1","2"];var s=[];var u=typeof e.el==="string"?document.querySelector(e.el):e.el;var l=u.querySelectorAll(e.itemEl+"["+e.attrActId+"]");var f=[];var v=u.getAttribute(e.attrChannel);e.channel=v&&r.indexOf(v)>=0?Number(v):2;for(var d=0,m=l.length;d<m;d++){var h=l[d];if(h._itemInventoryAcFixed){continue}var y=h.getAttribute(e.attrId);var p=h.getAttribute(e.attrActId);if(p&&y){s.push(y+"_"+p);f.push(h);h._itemInventoryAcFixed=true}}if(!s.length){return t()}var I=function A(){a(s,e.seller_id,e.channel,function(n){f.forEach(function(t){var i=t.getAttribute(e.attrId);if(!i){return}var r=n[i];if(!r){t._itemInventoryAcFixed=false;return}if(r.sellUp==="true"){c(t).addClass(e.soldOutClass)}if(e.onItemReady){e.onItemReady(t,r)}});t()})};if(e.seller_id){I()}else{o.request().then(function(t){e.seller_id=t.sellerId;I()})}})};n.exports=s});