!function(a){function b(){var b=f.getBoundingClientRect().width;a.rem=b/16,h.innerHTML="html{font-size:"+a.rem+"px}body{font-size:"+parseInt(12*(b/320))+"px}"}var c,d,e,f=document.documentElement,g=document.querySelector('meta[name="viewport"]'),h=document.createElement("style");if(g){console.warn("将根据已有的meta标签来设置缩放比例");var i=g.getAttribute("content").match(/initial\-scale=(["']?)([\d\.]+)\1?/);i&&(d=parseFloat(i[2]),c=1/d)}if(!c&&!d){var j=(a.navigator.appVersion.match(/android/gi),a.navigator.appVersion.match(/iphone/gi)),c=a.devicePixelRatio;c=j&&c>=2?2:1,d=1/c}if(f.setAttribute("data-dpr",c),!g)if(g=document.createElement("meta"),g.setAttribute("name","viewport"),g.setAttribute("content","initial-scale="+d+", maximum-scale="+d+", minimum-scale="+d+", user-scalable=no"),f.firstElementChild)f.firstElementChild.appendChild(g),f.firstElementChild.appendChild(h);else{var k=document.createElement("div");k.appendChild(g),document.write(k.innerHTML)}a.dpr=c,a.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(b,300)},!1),a.addEventListener("pageshow",function(a){a.persisted&&(clearTimeout(e),e=setTimeout(b,300))},!1),b()}(window);