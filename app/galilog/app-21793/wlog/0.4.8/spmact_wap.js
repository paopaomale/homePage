/* 2017-02-21 16:34:49 */
!function t(e,r,n){function i(a,c){if(!r[a]){if(!e[a]){var f="function"==typeof require&&require;if(!c&&f)return f(a,!0);if(o)return o(a,!0);throw new Error("Cannot find module '"+a+"'")}var p=r[a]={exports:{}};e[a][0].call(p.exports,function(t){var r=e[a][1][t];return i(r?r:t)},p,p.exports,t,e,r,n)}return r[a].exports}for(var o="function"==typeof require&&require,a=0;a<n.length;a++)i(n[a]);return i}({1:[function(t,e,r){!function(){function t(t,e,r){t[x]((v?"on":"")+e,function(t){t=t||p.event;var e=t.target||t.srcElement;r(t,e)},!1)}function e(){return/&?\bspm=[^&#]*/.test(location.href)?location.href.match(/&?\bspm=[^&#]*/gi)[0].split("=")[1]:""}function r(t,e){if(t&&/&?\bspm=[^&#]*/.test(t)&&(t=t.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!e)return t;var r,n,i,o,a,c,f,p="&";if(-1!=t.indexOf("#")&&(i=t.split("#"),t=i.shift(),n=i.join("#")),o=t.split("?"),a=o.length-1,i=o[0].split("//"),i=i[i.length-1].split("/"),c=i.length>1?i.pop():"",a>0&&(r=o.pop(),t=o.join("?")),r&&a>1&&-1==r.indexOf("&")&&-1!=r.indexOf("%")&&(p="%26"),t=t+"?spm="+e+(r?p+r:"")+(n?"#"+n:""),f=c.indexOf(".")>-1?c.split(".").pop().toLowerCase():""){if({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}.hasOwnProperty(f))return 0;!r&&1>=a&&(n||{htm:1,html:1,php:1}.hasOwnProperty(f)||(t+="&file="+c))}return t}function n(t){function e(t){return t=t.replace(/refpos[=(%3D)]\w*/gi,c).replace(o,"%3D"+n+"%26"+i.replace("=","%3D")).replace(a,n),i.length>0&&(t+="&"+i),t}var r=window.location.href,n=r.match(/mm_\d{0,24}_\d{0,24}_\d{0,24}/i),i=r.match(/[&\?](pvid=[^&]*)/i),o=new RegExp("%3Dmm_\\d+_\\d+_\\d+","ig"),a=new RegExp("mm_\\d+_\\d+_\\d+","ig");i=i&&i[1]?i[1]:"";var c=r.match(/(refpos=(\d{0,24}_\d{0,24}_\d{0,24})?(,[a-z]+)?)(,[a-z]+)?/i);return c=c&&c[0]?c[0]:"",n?(n=n[0],e(t)):t}function i(e){var r=p.KISSY;r?r.ready(e):p.jQuery?jQuery(m).ready(e):"complete"===m.readyState?e():t(p,"load",e)}function o(t,e){return t&&t.getAttribute?t.getAttribute(e)||"":""}function a(t){if(t){var e,r=b.length;for(e=0;r>e;e++)if(t.indexOf(b[e])>-1)return!0;return!1}}function c(t,e){if(t&&/&?\bspm=[^&#]*/.test(t)&&(t=t.replace(/&?\bspm=[^&#]*/g,"").replace(/&{2,}/g,"&").replace(/\?&/,"?").replace(/\?$/,"")),!e)return t;var r,n,i,o,a,c,f,p="&";if(-1!=t.indexOf("#")&&(i=t.split("#"),t=i.shift(),n=i.join("#")),o=t.split("?"),a=o.length-1,i=o[0].split("//"),i=i[i.length-1].split("/"),c=i.length>1?i.pop():"",a>0&&(r=o.pop(),t=o.join("?")),r&&a>1&&-1==r.indexOf("&")&&-1!=r.indexOf("%")&&(p="%26"),t=t+"?spm="+e+(r?p+r:"")+(n?"#"+n:""),f=c.indexOf(".")>-1?c.split(".").pop().toLowerCase():""){if({png:1,jpg:1,jpeg:1,gif:1,bmp:1,swf:1}.hasOwnProperty(f))return 0;!r&&1>=a&&(n||{htm:1,html:1,php:1}.hasOwnProperty(f)||(t+="&__file="+c))}return t}function f(t){if(a(t.href)){var r=o(t,g);if(!r){if(!u)return;var n=u(t),i=[n.a,n.b,n.c,n.d,n.e].join(".");h&&(i=[n.a||"0",n.b||"0",n.c||"0",n.d||"0"].join("."),i=(e()||"0.0.0.0.0")+"_"+i);var f=c(t.href,i);t.href=f,t.setAttribute(g,i)}}t=void 0}var p=window,m=document,s=location,l=(s.href,p._alimm_spmact_on_);if("undefined"==typeof l&&(l=1),1==l&&(l=1),0==l&&(l=0),l){var u;try{u=p.g_SPM.getParam}catch(d){u=function(){return{a:0,b:0,c:0,d:0,e:0}}}var h=!0;try{h=self.location!=top.location}catch(d){}var g="data-spm-act-id",b=["mclick.simba.taobao.com","click.simba.taobao.com","click.tanx.com","click.mz.simba.taobao.com","click.tz.simba.taobao.com","redirect.simba.taobao.com","rdstat.tanx.com","stat.simba.taobao.com","s.click.taobao.com"],v=!!m.attachEvent,w="attachEvent",_="addEventListener",x=v?w:_;t(m,"mousedown",function(t,e){for(var r,n=0;e&&(r=e.tagName)&&5>n;){if("A"==r||"AREA"==r){f(e);break}if("BODY"==r||"HTML"==r)break;e=e.parentNode,n++}}),i(function(){for(var t,i,a=document.getElementsByTagName("iframe"),c=0;c<a.length;c++){t=o(a[c],"mmsrc"),i=o(a[c],"mmworked");var f=u(a[c]),p=[f.a||"0",f.b||"0",f.c||"0",f.d||"0",f.e||"0"].join(".");t&&!i?(h&&(p=[f.a||"0",f.b||"0",f.c||"0",f.d||"0"].join("."),p=e()+"_"+p),a[c].src=r(n(t),p),a[c].setAttribute("mmworked","mmworked")):a[c].setAttribute(g,p)}})}}()},{}]},{},[1]);