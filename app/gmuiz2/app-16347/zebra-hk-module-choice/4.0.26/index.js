define("mui/zebra-hk-module-choice/index",function(e,t,a){"use strict";var i=e("mui/datalazyload/index");var r=e("mui/crossimage/index");var n=e("mui/fetch/jsonp");var o=e("mui/zepto/zepto");var l=e("mui/zepto/touch");var u={overCaption:"\u597d\u7269\u770b\u5b8c\u4e86\uff0c18\u70b9\u4f1a\u66f4\u65b0\u5594",appid:"07018",maxPage:12,algorithmAlbumType:"maxHot"},s=o("#choiceContainer"),m;var c=o(".J_loading");var d=Math.floor(Math.random()*1e4)+(new Date).getTime();var h={};var p=o(".j_hk_abtest").val();window._CTK2b44=window._CTK2b44||function(){var e={},t="",a=0;function i(e){var t=0,a,i,r;if(e.length===0)return t;for(a=0,r=e.length;a<r;a++){i=e.charCodeAt(a);t=(t<<5)-t+i;t|=0}return t}return function(r,n,o,l){l=l||{};if(l.reject){if(typeof l.reject!="object"){l.reject=[l.reject]}for(var u=l.reject.length-1;u>=0;u--){if(e[l.reject[u]]){return}}}if(!t){t=n}var s=(new Date).valueOf();e[n]=s;var m;if(n==t){var c=window.g_config&&g_config.startTime;m=c?s-c:0}else{m=s-(e[o||t]||e[t])}switch(l.autoGroup){case"time":l.group=l.autoGroup+"_"+(m<=0?0:Math.floor(Math.log(m)/Math.log(2)));break}if(typeof r=="object"){r=r[l.group||"_"]||Math.round(Math.log((undefined||8192)/(undefined||1/16))/Math.log(2))}function d(){var e=(window.location.search||"").slice(1).split("&");var t={};var a,i;for(i=e.length;i--;){if((a=e[i].split("=")).length!==2)continue;t[a[0]]=a[1]}return t.ctk==="true"}var h=d();var p=null,f=p&&p[Math.floor((s+288e5)/(864e5/144))%144]||1,g=h?1:Math.round(Math.max(Math.pow(2,r)*f/(undefined||8192),1));if(Math.floor(Math.random()*g)>0){return}function b(e,t){var r="undefined"+a++,n=window[r]=new Image;n.onload=n.onerror=function(){window[r]=null};var o=["type="+encodeURIComponent(l.type||"normal"),"name="+encodeURIComponent(e),"parent="+encodeURIComponent(t||""),"module="+encodeURIComponent(l.dataId||"115"),"msg="+encodeURIComponent(l.msg||""),"version="+encodeURIComponent("4.0.26"),"sample="+g,"time="+(m>0?m:0)].join("&");n.src="//gm.mmstat.com/tmjs.1.1?"+o+"&hash="+i(o)}if(l.group){b(n+"|"+l.group,n)}b(n,o)}}();_CTK2b44(21,"codetrack.init");_CTK2b44(21,"init","codetrack.init");function f(e){u=Object.assign(u,b());m=i.instance();m.addElements(s);m.addStartListener(r.DatalazyPlugin(e));g();T.algorithmAlbumBottom();h.initScroll();v.initEvent()}function g(){var e=window.SVGAngle||document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1");if(!e){_CTK2b44(17,"notSupportSvg","init")}}function b(){var e=JSON.parse(o("#J_data").val());o("#J_data").remove();return e}var v={data:[],initEvent:function w(){var e=this;o(s).delegate(".item-container","click",function(e){var t=e.currentTarget;var a=o(t).attr("data-id");if(v.data.indexOf(a)==-1){v.data.push(a)}return true})},clear:function A(){this.data=[]}};var T={algorithmAlbumType:["maxDiscount","maxHot"],queryAlbumType:function x(e){if(u.albumDetail){var t=u.albumDetail;if(this.algAlbumBottomType)t=this.algAlbumBottomType;return t}else{return this.ramdomAblum(e)}},algAlbumBottomType:false,algorithmAlbumBottom:function I(){switch(this.algorithmAlbumType.indexOf(u.albumDetail)){case 0:this.algAlbumBottomType=this.algorithmAlbumType[1];break;case 1:this.algAlbumBottomType=this.algorithmAlbumType[0];break}},ramdomAblum:function C(e){var t=1-this.algorithmAlbumType.indexOf(u.algorithmAlbumType);switch(e){case 1:return u.algorithmAlbumType;case 2:return this.algorithmAlbumType[t];default:return"operationAlbum"}}};var y={render:function k(e){var t="";var a=document.createDocumentFragment();s.addClass("cpu");e.forEach(function(e){o(a).append(y.renderItem(e))});s.append(a);s.removeClass("cpu");m.addElements(s)},renderItem:function N(e){var t=e;var a="";if(p){t.abtestValue=p}else{t.abtestValue=""}this.filterTag(t);t.algorithmAlbumType=T.algorithmAlbumType[T.algorithmAlbumType.indexOf(u.albumDetail)]||"";switch(t.type){case"item":return this.itemTpl(t);case"foreignItem":return this.itemTpl(t);case"word":return this.wTpl(t);case"shop":return this.shopXtpl(t,this.shopTpl);case"operationAlbum":return this.opTpl(t);case"algorithmAlbum":return this.albumXtpl(t,this.algTpl);case"null":return'<div class="null null'+t.algorithmAlbumType+'">'+u.overCaption+"</div>";default:return'<span data-index="'+t.index+'"style="display:none;"></span>'}},albumXtpl:function _(e,t){if(e.albumItems.length==3)return t(e)},shopXtpl:function j(e,t){if(e.shopItems.length==3)return t(e)},filterTag:function S(e){var t=[];if(!e||!e.tags)return;if(e.tags.indexOf("27841")>-1)e.isTougou=true;if(e.tags.indexOf("3523")>-1)t.push({value:"\u4e03\u5929\u653e\u5fc3\u9000",cls:"qtfxt"});if(e.tags.indexOf("3459")>-1)t.push({value:"\u73af\u7403\u5fc5\u8fbe",cls:"hqbd"});e.tags=t},getRequest:function M(){var e=window.location.search;if(e.indexOf("?")!=-1){if(e.split("wh_abtest=").length>1){var t=e.split("wh_abtest=")[1];var a=t.split("&")[0];return a}else{return false}}else{return false}}};h={pageNo:0,isNull:false,queryProcess:false,initScroll:function q(){var t=this;m.addCallback;window.addEventListener("scroll",function(){m.addCallback(c,function(){if(!y.itemTpl){e(["mui/zebra-hk-module-choice/modules/item.xtpl","mui/zebra-hk-module-choice/modules/shop.xtpl","mui/zebra-hk-module-choice/modules/algorithmAlbum.xtpl","mui/zebra-hk-module-choice/modules/operationAlbum.xtpl","mui/zebra-hk-module-choice/modules/words.xtpl"],function(e,a,i,r,n){y.itemTpl=e;y.shopTpl=a;y.algTpl=i;y.opTpl=r;y.wTpl=n;t.queryfn(y.render)})}else{t.queryfn(y.render)}})});o(window).trigger("scroll")},queryfn:function D(e){if(this.queryProcess)return;this.queryProcess=true;var t=this;if(this.isNull)return;this.pageNo++;var a="appId="+u.appid+"&clickedProducts="+v.data.join(",")+"&pageNo="+this.pageNo+"&streamId="+d+"&albumType="+T.queryAlbumType(this.pageNo);c.show();n("https://ald.taobao.com/recommend.htm",{body:a,method:"jsonp",timeout:2e3}).then(function(e){return e.json()}).then(i).catch(i);function i(a){v.clear();var i=a.data?a:false;var r=t.editData(i,t.pageNo);t.controlNull(r);e(r.data||[]);t.queryProcess=false}},controlNull:function O(e){if(this.isNull){c.hide();if(!T.algAlbumBottomType){var t='<div class="null">'+u.overCaption+"</div>";o(t).insertAfter(s)}else{var a=e.data.length-1;e.data.splice(a,0,{type:"null"})}}},editData:function z(e,t){var e=e;if(!e||e.data.length===0){if(t==1){_CTK2b44(17,"die.M","init");e=JSON.parse(localStorage.getItem("choiceData"))}if(!e||e.data.length==0){this.isNull=true}}else{if(e.data[0].type=="item"){e.data[0].itemIndex="firstItem";e.data[e.itemNum-1].itemIndex="lastItem"}if(t==1){localStorage.setItem("choiceData",JSON.stringify(e))}if(t==Number(u.maxPage)){this.isNull=true}}return e}};a.exports=f});