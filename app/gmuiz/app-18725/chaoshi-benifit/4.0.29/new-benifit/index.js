define("mui/chaoshi-benifit/new-benifit/index",["mui/chaoshi-app/site-info","mui/chaoshi-app/user-info","mui/tinycart/","mui/zepto/zepto","mui/zepto/touch","./banner.tpl","./tabs.tpl","./gift.tpl","./banner.css","mui/mtop/index","mui/prompt/indicator/index","mui/slider-m/index","mui/dialog/","mui/crossimage/"],function(t,e,a){"use strict";var n=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(t,n.key,n)}}return function(e,a,n){if(a)t(e.prototype,a);if(n)t(e,n);return e}}();function i(t,e){if(!(t instanceof e)){throw new TypeError("Cannot call a class as a function")}}var r=t("mui/chaoshi-app/site-info");var o=t("mui/chaoshi-app/user-info");var s=t("mui/tinycart/");var l=t("mui/zepto/zepto");t("mui/zepto/touch");var c=t("./banner.tpl");var d=t("./tabs.tpl");var f=t("./gift.tpl");t("./banner.css");var u=t("mui/mtop/index");var g=t("mui/prompt/indicator/index");var p=t("mui/slider-m/index");var v=t("mui/dialog/");var h=t("mui/crossimage/");var b="quanyizhenghe";var m=function(){function t(e){var a=this;i(this,t);var n=this;this.bfTIPS={tips:["\u89c1\u9762\u793c6\u90091","\u6536\u8d27\u62ff\u798f\u5229","\u7ffb\u724c\u7ffb\u4e0d\u505c"],tipsLength:3};this.TIPS={tips:["\u89c1\u9762\u793c6\u90091","\u6536\u8d27\u62ff\u798f\u5229"],tipsLength:2};this.config={claimedGift:{isGift:true,header_1:"\u60a8\u8fd8\u670920\u5143\u7ea2\u5305\u672a\u4f7f\u7528",header_2:"\u81ea\u9886\u53d672\u5c0f\u65f6\u5185\u6709\u6548\uff0c\u4ed8\u6b3e\u65f6\u76f4\u63a5\u62b5\u6263",content_label:"20\u5143",button_label:"\u5f00\u59cb\u901b\u8d85\u5e02",button_link:"https://chaoshi.m.tmall.com",ruleUrl:"http://guizeshuoming.taobao.com"},tab2:{header1:"\u65b0\u4eba\u4e13\u4eab\u7ffb\u724c\u793c",header2:"\u7b2c\u4e00\u5355\u786e\u8ba4\u6536\u8d27\u540e\uff0c\u5f97\u65b0\u4eba\u4e13\u4eab\u7ffb\u724c",imgUrl:"http://what-url2.taobao.img"},now:0,arrow:true};Object.assign(this.config,e);this.initUMID(this.config.safety);this.initUA(function(t){a.config.ua=t;if(a.config.bfCity=="true"){Object.assign(a.config,a.bfTIPS)}else{Object.assign(a.config,a.TIPS)}if(a.config.gifts){a.config.gifts.forEach(function(t,e){t.pictUrl=h.getFitUrl(t.pictUrl,100,100)});a.giftHTML=f(a.config);a.$bannerEl=l(c({inner:a.giftHTML,arrow:a.config.arrow}))}else{a.config.tabs.forEach(function(t,e){t.imgUrl=h.getFitUrl(t.imgUrl,300,300,{quality:"q90"})});a.tabsHTML=d(a.config);a.$bannerEl=l(c({inner:a.tabsHTML,arrow:a.config.arrow}))}a.$tabList=a.$bannerEl.find(".tab");l("body").append(a.$bannerEl);a.bindClose(a.$bannerEl);a.bindBtn(a.$bannerEl);l(window).trigger("mui/pure-buttom/updateItem",[{index:1,iconFont:false,text:"",url:"",overrideTheme:true,normalIcon:"//img.alicdn.com/tps/TB1LiYzJVXXXXb3XFXXXXXXXXXX-80-80.png",selectedIcon:"//img.alicdn.com/tps/TB1LiYzJVXXXXb3XFXXXXXXXXXX-80-80.png"}]);a.bindFlag=false;l(window).on("mui/pure-buttom/clicked",function(t){if(t._args[0].index==1){a.$bannerEl.toggleClass("hide");if(a.$bannerEl.hasClass("hide")){}else{}}});l(window).one("mui/pure-buttom/clicked",function(t){if(!a.bindFlag&&t._args[0].index==1){if(a.config.gifts){a.bindCell(a.$bannerEl.find("button"))}else{a.bindScroll(".j_slider1",".scroller")}}});if(a.config.fold==true){a.$bannerEl.addClass("hide")}else if(a.config.gifts){a.bindCell(a.$bannerEl.find("button"))}else{a.bindScroll(".j_slider1",".scroller");a.bindFlag=true}})}n(t,[{key:"canScroll",value:function t(e){if(e){l("body").off("touchstart",function(t){if(l(t.target).parents("#chaoshi-benifit-prompt").length>0&&l(t.target).attr("href")){return true}else{return false}})}else{l("body").on("touchstart",function(t){if(l(t.target).parents("#chaoshi-benifit-prompt").length>0&&l(t.target).attr("href")){return true}else{return false}})}return false}},{key:"initUMID",value:function t(e){var a=e.token;var n=e.umidAppName;var i=e.timestamp;var r=e.serviceUrl;l('<div  id="_umfp" style="display:inline;width:1px;height:1px;overflow:hidden"><img src="https://ynuf.alipay.com/service/clear.png?xt='+a+"&xa="+n+'"></div>').appendTo("body");feloader.getScript("https://g.alicdn.com/security/umscript/2.0.12/um.js",function(){var t=document.getElementById("_umfp");um.init({timeout:3e3,timestamp:i,token:a,serviceUrl:r,appName:n,containers:{flash:t,dcp:t}})})}},{key:"initUA",value:function t(e){var a=this;window.UA_Opt={};var n="";UA_Opt.ExTarget=["pwdid"];UA_Opt.FormId="my_form";UA_Opt.LogVal="ua_log";UA_Opt.SendInterval=5;UA_Opt.SendMethod=15;UA_Opt.MaxMCLog=150;UA_Opt.MaxKSLog=150;UA_Opt.MaxMPLog=150;UA_Opt.MaxGPLog=5;UA_Opt.MaxTCLog=150;UA_Opt.GPInterval=50;UA_Opt.MPInterval=50;UA_Opt.MaxFocusLog=150;UA_Opt.Token=(new Date).getTime()+":"+Math.random();UA_Opt.isSendError=1;UA_Opt.GetAttrs=["href","src"];UA_Opt.Flag=1965567;var i=function t(){a.getUA();e&&e()};feloader.getScript("//uaction.alicdn.com/js/uab.js",function(){if(typeof window.acjs=="undefined"){feloader.getScript("//acjs.aliyun.com/js/uab.js",i)}else{i()}})}},{key:"getUA",value:function t(){var e=window[UA_Opt.LogVal];UA_Opt.Token=(new Date).getTime()+":"+Math.random();UA_Opt.reload();return e}},{key:"renderIcons",value:function t(e){var a=this.$bannerEl.find(".nav-bottom");var n=a.find(".dot");n.removeClass("current");n.each(function(t,a){if(l(a).attr("data-index")==e){l(a).addClass("current")}})}},{key:"bindClose",value:function t(e){var a=this;e.on("tap",".close",function(t){window.goldlog&&goldlog.record("/tbchaoshi.224.1","","","H46896547");t.preventDefault();a.$bannerEl.addClass("hide")}).on("touchend",".close",function(t){t.preventDefault()})}},{key:"bindBtn",value:function t(e){var a=this;e.on("tap",".btn",function(t){var e=l(t.target);var n=e.attr("href")||"";try{if(window.goldlog&&window.goldlog.spm_ab.join(",")=="a3204,7152233"&&(n=="//chaoshi.m.tmall.com"||n=="https://chaoshi.m.tmall.com")){a.$bannerEl.addClass("hide");return}}catch(t){console.log(t)}if(a.config.arrow==false){a.$bannerEl.addClass("hide");return}location.href=n}).on("touchend",".btn",function(t){t.preventDefault()});e.on("tap",".item-link",function(t){var e=l(t.currentTarget);var a=e.attr("href");if(a)location.href=a}).on("touchend",".item-link",function(t){t.preventDefault()})}},{key:"recordClose",value:function t(e){try{o.request().then(function(t){localStorage[b]=(new Date).getMonth()+"|"+(new Date).getDate()+"|"+t.nk})}catch(t){}setTimeout(function(){e&&e()},100)}},{key:"bindTabs",value:function t(e){var a=this;e.on("tap",".tab",function(t){var e=l(t.target).attr("data-index")||l(t.target).parents(".tab").attr("data-index");a.slider.go(e)})}},{key:"bindScroll",value:function t(e,a){var n=this;if(this.bindFlag)return;this.slider=new p(e,{scroller:a,transitionDuration:300,timeout:5e3});this.renderIcons(0);this.slider.on("change",function(t){n.renderIcons(t.index);n.$tabList.removeClass("current");n.$tabList.eq(t.index).addClass("current")})}},{key:"bindCell",value:function t(e){var a=this;var n=false;e.on("tap",function(t){if(l(t.target).hasClass("disable"))return;if(n)return;g.getInstance().show();n=true;var e;var i=a.config.areaId;var r=a.getUA();var o=a.config.safety.token;if(l(t.target).attr("data-itemId")){var f=l(t.target).attr("data-itemId").toString(),p=l(t.target).attr("data-activityId").toString();e={itemId:f,activityId:p,areaId:i,type:"3"};window.goldlog&&goldlog.record("/tbchaoshi.224.3","","","H46896570")}else if(l(t.target).attr("data-type")=="2"){e={type:"2",areaId:i,token:o,ua:r};window.goldlog&&goldlog.record("/tbchaoshi.224.4","","","H46896571")}else{e={type:"1",areaId:i,token:o,ua:r};window.goldlog&&goldlog.record("/tbchaoshi.224.2","","","H46896569")}var b=function t(){try{server.server.data={data:JSON.stringify({asac:self.config.appName,ua:r}),token:self.config.token,sysId:self.config.sysId}}catch(t){}};u.request({api:"mtop.taobao.newcustgift.draw",v:"1.0",ecode:0,data:e}).then(function(t){n=false;g.getInstance().hide();if(t.data.drawSuccess=="false"){window.goldlog&&goldlog.record("/tbchaoshi.224.6","","code="+t.data.msg,"H46896573");var e=new v({title:"\u63d0\u793a",content:t.data.msg,buttons:{"\u786e\u5b9a":{className:"ok",fn:function t(){this.hide()}}}}).show();a.$bannerEl.addClass("hide");return}window.goldlog&&goldlog.record("/tbchaoshi.224.5","","","H46896572");s.update();var i=t.data.tabs;var r;if(t.data.bfCity=="true"){r=Object.assign({tabs:i},a.bfTIPS)}else{r=Object.assign({tabs:i},a.TIPS)}r.tabs.forEach(function(t,e){t.imgUrl=h.getFitUrl(t.imgUrl,300,300,{quality:"q90"})});a.tabsHTML=d(r);a.$bannerEl.remove();a.$bannerEl=l(c({inner:a.tabsHTML,arrow:a.config.arrow}));l("body").append(a.$bannerEl);a.$tabList=l(".tabs").find(".tab");a.bindScroll(".j_slider1",".scroller");a.bindClose(a.$bannerEl);a.bindBtn(a.$bannerEl)})})}}]);return t}();a.exports=m});