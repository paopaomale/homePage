define("mui/city-selector/letterbar.xtpl",function(e,t,i){var r=e("mui/xtemplate/runtime");var n="";i.exports=function(e,t){var i;var r=function n(e){var t;var i;var r;var n;var a;var o;var c;var s;var u;var l;var d;var v=this;var f=v.root;var m=v.buffer;var p=v.scope;var h=v.runtime;var g=v.name;var y=v.pos;var x=p.data;var b=p.affix;var w=f.nativeCommands;var C=f.utils;var z=C["callFn"];var k=C["callDataFn"];var U=C["callCommand"];var T=w["range"];var E=w["foreach"];var q=w["forin"];var N=w["each"];var I=w["with"];var L=w["if"];var $=w["set"];var D=w["include"];var P=w["parse"];var _=w["extend"];var O=w["block"];var j=w["macro"];var H=w["debugger"];function A(e,i,r){var n=e.data;var a=e.affix;i.data+='\n			<span class="letters-column letter-';y.line=4;var o=(t=a.id)!==r?t:(t=n.id)!==r?t:e.resolveLooseUp(["id"]);i=i.writeEscaped(o);i.data+='" data-idx="';var c=(t=a.id)!==r?t:(t=n.id)!==r?t:e.resolveLooseUp(["id"]);i=i.writeEscaped(c);i.data+='">';var s=(t=a.letter)!==r?t:(t=n.letter)!==r?t:e.resolveLooseUp(["letter"]);i=i.writeEscaped(s);i.data+="</span>\n		";return i}m.data+='<div class="all-letters">\n	<div class="list">\n		';y.line=3;y.line=3;var S=(t=b.letters)!==e?t:(t=x.letters)!==e?t:p.resolveLooseUp(["letters"]);m=N.call(v,p,{params:[S],fn:A},m);m.data+='\n	</div>\n</div>\n<div class="notice"></div>';return m};return function(e){i=i||new t(r);return i&&i.render(e)||""}}(n,r)});