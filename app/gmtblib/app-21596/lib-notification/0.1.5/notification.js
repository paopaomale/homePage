!function(a,b){function c(a,b){for(var c in b)a[c]=b[c];return a}function d(a){this.callback&&this.callback(a,!0)}function e(a){this.callback&&this.callback(a,!1)}function f(a){this._options=c({mode:"msg",text:"网页提示",useTap:!1},a||{}),this._init()}var g,h,i,j,k,l,m=a.document,n=(m.body,!1);g=m.createElement("div"),g.className="c-float-popWrap msgMode hide",g.innerHTML=['<div class="c-float-modePop">','<div class="warnMsg"></div>','<div class="content"></div>','<div class="doBtn">','<button class="ok">确定</button>','<button class="cancel">取消</button>',"</div>","</div>"].join(""),h=g.querySelector(".warnMsg"),i=g.querySelector(".content"),j=g.querySelector(".doBtn .ok"),k=g.querySelector(".doBtn .cancel"),c(f.prototype,{_init:function(){var b=this,c=b._options,f=c.mode,l=c.text,o=c.content,p=c.callback,q=c.background,r=c.useTap?"touchend":"click",s=g.className;s=s.replace(/(msg|alert|confirm)Mode/i,f+"Mode"),g.className=s,q&&(g.style.background=q),l&&(h.innerHTML=l),o&&(i.innerHTML=o),j.removeEventListener("touchend",d),j.removeEventListener("click",d),k.removeEventListener("touchend",d),k.removeEventListener("click",d),j.addEventListener(r,d,!1),k.addEventListener(r,e,!1),j.callback=k.callback=function(){p.apply(b,arguments)},n||(n=!0,m.body.appendChild(g),a.addEventListener("resize",function(){setTimeout(function(){b._pos()},500)},!1))},_pos:function(){var b,c,d,e,f,h,i,j,k=this;k.isHide()||(b=m.body.getBoundingClientRect(),c=-b.top,d=-b.left,e=a.innerWidth,f=a.innerHeight,h=g.getBoundingClientRect(),i=h.width,j=h.height,g.style.top=c+(f-j)/2+"px",g.style.left=d+(e-i)/2+"px")},isShow:function(){return g.className.indexOf("show")>-1},isHide:function(){return g.className.indexOf("hide")>-1},_cbShow:function(){var a=this,b=a._options,c=b.onShow;g.style.opacity="1",g.className=g.className.replace(/\s*show|hide/,"")+" show",c&&c.call(a)},show:function(){var a=this;l&&(clearTimeout(l),l=void 0),a.isShow()?a._cbShow():(g.style.opacity="0",g.className=g.className.replace("hide",""),a._pos(),setTimeout(function(){a._cbShow()},300),setTimeout(function(){g.style.webkitTransition="opacity 0.4s linear 0",g.style.opacity="1"},1))},_cbHide:function(){var a=this,b=a._options,c=b.onHide;g.style.opacity="0",g.className=g.className.replace(/\s*show|hide/,"")+" hide",c&&c.call(a)},hide:function(){var a=this;a.isHide()?a._cbHide():(g.style.opacity="1",g.className=g.className.replace("show",""),setTimeout(function(){a._cbHide()},300),setTimeout(function(){g.style.webkitTransition="opacity 0.4s linear 0",g.style.opacity="0"},1))},flash:function(a){var b=this;opt=b._options,opt.onShow=function(){l=setTimeout(function(){l&&b.hide()},a)},b.show()}}),b.notification=new function(){this.simple=function(a,b,c){2==arguments.length&&"number"==typeof arguments[1]&&(c=arguments[1],b=void 0);var d=new f({mode:"msg",text:a,background:b});return d.flash(c||2e3),d},this.msg=function(a,b){return new f(c({mode:"msg",text:a},b||{}))},this.alert=function(a,b,d){return new f(c({mode:"alert",text:a,callback:b},d||{}))},this.confirm=function(a,b,d,e){return new f(c({mode:"confirm",text:a,content:b,callback:d},e||{}))},this.pop=function(a){return new f(a)}}}(window,window.lib||(window.lib={}));