define("mui/chaoshi-benifit/new-benifit/gift.tpl",function(a,t,e){var n=a("mui/xtemplate/runtime");var r="";e.exports=function(a,t){var e;var n=function a(t){var e;var n;var r;var i;var o;var s;var l;var d;var c;var v;var u;var p=this;var f=p.root;var m=p.buffer;var g=p.scope;var b=p.runtime;var h=p.name;var w=p.pos;var U=g.data;var x=g.affix;var y=f.nativeCommands;var L=f.utils;var I=L["callFn"];var X=L["callDataFn"];var E=L["callCommand"];var O=y["range"];var _=y["foreach"];var k=y["forin"];var C=y["each"];var A=y["with"];var T=y["if"];var $=y["set"];var S=y["include"];var M=y["parse"];var F=y["extend"];var j=y["block"];var D=y["macro"];var H=y["debugger"];function P(a,t,e){var n=a.data;var r=a.affix;t.data+="first current";return t}function z(a,t,e){var n=a.data;var r=a.affix;t.data+="last";return t}function q(a,t,n){var r=a.data;var i=a.affix;t.data+='\n            <li class="tab \n                ';w.line=8;var o=(e=i.index)!==n?e:(e=r.index)!==n?e:a.resolveLooseUp(["index"]);var s=o;s=o===0;t=T.call(p,a,{params:[s],fn:P},t);t.data+="\n                ";w.line=9;var l=(e=i.index)!==n?e:(e=r.index)!==n?e:a.resolveLooseUp(["index"]);var d=l;var c=(e=i.tipsLength)!==n?e:(e=r.tipsLength)!==n?e:a.resolveLooseUp(["tipsLength"]);var v=c;v=c-1;d=l===v;t=T.call(p,a,{params:[d],fn:z},t);t.data+='">\n                <div class="text"><span class="num">';w.line=10;var u=(e=i.index)!==n?e:(e=r.index)!==n?e:a.resolveLooseUp(["index"]);var f=u;f=u+1;t=t.writeEscaped(f);t.data+="</span>";var m=r;t=t.writeEscaped(m);t.data+="</div>\n            </li>\n            ";return t}function B(a,t,n){var r=a.data;var i=a.affix;t.data+='\n            <div class="cell">\n                <div class="column-wrapper">\n                    <div class="img-wrapper">\n                        <img class="hongbao" src="//img.alicdn.com/tps/TB1MUgFJpXXXXaLXVXXXXXXXXXX-250-262.png" / >\n                        <span class="amount">';w.line=24;var o=(e=i.amount)!==n?e:(e=r.amount)!==n?e:a.resolveLooseUp(["amount"]);t=t.writeEscaped(o);t.data+='\u5143</span>\n                    </div>\n                </div>\n                <div class="btn-wrapper"><button class="red" data-type="1">';w.line=27;var s=(e=i.tips)!==n?e:(e=r.tips)!==n?e:a.resolveLooseUp(["tips"]);t=t.writeEscaped(s);t.data+="</button></div>                \n            </div>\n            ";return t}function G(a,t,e){var n=a.data;var r=a.affix;t.data+="soldout";return t}function N(a,t,e){var n=a.data;var r=a.affix;t.data+="disable";return t}function V(a,t,n){var r=a.data;var i=a.affix;t.data+='\n            <div class="cell ';w.line=44;var o=(e=i.soldOut)!==n?e:(e=r.soldOut)!==n?e:a.resolveLooseUp(["soldOut"]);var s=o;s=o==="true";t=T.call(p,a,{params:[s],fn:G},t);t.data+='">\n                <div class="column-wrapper">\n                <a href="';w.line=46;var l=(e=i.url)!==n?e:(e=r.url)!==n?e:a.resolveLooseUp(["url"]);t=t.writeEscaped(l);t.data+='" class="img-wrapper">\n                    <img src="';w.line=47;var d=(e=i.pictUrl)!==n?e:(e=r.pictUrl)!==n?e:a.resolveLooseUp(["pictUrl"]);t=t.writeEscaped(d);t.data+='" / >\n                </a>\n                </div>\n                <div class="btn-wrapper"><button class="white ';w.line=50;var c=(e=i.soldOut)!==n?e:(e=r.soldOut)!==n?e:a.resolveLooseUp(["soldOut"]);var v=c;v=c==="true";t=T.call(p,a,{params:[v],fn:N},t);t.data+='" data-itemId="';var u=(e=i.itemId)!==n?e:(e=r.itemId)!==n?e:a.resolveLooseUp(["itemId"]);t=t.writeEscaped(u);t.data+='" data-activityId="';var f=(e=i.activityId)!==n?e:(e=r.activityId)!==n?e:a.resolveLooseUp(["activityId"]);t=t.writeEscaped(f);t.data+='">';var m=(e=i.tips)!==n?e:(e=r.tips)!==n?e:a.resolveLooseUp(["tips"]);t=t.writeEscaped(m);t.data+="</button></div>\n            </div>\n            ";return t}function J(a,t,n){var r=a.data;var i=a.affix;w.line=29;var o=(e=i.type)!==n?e:(e=r.type)!==n?e:a.resolveLooseUp(["type"]);var s=o;s=o==="2";return s}function Y(a,t,n){var r=a.data;var i=a.affix;t.data+='\n            <div class="cell">\n                <div class="column-wrapper">\n\n                <div class="coupon-img ticket-base-20 ticket-base-small">\n                    <div class="ticket-wrap-base">\n                        <div class="ticket-base">\n                            <div class="coupon-amount"><span class="rmb">\xa5</span>';w.line=36;var o=(e=i.amount)!==n?e:(e=r.amount)!==n?e:a.resolveLooseUp(["amount"]);t=t.writeEscaped(o);t.data+='</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n                 <div class="btn-wrapper"><button class="red" data-type="2">';w.line=41;var s=(e=i.tips)!==n?e:(e=r.tips)!==n?e:a.resolveLooseUp(["tips"]);t=t.writeEscaped(s);t.data+="</button></div> \n            </div>\n            ";return t}function K(a,t,n){var r=a.data;var i=a.affix;t.data+="\n            ";w.line=19;w.line=19;var o=(e=i.type)!==n?e:(e=r.type)!==n?e:a.resolveLooseUp(["type"]);var s=o;s=o==="1";t=T.call(p,a,{params:[s],fn:B,inverse:V,elseIfs:[{test:J,fn:Y}]},t);t.data+="\n            ";return t}function Q(a,t,n){var r=a.data;var i=a.affix;t.data+="\n            ";w.line=18;w.line=18;var o=(e=i.index)!==n?e:(e=r.index)!==n?e:a.resolveLooseUp(["index"]);var s=o;s=o<3;t=T.call(p,a,{params:[s],fn:K},t);t.data+="\n            ";return t}function R(a,t,e){var n=a.data;var r=a.affix;t.data+="soldout";return t}function W(a,t,e){var n=a.data;var r=a.affix;t.data+="disable";return t}function Z(a,t,n){var r=a.data;var i=a.affix;t.data+='\n            <div class="cell ';w.line=59;var o=(e=i.soldOut)!==n?e:(e=r.soldOut)!==n?e:a.resolveLooseUp(["soldOut"]);var s=o;s=o==="true";t=T.call(p,a,{params:[s],fn:R},t);t.data+='">\n                <div class="column-wrapper">\n                <a href="';w.line=61;var l=(e=i.url)!==n?e:(e=r.url)!==n?e:a.resolveLooseUp(["url"]);t=t.writeEscaped(l);t.data+='" class="img-wrapper"><img src="';var d=(e=i.pictUrl)!==n?e:(e=r.pictUrl)!==n?e:a.resolveLooseUp(["pictUrl"]);t=t.writeEscaped(d);t.data+='" / ></a>\n                </div>\n                <div class="btn-wrapper"><button class="white ';w.line=63;var c=(e=i.soldOut)!==n?e:(e=r.soldOut)!==n?e:a.resolveLooseUp(["soldOut"]);var v=c;v=c==="true";t=T.call(p,a,{params:[v],fn:W},t);t.data+='" data-itemId="';var u=(e=i.itemId)!==n?e:(e=r.itemId)!==n?e:a.resolveLooseUp(["itemId"]);t=t.writeEscaped(u);t.data+='" data-activityId="';var f=(e=i.activityId)!==n?e:(e=r.activityId)!==n?e:a.resolveLooseUp(["activityId"]);t=t.writeEscaped(f);t.data+='">';var m=(e=i.tips)!==n?e:(e=r.tips)!==n?e:a.resolveLooseUp(["tips"]);t=t.writeEscaped(m);t.data+="</button></div>\n            </div>\n            ";return t}function aa(a,t,n){var r=a.data;var i=a.affix;t.data+="\n            ";w.line=58;w.line=58;var o=(e=i.index)!==n?e:(e=r.index)!==n?e:a.resolveLooseUp(["index"]);var s=o;s=o>2;t=T.call(p,a,{params:[s],fn:Z},t);t.data+="\n            ";return t}m.data+='<section class="firstClaim">\n    <p class="bg-title">\u65b0\u4eba\u4e13\u4eab\u5957\u9910</p>\n    <a class="check-more" href="';w.line=3;var ta=(e=x.ruleUrl)!==t?e:(e=U.ruleUrl)!==t?e:g.resolveLooseUp(["ruleUrl"]);m=m.writeEscaped(ta);m.data+='">\u67e5\u770b\u89c4\u5219&nbsp;></a>\n    <div class="nav">\n        <ul class="icons">\n            ';w.line=6;w.line=6;var ea=(e=x.tips)!==t?e:(e=U.tips)!==t?e:g.resolveLooseUp(["tips"]);m=C.call(p,g,{params:[ea,"item","index"],fn:q},m);m.data+='\n        </ul>\n    </div>\n    <div class="cell-group">\n        <div class="cell-wrapper">\n            ';w.line=17;w.line=17;var na=(e=x.gifts)!==t?e:(e=U.gifts)!==t?e:g.resolveLooseUp(["gifts"]);m=C.call(p,g,{params:[na,"item","index"],fn:Q},m);m.data+='\n        </div>\n        <div class="cell-wrapper">\n            ';w.line=57;w.line=57;var ra=(e=x.gifts)!==t?e:(e=U.gifts)!==t?e:g.resolveLooseUp(["gifts"]);m=C.call(p,g,{params:[ra,"item","index"],fn:aa},m);m.data+="\n        </div>\n    </div>\n</section>\n";return m};return function(a){e=e||new t(n);return e&&e.render(a)||""}}(r,n)});