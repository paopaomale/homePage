KISSY.add("mui/mit-toolkit/mask/index",function(i,e){var t=i.Node.all;var a="mask-",n={name:"wrap",hideWrap:null,stageWrap:t(".wrap"),maskHTML:"<div></div>",content:null,scrollToTop:false,duration:300,showClass:"mask-show",hideClass:"mask-hide",showStyle:{opacity:1},hideStyle:{opacity:0},showAfterStyle:{display:"block"},hideAfterStyle:{display:"none"},zIndex:2,maskStyle:{width:"100%",position:"absolute",top:0,left:0}};var o=function(i){this.init(i)};i.mix(o.prototype,{config:null,maskWrap:null,easeing:false,showing:false,visible:false,init:function(e){var o=this;o.config=i.merge(n,e);var o=this;if(!o.maskWrap){o.maskWrap=t(o.config.maskHTML);o.maskWrap.addClass(a+o.config.name);o.maskWrap.css({transition:"all "+o.config.duration/1e3+"s "+"ease;"});o.maskWrap.addClass(o.config.hideClass);o.maskWrap.css(o.config.maskStyle);o.maskWrap.css(o.config.hideStyle);o.maskWrap.css("z-index",o.config.zIndex);o.maskWrap.css(o.config.hideAfterStyle);o.maskWrap.append(o.config.content);o.config.stageWrap.append(o.maskWrap)}},show:function(){var i=this;if(i.easeing)return false;if(i.visible)return false;i.easeing=true;i.maskWrap.css(i.config.showAfterStyle);i.maskWrap.addClass(i.config.showClass);i.maskWrap.removeClass(i.config.hideClass);setTimeout(function(){if(!i.maskWrap||!i)return;i.maskWrap.css(i.config.showStyle);if(i.config.scrollToTop)t(window).scrollTop(0)},28);setTimeout(function(){i.config&&i.config.hideWrap&&t(i.config.hideWrap).hide();i.easeing=false},i.config.duration);i.visible=true;return true},hide:function(){var i=this;if(i.easeing)return false;if(!i.visible)return false;i.easeing=true;if(i.config.scrollToTop)t(window).scrollTop(0);i.config.hideWrap&&t(i.config.hideWrap).show();i.maskWrap.removeClass(i.config.showClass);i.maskWrap.addClass(i.config.hideClass);i.maskWrap.css(i.config.hideStyle);setTimeout(function(){if(!i.maskWrap||!i)return;i.maskWrap.css(i.config.hideAfterStyle);i.easeing=false},i.config.duration);i.visible=false;return true},destroy:function(){var i=this;i.hide();i.maskWrap&&i.maskWrap.remove();i.maskWrap=null;for(var e in this){this[e]=null}}});return o},{require:["node"]});