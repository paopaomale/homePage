define("mui/zebra-task-main/server",function(a,t,e){var i=a("mui/zebra-task-main/report");var o=i.report;var r=a("mui/zebra-task-main/util");function n(a,t){var e={api:a.api,v:a.v||"1.0",data:a.param||{},ecode:a.ecode||"0",type:"POST",isSec:a.isSec||"0",timeout:5e3};if(a.sessionOption){e.sessionOption=a.sessionOption}if(Ali.isWeb){var i=r.getParam("env");if(i=="pre"){lib.mtop.config.subDomain="wapa"}else if(i=="daily"){lib.mtop.config.subDomain="waptest"}e.type="GET"}lib.mtop.request(e,function(a){t&&t(a)},function(e){t&&t(e);o("/uaward.20150922.7","","api="+a.api+"&code="+e.code,"H46956156")});o("/uaward.20150922.8","","api="+a.api,"H46956157")}var s={getMission:function l(a,t){var e=a;var i=t;if(typeof e=="function"){i=e;e={}}n({api:"mtop.tmw.mcity.init",param:{givefundInfo:typeof e.givefundInfo=="undefined"?true:e.givefundInfo,opageNo:e.opageNo||0,opageSize:e.opageSize||5,spageNo:e.spageNo||0,spageSize:e.spageSize||spageSize,asac:"D8A98JHOOGZ04IZM2FH3",activityOPageNo:e.activityOPageNo||0,activityOSize:e.activityOSize||0,templateId:e.templateId||2},isSec:"1",ecode:"0"},i)},assign:function u(a,t){n({api:a.api||"mtop.tmw.mcity.assign",param:a},t)},openMission:function m(a){n({api:"mtop.lotus.FundDefendService.joinFundDefend",sessionOption:"AutoLoginAndManualLogin"},a)},reportSecurity:function p(a,t){n({api:"mtop.tmw.mcity.reportsig",param:a},t)}};s.getDataByMtop=n;e.exports=s});