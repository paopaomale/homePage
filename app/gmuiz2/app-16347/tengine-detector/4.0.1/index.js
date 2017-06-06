define("mui/tengine-detector/index",function(e,a,o){"use strict";e("mui/babel-polyfill/");var t=[{name:"$detector_type",defaultValue:"pc",greedyValue:["android"],ruleValue:{" pad":"tablet","-pad":"tablet",tablet:"tablet",ipad:"tablet",kindle:"tablet",armbjs:"tablet","hp slatebook 10":"tablet","slate 21":"tablet",transformer:"tablet",playbook:"tablet","rim tablet":"tablet",htc_flyer_p512:"tablet","tc flyer":"tablet",xoom:"tablet",ideatab:"tablet",ideapad:"tablet",mediapad:"tablet",touchpad:"tablet","hm note 1w":"tablet",sholest:"tablet","silk-accelerated":"tablet","-pd/":"tablet","gt-n5100":"tablet","gt-n5110":"tablet","gt-n8000":"tablet","gt-n8010":"tablet","gt-p3100":"tablet","gt-p6800":"tablet","gt-p5110":"tablet","gt-p5210":"tablet","lenovo a3000":"tablet","lg-v500":"tablet","nexus 7":"tablet","p98 3g":"tablet",ramosi9:"tablet","sm-p600":"tablet","sm-p601":"tablet","sm-t110":"tablet","sm-t210":"tablet","sm-t211":"tablet","sm-t310":"tablet","sm-t311":"tablet","sm-t320":"tablet","sm-t321":"tablet","sm-t520":"tablet","sm-t700":"tablet","sm-t705":"tablet","sm-t800":"tablet","sm-t805":"tablet",v703:"tablet",v719:"tablet",v819:"tablet",v919:"tablet","x98 3g":"tablet","venue 7":"tablet",android:"phone","mobile ":"phone","aliapp(":"phone",tizen:"phone",iphone:"phone",iph:"phone",ipod:"phone",symbianos:"phone","windows ce":"phone","windows phone":"phone",meizu:"phone",_td:"phone",cucc:"phone",series60:"phone","windows mobile":"phone","opera mobi":"phone","opera mini":"phone",blackberry:"phone"," bb":"phone",sonyericsson:"phone",moto:"phone",j2me:"phone","samsung sm-z130h":"phone"}},{name:"$detector_app",defaultValue:"NA",greedyValue:["aliapp"],ruleValue:{weibo:"weibo","aliapp(dingtalk":"dingtalk","aliapp(lw":"lw","aliapp(et":"et","aliapp(dd":"dd","aliapp(tb":"tb","aliapp(tb-pd":"tb-pd","aliapp(tm":"tm","aliapp(tm-pd":"tm-pd","aliapp(am":"am","aliapp(ae":"ae","aliapp(lx":"lx","aliapp(ju":"ju","aliapp(ap":"ap","aliapp(fm":"fm","aliapp(wx":"wx","aliapp(xm":"xm","aliapp(qn":"qn","aliapp(cp":"cp","aliapp(ea":"ea","aliapp(1688":"1688"}},{name:"$detector_browser",defaultValue:"NA",greedyValue:["trident","ipad","safari","version","chrome"],ruleValue:{edge:"edge",trident:"ie",iemobile:"ie_mobile","ie ":"ie","rv ":"ie","rv:":"ie"," uc":"uc",theworld:"TheWorld",ucbrowser:"uc",dolfin:"Dolfin",opera:"opera",oupeng:"opera",firefox:"ff",micromessenger:"wechat",taobrowser:"TaoBrowser",mqqbrowser:"MQQBrowser",baiduhd:"BaiduHD",maxthon:"maxthon",yabrowser:"yandex",mxbrowser:"maxthon",flyflow:"FlyFlow",windvane:"WindVane",qt:"Qt"," ubrowser":"UBrowser",phantomjs:"PhantomJS",baidubrowser:"baidu"," lebrowser":"LeBrowser",miuibrowser:"MiuiBrowser",bidubrowser:"BIDUBrowser",nokiabrowser:"nokia",blackberry:"blackberry",rim:"blackberry"," bb10 ":"blackberry","se ":"sougou",sogoumse:"sougou",sogoumobilebrowser:"sougou","360 aphone browser":"360","360se":"360","360ee":"360","360chrome":"360","360browser":"360",lbbrowser:"liebao",liebaofast:"liebao",liebao:"liebao",qqbrowser:"QQBrowser",tencenttraveler:"tt",greenbrowser:"green",chrome:"chrome","crios/":"chrome"," android ":"android_webkit"," android/":"android_webkit",";android ":"android_webkit","ipad os":"ipad_safari","cpu os":"safari","cpu iphone os":"safari",version:"safari"}},{name:"$detector_engine",defaultValue:"NA",greedyValue:["gecko"],ruleValue:{"rv ":"trident","rv:":"trident","msie ":"trident"," ie ":"trident","(ie ":"trident",applewebkit:"webkit","gecko/":"gecko",presto:"presto",androidwebkit:"androidwebkit",coolpadwebkit:"coolpadwebkit"," u2/":"u2"," u3/":"u3",alireactnative:"reactnative",weex:"weex"}},{name:"$detector_os",defaultValue:"NA",greedyValue:["mac"],ruleValue:{"windows nt":"windows",win32:"windows","windows ce":"wp",xblwp:"wp",zunewp:"wp","windows phone os":"wp","windows phone":"wp","windows nt 6.2; arm;":"wp","windows nt 6.3; arm;":"wp",xblwp7:"wp",zunewp7:"wp",windows:"windows","macintosh; intel mac os x":"macos","macintosh; u; intel mac os x;":"macos","macintosh; amd mac os x":"macos","android ":"android",";android":"android"," android/":"android"," adr":"android","iphone os":"ios","cpu os":"ios","iph os":"ios",ipod:"ios"," ios ":"ios",webos:"webos",aliyunos:"yunos",symbian:"symbian","cros i686 ":"chromeos",hpwos:"webos",linux:"linux"," x11":"linux",blackberry:"blackberry",rim:"blackberry",bb10:"blackberry",nuhk:"robot","googlebot/":"robot","googlebot-image":"robot",yammybot:"robot",openbot:"robot",slurp:"robot",msnbot:"robot","ask jeeves/teoma":"robot",ia_archiver:"robot",baiduspider:"robot","bingbot/":"robot"}},{name:"$detector_device",defaultValue:"NA",greedyValue:["micromessenger"],ruleValue:{"intel mac os x":"mac",samsung:"samsung","gt-":"samsung","sgh-":"samsung","sm-":"samsung","sch-":"samsung"," mi-":"xiaomi"," mi ":"xiaomi"," mt":"sonyericsson"," hm":"hongmi",aliyunos:"aliyunos"," mx1":"meizu"," mx2":"meizu"," mx3":"meizu"," mx4":"meizu"," m040":"meizu"," m030":"meizu",meizu:"meizu",huawei:"huawei","zte-":"zte","-zte":"zte",zteu:"zte"," zte ":"zte",lenovo:"lenovo",coolpad:"coolpad",silk:"amazon",vivo:"vivo",oppo:"oppo",konka:"konka",iphone:"iphone",ipod:"iphone",iph:"iphone",ipad:"ipad",nokia:"nokia",noain:"noain","nexus ":"nexus",htc:"htc"," lg":"lg",blackberry:"blackberry",rim:"blackberry"," bb10 ":"blackberry","dell ":"dell",motorola:"motorola",droidx:"motorola","droid bionic":"motorola",xoom:"motorola",sonyst:"sony",sonylt:"sony",sonyericsson:"sony",smartisan:"smartisan"}}];var r={device:{name:"$detector_device",type:"$detector_type"},os:{name:"$detector_os",version:"$detector_os_version"},browser:{name:"$detector_browser",version:"$detector_browser_version"},engine:{name:"$detector_engine",version:"$detector_engine_version"},app:{name:"$detector_app",version:"$detector_app_version"}};a.detect=function(e){e=e||{};e.ua=e.ua||"";var a=e.ua.toLowerCase();var o={};for(var r=0;r<t.length;r++){var i=t[r].name.replace("$detector_","");var n=o[i]={};var l;var s=l=-1;var b="";for(var p=0;p<t[r].greedyValue.length;p++){var d=t[r].greedyValue[p];s=a.indexOf(d);if(s!==-1){if(l===-1){l=s;b=d}else if(l>s){l=s;b=d}}}var m;var u=m=-1;var c="";var w="";var h="";for(var g in t[r].ruleValue){if(t[r].greedyValue.indexOf(g)<0){u=a.lastIndexOf(g);if(m<=u&&u>=0){if(m===u&&h.length>g.length){}else{m=u;h=g;c=t[r].ruleValue[g];w=g}}}}var v=0;if(l>-1){if(m>-1){v=m;n.name=c;n.match=w}else{v=l;n.name=t[r].ruleValue[b]||b;n.match=b}}else{v=m;n.name=c;n.match=w}if(i!=="type"&&n.name){var y=a.substr(v+n.match.length);var f=/^[\/|\s]*?(\d+[\w|\.|_|-]+)[)|;|\s]*/;var k=f.exec(y);if(k){n.version=k[1].replace(/_/g,".")}else{n.version=""}}if(!n.name){n.name=t[r].defaultValue;n.version=""}}o.device.type=o.type.name;delete o.device.version;delete o.browser.match;delete o.os.match;delete o.app.match;delete o.engine.match;delete o.device.match;delete o.type.match;return o};o.exports=a.detect({ua:navigator.userAgent})});