"use strict";var win=window;win.flex=function(e,i){var t=e||100,a=i||1,n=win.document,o=navigator.userAgent,r=o.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),m=o.match(/U3\/((\d+|\.){5,})/i),c=m&&parseInt(m[1].split(".").join(""),10)>=80,d=navigator.appVersion.match(/(iphone|ipad|ipod)/gi),l=win.devicePixelRatio||1;d||r&&r[1]>534||c||(l=1);var s=1/l,p=n.querySelector('meta[name="viewport"]');p||(p=n.createElement("meta"),p.setAttribute("name","viewport"),n.head.appendChild(p)),p.setAttribute("content","width=device-width,user-scalable=no,initial-scale="+s+",maximum-scale="+s+",minimum-scale="+s),n.documentElement.style.fontSize=t/2*l*a+"px"};