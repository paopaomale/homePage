!function(){function a(){if(lib.env.os.isIPhone&&lib.env.taobaoApp){var a,b,c=document.documentElement.clientWidth;document.addEventListener("horizontalpanstart",function(b){a=b.touchEvent.touches[0].pageX},!1),document.addEventListener("horizontalpan",function(d){b=d.displacementX,a>0&&b>0&&c/10>a&&b>.3*c&&(document.removeEventListener("horizontalpan"),WindVane.call("WVNative","nativeBack",{}))},!1)}}var b={isSupportWebp:function(){window.isHasWebp=!1;var a=new Image;a.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA",a.onload=function(){2===a.height?window.isHasWebp=!0:window.isHasWebp=!1},a.onerror=function(){window.isHasWebp=!1}},convertImgCdn:function(a){if(!a||"string"!=typeof a)return"";var b=["wimg.taobao.com","alicdn.com","taobaocdn.com"],c=document.createElement("a");c.href=a;for(var d=0;d<b.length;d++)if(-1!=c.host.indexOf(b[d])){c.host="gw.alicdn.com";break}return c.href},getNetWorkInfo:function(a){lib.env.taobaoApp?window.WindVane&&WindVane.call("TBDeviceInfo","getInfo",{},function(b){"wifi"!=b.network&&(window.WeakNetStatus=!0),a&&a()},function(b){a&&a()}):a&&a()},openLinkByWv:function(a){a.preventDefault();var b=a.currentTarget,c=$(a.currentTarget),d=c.attr("href"),e="",f=!0;if(d){if(lib.httpurl){var g=new lib.httpurl(d);if(window.g_SPM&&window.g_SPM.spm){var h=window.g_SPM.spm(b);g.params.spm=h}e=g.toString()}else e=d;-1!=e.indexOf("openwindow=false")&&(f=!1),lib.env&&lib.env.taobaoApp&&window.WindVane&&f?window.WindVane.call("Base","openWindow",{url:e},function(){},function(){location.href=e}):location.href=e}},getUtdid:function(a){window.localStorage&&window.localStorage.getItem("h5_app_hysc_utdid")?(window.utdid=window.localStorage.getItem("h5_app_hysc_utdid"),a&&a()):lib.env&&lib.env.taobaoApp?window.WindVane.call("TBDeviceInfo","getUtdid",{},function(b){b.utdid&&(window.utdid=b.utdid,window.localStorage&&window.localStorage.setItem("h5_app_hysc_utdid",b.utdid)),a&&a()},function(b){a&&a()}):a&&a()},initNavBar:function(){var a=$(".hytpl-navbar");a.length&&a.on("click","a",function(a){a.preventDefault();var b=$(a.currentTarget),c=b.attr("href");b.hasClass("cur")||(c&&-1==c.indexOf("http://hichao.uz.m.jaeapp.com/d/wuxian/women")&&(c=c.replace(/^(http:|https:)/,location.protocol)),window.location.replace(c))})},getUrlParams:function(){if(lib.httpurl){var a=new lib.httpurl(location.href);return a.params}return null},mtopErrorHandler:function(a){var b=this,c=a.ret[0],d=c.split("::")[0];switch(d){case"FAIL_SYS_TRAFFIC_LIMIT":b.showToast("哎哟喂，被挤爆啦，请稍后重试");break;default:b.showToast("请求数据失败")}},showToast:function(a){null!=navigator.userAgent.match(/WindVane/i)?window.WindVane.call("WVUIToast","toast",a,function(a){},function(a){console.log(JSON.stringify(a))}):console.log(a)}};window.utils=b,window.utils.getUtdid(),window.utils.isSupportWebp(),window.addEventListener("DOMContentLoaded",function(){b.initNavBar(),a()},!1)}(),function(){var a={};this.tmpl=function b(c,d){var e=/\W/.test(c)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+c.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):a[c]=a[c]||b(document.getElementById(c).innerHTML);return d?e(d):e}}(),function(a,b){function c(a,b){function c(){b.scroller===!0?(y=document.createElement("div"),y.className="scroll-wrap",y.innerHTML='<div class="top-placeholder"></div><div class="column-wrap"></div><div class="bottom-placeholder"></div>',a.appendChild(y),k.topPlaceHolder=b.topPlaceHolder||"",k.bottomPlaceHolder=b.bottomPlaceHolder||"",v=lib.scroll(y,b.scrollOption||{}),v.init()):(a.innerHTML='<div class="top-placeholder"></div><div class="column-wrap"></div><div class="bottom-placeholder"></div>',b.scroller!==!1&&(v=b.scroller,y=v.element),v=b.scroller),z=a.querySelector(".column-wrap")}function e(){var b;switch(n){case"column":b=new Array(s+1).join('<div class="column" style="margin-right:'+q+'px;"></div>');break;case"adaptive":var c=Math.floor((a.getBoundingClientRect().width+q)/(p+q));b=new Array(c+1).join('<div class="column" style="width:'+p+"px;margin-right:"+q+'px;"></div>');break;case"fix":b=new Array(s+1).join('<div class="column" style="width:'+p+"px;margin-right:"+q+'px;"></div>')}z.innerHTML=b,z.height=0,z.style.height="",A=Array.prototype.slice.call(z.querySelectorAll(".column")),A.forEach(function(a,b){a.height=0,a.items={},a.waterFallFragment=document.createDocumentFragment()})}function f(a){for(var b=A[0],c=b.height,d=1;d<A.length;d++){var e=A[d].height||0;c>e&&(b=A[d],c=e)}var f=b.height;a.style.webkitTransform="translateY("+f+"px)",b.appendChild(a),b.items[v.offset(a).top]=a,b.height=(b.height||0)+a.getBoundingClientRect().height+r,(!z.height||z.height<b.height)&&(z.style.height=b.height+"px",z.height=b.height)}function g(a,b,c){var a=a,d=a.height;b.style.webkitTransform="translateY("+d+"px)",a.waterFallFragment.appendChild(b),a.items[d]=b,a.height=a.height+c+r}function h(){Array.prototype.slice.call(v.element.querySelectorAll("img.lazy")).forEach(function(a){a.src=a.getAttribute("dataimg"),a.removeAttribute("dataimg"),a.className=a.className.split(" ").filter(function(a){return"lazy"!=a}).join(" ")})}function i(){for(var a,b=!1;u<t.length;u++){var c=t[u],d=document.createElement("div");if(d.className="item",d.setAttribute("data-item-index",u+1),c.width&&(d.style.width=c.width+"px"),c.height&&(d.style.height=c.height+"px"),d.innerHTML=c.html,c.height){for(var e=0,i=A[0].height,j=1;j<A.length;j++)a=A[j].height||0,i>a&&(e=j,i=a);var k=A[e];g(k,d,c.height)}else b=!0,f(d)}if(!b){for(var l=A[0].height,j=0;j<A.length;j++){var m=A[j],n=m.waterFallFragment;m.appendChild(n),m.style.height=m.height,l<m.height&&(l=m.height)}z.style.height=l+"px",z.height=l}setTimeout(h,16)}function j(){var a=v.getViewHeight(),b=v.getScrollTop(),c=b+a;A.forEach(function(d){for(var e in d.items){var f=d.items[e],g=f.querySelector("img");g&&(b-5*a>e||e>c+5*a?""===g.style.display&&(g.style.display="none"):"none"===g.style.display&&(g.style.display=""))}})}var k=this,l=Date.now()+"-"+ ++d,m=document.createDocumentFragment();1!==arguments.length||arguments[0]instanceof HTMLElement||(b=arguments[0],a=null),a||(a=document.createElement("div"),m.appendChild(a)),b=b||{},a.setAttribute("data-ctrl-name","waterfall"),a.setAttribute("data-ctrl-id",l);var n,o=!0;Object.defineProperty(this,"mode",{get:function(){return n},set:function(b){if(["column","adaptive","fix"].indexOf(b)<0)throw new Error("Non expected value");n!==b&&(o=!0,n=b),a.setAttribute("data-prop-mode",n)}}),this.mode=b.mode||a.getAttribute("data-prop-mode")||"column";var p;Object.defineProperty(this,"columnWidth",{get:function(){return p},set:function(b){if("string"==typeof b){var c=parseInt(b);if(!c)throw new Error("Non expected value");p=c}else{if("number"!=typeof b)throw new Error("Non expected value");p=b}a.setAttribute("data-prop-columnWidth",p)}}),this.columnWidth=b.columnWidth||a.getAttribute("data-prop-columnWidth")||100;var q;Object.defineProperty(this,"columnPadding",{get:function(){return q},set:function(b){if("string"==typeof b){var c=parseInt(b);if(!c)throw new Error("Non expected value");q=c}else{if("number"!=typeof b)throw new Error("Non expected value");q=b}a.setAttribute("data-prop-columnPadding",q)}}),this.columnPadding=b.columnPadding||a.getAttribute("data-prop-columnPadding")||0;var r;Object.defineProperty(this,"linePadding",{get:function(){return r},set:function(b){if("string"==typeof b){var c=parseInt(b);if(!c)throw new Error("Non expected value");r=c}else{if("number"!=typeof b)throw new Error("Non expected value");r=b}a.setAttribute("data-prop-linePadding",r)}}),this.linePadding=b.linePadding||a.getAttribute("data-prop-linePadding")||0;var s;Object.defineProperty(this,"columnAmount",{get:function(){return s},set:function(b){if("string"==typeof b){var c=parseInt(b);if(!c)throw new Error("Non expected value");s=c}else{if("number"!=typeof b)throw new Error("Non expected value");s=b}a.setAttribute("data-prop-columnAmount",p)}}),this.columnAmount=b.columnAmount||a.getAttribute("data-prop-columnAmount")||2;var t=[],u=0;Object.defineProperty(this,"viewModel",{get:function(){return t},set:function(a){if(!(a instanceof Array))throw new Error("Non expected value");t=a,k.syncViewModel("refresh")}});var v;Object.defineProperty(this,"scroller",{get:function(){return v}}),null==b.scroller&&(b.scroller=!0);var w;Object.defineProperty(this,"topPlaceHolder",{get:function(){return w},set:function(b){w=b,a.querySelector(".top-placeholder").innerHTML=b}});var x;Object.defineProperty(this,"bottomPlaceHolder",{get:function(){return x},set:function(b){x=b,a.querySelector(".bottom-placeholder").innerHTML=b}});var y,z,A;this.syncViewModel=function(a){a=a||"padding","refresh"===a||o?(o=!1,u=0,e(),i()):"padding"===a&&i(),v&&v.enable().refresh()},this.refresh=function(){v&&v.enable().refresh();var a;a=setTimeout(function(){clearTimeout(a),b.useDomOptimize&&j()},400)},this.addEventListener=function(){a.addEventListener.apply(a,arguments)},this.removeEventListener=function(){a.removeEventListener.apply(a,arguments)},this.remove=function(){a.parentNode&&a.parentNode.removeChild(a)},this.element=a,this.root=m,c()}var d=0;b.waterfall=c}(window,window.ctrl||(window.ctrl={}));var HYTemplate=function(a){this.options=a||{},this.loadedWfList={},this.waterfallItemTpl='<a class="" href="//a.m.taobao.com/i<%=id%>.htm?<%=scmId%>"><div class="pic" style="height:<%=height%>px;"><img class="lib-img" data-src="<%=dataImg%>" src="//gw.alicdn.com/tps/i2/T1scDRFShaXXc6Yc2r-1-1.gif"  style="height:<%=height%>px;"/></div><div class="desc"><h3 class="title"><%=extend%><span><%=title%></span></h3><div class="price"><b>&#65509;<%=price%></b><s><%=oprice%></s></div></div></a>'};HYTemplate.prototype={init:function(){var a=this;this.scrollStatus="scrolled",this.pageInfo={},this.wfDateInfo={},this.maxPageNo=20,this.imgLib=lib.img({"class":"lib-img",size:"320x320",dataSrc:"data-src",sharpen:"s150",q:["q50","q30"],enableLazyload:!0}),setTimeout(function(){a.checkImgUrl(),$(".slider.banner").each(function(a,b){$(b);new lib.Slider(b,{trigger:".slider-status",lazy:".lazyimg"})})},0),this.createScrollCtrl(),this.addEvent(),this.loadFoodComboData()},slider:function(){$(".slider-qiang").each(function(a,b){var c=$(b),d=c.find("li"),e=d.length;if(e){var f=d.eq(0)[0].getBoundingClientRect().width+.4*window.rem;Math.floor(Math.random()*e);new lib.Slider(c[0],{lazy:".lazyimg",lazyIndex:2,steps:f,loop:!0,trigger:".slider-status"})}})},addEvent:function(){function a(a,c){a.preventDefault();var d=a.currentTarget,e=$(d).attr("href");if(e){var f=new lib.httpurl(e);if(window.g_SPM&&window.g_SPM.spm){var g=window.g_SPM.spm(d);f.params.spm=g}"scrolled"==b.scrollStatus&&(c&&lib.env&&lib.env.taobaoApp&&window.WindVane?window.WindVane.call("Base","openWindow",{url:f.toString()},function(){},function(){location.href=f.toString()}):location.href=f.toString())}}var b=this,c=($("#J-waterfall"),$(".subtab-list")),d=($(".rank-hd"),$(".rank-bd"),$(".mod"));c.on("click",".btn-more",function(a){a.preventDefault();var c=$(a.currentTarget),d=c.parent(),e=c.attr("data-status");"0"==e?(d.css({height:"auto","max-height":"inherit"}),c.attr("data-status","1"),c.html('收起<b class="arrow"></b>').addClass("btn-slidein")):"1"==e&&(d.css({height:"3.6rem","max-height":"3.6rem"}),c.attr("data-status","0"),c.html("更多...").removeClass("btn-slidein")),setTimeout(function(){b.pageScroller&&b.pageScroller.refresh()},100)}),$("#J-scroll-top").on("click",function(a){a.preventDefault();var c=$(".tab-in")[0],d=$("#J-tab")[0],e=$("#J-tab-fixed-wrap")[0];c.parentNode!=d&&(d.appendChild(c),e.style.display="none",a.currentTarget.style.opacity="0"),b.pageScroller.scrollTo(0),setTimeout(function(){$("#J-scroll-top").css("opacity","0"),b["ctrl-wf"+b.albumId]&&b["ctrl-wf"+b.albumId].refresh()},400)}),d.on("click","a",function(b){a(b,!0)}),lib.env.taobaoApp&&(window.WindVane.call("WebAppInterface","enableStatusBarClicked","",null,null),document.addEventListener("TBStatusBar.clicked",function(a){var c=$(".tab-in")[0],d=$(".tab-in li"),e=$("#J-tab")[0],f=$("#J-tab-fixed-wrap")[0];b.pageScroller.getRect(e);b.pageScroller.scrollTo(0,!0),setTimeout(function(){b["ctrl-wf"+b.albumId]&&b["ctrl-wf"+b.albumId].refresh()},400),d.length&&c.parentNode!=e&&(e.appendChild(c),f.style.display="none")},!1))},createScrollCtrl:function(){var a=this,b=$("#J-tab ul"),c=b.find("li"),d=$("#J-page-scroll"),e=($(".loading")[0],document.documentElement.clientHeight),f=$("#J-scroll-top");a.scrollStatus="scrolled",a.pageScroller=lib.scroll({scrollElement:d[0]}).init(),a.pageScroller.addScrollendHandler(function(b){var c=a["ctrl-wf"+a.albumId],d=a.pageScroller.getScrollTop();d>0&&d>1.5*e?f.css("opacity","1"):f.css("opacity","0"),c&&c.viewModel&&c.viewModel.length&&c.refresh(),a.imgLib&&a.imgLib.fireLazyload(),a.scrollendCallback()},!1);var g=$(".tab-in")[0],c=$(".tab-in li"),h=$("#J-tab")[0],i=$("#J-tab-fixed-wrap")[0];c.length&&a.pageScroller.addScrollingHandler(function(b){var c=a.pageScroller.getRect(h);c.top<=0&&g.parentNode!=i&&(i.appendChild(g),i.style.display="block"),c.top>0&&g.parentNode!=h&&(h.appendChild(g),i.style.display="none")}),a.tabScroller=lib.scroll({scrollElement:b[0],direction:"x"}).init()},scrollendCallback:function(){var a=this,b=a.albumId,c=$(".loading")[0];a["ctrl-wf"+b];a.pageScroller.isInView(c)&&a.canLoad&&(a.currentPage>a.maxPageNo?(a.canLoad=!1,$(".no-more").show(),$(".loading").hide()):a.canLoad&&a.loadWaterfallData())},createTabCtrl:function(){var a=this,b=$("#J-tab"),c=b.find("li"),d=$(".subtab-item"),e=$(".tab-in"),f=$(".loading"),g=$(".no-more");b.find(".cur").attr("data-id");return c.length?(e.on("click","li",function(b){var e=b.currentTarget,f=$(e),g=$("#J-tab"),h=f.index(),i=d.eq(h);i.find(".cur").attr("data-catid");if(a.tabScroller){var j=a.tabScroller.offset(e),k=j.left,l=j.width,m=a.tabScroller.getViewWidth(),n=k-(m-l)/2;a.tabScroller.scrollTo(n,!0)}return f.hasClass("cur")?void a.pageScroller.scrollToElement(g[0]):($(".loading").show(),$(".no-more").hide(),c.removeClass("cur"),f.addClass("cur"),d.addClass("none"),i.removeClass("none"),a.pageScroller.scrollToElement(g[0]),void i.find(".cur").trigger("click"))}),void d.on("click","a",function(c){c.preventDefault(),c.stopPropagation();var e=c.currentTarget,h=$(e),i=$(".tab-holder").find(".cur"),j=i.index(),k=d.eq(j),l=h.attr("data-catid");k.find("a").removeClass("cur"),h.addClass("cur"),f.show(),g.hide(),a.albumId=l,a.currentPage=a.pageInfo[a.albumId]||1,a.canLoad=!0;var m=l,n="ctrl-wf"+l;$(".wf-wrap").addClass("none"),$("#J-wf-wrap-"+m).removeClass("none"),a.loadedWfList[m]?(a.pageScroller.scrollToElement(b[0]),a.pageScroller.isInView($(".loading")[0])&&a.canLoad&&(a.currentPage>a.maxPageNo?(a.canLoad=!1,$(".no-more").show(),$(".loading").hide()):a.canLoad&&a.loadWaterfallData()),setTimeout(function(){a[n].refresh()},10)):(a[n]=new ctrl.waterfall({mode:"column",columnAmount:2,columnPadding:.3*window.rem,scroller:a.pageScroller,linePadding:.4*window.rem,useDomOptimize:!0}),$("#J-wf-wrap-"+m).append(a[n].root),a.pageScroller.scrollToElement(b[0]),a.loadWaterfallData())})):void $(".waterfall").hide()},createWaterfallCtrl:function(){var a=this,b=ctrl.waterfall,c=$("#J-waterfall"),d=$("#J-tab li"),e=$(".subtab-item"),f=($(".subtab-item a"),$("#J-tab li").eq(0).attr("data-id"),a.albumId);return f&&d.length?(d.each(function(d,f){var g=(f.getAttribute("data-id"),e.eq(d).find("a"));g.each(function(e,f){var g=f.getAttribute("data-catid"),h=g;c.append('<div class="wf-wrap none" id="J-wf-wrap-'+h+'"></div>'),0==d&&0==e&&(a["ctrl-wf"+h]=new b({mode:"column",columnAmount:2,columnPadding:.3*window.rem,scroller:a.pageScroller,linePadding:.4*window.rem,useDomOptimize:!0}),$("#J-wf-wrap-"+h).removeClass("none").append(a["ctrl-wf"+h].root))})}),void a.loadWaterfallData(function(){var b=document.querySelector("#J-waterfall .desc"),c=document.querySelector(".wf-date");if(b){var d=b.getBoundingClientRect().height,e=b.getBoundingClientRect().width+2;a.descHeight=d,a.itemWidth=e}c&&(a.wfDateHeight=c.getBoundingClientRect().height)})):($(".loading").hide(),void $(".no-more").hide())},calcWfDate:function(a){var b=new Date,c=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],d=(b.getHours(),b.getMinutes(),{week:c[b.getDay()],date:b.getDate()<10?"0"+b.getDate():b.getDate(),month:b.getMonth()+1<10?"0"+(b.getMonth()+1):b.getMonth()+1}),e='<div class="wf-date-tip"><p class="tip-date"><%=month%>月<%=date%>日 <%=week%></p><p class="tip-desc">精选美食优品</p></div>';return tmpl(e,d)},loadWaterfallData:function(a){function b(){return f.cacheData?void d.renderWfData(f.cacheData,c):void lib.mtop.request({api:"com.taobao.wireless.chanel.realTimeSearchItems",v:"1.0",data:{albumId:"SP_ONLINE_LIST",pageSize:20,param:JSON.stringify(g),currentPage:d.currentPage||1}},function(b,f){if(-1!=b.ret[0].indexOf("SUCCESS")){var g=b.data.model,h=g.totalItem,i=g.pageSize||20;d.pageInfo=d.pageInfo||{},d.wfDateInfo=d.wfDateInfo||{},d.maxPageNo=d.maxPageNo||10,d.pageInfo[e]=d.currentPage+1,h>200&&(h=200),h&&i&&(d.maxPageNo=Math.ceil(parseInt(h)/parseInt(i)));var j=g.itemList||g.result.itemList;if(g.result.scm&&(d.scm=g.result.scm),d.isDouble11=window.isDouble11(g.currentTime),d.isDouble11){var k=$(".no-api").attr("href")+"?d11=1";$(".no-api").attr("href",k)}d.renderWfData(j,c),a&&a()}else{if(-1!=b.ret[0].indexOf("3::result"))return void(d.maxPageNo=1);d.canLoad=!0,d.errorTime=d.errorTime||1,d.errorTime<3&&d.loadWaterfallData(),d.errorTime++}},function(a,b){return $(".loading").hide(),-1!=a.ret[0].indexOf("3::result")?($(".loading").hide(),$(".no-more").show(),void(d.maxPageNo=1)):(d.canLoad=!0,d.errorTime=d.errorTime||1,d.errorTime<3&&d.loadWaterfallData(),void d.errorTime++)})}function c(){f.cacheData=null,lib.mtop.request({api:"com.taobao.wireless.chanel.realTimeSearchItems",v:"1.0",data:{albumId:"SP_ONLINE_LIST",pageSize:20,param:JSON.stringify(g),currentPage:d.currentPage||1}},function(a,b){if(-1!=a.ret[0].indexOf("SUCCESS")){var c=a.data.model.totalItem,g=a.data.model.pageSize||20;d.pageInfo=d.pageInfo||{},d.wfDateInfo=d.wfDateInfo||{},d.maxPageNo=d.maxPageNo||10,d.pageInfo[e]=d.currentPage+1,c>200&&(c=200),c&&g&&(d.maxPageNo=Math.ceil(parseInt(c)/parseInt(g)));var h=a.data.model.itemList||a.data.model.result.itemList;a.data.model.result.scm&&(d.scm=a.data.model.result.scm),f.cacheData=h}})}var d=this,e=d.albumId,f=d["ctrl-wf"+e];d.canLoad=!1;var g={tabid:e,utdid:window.utdid?window.utdid:""},h=window.utils.getUrlParams&&window.utils.getUrlParams();h&&h.itemId&&(g.itemId=h.itemId),b()},renderWfData:function(a,b){var c=this,d=c.albumId,e=c["ctrl-wf"+d],f=e.viewModel||[];c.wfDateInfo[d],$("#J-tab").find(".cur").attr("data-id");1==c.currentPage&&f.push({html:c.calcWfDate(),height:c.wfDateHeight||null,width:c.itemWidth||null});for(var g=0;g<a.length;g++){var h="",i=a[g].marketPrice.split(".");a[g].updateTime;h="00"==i[1]?i[0]:i[0]+'<em class="point">.'+i[1]+"</em>";var j=c.imgLib.getNewUrl(a[g].picUrl),k={},l=c.calItemHeight(a[g].imageWidth,a[g].imageHeight);if(c.descHeight&&c.itemWidth){var m=l+c.descHeight;k.height=m,k.width=c.itemWidth}var n=a[g][window.d11Info.extKey],o="";if(n&&c.isDouble11){var p=n.split(" ")[0];p&&window.d11Info.extValues[p]&&(o=window.d11Info.extValues[p])}var q=c.scm?"scm="+c.scm:"",r=tmpl(c.waterfallItemTpl,{id:a[g].itemId,dataImg:j,height:l,pic:a[g].picUrl,title:a[g].title,price:h,extend:o,scmId:q,oprice:a[g].marketPrice===a[g].normalPrice?"":"&#65509;"+a[g].normalPrice.split(".")[0]});k.html=r,f.push(k)}if(c.loadedWfList[d]=!0,c.pageScroller.disable(),e.syncViewModel(),c.scrollStatus="scrolled",c.canLoad=!0,c.currentPage++,!c.descHeight||!c.itemWidth||!c.wfDateHeight){var s=document.querySelector("#J-waterfall .desc"),t=document.querySelector(".wf-date-tip");if(s){var u=s.getBoundingClientRect().height,v=s.getBoundingClientRect().width+2;c.descHeight=u,c.itemWidth=v}t&&(c.wfDateHeight=t.getBoundingClientRect().height)}c.imgLib.fireLazyload()},calItemHeight:function(a,b){var c=document.documentElement.clientWidth,d=Math.floor(.4625*c);if(!a||!b)return d;if(a==b)return d;var e=parseInt(b,10)/parseInt(a,10);return parseInt(e*d,10)},loadFoodComboData:function(a){var b=this,c=[],d=(window.firstHour||10,window.secondHour||21,(new Date).getHours(),window.timeAmItems);for(var e in d)c.push(e);var f={ids:c.join(","),utdid:window.utdid?window.utdid:""},g=window.utils.getUrlParams&&window.utils.getUrlParams();g&&g.itemId&&(f.itemId=g.itemId),lib.mtop.request({api:"com.taobao.wireless.chanel.comboData",v:"1.0",data:{tabId:"sp_online2",pageSize:10,extendParam:JSON.stringify(f)}},function(a,c){if(-1!=a.ret[0].indexOf("SUCCESS")){var d=a.data.model,e=d.items&&d.items.result||null,f=d.itemIdsinfo;if(f){var g=parseInt(f.time),h=new Date(g);b.renderTimeItems(window.timeAmItems,f,h)}else $(".mod-qiang").remove();e&&e.length?(b.isTabsLoaded=!0,b.wfTabsCachedData=e,b.renderWfTabs()):($(".waterfall").remove(),$(".loading").remove())}else window.utils.mtopErrorHandler(a),b.isTabsLoaded=!0},function(a,c){$(".mod-qiang").remove(),b.isTabsLoaded=!0,window.utils.mtopErrorHandler(a),console.log(a.ret[0])})},renderTimeItems:function(a,b,c){var d,e=this,f=$("#J-timeItemTmpl").html(),g=$(".mod-qiang .bd"),h=[],i=c.getHours()>=window.firstHour;for(var j in b)if(b[j]&&a[j]){var k={itemId:j,img:e.imgLib.getNewUrl(a[j].img,"200x200"),title:a[j].title,discount:parseFloat(b[j].rate).toFixed(1),oldPrice:b[j].price,saleCount:b[j].sold,cls:i?"":"close",openTime:window.firstHour};i?k.newPrice=b[j].priceWap:a[j].price?k.newPrice=a[j].price:k.newPrice=b[j].priceWap,h.push(k)}h.sort(function(a,b){return Math.random()>.5?-1:1}),d=tmpl(f,{list:h}),g.html(d),e.slider(),e.pageScroller.refresh()},renderWfTabs:function(){var a=this,b="",c=$(".tab-in ul"),d=$(".subtab-list"),e=document.createDocumentFragment(),f=(document.createDocumentFragment(),a.wfTabsCachedData);if(!f||!f.length)return $(".waterfall").remove(),$(".loading").remove(),$(".tab-fixed-wrap").remove(),void(a.pageScroller&&a.pageScroller.refresh());for(var g=0;g<f.length;g++){var h=f[g],i=h.subTab,j=h.tabId,k=h.tabName,l=!1;("同城速达"==k||"_104"==j)&&(l=!0);var m=$("<li/>",{"class":0==g?l?"tab-city cur":"cur":"","data-tagname":k,"data-id":j,html:k});e.appendChild(m[0]),b+='<div class="subtab-item clearfix '+(0==g?"":"none")+'">';for(var n=0;n<i.length;n++){var o=i[n];b+='<a href="#" data-catid="'+o.tabId+'" '+(0==n?'class="cur"':"")+">"+o.tabName+"</a>"}b+="</div>"}c.html("")[0].appendChild(e),d.html(b),a.albumId=$(".subtab-item a").eq(0).attr("data-catid")||null,a.firstLoad=!0,a.currentPage=1,a.canLoad=!0,a.currentPage=1,a.createTabCtrl(),a.createWaterfallCtrl(),a.tabScroller&&a.tabScroller.refresh(),a.pageScroller&&a.pageScroller.refresh()},checkImgUrl:function(){var a=this;$("img.lazyimg").each(function(b,c){var d=c.getAttribute("dataimg");d&&c.setAttribute("dataimg",a.imgLib.getNewUrl(d,"640x640"))})}},function(){var a=window.utils,b={init:function(){(new HYTemplate).init(),this.addEvent()},addEvent:function(){var b=$(".banner");b.on("click","a",a.openLinkByWv)}};document.addEventListener("DOMContentLoaded",function(){var a=(window.utils,document.createEvent("HTMLEvents"));a.initEvent("resize",!1,!0),window.dispatchEvent(a),b.init()},!1)}();