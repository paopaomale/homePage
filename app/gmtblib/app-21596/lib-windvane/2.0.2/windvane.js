!function(a,b){function c(a,b){a=a.toString().split("."),b=b.toString().split(".");for(var c=0;c<a.length||c<b.length;c++){var d=parseInt(a[c],10),e=parseInt(b[c],10);if(window.isNaN(d)&&(d=0),window.isNaN(e)&&(e=0),e>d)return-1;if(d>e)return 1}return 0}var d=a.document,e=a.navigator.userAgent,f=/iPhone|iPad|iPod/i.test(e),g=/Android/i.test(e),h=e.match(/(?:OS|Android)[\/\s](\d+[._]\d+(?:[._]\d+)?)/i),i=e.match(/WindVane[\/\s](\d+[._]\d+[._]\d+)/),j=Object.prototype.hasOwnProperty,k=b.windvane=a.WindVane||(a.WindVane={}),l=(a.WindVane_Native,1),m=[],n=3,o="hybrid",p="wv_hybrid",q="iframe_",r="suc_",s="err_",t="defer_",u="param_",v="chunk_",w=6e5,x=6e5,y=6e4;h=h?(h[1]||"0.0.0").replace(/\_/g,"."):"0.0.0",i=i?(i[1]||"0.0.0").replace(/\_/g,"."):"0.0.0";var z={isAvailable:1===c(i,"0"),call:function(a,c,d,e,f,g){var h,i;return"number"==typeof arguments[arguments.length-1]&&(g=arguments[arguments.length-1]),"function"!=typeof e&&(e=null),"function"!=typeof f&&(f=null),b.promise&&(i=b.promise.deferred()),h=g>0?setTimeout(function(){z.onFailure(h,{ret:["WV_ERR::TIMEOUT"]})},g):A.getSid(),A.registerCall(h,e,f,i),A.registerGC(h,g),A.callMethod(a,c,d,h),i?i.promise():void 0},fireEvent:function(a,b,c){var e=d.createEvent("HTMLEvents");e.initEvent(a,!1,!0),e.param=A.parseData(b||A.getData(c)),d.dispatchEvent(e)},getParam:function(a){return A.getParam(a)},setData:function(a,b){A.setData(a,b)},onSuccess:function(a,b){A.onComplete(a,b,"success")},onFailure:function(a,b){A.onComplete(a,b,"failure")}},A={params:{},chunks:{},calls:{},getSid:function(){return Math.floor(Math.random()*(1<<50))+""+l++},buildParam:function(a){return a&&"object"==typeof a?JSON.stringify(a):a||""},getParam:function(a){return this.params[u+a]||""},setParam:function(a,b){this.params[u+a]=b},parseData:function(a){var b;if(a&&"string"==typeof a)try{b=JSON.parse(a)}catch(c){b={ret:["WV_ERR::PARAM_PARSE_ERROR"]}}else b=a||{};return b},setData:function(){this.chunks[v+sid]=this.chunks[v+sid]||[],this.chunks[v+sid].push(chunk)},getData:function(a){return this.chunks[v+a]?this.chunks[v+a].join(""):""},registerCall:function(a,b,c,d){b&&(this.calls[r+a]=b),c&&(this.calls[s+a]=c),d&&(this.calls[t+a]=d)},unregisterCall:function(a){var b=r+a,c=s+a,d=t+a,e={};return this.calls[b]&&(e.success=this.calls[b],delete this.calls[b]),this.calls[c]&&(e.failure=this.calls[c],delete this.calls[c]),this.calls[d]&&(e.deferred=this.calls[d],delete this.calls[d]),e},useIframe:function(a,b){var c=q+a,e=m.pop();e||(e=d.createElement("iframe"),e.setAttribute("frameborder","0"),e.style.cssText="width:0;height:0;border:0;display:none;"),e.setAttribute("id",c),e.setAttribute("src",b),e.parentNode||setTimeout(function(){d.body.appendChild(e)},5)},retrieveIframe:function(a){var b=q+a,c=d.querySelector("#"+b);m.length>=n?d.body.removeChild(c):m.push(c)},callMethod:function(a,b,c,d){c=A.buildParam(c);var e=o+"://"+a+":"+d+"/"+b+"?"+c;if(f)this.setParam(d,c),this.useIframe(d,e);else if(g){var h=p+":";window.prompt(e,h)}},registerGC:function(a,b){var c=this,d=Math.max(b||0,w),e=Math.max(b||0,y),h=Math.max(b||0,x);setTimeout(function(){c.unregisterCall(a)},d),f?setTimeout(function(){c.params[u+a]&&delete c.params[u+a]},e):g&&setTimeout(function(){c.chunks[v+a]&&delete c.chunks[v+a]},h)},onComplete:function(a,b,c){clearTimeout(a);var d=this.unregisterCall(a),e=d.success,h=d.failure,i=d.deferred;b=b?b:this.getData(a),b=this.parseData(b);var j=b.ret;"string"==typeof j&&(b=b.value||b,b.ret||(b.ret=[j])),"success"===c?(e&&e(b),i&&i.resolve(b)):"failure"===c&&(h&&h(b),i&&i.reject(b)),f?(this.retrieveIframe(a),this.params[u+a]&&delete this.params[u+a]):g&&this.chunks[v+a]&&delete this.chunks[v+a]}};for(var B in z)j.call(k,B)||(k[B]=z[B])}(window,window.lib||(window.lib={}));