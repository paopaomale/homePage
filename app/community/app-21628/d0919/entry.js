/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/6d8b190c3cd24eee8f7ab23d2bdf5e9c", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __webpack_require__(1)

	  __webpack_require__(2)
	  __webpack_require__(3)
	  __webpack_require__(6)
	  __webpack_require__(8)
	  __webpack_require__(9)
	  __webpack_require__(10)
	  __webpack_require__(11)
	  __webpack_require__(12)
	  __webpack_require__(13)
	  __webpack_require__(14)
	  __webpack_require__(15)
	  __webpack_require__(16)
	  __webpack_require__(17)
	  __webpack_require__(18)
	  __webpack_require__(19)
	  __webpack_require__(20)
	  __webpack_require__(21)
	  __webpack_require__(22)
	  __webpack_require__(23)
	  __webpack_require__(24)
	  __webpack_require__(27)
	  __webpack_require__(28)
	  __webpack_require__(29)
	  __webpack_require__(4)

	  __webpack_require__(30)
	  __webpack_require__(31)
	  __weex_module__.exports = __webpack_require__(32)

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "list",
	  "events": {
	    "loadmore": "loadMore",
	    "setelite": "setElite",
	    "settop": "setTop",
	    "inthetop": "inTheTop",
	    "removecard": "removeCard",
	    "reloaddata": "reloadData"
	  },
	  "attr": {
	    "loadmoreretry": function () {return this.loadmoreretry},
	    "loadmoreoffset": "300"
	  },
	  "children": [
	    {
	      "type": "cell",
	      "append": "tree",
	      "repeat": function () {return this.feedList},
	      "attr": {
	        "trackBy": "id",
	        "scope": function () {return this.tag}
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {
	            "index": function () {return this.index}
	          },
	          "repeat": function () {return this.subList},
	          "style": {
	            "width": 750
	          },
	          "events": {
	            "appear": "onAppear"
	          },
	          "children": [
	            {
	              "type": "community-answer-header",
	              "shown": function () {return this.tag==='answerHeader'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-hot-header",
	              "shown": function () {return this.tag==='questionSeparator'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "cycle-buyshare",
	              "shown": function () {return this.tag==='communityImageApp'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-report",
	              "id": "onlyOneQuestionReport",
	              "shown": function () {return this.tag==='questionReport'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-interact",
	              "shown": function () {return this.tag==='interact'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-anwser-interactive",
	              "shown": function () {return this.tag==='answerInteract'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-single-img",
	              "shown": function () {return this.tag==='image'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-icon-askquestion",
	              "shown": function () {return this.tag==='askThisQuestion'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-question",
	              "shown": function () {return this.tag==='hotQuestion'},
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid},
	                "border": function () {return this.style.borderBottom}
	              }
	            },
	            {
	              "type": "community-notice",
	              "shown": function () {return this.tag==='communityNotice'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-recommend",
	              "shown": function () {return this.tag==='communityIndividuationCircle'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-ramble-circle",
	              "shown": function () {return this.tag==='communityRambleCircle'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-operation-card",
	              "shown": function () {return this.tag==='communityPicAd'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-separator",
	              "shown": function () {return this.tag==='communitySeparator'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-banner",
	              "shown": function () {return this.tag==='communityBanner'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-stroll-text",
	              "shown": function () {return this.tag==='communityStroll'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-editor-rec",
	              "shown": function () {return this.tag==='communityEditorRec'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-icon-text",
	              "shown": function () {return this.tag==='iconText'},
	              "id": function () {return this.id},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "community-header",
	              "shown": function () {return this.tag==='communityHeader'},
	              "id": function () {return this.id},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "actions": function () {return this.actions},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "community-grid",
	              "shown": function () {return this.tag==='gridsMultimedia'},
	              "id": function () {return this.id},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "margin": function () {return this.style.marginLeft},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "community-share-item",
	              "shown": function () {return this.tag==='communityItemShare'},
	              "id": function () {return this.id},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "margin": function () {return this.style.marginLeft},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "community-interactive-source",
	              "shown": function () {return this.tag==='communityInteractSource'},
	              "style": {
	                "width": 750
	              },
	              "id": function () {return this.id},
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "community-interactive-time",
	              "shown": function () {return this.tag==='communityInteractTime'},
	              "style": {
	                "width": 750
	              },
	              "id": function () {return this.id},
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "richtext",
	              "shown": function () {return this.tag==='richText'},
	              "id": function () {return this.id},
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "pagename": function () {return this.pgName}
	              },
	              "style": {
	                "width": 750
	              }
	            },
	            {
	              "type": "separator",
	              "shown": function () {return this.tag==='separator'},
	              "id": function () {return this.id},
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "pagename": function () {return this.pgName}
	              },
	              "style": {
	                "width": 750
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "log": {
	    "line": 10000,
	    "width": 750
	  }
	})
	})
	;__weex_bootstrap__("@weex-component/6d8b190c3cd24eee8f7ab23d2bdf5e9c", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/cycle-buyshare", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
		var event = __weex_require__('@weex-module/event');
		var userTrack = __weex_require__('@weex-module/userTrack'); 
		

		__weex_module__.exports = {
			data: function () {return {
				title:""
			}},
			created: function() {
				var vm = this;
				var utExpose = vm.fields.utExposureCommunityImageApp;
				vm.title = vm.fields.title
				if(!utExpose){
					return
				}
					// vm.title = JSON.stringify(utExpose)
				
				vm.$userTrack.apply(vm,['expose',vm.pagename+"-Show-"+ utExpose.name,'',utExpose.args])
				// userTrack.commit('expose',vm.pagename+"-Show-"+ utExpose.name,'',utExpose.args);
			},
			methods: {
				goto:function(){
					var vm = this;
					var utClick = vm.fields.utClickCommunityImageApp;
					if(!utClick){
						event.openURL(this.fields.link);
						return
					}
					vm.$userTrack.apply(vm,['click',vm.pagename,utClick.name,utClick.args]);
					// userTrack.commit('click',vm.pagename,utClick.name,utClick.args)
					event.openURL(this.fields.link);
				}
			}
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "buyshare-container"
	  ],
	  "events": {
	    "click": "goto"
	  },
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "buyshare_text"
	      ],
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "buyshare_wrap"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": function () {return [this.$index==4?'buyshare_con--last':'buyshare_con']},
	          "repeat": function () {return this.fields.imageAppPics},
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "buyshare_img"
	              ],
	              "attr": {
	                "src": function () {return this.pic}
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "buyshare_con___mask"
	              ],
	              "shown": function () {return this.tips}
	            },
	            {
	              "type": "div",
	              "classList": [
	                "buyshare_info_wrap"
	              ],
	              "shown": function () {return this.tips},
	              "children": [
	                {
	                  "type": "text",
	                  "classList": function () {return ['buyshare_info', this.tips.length==(this.$index+1)?'buyshare_info--last':'']},
	                  "repeat": {
	                    "expression": function () {return this.tips},
	                    "value": "val"
	                  },
	                  "attr": {
	                    "value": function () {return this.val}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "buyshare-container": {
	    "width": 750,
	    "height": 246,
	    "paddingLeft": 24,
	    "paddingTop": 23,
	    "paddingBottom": 18,
	    "backgroundColor": "#FFFFFF",
	    "alignItems": "flex-start",
	    "borderBottomWidth": 1,
	    "borderBottomColor": "#eeeeee",
	    "borderBottomStyle": "solid"
	  },
	  "buyshare_text": {
	    "fontSize": 32,
	    "color": "#051b28",
	    "marginBottom": 29
	  },
	  "buyshare_wrap": {
	    "width": 727,
	    "height": 135.6,
	    "flexDirection": "row"
	  },
	  "buyshare_con": {
	    "marginRight": 6,
	    "height": 135.6,
	    "width": 135.6,
	    "position": "relative"
	  },
	  "buyshare_con--last": {
	    "marginRight": 0,
	    "height": 135.6,
	    "width": 135.6,
	    "position": "relative"
	  },
	  "buyshare_img": {
	    "height": 135.6,
	    "width": 135.6
	  },
	  "buyshare_con___mask": {
	    "height": 135.6,
	    "width": 135.6,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "backgroundColor": "#000000",
	    "opacity": 0.6
	  },
	  "buyshare_info_wrap": {
	    "position": "absolute",
	    "height": 135.6,
	    "width": 135.6,
	    "top": 0,
	    "left": 0,
	    "justifyContent": "center"
	  },
	  "buyshare_info": {
	    "fontSize": 24,
	    "color": "#ffffff",
	    "textAlign": "center",
	    "width": 135.6,
	    "height": 24,
	    "marginBottom": 10
	  },
	  "buyshare_info--last": {
	    "marginBottom": 0
	  }
	})
	})

/***/ },
/* 2 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-answer-button", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    __weex_module__.exports = {
	        data:function () {return {
	            info:{
	                text:"",
	                link:"",
	                state:"normal"
	            },
	            iconA:"https://gw.alicdn.com/tps/TB1Ji3lLXXXXXXYXXXXXXXXXXXX-64-64.png",
	            icon:"https://gw.alicdn.com/tps/TB14AT9LXXXXXX.XFXXXXXXXXXX-64-64.png"
	        }},
	        created:function(){
	            var vm = this
	            if(vm.info.state === "actived"){
	                vm.icon = vm.iconA
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "flex",
	    "fixed"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "icon"
	      ],
	      "attr": {
	        "src": function () {return this.icon}
	      }
	    },
	    {
	      "type": "text",
	      "classList": function () {return ['text', this.info.state]},
	      "attr": {
	        "value": function () {return this.info.text}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "flex": {
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "main": {
	    "paddingBottom": 24,
	    "paddingLeft": 24,
	    "paddingRight": 24,
	    "paddingTop": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "fixed": {
	    "position": "fixed",
	    "width": 750,
	    "height": 99,
	    "backgroundColor": "#ffffff",
	    "bottom": 0,
	    "left": 0,
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "rgba(0,0,0,0.2)"
	  },
	  "text": {
	    "fontSize": 34,
	    "color": "#ff5000",
	    "textAlign": "center"
	  },
	  "icon": {
	    "width": 42,
	    "height": 42
	  }
	})
	})

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/community-anwser-interactive", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(4);

	;
	    var util = __webpack_require__(5)
	    var MODAL = __weex_require__('@weex-module/modal');
	    __weex_module__.exports = {
	        data:function () {return {
	            buttonB:{},
	            fields:{
	                likeNum:"0",
	                isLike:""
	            },
	            buttonA:{},
	            button:{
	                num: "11232",
	                unit:""
	            },
	            rightButtons: [],
	            leftButtons: []
	        }},
	        created:function(){
	            var vm = this
	            var fields = vm.fields || {}
	            /* 有用按钮 */
	            var numA = fields.commentNum
	            /**
	             * 评论埋点
	             */
	            var utClickComment = vm.fields.utClickComment
	            var utDataA = utClickComment && utClickComment.name ? ['click',vm.pagename,utClickComment.name,utClickComment.args] : []
	            var btComment = {
	                thisStatus: 'canDo',
	                canDo: {
	                    status:'canDo',
	                    type: "url",
	                    zeroText: "评论",
	                    iconSrc: "https://gw.alicdn.com/tps/TB1QGOZLpXXXXbmXVXXXXXXXXXX-42-42.png",
	                    num: numA,
	                    unit: "",
	                    action: {
	                        type: "url",
	                        opts: {
	                            url: fields.commentTargetUrl || fields.targetUrl || ""
	                        }
	                    },
	                    btUtData:{
	                        click: utDataA
	                    }
	                }
	            }
	            vm.buttonA = btComment

	            /* 有用按钮 */
	            var numB = fields.likeNum
	            var _sataus = fields.isLike === "true" ? "actioned" : "action"
	            /**
	             * 有用埋点
	             */
	            var utClickLike = vm.fields.utClickLike
	            var utDislikeClick = vm.fields.utClickUnlike
	            var utDataB1 = utClickLike && utClickLike.name ? ['click',vm.pagename,utClickLike.name,utClickLike.args] : []
	            var utDataB2 = utDislikeClick && utDislikeClick.name ? ['click',vm.pagename,utDislikeClick.name,utDislikeClick.args] : []

	            // vm.buttonB = buttonB

	            var isLike     = fields.isLike === "true" ? !0 : !1
	            var apiName    = "mtop.taobao.bala.like"
	            var apiVersion = "1.0"
	            var answerId   = fields.answerId

	            var likeNum    = +fields.likeNum
	            var buttonLike = {
	                thisStatus: isLike ? "done" : "canDo",
	                canDo:{
	                    status:'canDo',
	                    type: "mtop",
	                    iconSrc: "https://gw.alicdn.com/tps/TB1vxQqLXXXXXbBXpXXXXXXXXXX-42-42.png",
	                    zeroText: "有用",
	                    num:'' + (isLike ? likeNum - 1 : likeNum),
	                    unit: "",
	                    action: {
	                        opts: {
	                            apiName: apiName,
	                            apiVersion: apiVersion,
	                            needLogin : !0,
	                            param:{
	                                feedId: answerId,
	                                action: "1"
	                            },
	                            callback:function(res,buttonVm){
	                                buttonVm.setStatus('done')
	                            }
	                        }
	                    },
	                    btUtData:{
	                        click: utDataB1
	                    }
	                },
	                done:{
	                    status:'done',
	                    type: "mtop",
	                    iconSrc: "https://gw.alicdn.com/tps/TB1UmsfLXXXXXaNXVXXXXXXXXXX-42-42.png",
	                    zeroText: "有用",
	                    num: '' + (isLike ?  likeNum : likeNum + 1),
	                    unit: "",
	                    action: {
	                        opts: {
	                            apiName: apiName,
	                            apiVersion: apiVersion,
	                            needLogin : !0,
	                            param:{
	                                feedId: answerId,
	                                action: "-1"
	                            },
	                            callback:function(res,buttonVm){
	                                buttonVm.setStatus('canDo')
	                            }
	                        }
	                    },
	                    btUtData:{
	                        click: utDataB2
	                    }
	                }
	            }
	            vm.buttonB = buttonLike
	            
	            /**打赏按钮 */
	            var utClickReward = fields.utClickReward
	            var utDataC = utClickReward && utClickReward.name ? ['click',vm.pagename,utClickReward.name,utClickReward.args] : []
	           // '57306932'
	            var buttonReward = {
	                thisStatus: fields.isReward === "false" ? "canDo" : "done",
	                canDo:{
	                    status:'canDo',
	                    /** 
	                     * 点击的时候判断是否需要登陆再进行操作
	                     */
	                    needLogin: !0,
	                    type: "native",
	                    iconSrc: "https://gw.alicdn.com/tps/TB1Zur_NXXXXXayXVXXXXXXXXXX-64-64.png",
	                    zeroText: "打赏",
	                    num:'0',
	                    unit: "",
	                    action: {
	                        opts: {
	                            apiName: 'doReward',
	                            apiVersion: apiVersion,
	                            needLogin : !0,
	                            param:{
	                                answerId: answerId,
	                                receiverUserId: fields.userId,
	                                rewardMax: fields.rewardMax || 20
	                            },
	                            callback:function(res,buttonVm){
	                                // buttonVm.setStatus('done')
	                                if(res.success === "true"){
	                                    buttonVm.setStatus('done')
	                                    vm.$userTrack('click',vm.pagename,'RewardOK',{
	                                        "Answer_id":answerId
	                                    })
	                                    return;
	                                }
	                                if(res === "打赏成功"){
	                                    buttonVm.setStatus('done')
	                                    vm.$userTrack('click',vm.pagename,'RewardOK',{
	                                        "Answer_id":answerId
	                                    })
	                                }
	                                MODAL.toast({
	                                    message: res,
	                                    duration: 1
	                                })
	                            }
	                        }
	                    },
	                    btUtData:{
	                        click: utDataC
	                    }
	                },
	                done:{
	                    status:'done',
	                    needLogin: !0,
	                    type: "toast",
	                    iconSrc: "https://gw.alicdn.com/tps/TB1IEwuNXXXXXa6XXXXXXXXXXXX-42-42.png",
	                    zeroText: "已打赏",
	                    num:'0',
	                    unit: "",
	                    action: {
	                        opts: {'message': "亲，您已经打赏过啦~", 'duration': 1}
	                    },
	                    btUtData:{
	                        click: []
	                    }
	                }
	            }
	            vm.buttonC = fields.disableReward === 'false' ? buttonReward : !1
	            
	        },
	        methods:{
	            gotoDetail: function(e){
	                var vm = this
	                var click = vm.fields.utClick
	                if(click && click.name){
	                    vm.$userTrack('click',vm.pagename,click.name,click.args)
	                }
	                vm.$openURL(vm.fields.targetUrl)
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main",
	    "flex"
	  ],
	  "events": {
	    "click": "gotoDetail"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "left"
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "right",
	        "flex"
	      ],
	      "children": [
	        {
	          "type": "interact-button",
	          "shown": function () {return this.buttonC},
	          "style": {
	            "marginRight": 24
	          },
	          "attr": {
	            "button": function () {return this.buttonC}
	          }
	        },
	        {
	          "type": "interact-button",
	          "style": {
	            "marginRight": 24
	          },
	          "attr": {
	            "button": function () {return this.buttonA}
	          }
	        },
	        {
	          "type": "interact-button",
	          "style": {
	            "marginRight": 24
	          },
	          "attr": {
	            "button": function () {return this.buttonB}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "flex": {
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "main": {
	    "paddingBottom": 30,
	    "paddingLeft": 24,
	    "paddingTop": 28,
	    "backgroundColor": "#ffffff"
	  }
	})
	})

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/interact-button", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var util = __webpack_require__(5)
	    var USER = __weex_require__('@weex-module/user')
	    __weex_module__.exports = {
	        data:function () {return {
	            log:"",
	            iconSrc:"",
	            statusClass:"",
	            statusClassText:"",
	            btText:"",
	            button:{}
	        }},
	        created:function(){
	            var vm = this
	            var button = vm.button
	            console.log(button.thisStatus)
	            var thisStatus = button.thisStatus
	            vm.setStatus(thisStatus)
	        },
	        methods: {
	            setBtData: function(data){
	                this._btData = data || {}
	            },
	            getBtData: function(data){
	                return this._btData
	            },
	            setStatus: function(status){
	                var vm      = this
	                var _status = ""
	                switch(status){
	                    case 'canDo':
	                        _status = 'can-do'
	                        break;
	                    case 'canNot':
	                        _status = 'can-not'
	                        break;
	                    case 'done':
	                        _status = 'done'
	                        break;
	                    default:
	                        break;
	                }
	                var className  = _status
	                vm.statusClass = className
	                vm.statusClassText = className + '-text'

	                vm.setBtData(vm.button[status])
	                console.log(className,'className')
	                vm.rendData(!0)
	            },
	            /**
	             * @param {Boolen} rendNum 是否渲染数字，有一些需要callback之后才渲染数字的情况
	             */
	            rendData: function(rendNum){
	                var vm = this
	                var data = vm.getBtData()
	                console.log(data,'data.num')
	                vm.iconSrc = data.iconSrc
	                console.log(data.iconSrc,'iconSrc')
	                rendNum && vm.setNum(data.num,data.unit,data.zeroText)
	            },
	            /**
	             * @param {string} num
	             * @param {string} unit 
	             * @param {string} zeroText
	             */
	            setNum: function(num,unit,zeroText){
	                var vm = this
	                vm.btText = num === "0" ? (zeroText || '') : (util.fixNumber(num) + (unit || ''))
	            },
	            btClick: function(e){
	                var vm = this
	                var btData = vm.getBtData()
	                var needLogin = btData.needLogin
	                if(needLogin){
	                    USER.getUserInfo(function(res) { 
	                        console.log(res,'var type = btData.type')
	                        if(typeof res === 'string'){
	                           res = JSON.parse(res)
	                        }
	                        if(res.isLogin === 'true')return vm._fireClick(btData);
	                        USER.login(function(_res) { 
	                            if(typeof _res === 'string'){
	                                _res = JSON.parse(_res)
	                            }
	                            if(_res.status === 'success'){
	                                btData.action.opts.param && (btData.action.opts.param.receiverUserId = _res.info.userId)
	                                vm._fireClick(btData)
	                            }
	                        })
	                    })
	                }else{
	                    vm._fireClick(btData)
	                }
	                
	            },
	            _fireClick: function(btData){
	                var vm = this
	                var type = btData.type
	                vm._sendUtClick(btData)
	                switch(type){
	                    case 'mtop':
	                        vm._btSendMtop(btData)
	                        break;
	                    case 'url':
	                        vm._btOpenUrl(btData)
	                        break;
	                    case 'native':
	                        vm._btModule(btData)
	                        break;
	                    case 'toast':
	                        vm._btToast(btData)
	                    default:
	                        break;
	                }
	            },
	            _btToast: function(btData){
	                var modal = __weex_require__('@weex-module/modal');
	                modal.toast(btData.action.opts);
	            },
	            _btSendMtop: function(btData){
	                var vm = this
	                var opts = btData.action.opts
	                if(opts.apiName === "mtop.taobao.bala.like"){
	                    var systemSoundModule = __weex_require__('@weex-module/systemSound');
	                    systemSoundModule && systemSoundModule.play && systemSoundModule.play({"type":"like"});
	                }
	                
	                !vm.sending && vm.$sendMtop && vm.$sendMtop({
	                    'api' : opts.apiName,
	                    'v' : opts.apiVersion,
	                    'needLogin' : opts.needLogin,
	                    'ecode': opts.needLogin ? 1:0,
	                    'requestType': 'mtop',
	                    'param' : opts.param
	                },function(res){
	                    vm.sending = !1
	                    if (typeof res === 'string') { // 判断类型
	                       res = JSON.parse(res);
	                    }
	                    res.data && res.data.success === "true" && opts.callback && opts.callback.apply(vm,[res,vm])
	                })
	                return vm.sending = !0
	            },
	            _btModule: function(btData){
	                var vm = this
	                var opts = btData.action.opts
	                vm.log = opts.param + '  opts.apiName'
	                 vm.$call('TBONativeModule', opts.apiName, opts.param ,function(res){
	                    // vm.log = res
	                    opts.callback && opts.callback(res,vm)
	                 })
	            },
	            _btOpenUrl: function(btData){
	                var opts = btData.action.opts
	                this.$openURL(util.addParam(opts.url,opts.param))
	            },
	            _sendUtClick: function(btData){
	                var vm = this
	                var utArg = btData.btUtData.click
	                console.log(utArg,'click')
	                utArg && utArg.length > 0 && vm.$userTrack.apply(vm,utArg)
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return [this.statusClass, 'box']},
	  "events": {
	    "click": "btClick"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "flex"
	      ],
	      "style": {
	        "height": 38
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return this.iconSrc}
	          },
	          "classList": [
	            "icon"
	          ]
	        },
	        {
	          "type": "text",
	          "classList": function () {return [this.statusClassText, 'text']},
	          "attr": {
	            "value": function () {return this.btText}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "flex": {
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "box": {
	    "height": 38
	  },
	  "text": {
	    "fontSize": 20,
	    "marginRight": 6
	  },
	  "icon": {
	    "width": 28,
	    "height": 28,
	    "marginRight": 6,
	    "marginLeft": 6
	  },
	  "can-do": {
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#999999",
	    "minWidth": 102,
	    "borderRadius": 20
	  },
	  "can-do-text": {
	    "color": "#666666"
	  },
	  "can-not": {
	    "borderWidth": 0,
	    "minWidth": 1
	  },
	  "can-not-text": {
	    "color": "#999999"
	  },
	  "done": {
	    "borderWidth": 1,
	    "borderStyle": "solid",
	    "borderColor": "#ff5003",
	    "borderRadius": 20,
	    "minWidth": 102
	  },
	  "done-text": {
	    "color": "#ff5003"
	  }
	})
	})

/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * 通用函数
	 * @module lib/util
	 * @author Jin_C，钉钉@锦此
	 */
	module.exports = {
	    /**
	     * @dec 传入毫秒值，返回与当前时间的差距：x年前，x天前，x小时前，x分钟前，x秒前
	     * @param {String|Number} time 
	     */
	    createDate: function(time){
	        var oldDate = new Date(+time)
	        var oldTime = oldDate.getFullYear() + '-' + (oldDate.getMonth() + 1) + '-' + oldDate.getDate()

	        var date = (+new Date) - time
	        var _seconds = {
	            time: '刚刚',
	            interval: 1000
	        }
	        if(date <= 0)return _seconds;
	        var seconds = date/1000
	        var minutes = 0
	        var hours   = 0
	        var days    = 0
	        var years   = 0
	        minutes = seconds / 60
	        var _minutes = {
	            time:(minutes | 0) + '分钟前',
	            interval: 60000
	        }
	        hours = minutes / 60
	        var _hours = {
	            time: (hours | 0) + '小时前',
	            interval: 360000
	        }
	        days = (hours / 24) | 0

	        var _days = {
	            time: days > 10 ? oldTime : (days + '天前'),
	            interval: -1
	        }
	        years = days / 365
	        var _years = {
	            time: (years | 0) + '年前',
	            interval: -1
	        }
	        var _ary = [_years,_days,_hours,_minutes,_seconds]
	        var ary  = [years,days,hours,minutes,seconds]
	        var lock = !1
	        var rz   = {
	            time:"",
	            interval: -1
	        }
	        ary.forEach(function(v,i){
	            if(lock)return;
	            if(v >= 1){
	                lock = !0
	                rz = _ary[i]
	            }
	        })
	        ary = _ary = null
	        return rz
	    },
	    addParam: function addParam(url,param){
	        if(!url)return;
	        var add = '&'
	        var paramNames = Object.keys(param || {})
	        if(paramNames.length === 0)return url;
	        var params = encodeURI(paramNames.map(function(name){
	           return name + '=' + param[name] 
	        }).join(add))
	        var hash
	        url = url.replace(/.*?(\#.*)/,function(m,a){
	                hash = a
	                return m
	            })
	           .replace(/(\#.*)/,'')
	        if(url.indexOf('?') === -1){
	            add = '?'
	        }
	        // console.log(url + add  + params + (hash||''))
	        return url + add  + params + (hash||'')
	    },
	    fetch: function(param){
	        var vm = this
	        if(typeof window !== 'undefined' && window.location && window.location.href.indexOf('mock=true')>-1){
	           return success(this.mock || {});
	        } 
	        if(!vm.$sendMtop)return success(this.mock || {});
	        vm.$sendMtop({
	            'api' : param.apiName,
	            'v' : param.apiVersion,
	            'needLogin' : param.needLogin,
	            'ecode': param.needLogin?1:0,
	            'requestType': 'mtop',
	            'param' : param
	          },function(ret){
	            success.call(vm,ret)
	          })
	    },
	    fixNumber: function(num){
	        if(!num)return "0";
	        if(!num.split)return "0";
	        var ary = num.split('')
	        if(ary.length <= 4)return num;
	        var outFirst = ary.splice(-4)[0]
	        if(outFirst === '0'){
	        ary.push('万')
	            return ary.join('')
	        }
	        ;[].push.apply(ary,['.',outFirst,'万'])
	        return ary.join('')
	    }
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/community-answer-header", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var util = __webpack_require__(5)
	    var community = __webpack_require__(7)
	    __weex_module__.exports = {
	        data:function () {return {
	            log:"",
	           fields:{
	               icons:[],
	               logo:"",
	               nick:""
	           },
	           date: "刚刚"
	        }},
	        created:function(){
	            var vm = this
	            /**
	             * 曝光埋点
	             */
	            var expose = vm.fields.utExposureAnswerHeader
	            if(expose && expose.name){
	                vm.$userTrack('expose',vm.pagename+"-Show-"+ expose.name,'',expose.args)
	            }

	            var timestamp = vm.fields.timestamp
	            var date     = util.createDate(timestamp)
	            vm.interval  = date.interval
	            vm.date      = date.time
	            vm.interval > 0 && vm.setDate(timestamp)
	        },
	        methods: {
	            setDate: function(timestamp){
	                community.setDate(this,timestamp)
	            },
	            gotoDetails: function(e){
	                var vm = this
	                vm.$openURL(vm.fields.targetUrl)
	                /**
	                 * 详情埋点
	                 */
	                var click = vm.fields.utClickAnswerHeader
	                if(click && click.name){
	                    vm.$userTrack('click',vm.pagename,click.name,click.args)
	                }
	            },
	            gotoAccount: function(e){
	                var vm = this
	                /**
	                 * 头像埋点
	                 */
	                var click = vm.fields.utClickButtonAccount
	                if(click && click.name){
	                    vm.$userTrack('click',vm.pagename,click.name,click.args)
	                }
	                vm.$openURL(vm.fields.accountUrl)
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "events": {
	    "click": "gotoDetails"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "account-box"
	      ],
	      "events": {
	        "click": "gotoAccount"
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "account"
	          ],
	          "attr": {
	            "src": function () {return this.fields.logo}
	          },
	          "events": {
	            "click": "gotoAccount"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "center"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "nick-box"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "nick"
	              ],
	              "events": {
	                "click": "gotoAccount"
	              },
	              "attr": {
	                "value": function () {return this.fields.nick}
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "label-box",
	                "flex"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "style": {
	                    "width": function () {return this.v.width},
	                    "height": function () {return this.v.height}
	                  },
	                  "events": {
	                    "click": "gotoAccount"
	                  },
	                  "repeat": {
	                    "expression": function () {return this.fields.icons},
	                    "value": "v"
	                  },
	                  "shown": function () {return this.v.path},
	                  "attr": {
	                    "src": function () {return this.v.path}
	                  },
	                  "classList": [
	                    "label"
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "flex"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "date"
	              ],
	              "events": {
	                "click": "gotoAccount"
	              },
	              "attr": {
	                "value": function () {return this.date}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main": {
	    "padding": 24,
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center",
	    "backgroundColor": "#ffffff",
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "#eeeeee"
	  },
	  "account-box": {
	    "marginRight": 14
	  },
	  "account": {
	    "width": 64,
	    "height": 64,
	    "borderRadius": 32,
	    "overflow": "hidden"
	  },
	  "center": {
	    "flex": 1
	  },
	  "label-box": {
	    "flex": 1
	  },
	  "nick-box": {
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "marginBottom": 4
	  },
	  "nick": {
	    "marginRight": 20,
	    "color": "#333333"
	  },
	  "date": {
	    "fontSize": 24,
	    "color": "#999999",
	    "marginTop": 6,
	    "marginRight": 20
	  },
	  "right-more": {
	    "flex": 1,
	    "display": "flex",
	    "justifyContent": "flex-end",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "arrow": {
	    "width": 42,
	    "height": 42
	  },
	  "label": {
	    "width": 48,
	    "height": 28
	  },
	  "flex": {
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "null": {
	    "flex": 1
	  }
	})
	})

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * 跟业务耦合的函数，this都指向调用组件的this，需要通过call、apply、bind绑定
	 * @module lib/community
	 * @author Jin_C，钉钉@锦此
	 */
	var util = __webpack_require__(5)
	module.exports = {
	        setDate: function(vm,timestamp){
	            vm._timer = setInterval(function(){
	                var date     = util.createDate(timestamp)
	                var interval = date.interval
	                vm.date      = date.time
	                console.log(vm.interval,interval,vm.interval === interval)
	                /**
	                 * 小于0的话就一定变动了，如果变动的话，就清除定时器
	                 */
	                if(interval !== vm.interval){
	                    clearInterval(vm._timer)
	                    interval > 0 && vm.setDate(timestamp)
	                }
	            },vm.interval)
	        },
	        _utExpose: function(utName){
	            var vm = this
	            var expose = vm.utData.expose[utName]
	            var args = {}
	            var _args = vm.utData._args
	            expose.args.forEach(function(name){
	                args[name] = _args[name]
	            })
	            vm.$userTrack.apply(vm,['expose',vm.pagename+"_Show-"+ utName,'',args])
	            console.log(['expose',vm.pagename+"_Show-"+ utName,'',args])
	        },
	        _utClick: function(utName){
	            var vm = this
	            var click = vm.utData.click[utName]
	            var args = {}
	            var _args = vm.utData._args
	            click.args.forEach(function(name){
	                args[name] = _args[name]
	            })
	            vm.$userTrack.apply(vm,['click',vm.pagename,utName,args])
	            // console.log(['click',vm.pagename,utName,args])
	        }
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/community-hot-header", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var util = __webpack_require__(5)
	    // var Tracker = require('./tracker.js')
	    var community = __webpack_require__(7)
	    var navigator = __weex_require__('@weex-module/navigator')
	    __weex_module__.exports = {
	        data:function () {return {
	            pagename:"",
	            iconWidth:"44",
	            iconHeight:"44",
	            fields:{
	                icon:{
	                    path:""
	                }
	            },
	            spm:"",
	            utData:{
	                _args:{
	                    "spm":""
	                },
	                click:{
	                    "More": {
	                        args:["spm"]
	                    }
	                }
	            }
	        }},
	        created:function(){
	            var vm = this
	            vm.moreLink = vm.fields.moreLink
	            vm._initUtArgs()
	            if(vm.fields.icon){
	                vm.iconWidth = vm.fields.icon.width || vm.iconWidth
	                vm.iconHeight = vm.fields.icon.height || vm.iconHeight
	            }
	        },
	        
	        methods:{
	            /**
	             * 跟业务耦合
	            */
	            _initUtArgs: function(){
	                var vm = this
	                /* cardType spm c位 */
	                vm.utData._args = {
	                    "spm": vm.spm + '.' + vm.fields.cardType + '.0'
	                }
	            },
	            gotoMore: function(){
	                var vm = this
	                var urlParam = {
	                    spm: vm.utData._args["spm"]
	                }
	                var spmUrl = util.addParam(vm.moreLink,urlParam)
	                community._utClick.call(vm,"More")
	                vm.$openURL(spmUrl);
	                // console.log(spmUrl)
	                // navigator.push({url:spmUrl}, function(e){
	                //     console.log(e);
	                // })
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main",
	    "flex"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "icon"
	      ],
	      "style": {
	        "width": function () {return (this.iconWidth) + 'px'},
	        "height": function () {return (this.iconHeight) + 'px'}
	      },
	      "attr": {
	        "src": function () {return this.fields.icon.path}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "title"
	      ],
	      "attr": {
	        "value": function () {return this.fields.text}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "action",
	        "flex"
	      ],
	      "events": {
	        "click": function ($event) {this.gotoMore('More',$event)}
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "more"
	          ],
	          "attr": {
	            "value": "更多"
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "arrow"
	          ],
	          "attr": {
	            "src": "https://gw.alicdn.com/tps/TB1k4HdLpXXXXb7XpXXXXXXXXXX-48-48.png"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "flex": {
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "main": {
	    "paddingLeft": 24,
	    "paddingRight": 24,
	    "paddingTop": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "icon": {
	    "marginRight": 16
	  },
	  "arrow": {
	    "width": 32,
	    "height": 32
	  },
	  "title": {
	    "flex": 1,
	    "fontSize": 32
	  },
	  "more": {
	    "color": "#999999",
	    "fontSize": 28
	  }
	})
	})

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/community-question", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var util = __webpack_require__(5)
	    var community = __webpack_require__(7)
	    __weex_module__.exports = {
	        data:function () {return {
	            pagename:"",
	            k:1,
	            fields:{},
	            richTextInfos:[],
	            styles:{
	                borderBottom:"0"
	            },
	            utData:{
	                _args:{
	                    "feed_id":"",
	                    "spm":""
	                },
	                expose: {
	                    "HotAskCard":{
	                        args:["feed_id"]
	                    }
	                },
	                click:{
	                    "HotAskCard": {
	                        args:["spm","feed_id"]
	                    }
	                }
	            }
	        }},
	        created: function(isReload){
	            var vm = this
	            var richTextInfos = []
	            var _data = vm.fields
	            var icons = _data.icons || []
	            // console.log(vm.border,"ssssss")
	            vm.borderBottom =  vm.border  ? (+vm.border)*2 : 0;
	            ;[].push.apply(richTextInfos,icons.map(function(v){
	                return {
	                    path:v.path,
	                    width:"18",
	                    height:"18",
	                    desc: "elite",
	                    type: "pic"
	                }
	            }));
	            richTextInfos.push({
	                type: "text",
	                bold: "true",
	                text: _data.title,
	                color: "#051b28",
	                fontSize: "17"
	            });
	            // console.log(richTextInfos)
	            vm.richTextInfos = richTextInfos
	            vm._initUtArgs()
	            vm.fields.summary = vm.fields.summary
	            community._utExpose.call(vm,"HotAskCard")
	            console.log(vm.pagename,'pagename--')
	        },
	        methods:{
	             /**
	             * 跟业务耦合
	            */
	            _initUtArgs: function(){
	                var vm = this
	                /* cardType spm c位 */
	                vm.utData._args = {
	                    "feed_id": vm.fields.feedId,
	                    "spm": vm.spm + '.' + vm.fields.cardType + '.0'
	                }
	            },
	            goTarget: function(){
	                var vm = this
	                var urlParam = {
	                    spm: vm.utData._args["spm"]
	                }
	                var spmUrl = util.addParam(vm.fields.targetUrl,urlParam)
	                community._utClick.call(vm,"HotAskCard")
	                vm.$openURL(spmUrl);
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "bg"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "question-card"
	      ],
	      "events": {
	        "click": "goTarget"
	      },
	      "style": {
	        "width": 702,
	        "borderBottomWidth": function () {return (this.borderBottom) + 'px'},
	        "borderBottomColor": "#e7e7e7",
	        "borderBottomStyle": "solid"
	      },
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "left"
	          ],
	          "children": [
	            {
	              "type": "mocrichtext",
	              "classList": [
	                "main-summary"
	              ],
	              "attr": {
	                "richtextinfos": function () {return this.richTextInfos},
	                "rowmax": "2",
	                "linespacing": "6",
	                "picpadding": "3",
	                "pictop": "0"
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "summary-box"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "summary",
	                    "summary-text"
	                  ],
	                  "attr": {
	                    "value": function () {return this.fields.summary}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "info"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "answer-count",
	                    "count"
	                  ],
	                  "attr": {
	                    "value": function () {return (this.fields.answerCount) + '个回答'}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "read-count",
	                    "count"
	                  ],
	                  "attr": {
	                    "value": function () {return (this.fields.readCount) + '人看过'}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "right"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "image"
	              ],
	              "attr": {
	                "src": function () {return this.fields.pic}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "bg": {
	    "width": 750,
	    "backgroundColor": "#ffffff"
	  },
	  "question-card": {
	    "width": 702,
	    "marginLeft": 24,
	    "marginRight": 24,
	    "paddingTop": 24,
	    "paddingBottom": 29,
	    "backgroundColor": "#ffffff",
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  "left": {
	    "flex": 1
	  },
	  "right": {
	    "width": 220,
	    "height": 180,
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "flex-end"
	  },
	  "image": {
	    "width": 180,
	    "height": 180,
	    "backgroundColor": "#f1f1f1"
	  },
	  "summary-box": {
	    "marginTop": 15,
	    "marginBottom": 24,
	    "display": "flex",
	    "flexDirection": "row"
	  },
	  "summary-text": {
	    "fontSize": 28,
	    "color": "#3e3e3e"
	  },
	  "summary": {
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "flex": 1
	  },
	  "info": {
	    "display": "flex",
	    "flexDirection": "row",
	    "fontSize": 24,
	    "color": "#999999"
	  },
	  "count": {
	    "fontSize": 24,
	    "color": "#999999"
	  },
	  "answer-count": {
	    "marginRight": 40
	  },
	  "main-summary": {
	    "color": "#051b28",
	    "marginTop": 0
	  },
	  "quotes-r": {
	    "flex": 1
	  },
	  "quotes-l": {
	    "width": 26
	  },
	  "null": {
	    "flex": 1
	  }
	})
	})

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/community-report", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var util = __webpack_require__(5)
	    var community = __webpack_require__(7)
	    __weex_module__.exports = {
	        data:function () {return {
	            fields:{
	                text:"举报",
	                actionType:"report",
	                questionId:""
	            },
	            date:"刚刚"
	        }},
	        created: function(){
	            var vm       = this
	            var timestamp = vm.fields.timestamp
	            var date     = util.createDate(timestamp)
	            vm.interval  = date.interval
	            vm.date      = date.time
	            vm.interval > 0 && vm.setDate(timestamp)
	        },
	        methods:{
	            setDate: function(timestamp){
	                community.setDate(this,timestamp)
	            },
	            onClick: function(){
	                var vm = this
	                // console.log(vm.fields.questionId,"vm.fields.questionId")
	                vm._app.callTasks([{
	                  'module': 'TBONativeModule',
	                  'method': 'doAction',
	                  'args': [{
	                      'questionId':vm.fields.questionId,
	                      'actionType':vm.fields.action,
	                      'actionName':vm.fields.text
	                    }]
	                }]);
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main",
	    "flex"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "attr": {
	        "value": "提问于"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text",
	        "date"
	      ],
	      "attr": {
	        "value": function () {return this.date}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "report"
	      ],
	      "events": {
	        "click": "onClick"
	      },
	      "attr": {
	        "value": function () {return this.fields.text}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "flex": {
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "flex-start",
	    "alignItems": "center"
	  },
	  "main": {
	    "paddingBottom": 44,
	    "paddingLeft": 24,
	    "paddingRight": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "report": {
	    "flex": 1,
	    "color": "#3069B7",
	    "fontSize": 24
	  },
	  "text": {
	    "color": "#999999",
	    "fontSize": 24
	  },
	  "date": {
	    "marginRight": 15,
	    "marginLeft": 15
	  },
	  "delete": {
	    "flex": 1,
	    "color": "#FF0000",
	    "fontSize": 24
	  }
	})
	})

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/community-interact", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(4);

	;
	    var util = __webpack_require__(5)
	    __weex_module__.exports = {
	        data:function () {return {
	            id:+new Date,
	            button:{
	                num: "11232",
	                unit:""
	            },
	            mainClass:"main",
	            spmTarget:"",
	            leftButtons:[],
	            rightButtons: []
	        }},
	        created: function(){
	            var vm = this
	            var data = vm.fields
	            /** 
	             * spm url
	            */
	            var spmTarget = vm.fields.targetUrl
	            vm.mainClass = "main"
	            if(vm.fields.utClickInteract && vm.fields.utClickInteract.args){
	                var urlParam = {
	                    spm: vm.fields.utClickInteract.args.spm || '0.0.0.0'
	                }
	                spmTarget = util.addParam(spmTarget,urlParam)
	            }
	            vm.spmTarget = spmTarget
	            /**
	             *  button 组件 
	             */
	            vm.leftButtons = data.leftInteracts ? data.leftInteracts.map(function(button){
	                console.log(button.count,'button.count')
	                if(button.count !== '0')return vm.createButton(button)
	            }).filter(function(v){
	                if(v)return v;
	            }) : []

	            vm.rightButtons = data.rightInteracts ? data.rightInteracts.map(function(button){
	                console.log(button.count,'button.count')
	                if(button.count !== '0')return vm.createButton(button)
	            }).filter(function(v){
	                if(v)return v;
	            }) : []
	            if(vm.leftButtons.length + vm.rightButtons.length === 0)vm.mainClass = 'zero'
	            // console.log(vm.leftButtons.length + vm.rightButtons.length === 0,vm.mainClass)
	            var utExposureInteract = vm.utExposureInteract
	            if(utExposureInteract && utExposureInteract.name){
	                vm.$userTrack('expose',vm.pagename,utExposureInteract.name,utExposureInteract.args);
	            }
	        },
	        methods:{
	            go2Target: function(e){
	                var vm = this;
	                vm.utClick(vm.fields.utClickInteract)
	                vm.$openURL(vm.spmTarget)
	            },
	            createButton: function (button){
	                var vm = this
	                var interacted = button.interacted === "true"
	                var btAction   = button.action || {}
	                /**
	                 * 三种状态
	                 * canNot ： 不能点击交互
	                 * canDo：可以点击交互但还没有交互
	                 * done： 已经点击交互
	                 **/
	                 /**
	                 * button.interactive 可能为 undefined 和 false
	                 **/
	                var status = button.interactive === 'true' ? (button.interacted === "true" ? 'done' : "canDo") : 'canNot'; 
	                var utClickInteract = vm.fields.utClickInteract
	                var utData = utClickInteract && utClickInteract.name ? ["click",vm.pagename+'-Button-'+utClickInteract.name,'',utClickInteract.args] : []
	                // console.log(interacted ? button.interactedIcon : button.icon,'interacted ? button.interactedIcon : button.icon')
	                // console.log(utData,'----utData',vm.spmTarget)
	                var button = {
	                        id : +new Date,
	                        thisStatus: 'canNot',
	                        canNot: {
	                            status:'canNot',
	                            type: "url",
	                            zeroText:button.zeroText || "",
	                            iconSrc: interacted ? button.interactedIcon : button.icon,
	                            num: button.count,
	                            unit: button.text || "",
	                            action: {
	                                type: "url",
	                                opts: {
	                                    url: vm.spmTarget
	                                }
	                            },
	                            btUtData:{
	                                click: utData
	                            }
	                        }
	                    }
	                return button

	            },
	            utClick : function(node) {
	                if(!node) {
	                    return;  
	                }
	                if(node.name && node.args) {
	                    this.$userTrack('click',this.pagename,node.name,node.args);
	                }
	                if(node.nextPage && node.nextPage.length>0) {
	                    this._app.callTasks([{
	                        'module': 'TBONativeModule',
	                        'method': 'updateNextPageProperties',
	                        'args': node.nextPage
	                    }]);
	                }
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": function () {return [this.mainClass, 'flex']},
	  "events": {
	    "click": "go2Target"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "left"
	      ],
	      "events": {
	        "click": "go2Target"
	      },
	      "children": [
	        {
	          "type": "interact-button",
	          "repeat": {
	            "expression": function () {return this.leftButtons},
	            "value": "button"
	          },
	          "attr": {
	            "button": function () {return this.button}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "right",
	        "flex"
	      ],
	      "events": {
	        "click": "go2Target"
	      },
	      "children": [
	        {
	          "type": "interact-button",
	          "style": {
	            "marginRight": 24
	          },
	          "repeat": {
	            "expression": function () {return this.rightButtons},
	            "value": "button"
	          },
	          "attr": {
	            "button": function () {return this.button}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "flex": {
	    "display": "flex",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "alignItems": "center"
	  },
	  "main": {
	    "paddingBottom": 24,
	    "paddingLeft": 24,
	    "paddingTop": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "zero": {
	    "paddingTop": 34,
	    "backgroundColor": "#ffffff"
	  }
	})
	})

/***/ },
/* 12 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-notice", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	     fields:{
	        cardType:0,
	        notices:[],
	        hotTopicTags:[],
	        apps:[]
	      },
	      cardType:0,
	      spm:'',
	      pagename:'',
	      communityid:'',
	      notices:[],
	      hotTopicTags:[],
	      apps:[],
	      hotTopicTagsShow: false
	    }},
	    created : function(isRefresh){
	      var vm = this;
	      if (!vm.fields) {
	        return;
	      };
	      if (vm.fields.cardType) {
	        vm.cardType = vm.fields.cardType;
	      }
	      vm.title = vm.fields.title;
	      vm.icon = vm.fields.icon;
	      vm.notices = [];
	      vm.hotTopicTags = [];
	      vm.apps = [];
	      if (this.fields.apps) {
	        for( var i = 0; i < this.fields.apps.length; i++ ) {
	          var item = this.fields.apps[i];
	          item.index = i;
	          item.tag = 'apps';
	          vm.apps[i] = item;
	        }
	      }
	      if (this.fields.notices) {
	        for( var i = 0; i < this.fields.notices.length; i++ ) {
	          var item = this.fields.notices[i];
	          item.index = i;
	          item.tag = 'notices';
	          item.link = '//h5.m.taobao.com/ocean/TBOTopicViewController.htm?topicId=' + item.topicId;
	          vm.notices[i] = item;
	        }
	      };
	      if (this.fields.hotTopicTags) {
	        for( var i = 0; i < this.fields.hotTopicTags.length; i++ ) {
	          var item = this.fields.hotTopicTags[i];
	          item.index = i;
	          item.tag = 'hotTopicTags';
	          vm.hotTopicTags[i] = item;
	          vm.hotTopicTagsShow = true;
	        }
	      };
	    },
	    methods : {
	      onItemClick: function(e){
	        var vm = this;
	        if(e.target.attr.link){
	          vm.$openURL(e.target.attr.link); 
	            var ut_name = 'App';
	          if (e.target.attr.tag === 'apps') {
	            ut_name = 'App';
	          }else if(e.target.attr.tag === 'notices'){
	            ut_name = 'Notice';
	          }else if(e.target.attr.tag === 'hotTopicTags'){
	            ut_name = 'HotTopicTag';
	          }

	          var ut_params = {
	            'spm': this.spm + '.' + vm.cardType + '.' + e.target.attr.index,
	            'page' : this.pagename,
	            'community_id' : this.communityid,
	          }
	          vm.$userTrack('click',this.pagename,ut_name,ut_params); 
	        }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "mainItem"
	      ],
	      "repeat": function () {return this.apps},
	      "events": {
	        "click": "onItemClick"
	      },
	      "attr": {
	        "link": function () {return this.link},
	        "index": function () {return this.index},
	        "tag": function () {return this.tag}
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon"
	          ],
	          "attr": {
	            "src": function () {return this.pic}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "appsTitle"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "appsDesc"
	          ],
	          "attr": {
	            "value": function () {return this.appDesc}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "line"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "mainItem"
	      ],
	      "repeat": function () {return this.notices},
	      "events": {
	        "click": "onItemClick"
	      },
	      "attr": {
	        "link": function () {return this.link},
	        "index": function () {return this.index},
	        "tag": function () {return this.tag}
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "noticeText"
	          ],
	          "attr": {
	            "value": "公告"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "noticeTitle"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "line"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "scroller",
	      "shown": function () {return this.hotTopicTagsShow},
	      "classList": [
	        "horizontal"
	      ],
	      "attr": {
	        "scrollDirection": "horizontal",
	        "showScrollbar": "false"
	      },
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "text"
	          ],
	          "repeat": function () {return this.hotTopicTags},
	          "events": {
	            "click": "onItemClick"
	          },
	          "attr": {
	            "index": function () {return this.index},
	            "tag": function () {return this.tag},
	            "link": function () {return this.link},
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "icon": {
	    "width": 48,
	    "height": 48,
	    "marginRight": 20,
	    "marginLeft": 24
	  },
	  "appsDesc": {
	    "lines": 1,
	    "fontSize": 28,
	    "color": "#666666",
	    "height": 33,
	    "paddingRight": 18
	  },
	  "appsTitle": {
	    "lines": 1,
	    "fontSize": 28,
	    "color": "#051a28",
	    "height": 33,
	    "paddingRight": 18
	  },
	  "noticeTitle": {
	    "lines": 1,
	    "fontSize": 28,
	    "color": "#051a28",
	    "height": 33,
	    "paddingLeft": 18
	  },
	  "mainItem": {
	    "position": "relative",
	    "flexDirection": "row",
	    "height": 84,
	    "alignItems": "center",
	    "backgroundColor": "#ffffff",
	    "marginBottom": 1
	  },
	  "main": {
	    "position": "relative",
	    "flexDirection": "column",
	    "backgroundColor": "#dddddd"
	  },
	  "horizontal": {
	    "flexDirection": "row",
	    "width": 750,
	    "height": 85,
	    "alignItems": "center",
	    "backgroundColor": "#ffffff",
	    "marginBottom": 1
	  },
	  "text": {
	    "fontSize": 24,
	    "borderRadius": 25,
	    "borderWidth": 1,
	    "borderColor": "#aaabb3",
	    "color": "#666666",
	    "height": 50,
	    "marginLeft": 24,
	    "paddingLeft": 25,
	    "paddingRight": 25,
	    "paddingTop": 12,
	    "paddingBottom": 10
	  },
	  "noticeText": {
	    "color": "#FF5000",
	    "fontSize": 24,
	    "borderRadius": 10,
	    "borderWidth": 2,
	    "borderColor": "#FF5000",
	    "marginLeft": 20,
	    "padding": 6
	  }
	})
	})

/***/ },
/* 13 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-recommend", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields:{
	        spm:'',
	        pagename:'',
	      },
	      spm:'',
	      pagename:'',
	    }},
	    methods : {
	      created : function(isRefresh){
	        var vm = this;
	        if (!vm.fields) {
	          return;
	        }
	      },
	      goDetail : function(){
	        var vm = this;
	        // var ut_name = 'WeiTaoFeedComment';
	        // var ut_params = {
	        //       'account_id': vm.account.id,
	        //       'feed_id': vm.feed.id,
	        //       'feed_type': vm.feed.feedType,
	        //       'feed_Num' : vm.index + 1,
	        //     }
	        // if(vm.feed.scm) {
	        //   ut_params.scm = vm.feed.scm;
	        // }
	        // vm.$userTrack('click','',ut_name,ut_params); 
	        vm.$openURL(vm.fields.targetUrl);
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {},
	  "events": {
	    "click": "goDetail"
	  },
	  "children": [
	    {
	      "type": "tborecommend",
	      "classList": [
	        "main-summary"
	      ],
	      "attr": {
	        "fields": function () {return this.fields},
	        "pagename": function () {return this.pagename},
	        "spm": function () {return this.spm}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main-summary": {
	    "width": 750
	  }
	})
	})

/***/ },
/* 14 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-operation-card", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields : {
	        adId:0,
	        cardType:0,
	        'picAds' : [],
	        'height' : 0
	      },
	      adId:0,
	      cardType:0,
	      spm:'',
	      pagename:'',
	      communityid:'',
	      isShow: false,
	      pics : [],
	      iconLeftPic : '',
	      iconRightTopPic : '',
	      iconRightBottomPic : '',
	      iconLeftLink : '',
	      iconRightTopLink : '',
	      iconRightBottomLink: ''
	    }},
	    created : function(isRefresh){
	      var vm = this;
	      if (!vm.fields) {
	        return;
	      };
	      if (vm.fields.adId) {
	        vm.adId = vm.fields.adId;
	      }
	      if (vm.fields.cardType) {
	        vm.cardType = vm.fields.cardType;
	      }
	      vm.pics = vm.fields.picAds || [];
	      if (vm.pics.length > 2) {
	          vm.iconLeftPic = vm.pics[0].pic + '_450x280q90.jpg';
	          vm.iconRightTopPic = vm.pics[1].pic + '_300x140q90.jpg';
	          vm.iconRightBottomPic = vm.pics[2].pic + '_300x140q90.jpg';
	          vm.iconLeftLink = vm.pics[0].link;
	          vm.iconRightTopLink = vm.pics[1].link;
	          vm.iconRightBottomLink = vm.pics[2].link;
	          vm.isShow = true;
	      }
	    },
	    methods : {
	      onLeftClick : function(){
	        var vm = this;
	        if(vm.iconLeftLink){
	          vm.$openURL(vm.iconLeftLink); 
	          this.ut(0);
	        }
	      },
	      onRightTopClick : function(){
	        var vm = this;
	        if(vm.iconRightTopLink){
	          vm.$openURL(vm.iconRightTopLink); 
	          this.ut(1);
	        }
	      },
	      onRightBottomClick : function(){
	        var vm = this;
	        if(vm.iconRightBottomLink){
	          vm.$openURL(vm.iconRightBottomLink); 
	          this.ut(2);
	        }
	      },
	      ut : function(positionid){
	        var vm = this;
	        var ut_name = 'Card';
	        var ut_params = {
	          'ad_id': vm.adId,
	          'spm': this.spm + '.' + vm.cardType + '.' + positionid,
	          'page' : this.pagename,
	          'community_id' : this.communityid,
	        }
	        vm.$userTrack('click',this.pagename,ut_name,ut_params); 
	        
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "shown": function () {return this.isShow},
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "icon-left"
	      ],
	      "events": {
	        "click": "onLeftClick"
	      },
	      "attr": {
	        "src": function () {return this.iconLeftPic}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "main-right"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon-right-top"
	          ],
	          "events": {
	            "click": "onRightTopClick"
	          },
	          "attr": {
	            "src": function () {return this.iconRightTopPic}
	          }
	        },
	        {
	          "type": "image",
	          "classList": [
	            "icon-right-bottom"
	          ],
	          "events": {
	            "click": "onRightBottomClick"
	          },
	          "attr": {
	            "src": function () {return this.iconRightBottomPic}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main": {
	    "position": "relative",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "backgroundColor": "#dddddd"
	  },
	  "icon-left": {
	    "width": 450,
	    "height": 280,
	    "marginRight": 1
	  },
	  "main-right": {
	    "position": "relative",
	    "flexDirection": "column",
	    "backgroundColor": "#dddddd"
	  },
	  "icon-right-top": {
	    "width": 300,
	    "height": 140,
	    "marginBottom": 1
	  },
	  "icon-right-bottom": {
	    "width": 300,
	    "height": 140
	  }
	})
	})

/***/ },
/* 15 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-ramble-circle", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields:{
	        adId:0,
	        cardType:0,
	        myCircleCount:'',
	        squareUrl:'',
	        squareIcon:'',
	        rambleCircles:[]
	      },
	      adId:0,
	      cardType:0,
	      spm:'',
	      pagename:'',
	      communityid:'',
	      showItem: false,
	      myCircleCount:'',
	      squareUrl:'',
	      rambleCirclesOne:[],
	      rambleCirclesTwo:[],
	      rambleCirclesThr:[],
	      itemThr:{
	              icon: '',
	              name: '',
	              link: '',
	              userNum: '',
	              index : 5
	      }

	    }},
	    created : function(isRefresh){
	      var vm = this;
	      if (!vm.fields || !vm.fields.rambleCircles) {
	        return;
	      }
	      if (vm.fields.adId) {
	        vm.adId = vm.fields.adId;
	      }
	      if (vm.fields.cardType) {
	        vm.cardType = vm.fields.cardType;
	      }
	      vm.myCircleCount = vm.fields.myCircleCount;
	      vm.squareUrl = vm.fields.squareUrl;
	      vm.squareIcon = vm.fields.squareIcon;
	      if (vm.fields.rambleCircles.length < 5) {
	        return;
	      };
	      vm.showItem = true;

	      this.rambleCirclesOne=[];
	      this.rambleCirclesTwo=[];
	      this.rambleCirclesThr=[];

	      for (var i = 0; i < vm.fields.rambleCircles.length; i++) {
	        var item = this.fields.rambleCircles[i];
	        item.index = i;
	        if (item.typeName && item.typeName.length > 0) {
	          item.showName = true;
	        }else{
	          item.showName = false;
	        }
	        var num = parseInt(item.userNum, 10);
	        if(num > 0 && num < 10000){
	          item.userNum = "人气：" + num;
	        }
	        if(num > 10000){
	          var x = num/10000;
	          x = parseInt(x*100)/100;
	          if(x == parseInt(x)) {
	            x = parseInt(x);
	          }
	          item.userNum = "人气：" + x + '万';
	        }
	        if(i < 2){
	          vm.rambleCirclesOne[i] = item;
	        } else if(i < 4) {
	          vm.rambleCirclesTwo[i%2] = item;
	        } else if(i < 5) {
	          vm.rambleCirclesThr[0] = item;
	        }
	      };

	      vm.itemThr.icon = vm.squareIcon;
	      vm.itemThr.name = "我的圈子";
	      if (vm.myCircleCount) {
	        vm.itemThr.userNum = "圈子数"+ parseInt(vm.myCircleCount, 10);
	      };
	      vm.itemThr.link = vm.squareUrl;
	      vm.rambleCirclesThr[1] = vm.itemThr;
	    },
	    methods : {
	      onItemClick: function(e){
	        var vm = this;
	        if(e.target.attr.link){
	          vm.$openURL(e.target.attr.link);
	          var ut_name = 'Card';
	          var ut_params = {
	              'ad_id': vm.adId,
	              'spm': this.spm + '.' + vm.cardType + '.' + e.target.attr.link,
	              'page' : this.pagename,
	              'community_id' : this.communityid,
	            }
	          vm.$userTrack('click',this.pagename,ut_name,ut_params);  
	        }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main-item-ver"
	  ],
	  "shown": function () {return this.showItem},
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "item-row"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.rambleCirclesOne},
	          "classList": [
	            "circle-item"
	          ],
	          "attr": {
	            "link": function () {return this.link}
	          },
	          "events": {
	            "click": "onItemClick"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "circle-item-icon-area"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "circle-item-icon"
	                  ],
	                  "attr": {
	                    "src": function () {return this.icon}
	                  }
	                },
	                {
	                  "type": "text",
	                  "shown": function () {return this.showName},
	                  "classList": [
	                    "circle-item-tag"
	                  ],
	                  "style": {
	                    "backgroundColor": function () {return this.typeNameColor}
	                  },
	                  "attr": {
	                    "value": function () {return this.typeName}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "circle-item-text-area"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "circle-item-title"
	                  ],
	                  "attr": {
	                    "value": function () {return this.name}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "circle-item-userNum"
	                  ],
	                  "attr": {
	                    "value": function () {return this.userNum}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "item-row"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.rambleCirclesTwo},
	          "classList": [
	            "circle-item"
	          ],
	          "attr": {
	            "link": function () {return this.link}
	          },
	          "events": {
	            "click": "onItemClick"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "circle-item-icon-area"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "circle-item-icon"
	                  ],
	                  "attr": {
	                    "src": function () {return this.icon}
	                  }
	                },
	                {
	                  "type": "text",
	                  "shown": function () {return this.showName},
	                  "classList": [
	                    "circle-item-tag"
	                  ],
	                  "style": {
	                    "backgroundColor": function () {return this.typeNameColor}
	                  },
	                  "attr": {
	                    "value": function () {return this.typeName}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "circle-item-text-area"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "circle-item-title"
	                  ],
	                  "attr": {
	                    "value": function () {return this.name}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "circle-item-userNum"
	                  ],
	                  "attr": {
	                    "value": function () {return this.userNum}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "item-row"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.rambleCirclesThr},
	          "classList": [
	            "circle-item"
	          ],
	          "attr": {
	            "link": function () {return this.link}
	          },
	          "events": {
	            "click": "onItemClick"
	          },
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "circle-item-icon-area"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "circle-item-icon"
	                  ],
	                  "attr": {
	                    "src": function () {return this.icon}
	                  }
	                },
	                {
	                  "type": "text",
	                  "shown": function () {return this.showName},
	                  "classList": [
	                    "circle-item-tag"
	                  ],
	                  "style": {
	                    "backgroundColor": function () {return this.typeNameColor}
	                  },
	                  "attr": {
	                    "value": function () {return this.typeName}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "circle-item-text-area"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "circle-item-title"
	                  ],
	                  "attr": {
	                    "value": function () {return this.name}
	                  }
	                },
	                {
	                  "type": "text",
	                  "classList": [
	                    "circle-item-userNum"
	                  ],
	                  "attr": {
	                    "value": function () {return this.userNum}
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "circle-item": {
	    "position": "relative",
	    "flexDirection": "row",
	    "paddingTop": 24,
	    "paddingBottom": 24,
	    "alignItems": "center"
	  },
	  "circle-item-icon-area": {
	    "position": "relative"
	  },
	  "circle-item-icon": {
	    "width": 100,
	    "height": 100,
	    "marginLeft": 24,
	    "backgroundColor": "#f4f4f4",
	    "borderRadius": 10
	  },
	  "circle-item-tag": {
	    "left": 70,
	    "top": 72,
	    "lines": 1,
	    "color": "#ffffff",
	    "fontSize": 20,
	    "width": 54,
	    "height": 28,
	    "position": "absolute",
	    "textAlign": "center",
	    "paddingTop": 3
	  },
	  "circle-item-text-area": {
	    "position": "relative",
	    "flexDirection": "column"
	  },
	  "circle-item-title": {
	    "marginLeft": 16,
	    "lines": 1,
	    "color": "#051b28",
	    "fontSize": 32,
	    "textOverflow": "ellipsis",
	    "maxWidth": 200,
	    "height": 35
	  },
	  "circle-item-userNum": {
	    "marginLeft": 16,
	    "marginTop": 22,
	    "lines": 1,
	    "color": "#999999",
	    "fontSize": 22,
	    "width": 250,
	    "height": 24
	  },
	  "main-item-ver": {
	    "position": "relative",
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff"
	  },
	  "item-row": {
	    "position": "relative",
	    "flexDirection": "row"
	  }
	})
	})

/***/ },
/* 16 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-separator", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields:{
	        link:'',
	        pic:'',
	        picHeight:'',
	        picWidth:''
	      },
	      adId:0,
	      cardType:0,
	      spm:'',
	      pagename:'',
	      communityid:'',
	      link:'',
	      pic:'',
	      picHeight:'',
	      picWidth:''
	    }},
	    created : function(isRefresh){
	      var vm = this;
	      if (!vm.fields) {
	        return;
	      };
	      if(!vm.fields.pic){
	        return;
	      }      
	      if (vm.fields.adId) {
	        vm.adId = vm.fields.adId;
	      }
	      if (vm.fields.cardType) {
	        vm.cardType = vm.fields.cardType;
	      }
	      vm.link = vm.fields.link;
	      if(vm.fields.picWidth > 0){
	        vm.picHeight = vm.fields.picHeight/vm.fields.picWidth * 750;
	      }else{
	        vm.picHeight = vm.fields.picHeight;
	      }
	      vm.picWidth =750; ;
	      
	      vm.pic = vm.fields.pic + '_' + vm.picWidth + 'x' + vm.picHeight +'q90.jpg';
	    },
	    methods : {
	      goDetail : function(){
	        var vm = this;
	        if(vm.link){
	          vm.$openURL(vm.link); 
	          var ut_name = 'Card';
	          var ut_params = {
	              'ad_id': vm.adId,
	              'spm': this.spm + '.' + vm.cardType + '.0',
	              'page' : this.pagename,
	              'community_id' : this.communityid,
	            }
	          vm.$userTrack('click',this.pagename,ut_name,ut_params); 
	        }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "events": {
	    "click": "goDetail"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "icon"
	      ],
	      "style": {
	        "width": function () {return this.picWidth},
	        "height": function () {return this.picHeight}
	      },
	      "attr": {
	        "src": function () {return this.pic}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "icon": {
	    "width": 750
	  }
	})
	})

/***/ },
/* 17 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-banner", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields:{      
	        adId:0,
	        cardType:0,
	        bannerList:[],
	        title:'',
	        picHeight:0,
	        picWidth:0,
	        pic:''
	      },
	      adId:0,
	      cardType:0,
	      spm:'',
	      pagename:'',
	      communityid:'',
	      bannerList:[],
	      title:'',
	      pic:'',
	      picWidth:0,
	      picHeight:0,
	      link:'',
	      titleShow: false
	    }},
	    created : function(isRefresh){
	      var vm = this;
	      if (!vm.fields) {
	        return;
	      }
	      if (vm.fields.adId) {
	        vm.adId = vm.fields.adId;
	      }
	      if (vm.fields.cardType) {
	        vm.cardType = vm.fields.cardType;
	      }

	      vm.bannerList = vm.fields.bannerList || [];

	      if (vm.bannerList.length > 0) {
	        if (vm.bannerList[0].pic) {
	          vm.pic = vm.bannerList[0].pic;
	        };
	        if(vm.bannerList[0].title){
	          vm.title = vm.bannerList[0].title;
	        }
	        if(vm.bannerList[0].picWidth > 0){
	          vm.picHeight = vm.bannerList[0].picHeight/vm.bannerList[0].picWidth * 702;
	        }else{
	          vm.picHeight = vm.bannerList[0].picHeight;
	        }
	        vm.picWidth =702; 
	        vm.link = vm.bannerList[0].link;

	        vm.pic = vm.bannerList[0].pic + '_' + vm.picWidth + 'x' + vm.picHeight +'q90.jpg';

	        if(vm.title.length > 0){
	          vm.titleShow = true;
	        }else{
	          vm.titleShow = false;
	        }
	      }
	    },
	    methods : {
	      goDetail : function(){
	        var vm = this;
	        if(vm.link){
	          vm.$openURL(vm.link); 
	          var ut_name = 'Card';
	          var ut_params = {
	              'ad_id': vm.adId,
	              'spm': this.spm + '.' + vm.cardType + '.1',
	              'page' : this.pagename,
	              'community_id' : this.communityid,
	            }
	          vm.$userTrack('click',this.pagename,ut_name,ut_params); 

	        }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "events": {
	    "click": "goDetail"
	  },
	  "children": [
	    {
	      "type": "text",
	      "shown": function () {return this.titleShow},
	      "classList": [
	        "txt"
	      ],
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "image",
	      "classList": [
	        "icon"
	      ],
	      "style": {
	        "width": function () {return this.picWidth},
	        "height": function () {return this.picHeight}
	      },
	      "attr": {
	        "src": function () {return this.pic}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main": {
	    "position": "relative",
	    "flexDirection": "column",
	    "paddingTop": 30,
	    "paddingBottom": 34,
	    "backgroundColor": "#ffffff"
	  },
	  "txt": {
	    "lines": 1,
	    "fontSize": 32,
	    "color": "#051b28",
	    "height": 36,
	    "marginBottom": 30,
	    "paddingLeft": 20
	  },
	  "icon": {
	    "marginRight": 24,
	    "marginLeft": 24
	  }
	})
	})

/***/ },
/* 18 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-stroll-text", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields:{
	        title:'',
	        icon:'',
	        topicTags:[]
	      },
	      title:'',
	      icon:'',
	      showItem:false,
	      topicTagsOne:[],
	      topicTagsTwo:[],
	      topicTagsThr:[]
	    }},
	    created : function(isRefresh){
	      var vm = this;
	      if (!vm.fields) {
	        return;
	      };
	      vm.title = vm.fields.title;
	      vm.icon = vm.fields.icon;
	      vm.topicTags = vm.fields.topicTags || [];
	      if (vm.topicTags.length < 9) {
	        return;
	      };
	      vm.showItem = true;

	      for( var i = 0; i < vm.fields.topicTags.length; i++ ) {
	        var item = this.fields.topicTags[i];
	        item.index = i;
	        if(i<3){
	          this.topicTagsOne[i] = item;
	        } else if(i <6) {
	          this.topicTagsTwo[i%3] = item;
	        } else if(i < 9) {
	          this.topicTagsThr[i%3] = item;
	        }
	      }
	    },
	    methods : {
	      onItemClick: function(e){
	        var vm = this;
	        // nativeLog('weex-index', e.target.attr.link);
	        if(e.target.attr.link){
	          vm.$openURL(e.target.attr.link); 
	        }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "shown": function () {return this.showItem},
	  "classList": [
	    "main"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "main-title"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon"
	          ],
	          "attr": {
	            "src": function () {return this.icon},
	            "}": ""
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "main-item-ver"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "item-row"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "repeat": function () {return this.topicTagsOne},
	              "classList": [
	                "item-tag"
	              ],
	              "attr": {
	                "link": function () {return this.link},
	                "index": function () {return this.index},
	                "value": function () {return this.title}
	              },
	              "events": {
	                "click": "onItemClick"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item-row"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "repeat": function () {return this.topicTagsTwo},
	              "classList": [
	                "item-tag"
	              ],
	              "attr": {
	                "link": function () {return this.link},
	                "index": function () {return this.index},
	                "value": function () {return this.title}
	              },
	              "events": {
	                "click": "onItemClick"
	              }
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "classList": [
	            "item-row"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "repeat": function () {return this.topicTagsThr},
	              "classList": [
	                "item-tag"
	              ],
	              "attr": {
	                "link": function () {return this.link},
	                "index": function () {return this.index},
	                "value": function () {return this.title}
	              },
	              "events": {
	                "click": "onItemClick"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main": {
	    "position": "relative",
	    "flexDirection": "column"
	  },
	  "icon": {
	    "width": 36,
	    "height": 36,
	    "marginRight": 12,
	    "marginLeft": 16,
	    "marginTop": 30
	  },
	  "txt": {
	    "lines": 1,
	    "fontSize": 32,
	    "color": "#051b28",
	    "height": 36,
	    "paddingRight": 24,
	    "marginTop": 30
	  },
	  "main-title": {
	    "position": "relative",
	    "flexDirection": "row",
	    "height": 92,
	    "backgroundColor": "#ffffff"
	  },
	  "item-tag": {
	    "lines": 1,
	    "fontSize": 28,
	    "color": "#051b28",
	    "width": 248,
	    "textAlign": "center",
	    "height": 80,
	    "backgroundColor": "#ffffff",
	    "marginLeft": 1,
	    "marginRight": 1,
	    "marginTop": 1,
	    "marginBottom": 1,
	    "paddingTop": 26
	  },
	  "main-item-ver": {
	    "position": "relative",
	    "flexDirection": "column"
	  },
	  "item-row": {
	    "position": "relative",
	    "flexDirection": "row"
	  }
	})
	})

/***/ },
/* 19 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-editor-rec", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields:{
	        adId:0,
	        cardType:0,
	        title:'',
	        icon:'',
	        editRecs:''
	      },
	      adId:0,
	      cardType:0,
	      spm:'',
	      pagename:'',
	      communityid:'',
	      title:'',
	      icon:'',
	      iconShow: false,
	      editRecs:[]
	    }},
	    created : function(isRefresh){
	      var vm = this;
	      nativeLog('weexList ready:');
	      if (!vm.fields) {
	        return;
	      };
	      if (vm.fields.adId) {
	        vm.adId = vm.fields.adId;
	      }
	      if (vm.fields.cardType) {
	        vm.cardType = vm.fields.cardType;
	      }
	      vm.title = vm.fields.title;
	      vm.icon = vm.fields.icon;
	      vm.editRecs = [];
	      for( var i = 0; i < this.fields.editRecs.length; i++ ) {
	        var item = this.fields.editRecs[i];
	        item.index = i;
	        item.picPath = item.pic + '_226x170.jpg';
	        vm.editRecs[i] = item;
	      }
	      if(vm.icon){
	        vm.iconShow = true;
	      }else{
	        vm.iconShow = false;
	      }
	    },
	    methods : {
	      onItemClick: function(e){
	        var vm = this;
	        if(e.target.attr.link){
	          vm.$openURL(e.target.attr.link); 

	          var ut_name = 'Card';
	          var ut_params = {
	              'ad_id': vm.adId,
	              'spm': this.spm + '.' + vm.cardType + '.' + e.target.attr.index,
	              'page' : this.pagename,
	              'community_id' : this.communityid,
	            }
	          vm.$userTrack('click',this.pagename,ut_name,ut_params); 
	        }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "main-title"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "shown": function () {return this.iconShow},
	          "classList": [
	            "icon"
	          ],
	          "attr": {
	            "src": function () {return this.icon}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "main-items"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "item-icon"
	          ],
	          "repeat": function () {return this.editRecs},
	          "events": {
	            "click": "onItemClick"
	          },
	          "attr": {
	            "link": function () {return this.link},
	            "src": function () {return this.picPath},
	            "index": function () {return this.index}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main": {
	    "position": "relative",
	    "flexDirection": "column",
	    "paddingBottom": 24,
	    "backgroundColor": "#ffffff"
	  },
	  "icon": {
	    "width": 36,
	    "height": 36,
	    "marginRight": 12
	  },
	  "txt": {
	    "lines": 1,
	    "fontSize": 32,
	    "color": "#051b28",
	    "height": 36
	  },
	  "main-title": {
	    "position": "relative",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "paddingTop": 24,
	    "paddingBottom": 24,
	    "marginLeft": 24
	  },
	  "item-icon": {
	    "marginRight": 12,
	    "borderRadius": 12,
	    "width": 226,
	    "height": 170
	  },
	  "main-items": {
	    "position": "relative",
	    "flexDirection": "row",
	    "paddingRight": 12,
	    "paddingLeft": 24
	  }
	})
	})

/***/ },
/* 20 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-icon-text", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      fields: {
	        text: 'test'
	      },
	      title: ''
	    }},
	    created: function(isRefresh) {
	      this.title = this.fields.text;
	    },
	    methods: {
	      goDetail: function() {
	        var vm = this;
	        this.utClick(this.fields.utClickIconText);
	        vm.$openURL(vm.fields.targetUrl);
	      },
	      utClick: function(node) {
	        if (!node) {
	          return;
	        }
	        if (node.name && node.args) {
	          this.$userTrack('click', this.pagename, node.name, node.args);
	        }
	        if (node.nextPage && node.nextPage.length > 0) {
	          this._app.callTasks([{
	            'module': 'TBONativeModule',
	            'method': 'updateNextPageProperties',
	            'args': node.nextPage
	          }]);
	        }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "events": {
	    "click": "goDetail"
	  },
	  "children": [
	    {
	      "type": "image",
	      "classList": [
	        "icon"
	      ],
	      "attr": {
	        "src": "https://img.alicdn.com/tps/TB1FzfFMpXXXXcOXpXXXXXXXXXX-20-20.png"
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "txt"
	      ],
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "image",
	      "shown": function () {return !!this.fields.extendPic},
	      "classList": [
	        "icon",
	        "icon-right"
	      ],
	      "attr": {
	        "src": function () {return this.fields.extendPic}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main": {
	    "position": "relative",
	    "flexDirection": "row",
	    "paddingTop": 6,
	    "paddingBottom": 12,
	    "alignItems": "center",
	    "backgroundColor": "#ffffff",
	    "height": 92
	  },
	  "icon": {
	    "width": 32,
	    "height": 32,
	    "marginRight": 12,
	    "marginLeft": 24
	  },
	  "icon-right": {
	    "marginRight": 24
	  },
	  "txt": {
	    "lines": 1,
	    "fontSize": 32,
	    "color": "#666666",
	    "height": 36,
	    "paddingRight": 24,
	    "flex": 1
	  }
	})
	})

/***/ },
/* 21 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-header", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      needDropdown: true,
	      fields: {
	        logo: '',
	        nick: '',
	        targetUrl: '',
	        icons: [{
	          path: '',
	          width: '',
	          height: ''
	        }],
	      },
	      title: '',
	      avataPath: '',
	      icons: [],
	      pageName: ''
	    }},
	    created: function(isRefresh) {
	      this.avataPath = this.fields.logo + '_56x56xzq90.jpg';
	      if (this.fields.icons && this.fields.icons.length > 0) {
	        for (var i = 0; i < this.fields.icons.length; i++) {
	          this.fields.icons[i].h = 28;
	          this.fields.icons[i].w = 28 * this.fields.icons[i].width / this.fields.icons[i].height;
	        }
	        this.icons = this.fields.icons;
	      }
	    },
	    methods: {
	      goAccountUrl: function() {
	        this.utClick(this.fields.utClickButtonAccount);
	        this.$openURL(this.fields.accountUrl);
	      },
	      goTargetUrl: function() {
	        this.utClick(this.fields.utClickCommunityHeader);
	        this.$openURL(this.fields.targetUrl);
	      },
	      pullDown: function() {
	        this._app.callTasks([{
	          'module': 'TBONativeModule',
	          'method': 'showActions',
	          'args': [{
	            'actions': this.actions,
	            'actionDatas': this.fields.actionDatas,
	            'groupId': this.fields.groupId,
	            'page': this.pageName
	          }]
	        }]);
	      },
	      utClick: function(node) {
	        if (!node) {
	          return;
	        }
	        if (node.name && node.args) {
	          this.$userTrack('click', this.pagename, node.name, node.args);
	        }
	        if (node.nextPage && node.nextPage.length > 0) {
	          this._app.callTasks([{
	            'module': 'TBONativeModule',
	            'method': 'updateNextPageProperties',
	            'args': node.nextPage
	          }]);
	        }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "events": {
	    "click": "goTargetUrl"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "left"
	      ],
	      "events": {
	        "click": "goAccountUrl"
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "avata"
	          ],
	          "events": {
	            "click": "goAccountUrl"
	          },
	          "attr": {
	            "src": function () {return this.fields.logo}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "txt"
	          ],
	          "events": {
	            "click": "goAccountUrl"
	          },
	          "attr": {
	            "value": function () {return this.fields.nick}
	          }
	        },
	        {
	          "type": "div",
	          "repeat": function () {return this.icons},
	          "classList": [
	            "icon-item"
	          ],
	          "attr": {
	            "index": function () {return this.index}
	          },
	          "events": {
	            "click": "goAccountUrl"
	          },
	          "children": [
	            {
	              "type": "image",
	              "events": {
	                "click": "goAccountUrl"
	              },
	              "attr": {
	                "src": function () {return this.path}
	              },
	              "style": {
	                "width": function () {return this.w},
	                "height": function () {return this.h}
	              }
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "dropdown"
	      ],
	      "events": {
	        "click": "pullDown"
	      },
	      "children": [
	        {
	          "type": "image",
	          "shown": function () {return this.actions&&this.actions.length>0},
	          "classList": [
	            "dropdown-icon"
	          ],
	          "attr": {
	            "src": "https://img.alicdn.com/tps/TB1rHxgKVXXXXbrXFXXXXXXXXXX-48-48.png"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "paddingTop": 32,
	    "paddingBottom": 24,
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "backgroundColor": "#ffffff"
	  },
	  "left": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "maxWidth": 400
	  },
	  "avata": {
	    "width": 56,
	    "height": 56,
	    "marginRight": 12,
	    "marginLeft": 24,
	    "borderRadius": 28,
	    "borderStyle": "solid",
	    "borderWidth": 2,
	    "borderColor": "#eeeeee"
	  },
	  "txt": {
	    "lines": 1,
	    "fontSize": 32,
	    "color": "#3069B7",
	    "textOverflow": "ellipsis",
	    "marginRight": 16,
	    "maxWidth": 400
	  },
	  "icon-item": {
	    "position": "relative",
	    "marginRight": 6,
	    "resizeMode": "contain"
	  },
	  "dropdown": {
	    "display": "flex",
	    "justifyContent": "flex-end",
	    "alignItems": "center",
	    "flexDirection": "row",
	    "marginRight": 0,
	    "height": 56
	  },
	  "dropdown-icon": {
	    "width": 48,
	    "height": 48,
	    "marginLeft": 30,
	    "marginRight": 30
	  }
	})
	})

/***/ },
/* 22 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-grid", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      needDropdown: true,
	      videoIconLeft: 0,
	      videoIconTop: 0,
	      videoIconWidth: 0,
	      videoIconHeight: 0,
	      paddingLeft: "24",
	      log:"",
	      // margingLeft:{},
	      row0: [],
	      row1: [],
	      row2: [],
	      fields: {
	        showPreviewLayer: "true",

	        elements: [{
	          type: "",
	          targetUrl: "",
	          path: "",
	          width: 0,
	          height: 0,
	        }, ],
	      }
	    }},
	    created: function(isRefresh) {
	      var vm = this
	      console.log(vm.fields,'vm.fields')
	      if (!vm.fields.elements) {
	        return;
	      }
	      vm.log = JSON.stringify(vm.fields,null,'\t')
	      var itemCount = vm.fields.elements.length;
	      var picWH = 230;
	      var imgSize = '_230x230xzq90.jpg';
	      var picSrcs = []
	      vm.paddingBottom = "12"
	      vm.paddingLeft = "24"
	      if (vm.margin) {
	        /**
	         * bug：picWH 为176的时候 weex 在ios会多出1px的“border” 
	         **/
	        picWH = 175
	        vm.paddingBottom = "6"
	        vm.paddingLeft = vm.margin
	      }

	      vm.videoIconWidth = 74;
	      vm.videoIconHeight = 74;
	      vm.row0 = [];
	      vm.row1 = [];
	      vm.row2 = [];
	      if (itemCount == 0) {
	        vm.paddingBottom = "0"
	        vm.paddingLeft = "0"
	        return;
	      }
	      if (itemCount == 1) {
	        picWH = 358;
	        imgSize = '_q90.jpg';
	        vm.videoIconWidth = 120;
	        vm.videoIconHeight = 120;
	      }
	      for (var i = 0; i < itemCount; i++) {
	        var item = vm.fields.elements[i];
	        item.picWidth = picWH;
	        item.picHeight = picWH;
	        item.index = i;
	        item.picPath = item.path + imgSize;
	        picSrcs.push(item.path)
	        if (!item.videoPath) {
	          item.videoPath = '//cloud.video.taobao.com/play/u/' + vm.fields.accountId + '/p/2/e/6/t/1/d/ld/' + item.videoId + '.mp4';
	        } else {
	          item.videoPath = item.videoPath + '@@ld.m3u8';
	        }
	        if (i < 3) {
	          vm.row0[i] = item;
	        } else if (i < 6) {
	          vm.row1[i % 3] = item;
	        } else if (i < 9) {
	          vm.row2[i % 3] = item;
	        }
	      }

	      vm.videoIconLeft = parseInt(vm.fields.elements[0].picWidth / 2, 10) - vm.videoIconWidth / 2;
	      vm.videoIconTop = parseInt(vm.fields.elements[0].picHeight / 2, 10) - vm.videoIconHeight / 2;
	      vm.picSrcs = picSrcs
	    },
	    methods: {
	      goDetail: function() {
	        var vm = this;
	        // var ut_name = 'WeiTaoFeedComment';
	        // var ut_params = {
	        //       'account_id': vm.account.id,
	        //       'feed_id': vm.feed.id,
	        //       'feed_type': vm.feed.feedType,
	        //       'feed_Num' : vm.index + 1,
	        //     }
	        // if(vm.feed.scm) {
	        //   ut_params.scm = vm.feed.scm;
	        // }
	        // vm.$userTrack('click','',ut_name,ut_params); 
	        vm._utClick(vm.fields.utClickGridsMultimedia);
	        vm.$openURL(vm.fields.targetUrl);
	      },
	      _utClick: function(node) {
	        if (!node) {
	          return;
	        }
	        if (node.name && node.args) {
	          this.$userTrack('click', this.pagename, node.name, node.args);
	        }
	        if (node.nextPage && node.nextPage.length > 0) {
	          this._app.callTasks([{
	            'module': 'TBONativeModule',
	            'method': 'updateNextPageProperties',
	            'args': node.nextPage
	          }]);
	        }
	      },
	      onImageClick: function(_index, e) {
	        var vm = this;
	        var imageIndex = e.target.attr.index;
	        var elms = vm.fields.elements || []
	        var img = elms[imageIndex] || {}
	        var url = vm.fields.targetUrl
	        var ut = img.utClick
	        // console.log(_index,imageIndex)
	        // vm.log = (+_index) * (+imageIndex+1) - 1 + '  ————  ' + _index + '  ____' +imageIndex
	        if (vm.fields.showPreviewLayer === "true") {
	          vm._app.callTasks([{
	            'module': 'TBONativeModule',
	            'method': 'showPicView',
	            'args': [{
	              'imagePathArray': vm.picSrcs,
	              'index': imageIndex
	            }]
	          }]);
	          console.log(img)
	          ut && vm._utClick(ut)
	          // vm.log = 'TBONativeModule' + '_' + vm.picSrcs.length + '_' + imageIndex 
	        } else {
	          url && vm.$openURL(url);
	          vm._utClick(vm.fields.utClickGridsMultimedia);
	        }
	        // vm.utClick(vm.fields.elements[imageIndex].utClick);
	        // if(vm.fields.elements[imageIndex].type === 'video'){
	        //   // var weitao = __weex_require__('@weex-module/WeiTaoTimeLineModule')
	        //   // if (weitao && weitao.showVideoLayer) {
	        //   //     vm.$call('WeiTaoTimeLineModule',
	        //   //            'showVideoLayer',
	        //   //             { 'videoId': vm.fields.elements[imageIndex].videoId,
	        //   //               'videoPath': vm.fields.elements[imageIndex].videoPath,
	        //   //               'interactiveVideoId': "1121"
	        //   //             }, 
	        //   //             function(result) {

	        //   //             });
	        //   // } else {
	        //     vm.$openURL(vm.fields.elements[imageIndex].targetUrl);
	        //   // }
	        // } else {

	        // }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "style": {
	    "paddingLeft": function () {return (this.paddingLeft) + 'px'}
	  },
	  "events": {
	    "click": "goDetail"
	  },
	  "children": [
	    {
	      "type": "div",
	      "shown": function () {return this.row0.length>0},
	      "classList": [
	        "row"
	      ],
	      "style": {
	        "paddingBottom": function () {return (this.paddingBottom) + 'px'}
	      },
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.row0},
	          "classList": [
	            "grid-item"
	          ],
	          "events": {
	            "click": function ($event) {this.onImageClick('1',$event)}
	          },
	          "attr": {
	            "index": function () {return this.index}
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "width": function () {return (this.picWidth) + 'px'},
	                "height": function () {return (this.picHeight) + 'px'}
	              },
	              "classList": [
	                "img-shadow"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "events": {
	                    "click": function ($event) {this.onImageClick('1',$event)}
	                  },
	                  "attr": {
	                    "index": function () {return this.index},
	                    "src": function () {return this.picPath}
	                  },
	                  "classList": [
	                    "grid-item-image"
	                  ],
	                  "style": {
	                    "width": function () {return (this.picWidth) + 'px'},
	                    "height": function () {return (this.picHeight) + 'px'}
	                  }
	                },
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "//img.alicdn.com/tps/TB1F1vMOFXXXXbQaXXXXXXXXXXX-1-1.png"
	                  },
	                  "style": {
	                    "width": function () {return (this.picWidth) + 'px'},
	                    "height": function () {return (this.picHeight) + 'px'},
	                    "position": "absolute",
	                    "left": 0,
	                    "top": 0,
	                    "zIndex": 2
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "shown": function () {return this.type==='item'&&this.showPrice==='true'},
	              "classList": [
	                "price-container"
	              ],
	              "style": {
	                "top": function () {return this.picHeight-40},
	                "width": function () {return this.picHeight}
	              },
	              "events": {
	                "click": "pullDown"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "price-inner-container"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "price"
	                      ],
	                      "attr": {
	                        "value": function () {return '¥' + (this.price)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "shown": function () {return this.row1.length>0},
	      "style": {
	        "paddingBottom": function () {return (this.paddingBottom) + 'px'}
	      },
	      "classList": [
	        "row"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.row1},
	          "classList": [
	            "grid-item"
	          ],
	          "events": {
	            "click": function ($event) {this.onImageClick('2',$event)}
	          },
	          "attr": {
	            "index": function () {return this.index}
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "width": function () {return (this.picWidth) + 'px'},
	                "height": function () {return (this.picHeight) + 'px'}
	              },
	              "classList": [
	                "img-shadow"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "events": {
	                    "click": function ($event) {this.onImageClick('2',$event)}
	                  },
	                  "attr": {
	                    "index": function () {return this.index},
	                    "src": function () {return this.picPath}
	                  },
	                  "classList": [
	                    "grid-item-image"
	                  ],
	                  "style": {
	                    "width": function () {return (this.picWidth) + 'px'},
	                    "height": function () {return (this.picHeight) + 'px'}
	                  }
	                },
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "//img.alicdn.com/tps/TB1F1vMOFXXXXbQaXXXXXXXXXXX-1-1.png"
	                  },
	                  "style": {
	                    "width": function () {return (this.picWidth) + 'px'},
	                    "height": function () {return (this.picHeight) + 'px'},
	                    "position": "absolute",
	                    "left": 0,
	                    "top": 0,
	                    "zIndex": 2
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "shown": function () {return this.type==='item'&&this.showPrice==='true'},
	              "classList": [
	                "price-container"
	              ],
	              "style": {
	                "top": function () {return this.picHeight-40},
	                "width": function () {return this.picHeight}
	              },
	              "events": {
	                "click": "pullDown"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "price-inner-container"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "price"
	                      ],
	                      "attr": {
	                        "value": function () {return '¥' + (this.price)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "shown": function () {return this.row2.length>0},
	      "style": {
	        "paddingBottom": function () {return (this.paddingBottom) + 'px'}
	      },
	      "classList": [
	        "row"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "repeat": function () {return this.row2},
	          "classList": [
	            "grid-item"
	          ],
	          "events": {
	            "click": function ($event) {this.onImageClick('3',$event)}
	          },
	          "attr": {
	            "index": function () {return this.index}
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "width": function () {return (this.picWidth) + 'px'},
	                "height": function () {return (this.picHeight) + 'px'}
	              },
	              "classList": [
	                "img-shadow"
	              ],
	              "children": [
	                {
	                  "type": "image",
	                  "events": {
	                    "click": function ($event) {this.onImageClick('3',$event)}
	                  },
	                  "attr": {
	                    "index": function () {return this.index},
	                    "src": function () {return this.picPath}
	                  },
	                  "classList": [
	                    "grid-item-image"
	                  ],
	                  "style": {
	                    "width": function () {return (this.picWidth) + 'px'},
	                    "height": function () {return (this.picHeight) + 'px'}
	                  }
	                },
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "//img.alicdn.com/tps/TB1F1vMOFXXXXbQaXXXXXXXXXXX-1-1.png"
	                  },
	                  "style": {
	                    "width": function () {return (this.picWidth) + 'px'},
	                    "height": function () {return (this.picHeight) + 'px'},
	                    "position": "absolute",
	                    "left": 0,
	                    "top": 0,
	                    "zIndex": 2
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "shown": function () {return this.type==='item'&&this.showPrice==='true'},
	              "classList": [
	                "price-container"
	              ],
	              "style": {
	                "top": function () {return this.picHeight-40},
	                "width": function () {return this.picHeight}
	              },
	              "events": {
	                "click": "pullDown"
	              },
	              "children": [
	                {
	                  "type": "div",
	                  "classList": [
	                    "price-inner-container"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "classList": [
	                        "price"
	                      ],
	                      "attr": {
	                        "value": function () {return '¥' + (this.price)}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main": {
	    "flexDirection": "column",
	    "backgroundColor": "#ffffff"
	  },
	  "row": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "paddingRight": 24,
	    "paddingTop": 0,
	    "backgroundColor": "#ffffff"
	  },
	  "grid-item": {
	    "position": "relative",
	    "marginRight": 6,
	    "resizeMode": "contain",
	    "backgroundColor": "#ffffff"
	  },
	  "icon-video": {
	    "position": "absolute",
	    "width": 120,
	    "height": 120,
	    "left": 170,
	    "top": 170
	  },
	  "price-container": {
	    "position": "absolute",
	    "display": "flex",
	    "justifyContent": "flex-end",
	    "flexDirection": "column",
	    "height": 40,
	    "left": 0
	  },
	  "price-inner-container": {
	    "position": "relative",
	    "display": "flex",
	    "justifyContent": "flex-end",
	    "alignItems": "center",
	    "flexDirection": "row"
	  },
	  "price": {
	    "lines": 1,
	    "fontSize": 20,
	    "color": "#ffffff",
	    "paddingLeft": 10,
	    "paddingRight": 10,
	    "paddingTop": 5,
	    "paddingBottom": 5,
	    "backgroundColor": "rgba(0,0,0,0.8)"
	  },
	  "grid-image-more": {
	    "position": "absolute",
	    "left": 0,
	    "top": 0,
	    "width": 230,
	    "height": 230,
	    "opacity": 0.2,
	    "backgroundColor": "#000000"
	  },
	  "grid-image-more-txt": {
	    "width": 230,
	    "textAlign": "center",
	    "position": "absolute",
	    "left": 0,
	    "top": 100,
	    "color": "#ffffff"
	  },
	  "img-shadow": {
	    "position": "relative"
	  }
	})
	})

/***/ },
/* 23 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-share-item", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      fields: {
	        pic: '',
	        title: '',
	        price: '',
	        showPrice: '',
	        text: '',
	        targetUrl: '',
	        defaultUrl:'',
	        marginLeft: '24',
	        itemSource:"0"
	      },
	      picPath: '',
	      showBuy:"1"
	    }},
	    created: function(isRefresh) {
	      var vm = this
	      vm.title = vm.fields.text;
	      vm.marginLeft = vm.margin || '24'
	      // console.log(vm.marginLeft)
	      vm.boxWidth = !vm.margin ? '700' : '540'
	      if (vm.fields.pic) {
	        vm.picPath = vm.fields.pic;
	      }
	    },
	    methods: {
	      goto: function(url,e) {
	        var vm = this;
	        url === vm.fields.targetUrl && vm.utClick(vm.fields.utClickCommunityItemShare);
	        vm.$openURL(url);
	      },
	      utClick: function(node) {
	        if (!node) {
	          return;
	        }
	        if (node.name && node.args) {
	          this.$userTrack('click', this.pagename, node.name, node.args);
	        }
	        if (node.nextPage && node.nextPage.length > 0) {
	          this._app.callTasks([{
	            'module': 'TBONativeModule',
	            'method': 'updateNextPageProperties',
	            'args': node.nextPage
	          }]);
	        }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "events": {
	    "click": function ($event) {this.goto(this.fields.defaultUrl,$event)}
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "body"
	      ],
	      "style": {
	        "width": function () {return (this.boxWidth) + 'px'},
	        "marginLeft": function () {return (this.marginLeft) + 'px'}
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon"
	          ],
	          "attr": {
	            "src": function () {return this.picPath}
	          },
	          "events": {
	            "click": function ($event) {this.goto(this.fields.targetUrl,$event)}
	          }
	        },
	        {
	          "type": "div",
	          "classList": [
	            "text-body"
	          ],
	          "events": {
	            "click": function ($event) {this.goto(this.fields.targetUrl,$event)}
	          },
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "title"
	              ],
	              "attr": {
	                "value": function () {return this.fields.title}
	              }
	            },
	            {
	              "type": "div",
	              "classList": [
	                "item"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "price"
	                  ],
	                  "attr": {
	                    "value": function () {return '¥' + (this.fields.price)}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "image",
	          "shown": function () {return this.fields.itemSource==='1'},
	          "events": {
	            "click": function ($event) {this.goto(this.fields.targetUrl,$event)}
	          },
	          "classList": [
	            "buy-icon"
	          ],
	          "attr": {
	            "src": "https://g01.alibaba-inc.com/tfscom/TB1lWVzLpXXXXbBapXXXXXXXXXX.tfsprivate.png"
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main": {
	    "backgroundColor": "#ffffff"
	  },
	  "body": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "marginRight": 24,
	    "backgroundColor": "#fafafa",
	    "height": 138
	  },
	  "icon": {
	    "width": 136,
	    "height": 136,
	    "marginRight": 18
	  },
	  "text-body": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "height": 138,
	    "paddingRight": 8,
	    "flex": 1
	  },
	  "item": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "title": {
	    "lines": 2,
	    "fontSize": 24,
	    "paddingBottom": 14,
	    "color": "#666666",
	    "textOverflow": "ellipsis",
	    "maxWidth": 540
	  },
	  "price": {
	    "lines": 1,
	    "fontSize": 24,
	    "color": "#666666",
	    "textOverflow": "ellipsis",
	    "paddingRight": 24
	  },
	  "state": {
	    "lines": 1,
	    "fontSize": 28,
	    "color": "#ff5000",
	    "textOverflow": "ellipsis",
	    "paddingRight": 24
	  },
	  "buy-icon": {
	    "position": "absolute",
	    "width": 68,
	    "height": 54,
	    "right": 0,
	    "bottom": 0
	  }
	})
	})

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/community-interactive-source", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(25);
	__webpack_require__(26);

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields:{
	      }
	    }},
	    created : function(isRefresh){
	    }, 
	    methods : {    
	      goSourceUrl : function(){
	        var vm = this;
	        // var ut_name = 'WeiTaoFeedComment';
	        // var ut_params = {
	        //       'account_id': vm.account.id,
	        //       'feed_id': vm.feed.id,
	        //       'feed_type': vm.feed.feedType,
	        //       'feed_Num' : vm.index + 1,
	        //     }
	        // if(vm.feed.scm) {
	        //   ut_params.scm = vm.feed.scm;
	        // }
	        // vm.$userTrack('click','',ut_name,ut_params); 
	        this.utClick(this.fields.utClickCommunityInteractSource);
	        vm.$openURL(vm.fields.targetUrl);
	      },
	      goCommunityUrl : function(){
	        var vm = this;
	        // var ut_name = 'WeiTaoFeedComment';
	        // var ut_params = {
	        //       'account_id': vm.account.id,
	        //       'feed_id': vm.feed.id,
	        //       'feed_type': vm.feed.feedType,
	        //       'feed_Num' : vm.index + 1,
	        //     }
	        // if(vm.feed.scm) {
	        //   ut_params.scm = vm.feed.scm;
	        // }
	        // vm.$userTrack('click','',ut_name,ut_params); 
	        this.utClick(this.fields.utClickInteractCommunity);
	        vm.$openURL(vm.fields.communityTargetUrl);
	      },
	      utClick : function(node) {
	          if(!node) {
	            return;  
	          }
	          if(node.name && node.args) {
	            this.$userTrack('click',this.pagename,node.name,node.args);
	          }
	          if(node.nextPage && node.nextPage.length>0) {
	            this._app.callTasks([{
	                'module': 'TBONativeModule',
	                'method': 'updateNextPageProperties',
	                'args': node.nextPage
	              }]);
	          }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "events": {
	    "click": "goSourceUrl"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "left"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "source"
	          ],
	          "attr": {
	            "value": "来自"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "source-content"
	          ],
	          "events": {
	            "click": "goCommunityUrl"
	          },
	          "attr": {
	            "value": function () {return this.fields.communityName}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "right"
	      ],
	      "children": [
	        {
	          "type": "component-discuss",
	          "classList": [
	            "discuss"
	          ],
	          "attr": {
	            "fields": function () {return this.fields},
	            "url": function () {return this.fields.commentTargetUrl},
	            "count": function () {return this.fields.commentNum},
	            "pagename": function () {return this.pagename}
	          }
	        },
	        {
	          "type": "component-praise",
	          "classList": [
	            "praise"
	          ],
	          "attr": {
	            "fields": function () {return this.fields},
	            "topicid": function () {return this.fields.topicId},
	            "count": function () {return this.fields.likeNum},
	            "isfavoured": function () {return this.fields.isLike==='true'},
	            "pagename": function () {return this.pagename}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "paddingTop": 17,
	    "paddingBottom": 29,
	    "backgroundColor": "#ffffff"
	  },
	  "left": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "source": {
	    "lines": 1,
	    "fontSize": 24,
	    "color": "#999999",
	    "paddingRight": 12,
	    "paddingLeft": 24
	  },
	  "source-content": {
	    "lines": 1,
	    "fontSize": 24,
	    "color": "#3d68a2",
	    "textOverflow": "ellipsis",
	    "maxWidth": 240
	  },
	  "right": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "praise": {
	    "paddingRight": 24,
	    "paddingLeft": 12
	  },
	  "disscuss": {
	    "paddingRight": 12,
	    "paddingLeft": 12
	  }
	})
	})

/***/ },
/* 25 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/component-discuss", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields:{
	      },
	      count : 0,
	      countShow : '',
	      url : ''
	    }},
	    created : function(isRefresh){
	      var vm = this;
	      vm.updateCount();
	      if (isRefresh) {
	        // this.app.realDiff();
	      }
	    },
	    methods : {
	      updateCount : function() {
	        var vm = this;
	        if(vm.count < 0 || vm.count === '0'){
	          vm.count = 0;
	        }
	        if(vm.count == 0){
	          vm.countShow = '评论';
	        } else if(vm.count < 10000){
	          vm.countShow = vm.count;
	        } else {
	          var x = vm.count/10000;
	          x = parseInt(x*100)/100;
	          if(x == parseInt(x)) {
	            x = parseInt(x);
	          }
	          vm.countShow = x + '万';  
	        }
	      },
	      goUrl : function(){
	        var vm = this;
	        // var ut_name = 'WeiTaoFeedComment';
	        // var ut_params = {
	        //       'account_id': vm.account.id,
	        //       'feed_id': vm.feed.id,
	        //       'feed_type': vm.feed.feedType,
	        //       'feed_Num' : vm.index + 1,
	        //     }
	        // if(vm.feed.scm) {
	        //   ut_params.scm = vm.feed.scm;
	        // }
	        // vm.$userTrack('click','',ut_name,ut_params); 
	        this.utClick(this.fields.utClickInteractCommenter);
	      
	        vm.$openURL(vm.url);
	      },
	      utClick : function(node) {
	          if(!node) {
	            return;  
	          }
	          if(node.name && node.args) {
	            this.$userTrack('click',this.pagename,node.name,node.args);
	          }
	          if(node.nextPage && node.nextPage.length>0) {
	            this._app.callTasks([{
	                'module': 'TBONativeModule',
	                'method': 'updateNextPageProperties',
	                'args': node.nextPage
	              }]);
	          }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "classList": [
	    "discuss"
	  ],
	  "events": {
	    "click": "goUrl"
	  },
	  "children": [
	    {
	      "type": "container",
	      "classList": [
	        "discuss-btn"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "discuss-img"
	          ],
	          "attr": {
	            "src": "//gw.alicdn.com/mt/TB1E10rMXXXXXckXVXXXXXXXXXX-24-24.png"
	          }
	        },
	        {
	          "type": "container",
	          "classList": [
	            "discuss-txt-wrap"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "discuss-txt"
	              ],
	              "attr": {
	                "value": function () {return this.countShow}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "discuss": {
	    "flexDirection": "row",
	    "flex": 1
	  },
	  "discuss-btn": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "marginLeft": 12,
	    "height": 40,
	    "position": "relative",
	    "borderRadius": 20,
	    "borderColor": "#999999",
	    "borderStyle": "solid",
	    "paddingRight": 18,
	    "borderWidth": 1
	  },
	  "discuss-txt": {
	    "color": "#60656f",
	    "fontSize": 20,
	    "textAlign": "center",
	    "flex": 1
	  },
	  "discuss-img": {
	    "width": 24,
	    "height": 24,
	    "marginLeft": 18,
	    "marginRight": 5,
	    "resizeMode": "contain"
	  },
	  "discuss-txt-wrap": {
	    "flex": 1,
	    "minWidth": 40,
	    "alignItems": "center"
	  }
	})
	})

/***/ },
/* 26 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/component-praise", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields:{
	      },
	      count: 0,
	      countShow : '',
	      isfavoured : false,
	      fontColor : '#5f646e',
	      borderColor: '#c5cacd',
	      currentSrc : '',
	      cancelSrc : '//gw.alicdn.com/mt/TB1CGBvMXXXXXc8XFXXXXXXXXXX-24-24.png',
	      addSrc : '//gw.alicdn.com/mt/TB1pw8KMXXXXXXBXXXXXXXXXXXX-24-24.png',
	      topicid :0
	    }},
	    created : function(isRefresh){
	      var vm = this; 
	      nativeLog('praise-data:', vm.topicid,vm.count,vm.isfavoured);
	      if(!vm.count) {
	        vm.count = 0;
	      }
	      vm.count = parseInt(vm.count, 10);
	    
	      vm.updateCountState();
	      
	    },
	    methods : {
	      updateCountState : function(){
	        var vm = this;
	        if(vm.count < 0 || vm.count === '0'){
	          vm.count = 0;
	        }
	        if(vm.count == 0){
	          vm.countShow = '点赞';
	        } else if(vm.count < 10000){
	          vm.countShow = vm.count + 0;
	        } else {
	          var x = vm.count/10000;
	          x = parseInt(x*100)/100;
	          if(x == parseInt(x)) {
	            x = parseInt(x);
	          }
	          vm.countShow = x + '万';  
	        }
	        if(vm.isfavoured){
	          vm.currentSrc = vm.addSrc;
	          vm.fontColor = '#ff5500';
	          vm.borderColor = '#ff5500';
	        } else {
	          vm.currentSrc = vm.cancelSrc;
	          vm.fontColor = '#5f646e';
	          vm.borderColor = '#999999';
	        }
	      },
	      trigger : function(){
	        var vm = this;
	        if(vm.isfavoured){
	          vm.goCancelPraise();
	        }
	        else {
	          vm.goAddPraise();
	        }
	        vm.isfavoured = !vm.isfavoured;
	        vm.updateCountState();
	      },
	      goAddPraise : function(){
	        var vm = this;
	        vm.count++;
	        vm.requestMtop();
	      
	        // var ut_name = 'WeiTaoFeedPraise';
	        // var ut_params = {
	        //       'account_id': vm.account.id,
	        //       'feed_id': vm.feed.id,
	        //       'feed_type': vm.feed.feedType,
	        //       'feed_Num' : vm.index + 1,
	        //     }
	        // if(vm.feed.scm) {
	        //   ut_params.scm = vm.feed.scm;
	        // }
	        // vm.$userTrack('click','',ut_name,ut_params);
	        //nativeLog('weex-feedId', vm.feed.id);
	        this.utClick(this.fields.utClickInteractLike);
	      },
	      goCancelPraise : function(){
	        var vm = this;

	        vm.count--;      
	        vm.requestMtop();
	        this.utClick(this.fields.utClickInteractCancelLike);
	      
	        // var ut_name = 'WeiTaoFeedCancelPraise';
	        // var ut_params = {
	        //       'account_id': vm.account.id,
	        //       'feed_id': vm.feed.id,
	        //       'feed_type': vm.feed.feedType,
	        //       'feed_Num' : vm.index + 1,
	        //     }
	        // if(vm.feed.scm) {
	        //   ut_params.scm = vm.feed.scm;
	        // }
	        // vm.$userTrack('click','',ut_name,ut_params);
	      },
	      requestMtop : function(){
	        var vm = this;
	        if(!vm.isfavoured){
	          vm.$sendMtop({
	            'api' : 'mtop.taobao.bala.like',
	            'v' : '1.0',
	            'needLogin' : true,
	            'ecode': 1,
	            'requestType': 'mtop',
	            'param' : {
	              'action' : '1',
	              'topicId' : vm.topicid
	            }
	          },function(ret){
	            // TODO
	            var retObj = JSON.parse(ret);
	            if (!(retObj.data && retObj.data.success === 'true')) {
	                vm.count--;  
	                vm.isfavoured = !vm.isfavoured;
	                vm.updateCountState();
	            };
	          });
	        }
	        else {
	          vm.$sendMtop({
	            'api' : 'mtop.taobao.bala.like',
	            'v' : '1.0',
	            'needLogin' : true,
	            'ecode': 1,
	            'requestType': 'mtop',
	            'param' : {
	              'action' : '-1',
	              'topicId' : vm.topicid
	            }
	          },function(ret){
	            // TODO
	            var retObj = JSON.parse(ret);
	            if (!(retObj.data && retObj.data.success === 'true')) {
	                vm.count++;  
	                vm.isfavoured = !vm.isfavoured;
	                vm.updateCountState();
	            };
	          });
	        }
	      },
	      utClick : function(node) {
	          if(!node) {
	            return;  
	          }
	          if(node.name && node.args) {
	            this.$userTrack('click',this.pagename,node.name,node.args);
	          }
	          if(node.nextPage && node.nextPage.length>0) {
	            this._app.callTasks([{
	                'module': 'TBONativeModule',
	                'method': 'updateNextPageProperties',
	                'args': node.nextPage
	              }]);
	          }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "container",
	  "events": {
	    "click": "trigger"
	  },
	  "classList": [
	    "praise"
	  ],
	  "children": [
	    {
	      "type": "container",
	      "classList": [
	        "praise-btn"
	      ],
	      "style": {
	        "borderColor": function () {return this.borderColor}
	      },
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "praise-img"
	          ],
	          "attr": {
	            "src": function () {return this.currentSrc}
	          }
	        },
	        {
	          "type": "container",
	          "classList": [
	            "praise-txt-wrap"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "style": {
	                "color": function () {return this.fontColor}
	              },
	              "classList": [
	                "praise-txt"
	              ],
	              "attr": {
	                "value": function () {return this.countShow}
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "praise": {
	    "flexDirection": "row",
	    "flex": 1
	  },
	  "praise-btn": {
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "height": 40,
	    "position": "relative",
	    "borderRadius": 20,
	    "borderStyle": "solid",
	    "paddingRight": 18,
	    "borderWidth": 1,
	    "backgroundColor": "#ffffff"
	  },
	  "praise-img": {
	    "width": 24,
	    "height": 24,
	    "marginLeft": 18,
	    "marginRight": 6,
	    "resizeMode": "contain"
	  },
	  "praise-txt-wrap": {
	    "flex": 1,
	    "minWidth": 40,
	    "alignItems": "center"
	  },
	  "praise-txt": {
	    "fontSize": 20,
	    "textAlign": "center",
	    "minWidth": 40
	  }
	})
	})

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/community-interactive-time", [], function(__weex_require__, __weex_exports__, __weex_module__){
	__webpack_require__(25);
	__webpack_require__(26);

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields:{
	      },
	      timeText:''
	    }},
	    created : function(isRefresh){
	      this.setTimeText();
	      nativeLog('time-data:', this.fields.topicId,this.fields.likeNum,this.fields.isLike);
	    },
	    methods : {
	      setTimeText : function(){
	        var time = parseInt(this.fields.timestamp, 10);
	        var currentDate = new Date(),
	            nowDate = new Date();
	        currentDate.setTime(this.fields.timestamp);
	        var diff = (nowDate.getTime() - time)/1000;
	        if (diff / 3600 <= 1){
	          this.timeText = parseInt( diff / 60 ) + "分钟前";
	        } else if (diff / 3600 <=24) {
	          this.timeText =  parseInt(diff / 3600) + "小时前";
	        } else if (diff / (3600 * 24) <=10) {
	          this.timeText = parseInt( diff / (3600 * 24)) + "天前";
	        } else if (currentDate.getFullYear() != nowDate.getFullYear()){
	          this.timeText =  currentDate.getFullYear() + '-' + (currentDate.getMonth()+1)  + '-' + currentDate.getDate();  
	        } 
	        else {
	          this.timeText =   (currentDate.getMonth()+1) + '-' + currentDate.getDate();  
	        }
	      },
	       goSourceUrl : function(){
	        var vm = this;
	        // var ut_name = 'WeiTaoFeedComment';
	        // var ut_params = {
	        //       'account_id': vm.account.id,
	        //       'feed_id': vm.feed.id,
	        //       'feed_type': vm.feed.feedType,
	        //       'feed_Num' : vm.index + 1,
	        //     }
	        // if(vm.feed.scm) {
	        //   ut_params.scm = vm.feed.scm;
	        // }
	        // vm.$userTrack('click','',ut_name,ut_params); 
	        this.utClick(this.fields.utClickCommunityInteractSource);
	        vm.$openURL(vm.fields.targetUrl);
	      },
	      utClick : function(node) {
	          if(!node) {
	            return;  
	          }
	          if(node.name && node.args) {
	            this.$userTrack('click',this.pagename,node.name,node.args);
	          }
	          if(node.nextPage && node.nextPage.length>0) {
	            this._app.callTasks([{
	                'module': 'TBONativeModule',
	                'method': 'updateNextPageProperties',
	                'args': node.nextPage
	              }]);
	          }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "main"
	  ],
	  "events": {
	    "click": "goSourceUrl"
	  },
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "left"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon"
	          ],
	          "attr": {
	            "src": "//img.alicdn.com/tps/TB1bbHTKFXXXXbpXVXXXXXXXXXX-42-42.png"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "time"
	          ],
	          "attr": {
	            "value": function () {return this.timeText}
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "classList": [
	        "right"
	      ],
	      "children": [
	        {
	          "type": "component-discuss",
	          "classList": [
	            "discuss"
	          ],
	          "attr": {
	            "fields": function () {return this.fields},
	            "url": function () {return this.fields.commentTargetUrl},
	            "count": function () {return this.fields.commentNum},
	            "pagename": function () {return this.pagename}
	          }
	        },
	        {
	          "type": "component-praise",
	          "classList": [
	            "praise"
	          ],
	          "attr": {
	            "fields": function () {return this.fields},
	            "count": function () {return this.fields.likeNum},
	            "isfavoured": function () {return this.fields.isLike==='true'},
	            "topicid": function () {return this.fields.topicId},
	            "pagename": function () {return this.pagename}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "alignItems": "center",
	    "justifyContent": "space-between",
	    "paddingTop": 17,
	    "paddingBottom": 29,
	    "backgroundColor": "#ffffff"
	  },
	  "left": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "icon": {
	    "width": 32,
	    "height": 32,
	    "marginRight": 12,
	    "marginLeft": 24
	  },
	  "time": {
	    "lines": 1,
	    "fontSize": 20,
	    "color": "#999999",
	    "textOverflow": "ellipsis",
	    "maxWidth": 240
	  },
	  "right": {
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "alignItems": "center"
	  },
	  "praise": {
	    "paddingRight": 24,
	    "paddingLeft": 12
	  },
	  "disscuss": {
	    "paddingRight": 12,
	    "paddingLeft": 12
	  }
	})
	})

/***/ },
/* 28 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/richtext", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data: function () {return {
	      bold:"WXTextWeightBold",
	      marginLeft: "102",
	      richTextInfos: [],
	      titles: '',
	      defaultUrl: '',
	      isShowTxt: false,
	      utParams: {},
	      fields: {
	        picTop:"0"
	      },
	      picPadding:"",
	      rowMax:""
	    }},
	    created: function(isRefresh) {
	      var vm = this;
	      var richTextInfos = vm.fields.richTextInfos || [];
	      var start = 0;
	      var name = '';
	      vm.marginLeft = vm.styles ? (vm.styles.marginLeft ? vm.styles.marginLeft : "24") : "24"
	      vm.picPadding = vm.fields.picPadding || "3"
	      vm.rowMax = vm.fields.rowMax
	      if (richTextInfos.length == 0) {
	        vm.isShowTxt = false;
	        return;
	      }
	      vm.bold = richTextInfos.some(function(v){return v.bold === 'true'}) ? "WXTextWeightBold" : "WXTextWeightNormal"

	      vm.defaultUrl = vm.fields.targetUrl;
	      if (richTextInfos && richTextInfos.length > 0) {

	        vm.richTextInfos = richTextInfos;
	      } else {
	        vm.richTextInfos = [];
	      }

	      vm.isShowTxt = true;

	      if (isRefresh) {
	        // this.app.realDiff();
	      }
	    },
	    methods: {
	      goDetail: function() {
	        var vm = this;
	        // var ut_name = 'WeiTaoFeedComment';
	        // var ut_params = {
	        //       'account_id': vm.account.id,
	        //       'feed_id': vm.feed.id,
	        //       'feed_type': vm.feed.feedType,
	        //       'feed_Num' : vm.index + 1,
	        //     }
	        // if(vm.feed.scm) {
	        //   ut_params.scm = vm.feed.scm;
	        // }
	        // vm.$userTrack('click','',ut_name,ut_params); 
	        this.utClick(this.fields.utClickRichText);
	        vm.$openURL(vm.fields.targetUrl);
	      },
	      utClick: function(node) {
	        if (!node) {
	          return;
	        }
	        if (node.name && node.args) {
	          this.$userTrack('click', this.pagename, node.name, node.args);
	        }
	        if (node.nextPage && node.nextPage.length > 0) {
	          this._app.callTasks([{
	            'module': 'TBONativeModule',
	            'method': 'updateNextPageProperties',
	            'args': node.nextPage
	          }]);
	        }
	      }
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "style": {
	    "backgroundColor": "#ffffff"
	  },
	  "events": {
	    "click": "goDetail"
	  },
	  "children": [
	    {
	      "type": "mocrichtext",
	      "attr": {
	        "value": "",
	        "fontsize": function () {return this.bold},
	        "defaulturl": function () {return this.defaultUrl},
	        "richtextinfos": function () {return this.richTextInfos},
	        "rowmax": function () {return this.fields.rowMax},
	        "linespacing": "6",
	        "picpadding": "3",
	        "pictop": function () {return this.fields.picTop}
	      },
	      "style": {
	        "marginLeft": function () {return (this.marginLeft) + 'px'},
	        "marginTop": function () {return (this.styles.marginTop||0) + 'px'},
	        "marginBottom": function () {return (this.styles.marginBttom||15) + 'px'}
	      },
	      "classList": [
	        "main-summary"
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "main-summary": {
	    "marginRight": 24,
	    "fontSize": 32,
	    "color": "#051b28",
	    "marginTop": 0,
	    "borderWidth": 0
	  }
	})
	})

/***/ },
/* 29 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/separator", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __weex_module__.exports = {
	    data : function () {return {
	      fields:{
	      },
	      styles:{
	      },
	      height:"20",
	      color:'#f4f4f4'
	    }},
	    created : function(isRefresh){
	      if(this.styles && this.styles.height) {
	        this.height = parseInt(this.styles.height, 10);    
	      }
	      if(this.styles && this.styles.color) {
	        this.color =this.styles.color;    
	      }
	    },
	    methods : {
	      
	    }
	  };

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "div",
	      "style": {
	        "height": function () {return (this.height) + 'px'},
	        "backgroundColor": function () {return this.color}
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "line": {
	    "width": 750,
	    "marginLeft": 0,
	    "height": 1,
	    "backgroundColor": "#dfdfdf"
	  },
	  "line-shade": {
	    "width": 750,
	    "marginLeft": 0,
	    "height": 1,
	    "backgroundColor": "#ebebeb"
	  }
	})
	})

/***/ },
/* 30 */
/***/ function(module, exports) {

	;__weex_define__("@weex-component/community-single-img", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
		__weex_module__.exports = {
			data: function () {return {
				adjustHeight:''
			}},
			created:function(){
				this.adjustHeight = Math.round(parseInt(this.fields.picHeight) / parseInt(this.fields.picWidth) * 702);
			},
			methods: {
				showImg: function(e){
					var vm = this
					var utData = vm.fields.utClickImage
					if(utData && utData.name){
						vm.$userTrack('click',vm.pagename,utData.name,utData.args)
						// console.log(['click',utData.name,'',utData.args])
					}
					if(vm.fields.showPreviewLayer === "true") {
						vm._app.callTasks([{
							'module': 'TBONativeModule',
							'method': 'showPicView',
							'args': [{
								'imagePathArray': [vm.fields.pic],
								'index': 0,
							}]
						}]);
					}
				}
			}
		}

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "single-img-container"
	  ],
	  "children": [
	    {
	      "type": "image",
	      "attr": {
	        "src": function () {return this.fields.pic}
	      },
	      "style": {
	        "backgroundColor": "#ffffff",
	        "width": 702,
	        "height": function () {return (this.adjustHeight) + 'px'}
	      },
	      "events": {
	        "click": "showImg"
	      }
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "single-img-container": {
	    "width": 702,
	    "paddingLeft": 24,
	    "paddingRight": 24,
	    "backgroundColor": "#ffffff"
	  }
	})
	})

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/community-icon-askquestion", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	    var util = __webpack_require__(5)
	    var MODAL = __weex_require__('@weex-module/modal')
	    __weex_module__.exports = {
	        data: function () {return {
	            'iconInvite':'//gw.alicdn.com/tps/TB1mnobNXXXXXaeXVXXXXXXXXXX-57-57.png',
	            'icon_gray': '//gw.alicdn.com/tps/TB1NJMlLXXXXXchXXXXXXXXXXXX-64-64.png',
	            'icon_orange': '//gw.alicdn.com/tps/TB1bWUnLXXXXXbaXXXXXXXXXXXX-64-64.png',
	            'inviteUrl': '//h5.m.taobao.com/wendajia/weex.html?_wx_tpl=https://g.alicdn.com/mtb/app-community-invite/p/invite/entry-min.js',
	            'isAsked': false,
	            'asqNum': '',
	            "text":"",
	            fields:{},
	            "log":"",
	            "color":"#666",
	            "colorInvite":"#666",
	            "icon":""
	        }},
	        created: function() {
	            var vm = this
	            var isAsked = vm.fields.isAsked === "true" ? !0 : !1
	            vm.isAsked = isAsked;
	            vm.icon = isAsked ? vm.icon_orange : vm.icon_gray
	            vm.color = isAsked ? "#ff5000" : "#666666"
	            vm.asqNum = vm.fields.questionAskedNum;
	            vm.setText(vm.asqNum)
	        },
	        methods: {
	            adjustNum: function(num) {
	                var cal = parseInt(num);
	                if(cal === 0)return '';
	                if (cal > 10000) {
	                    cal = cal / 10000;
	                    cal = cal.toFixed(1) + '万';
	                }
	                return cal;
	            },
	            setText: function(asqNum){
	                var vm = this
	                if(asqNum === "0")vm.text = '';
	                else vm.text = util.fixNumber(vm.asqNum)
	            },
	            askToo: function(e){
	                var vm = this
	                var systemSoundModule = __weex_require__('@weex-module/systemSound');
	                systemSoundModule && systemSoundModule.play && systemSoundModule.play({"type":"favorite"});
	                // utClickAsk: {
	                // args: {
	                // action: "1",
	                // Question_id: "4007053479"
	                // },
	                // name: "Page_WdjQuestionDetail_Button-AskToo"
	                // },
	                var utData = vm.fields.isAsked === "false" ? vm.fields.utClickAsk : vm.fields.utClickUnAsk
	                if(utData && utData.name){
	                    vm.$userTrack('click',vm.pagename,utData.name,utData.args)
	                }
	                vm.$sendMtop && vm.$sendMtop({
	                    'api' : "mtop.taobao.bala.like",
	                    'v' : "1.0",
	                    'needLogin' : !0,
	                    'ecode': 1,
	                    'requestType': 'mtop',
	                    'param' : {
	                        feedId: vm.fields.questionId,
	                        action: vm.fields.isAsked === "false" ? "1" : "-1"
	                    }
	                },function(res){
	                    if (typeof res === 'string') { // 判断类型
	                        res = JSON.parse(res);
	                    }
	                    if(res.ret && (res.ret[0] !== "SUCCESS::调用成功"))return;
	                    /*
	                    * 如果已经点赞，将取消点赞效果
	                    */
	                    if(vm.fields.isAsked === "true"){
	                        vm.asqNum = '' + ((+vm.asqNum) - 1)
	                        vm.fields.isAsked = "false"
	                        vm.color = "#666666"
	                        vm.icon = vm.icon_gray
	                    }else if(vm.asqNum !== ''){
	                        /*
	                        * 如果没有点赞，将添加点赞效果
	                        */
	                        vm.asqNum = '' + ((+vm.asqNum) + 1)
	                        vm.fields.isAsked = "true"
	                        vm.color = "#ff5000"
	                        vm.icon = vm.icon_orange
	                    }
	                    vm.setText(vm.asqNum)
	                })
	                
	            },
	            invite: function(e){
	                var vm = this
	                var questionId = vm.fields.questionId
	                var utClickInvite = vm.fields.utClickInvite
	                utClickInvite && vm.$userTrack('click',vm.pagename,utClickInvite.name,utClickInvite.args)
	                vm.fields.canInvite === 'true' ? vm.$openURL(vm.inviteUrl + '&questionId='+questionId) : MODAL.toast({message: vm.fields.inviteToast,duration: 1 })
	            }
	        }
	    }

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "div",
	  "classList": [
	    "icon-askqs-container"
	  ],
	  "children": [
	    {
	      "type": "text",
	      "style": {
	        "width": 750
	      },
	      "shown": function () {return this.log},
	      "attr": {
	        "value": function () {return this.log}
	      }
	    },
	    {
	      "type": "div",
	      "events": {
	        "click": "invite"
	      },
	      "classList": [
	        "icon-box",
	        "icon-invite-btn"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon-eye"
	          ],
	          "attr": {
	            "src": function () {return this.iconInvite}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "icon-txt"
	          ],
	          "style": {
	            "color": "#666666"
	          },
	          "attr": {
	            "value": "邀请达人回答"
	          }
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "events": {
	        "click": "askToo"
	      },
	      "classList": [
	        "icon-box",
	        "icon-askqs-btn"
	      ],
	      "children": [
	        {
	          "type": "image",
	          "classList": [
	            "icon-eye"
	          ],
	          "attr": {
	            "src": function () {return this.icon}
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "icon-txt"
	          ],
	          "style": {
	            "color": function () {return this.color}
	          },
	          "attr": {
	            "value": "关注此问题"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "icon-num"
	          ],
	          "style": {
	            "color": function () {return this.color}
	          },
	          "attr": {
	            "value": function () {return this.text}
	          }
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "icon-askqs-container": {
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "stretch",
	    "width": 750,
	    "backgroundColor": "#ffffff",
	    "borderTopWidth": 1,
	    "borderTopStyle": "solid",
	    "borderTopColor": "#eeeeee"
	  },
	  "icon-askqs-btn": {
	    "backgroundColor": "#ffffff",
	    "borderLeftWidth": 1,
	    "borderLeftStyle": "solid",
	    "borderLeftColor": "#eeeeee"
	  },
	  "icon-eye": {
	    "height": 38,
	    "width": 38,
	    "marginRight": 10
	  },
	  "icon-box": {
	    "flex": 1,
	    "height": 90,
	    "flexDirection": "row",
	    "justifyContent": "center",
	    "alignItems": "center"
	  },
	  "icon-txt": {
	    "fontSize": 28,
	    "lineHeight": 28,
	    "marginRight": 10
	  },
	  "icon-num": {
	    "fontSize": 28
	  }
	})
	})

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var _a = {}
	var userTrack
	_a.r = __webpack_require__(33)
	try{
	userTrack = _a.r('@weex-module/userTrack')
	}catch(e){}
	module.exports = {
	  data: function () {
	   
	    return {
	      answerButton: {
	        show: "",//提问详情页底部回答按钮
	        height: "0",
	        info: {}
	      },
	      log: "",
	      apiName: "",
	      pageName: "",
	      pgName:"",
	      cacheKey: "",
	      apiVersion: "",
	      pageSize: 10,
	      style: {
	        marginLeft: ""
	      },
	      cacheList: [],
	      feedList: [],
	      rawData: [],
	      isLoading: false,
	      isEnd: false,
	      spm: "",
	      cacheInterval:14400000,//4小时
	      currentPage: 1,
	      needLogin: false,
	      params: {},
	      linkage: {}, //服务端上下文信息
	      exposureKeys: {
	        'communityHeader': 'utExposureCommunityHeader',
	      },
	      adExposureTags: {
	        'communityIndividuationCircle': '1',
	        'communityRambleCircle': '1',
	        'communityPicAd': '1',
	        'communitySeparator': '1',
	        'communityBanner': '1',
	        'communityStroll': '1',
	        'communityEditorRec': '1',
	        'communityNotice': '1'
	      },
	      actions: [],
	      loadmoreretry: 0,
	      communityid: ''
	    }
	  },
	  created: function (isRefresh) {
	    var vm = this

	    if (vm.params.debug) {
	      var debug = {
	        // apiName: "mtop.taobao.ocean.circle.tab",
	        apiName:"mtop.taobao.quora.question.detail",
	        apiVersion: "1.0",
	        // cacheKey: "b0f48e8b4f4ee582fad4f68ebc66e99e",
	        pageName: "Page_TBOceanWeexList",
	        pageSize: 5,
	        params: { "questionId": "4053126144", "tab_id": "570", "pageName": "Page_OceanHome", "spm": "a21g2.8119707", "currentPage": 1, "trackId": "570", "linkage": {}, "topicTagId": "0", "_pageType": "1", "styleType": "0", "home": "200", "spm-url": "", "pageSize": "5" }
	      }
	      vm.apiName = debug.apiName
	      vm.apiVersion = debug.apiVersion
	      vm.pageSize = debug.pageSize
	      vm.params = debug.params
	    }


	    /**
	     * 已经加载了的list
	     */
	    // !vm.loadedList && (vm.loadedList = [])
	    /**
	     * ？bug pagename传不进去
	     */
	    vm.pgName = vm.pageName
	    /**
	     * 尝试读取缓存,
	     * 没有缓存的情况会怎样？
	     */
	    var start = (+new Date)
	    // vm._log('getCache:' + start)
	    vm.apiName === "mtop.taobao.ocean.circle.tab" ? vm.$call('TBONativeModule', 'getCache', {
	      'cacheKey': vm.cacheKey
	    }, function (cache) {
	      // vm._log('___cacheDate')
	      cache = cache || {}
	      var list = cache.list
	      var date = cache._cacheDate
	      var now = (+new Date)
	      /**
	       * 四小时
	       */
	      vm._reWrite = now - date > (+vm.cacheInterval)
	      if (list && list.length > 0 && list[0].subList) {
	        /**
	         * 读取缓存后埋点的pageName会丢失
	         */
	        vm.pgName = cache.pageName || vm.pageName
	        vm.feedList = list;
	        // vm._log('getCache--end:' + ((+new Date) - start))
	        vm.reloadData('cache')
	      }else{
	        // vm._log('__'+'nononono')
	        vm.reloadData()
	      }
	      // vm._log(vm._reWrite+':vm._reWrite:'+date)
	      
	    }) : vm.reloadData()
	    // vm._log('created')
	    // vm.reloadData()
	    console.log('created')
	  },
	  methods: {
	    reloadData: function (cache) {
	      var vm = this;
	      if (vm.isLoading) return;
	      if (cache !== 'cache') vm._reWrite = !0
	      vm.currentPage = 1;
	      vm.isEnd = false;
	      vm.linkage = {};
	      console.log('reload')
	      vm.nextPage('reload');
	      // ?没有用到
	      vm.loginfo = vm.currentPage + ' ' + vm.isEnd
	    },
	    nextPage: function () {
	      var vm = this;
	      var param = vm.params;
	      if (vm.isEnd || (vm.isLoading && vm.currentPage > 1)) { //第一页请求永不抛弃
	        return;
	      }
	      vm.isLoading = true;
	      param.currentPage = vm.currentPage;
	      param.pageSize = vm.pageSize;
	      // param.pageSize = 10
	      param.linkage = vm.linkage;
	      console.log('nextPage', param)
	      vm.fetch(param)
	    },
	    fetch: function (param) {
	      var vm = this
	      if (typeof window !== 'undefined') {
	        if (window.location && window.location.href.indexOf('mock=true') > -1) {
	          return vm._success(this.mock || {});
	        }
	      }
	      var start = +new Date
	      // vm._log('mtop-send-start111:' + start)
	      vm.$sendMtop({
	        'api': vm.apiName,
	        'v': vm.apiVersion,
	        'needLogin': vm.needLogin,
	        'ecode': vm.needLogin ? 1 : 0,
	        'requestType': 'mtop',
	        'param': param
	      }, function (res) {
	        var end = +new Date
	        // vm._log('mtop-send-end:' + (end - start))
	        if (typeof res === 'string') { // 判断类型
	          res = JSON.parse(res);
	        }
	        // res.ret && res.ret[0] && vm._log('fetch:--' + JSON.stringify(res.ret, null, '\t'))
	        res.ret && (res.ret[0] === "SUCCESS::调用成功") ? vm._success(res, param) : vm._failure(res)
	      })
	      
	      // vm._log(start +'：mtop-send-end2222222')
	    },
	    _success: function (res, param) {
	      var vm           = this
	      var feedData     = res.data
	      if (!feedData) return vm._failure(res);
	      var isFirstPage  = (+param.currentPage) === 1
	      vm.currentPage   = (+param.currentPage) + 1;
	      vm.loadmoreretry = (+vm.loadmoreretry) + 1;
	      vm.linkage       = feedData.linkage

	      var custom       = feedData.custom
	      if (custom) {
	        vm.isEnd       = custom.hasMore === 'false' ? true: false
	        vm.actions     = custom.actions
	        vm.pgName      = custom.pageName || vm.pageName
	        vm.pageName    = vm.pgName
	        vm.spm         = custom.spm
	        vm.communityid = custom.community && custom.community.id
	      }
	      var feedList = feedData.list
	      var loadedList = []
	      /**
	       * 如果是第一页，将清空原来的数据，不然reload会有问题
	       */
	      !isFirstPage && [].push.apply(loadedList, vm.feedList);
	      /**
	       * [Array] 带subList数组的feedList
	       */
	      var newList = Array.isArray(feedList) ? vm.genFeedList(feedList) : []
	      /**
	       * 已经加载的长度
	       */
	      var loadedLn = loadedList.length
	      newList.forEach(function (newFeed, i) {
	        newFeed.index = i + loadedLn
	      })
	      ;[].push.apply(loadedList, newList);
	      newList = null;
	      if (isFirstPage) {
	        console.log('isFirstPage', isFirstPage)
	        vm._app.callTasks([{
	          'module': 'TBONativeModule',
	          'method': 'fristPage',
	          'args': [{
	            'feedCount': loadedList.length,
	            'data': feedData,
	            'mtopError': false
	          }]
	        }]);
	        var _now = +new Date
	        vm._app.callTasks([{
	          'module': 'TBONativeModule',
	          'method': 'saveCache',
	          'args': [{
	            'cacheKey': vm.cacheKey,
	            'list': { _cacheDate: _now,list: loadedList,pageName:vm.pgName}
	          }]
	        }]);
	      }
	      /**
	       * 缓存超时，没有数据了
	       */
	      if(vm._reWrite){
	        vm.feedList = loadedList
	      }
	      
	      vm.isLoading = false;
	      vm._inThetop = !1
	      if (!loadedList.length || vm.isEnd) return;
	      /**
	       * 数据太少了
	       */
	      ; (vm.feedList.length < 2) && (vm.currentPage === 2) && vm.nextPage()

	    },
	    _failure: function (ret) {
	      var vm = this
	      vm._app.callTasks([{
	        'module': 'TBONativeModule',
	        'method': 'fristPage',
	        'args': [{
	          'feedCount': vm.feedList.length,
	          'data': ret,
	          'mtopError': true
	        }]
	      }])

	      vm.isLoading = false;
	      vm._inThetop = !1
	    },
	    _genFeedList: function (rawList) {
	      var feedList = [];
	      if (rawList.length == 1) {
	        return feedList;
	      }
	      var i = 0;
	      if (rawList[0].tag === 'root') {
	        i = 1;
	      }
	      while (i < rawList.length) {
	        var subList = [];
	        var groupId = rawList[i].fields.groupId;
	        subList.push(rawList[i]);
	        i++;
	        while (i < rawList.length && groupId === rawList[i].fields.groupId) {
	          subList.push(rawList[i]);
	          i++;
	        }
	        feedList.push({
	          "groupId": groupId,
	          "subList": subList,
	          "id": subList[0].id
	        });
	      }
	      return feedList;
	    },
	    genFeedList: function (rawList) {
	      var feedList = [];
	      if (rawList.length === 1) return feedList;
	      var feedObj = {}
	      var gounpIndex = 0
	      var lastGroupId = ""
	      rawList.forEach(function (feed, i) {
	        /**
	         * 剔除 root
	         */
	        if (i === 0 && feed.tag === 'root') return;
	        var groupId = feed.fields.groupId || feed.id
	        // if(groupId === lastGroupId){
	        //     gounpIndex = '' + ((+gounpIndex) + 1)
	        // }
	        // var subList = []
	        var thisGroup = feedObj[groupId]
	        if (!thisGroup) {
	          thisGroup = feedObj[groupId] = []
	          feedList.push({
	            "groupId": groupId,
	            "subList": thisGroup,
	            "id": feed.id
	          })
	        }
	        thisGroup.push(feed)
	      })
	      return feedList;
	    },
	    onAppear: function (e) {
	      console.log('apppppppppp')
	      var vm = this;
	      var feedList = []
	        ;[].push.apply(feedList, vm.feedList)

	      var index = e.target.attr.index;
	      var feed = feedList[index]
	      /**
	       * ?什么情况会小于index
	       */
	      if (feedList.length < index || feed.isAppeared) return;

	      feed.isAppeared = !0;
	      Array.isArray(feed.subList) && feed.subList.forEach(function (sublist) {
	        var tag = sublist.tag
	        var fields = sublist.fields
	        if (!fields || !tag) return;

	        /* 两种埋点 */
	        /**
	         * 第一种埋点
	         */
	        var adExposureKey = vm.adExposureTags[tag] || 'no'

	        // vm._log(tag + '+adExposureKey')
	        var utName = 'Show-Card';
	        var utParams = {
	          'ad_id': fields.adId,
	          'spm': vm.spm + '.' + fields.cardType + '.0',
	          'page': vm.pgName,
	          'community_id': vm.communityid,
	          'position': index
	        }
	        var args = adExposureKey === '1' ? ['expose', vm.pgName + "_" + utName, '', utParams] : !1

	        /**
	         * 第二种埋点
	         */

	        var exposureKey = vm.exposureKeys[tag]
	        var utItem = fields[exposureKey] || {}
	        // vm._log(JSON.stringify(utItem) + ' +exposureKey')
	        if (adExposureKey !== '1' && utItem.name && utItem.args) {
	          utItem.args.position = index
	          args = ['expose', vm.pgName + "_" + utItem.name, '', utItem.args]
	        }
	        // console.log(args,'append',new Date)
	        /**
	         * 埋点发射 biu biu biu
	         */
	        if(userTrack){
	        console.log(1111)
	          args && userTrack.commit.apply(vm, args)
	        }else{
	          args && vm.$userTrack.apply(vm, args)
	        console.log(222)
	        }
	        
	      })
	    },
	    showTips: function (count) {
	      var vm = this;
	      if (count <= 0) {
	        return;
	      }
	      var txt = '';
	      if (count > 100) {
	        txt = "已获取 99+ 新动态";
	      } else {
	        txt = "已获取 " + count + " 条新动态";
	      }
	      this.$call('WeiTaoTimeLineModule', 'showTips', { 'tips': txt });
	    },
	    loadMore: function (e) {
	      var vm = this;
	      
	      console.log(e, 'weexList  loadMoreAction');
	      // vm._log(vm.isLoading + 'weexList  loadMoreAction: '+vm.currentPage)

	      if (!vm.isLoading) {
	        vm._reWrite = !0
	        vm.nextPage();
	      }

	    },
	    _log: function (m) {
	      this.__log = this.__log || []
	      this.__log.push(m)
	      this.log = this.__log.join('\n')
	    },
	    goClickCell: function (e) {
	      var index = e.target.attr.index;
	      if (this.feedList.length < index) {
	        return;
	      }
	      this.setTop({ "groupId": this.feedList[index].fields.groupId, "top": 0 });
	    },

	    getRichTextIndex: function (params) {
	      var vm = this;
	      var i = 0;

	      for (i = 0; i < vm.feedList.length; i++) {
	        if (vm.feedList[i].fields.groupId === params.groupId) {
	          break;
	        }
	      }
	      if (i == vm.feedList.length) {
	        return -1;
	      }
	      var richTextId = '';
	      if (!vm.feedList[i].fields ||
	        !vm.feedList[i].fields.actionDatas ||
	        !vm.feedList[i].fields.actionDatas.richTextId) {
	        return -1;
	      }
	      var richtextId = vm.feedList[i].fields.actionDatas.richTextId;
	      for (; i < vm.feedList.length; i++) {
	        if (vm.feedList[i].id === richtextId) {
	          break;
	        }
	      }
	      if (i == vm.feedList.length) {
	        return -1;
	      }
	      return i;
	    },
	    /**
	     * 提问后上墙
	    */
	    inTheTop: function (params) {
	      var vm = this
	      var oParams = {}
	      var _params = vm.params
	      vm._inthetop = !0
	      vm.feedList = []
	      Object.keys(vm.params).forEach(function (name) {
	        oParams[name] = _params[name]
	      })
	      /** 上墙只加载第一页，不管当前加载到的是第几页 **/
	      oParams.currentPage = 1;
	      vm.currentPage = 1
	      oParams.isEnd = false;
	      oParams.linkage = {};
	      oParams.loginfo = vm.currentPage + ' ' + vm.isEnd
	      oParams.firstAnswerId = params.id
	      vm.fetch(oParams, 'inthetop')
	      // nativeLog('--inTheTop')
	      // nativeLog(JSON.stringify(oParams))
	      // nativeLog('--inTheTop')
	    },
	    setTop: function (params) {
	      var vm = this;

	      var i = this.getRichTextIndex(params);
	      // nativeLog('weexList  setTop BEGIN top:', params.top, i, JSON.stringify(params));
	      if (i < 0 || i > this.feedList.length) {
	        return;
	      }
	      var item = vm.feedList[i];
	      var index = -1;
	      for (var j = 0; j < item.fields.richTextInfos.length; j++) {
	        if (item.fields.richTextInfos[j].type === 'pic' &&
	          item.fields.richTextInfos[j].desc === 'top') {
	          index = j;
	          break;
	        }
	      }
	      // nativeLog('weexList  setTop richTextInfos1:', JSON.stringify(item.fields.richTextInfos));
	      if (params.top) {
	        if (index == -1) {
	          var icon = {
	            "path": "https://img.alicdn.com/tps/TB1gKtKLVXXXXXgaXXXXXXXXXXX-54-54.png",
	            "width": "20",
	            "height": "20",
	            "desc": "top",//对富文本的描述
	            "type": "pic",
	          };
	          item.fields.richTextInfos.unshift(icon);
	        }
	      } else {
	        if (index > -1) {
	          item.fields.richTextInfos.splice(index, 1);
	        }
	      }
	      // nativeLog('weexList  setTop richTextInfos2:', JSON.stringify(item.fields.richTextInfos));

	    },
	    setElite: function (params) {
	      var vm = this;
	      // nativeLog('weexList  setElite:', JSON.stringify(params));

	      var i = this.getRichTextIndex(params);
	      if (i < 0 || i > this.feedList.length) {
	        return;
	      }
	      var item = vm.feedList[i];
	      var index = -1;
	      for (var j = 0; j < item.fields.richTextInfos.length; j++) {
	        if (item.fields.richTextInfos[j].type === 'pic' &&
	          item.fields.richTextInfos[j].desc === 'elite') {
	          index = j;
	          break;
	        }
	      }
	      if (params.elite) {
	        if (index == -1) {
	          var icon = {
	            "path": "https://img.alicdn.com/tps/TB1gKtKLVXXXXXgaXXXXXXXXXXX-54-54.png",
	            "width": "20",
	            "height": "20",
	            "desc": "top",//对富文本的描述
	            "type": "elite",
	          };
	          item.fields.richTextInfos.unshift(icon);
	        }
	      } else {
	        if (index > -1) {
	          item.fields.richTextInfos.splice(index, 1);
	        }
	      }
	      // nativeLog('weexList  setElite richTextInfos2:', JSON.stringify(item.fields.richTextInfos));
	    },
	    removeCard: function (params) {
	      var vm = this;
	      //nativeLog('weexList  removeCard',params.accountId);
	      for (var i = 0; i < vm.feedList.length; i++) {
	        if (vm.feedList[i].groupId === params.groupId) {
	          var endIndex = i;
	          while (endIndex < vm.feedList.length && vm.feedList[endIndex++].groupId === params.groupId);
	          vm.feedList.splice(i, endIndex - i);
	          return;
	          //nativeLog('weexList  removeCard OK',params.accountId);
	        }
	      }
	      //nativeLog('weexList  removeCard fail',params.accountId); 
	    }
	  }
	}

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./entry.we": 34,
		"./index": 32,
		"./index.js": 32
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 33;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	;__weex_define__("@weex-component/entry", [], function(__weex_require__, __weex_exports__, __weex_module__){

	;
	  __webpack_require__(1)

	  __webpack_require__(2)
	  __webpack_require__(3)
	  __webpack_require__(6)
	  __webpack_require__(8)
	  __webpack_require__(9)
	  __webpack_require__(10)
	  __webpack_require__(11)
	  __webpack_require__(12)
	  __webpack_require__(13)
	  __webpack_require__(14)
	  __webpack_require__(15)
	  __webpack_require__(16)
	  __webpack_require__(17)
	  __webpack_require__(18)
	  __webpack_require__(19)
	  __webpack_require__(20)
	  __webpack_require__(21)
	  __webpack_require__(22)
	  __webpack_require__(23)
	  __webpack_require__(24)
	  __webpack_require__(27)
	  __webpack_require__(28)
	  __webpack_require__(29)
	  __webpack_require__(4)

	  __webpack_require__(30)
	  __webpack_require__(31)
	  __weex_module__.exports = __webpack_require__(32)

	;__weex_module__.exports.template = __weex_module__.exports.template || {}
	;Object.assign(__weex_module__.exports.template, {
	  "type": "list",
	  "events": {
	    "loadmore": "loadMore",
	    "setelite": "setElite",
	    "settop": "setTop",
	    "inthetop": "inTheTop",
	    "removecard": "removeCard",
	    "reloaddata": "reloadData"
	  },
	  "attr": {
	    "loadmoreretry": function () {return this.loadmoreretry},
	    "loadmoreoffset": "300"
	  },
	  "children": [
	    {
	      "type": "cell",
	      "append": "tree",
	      "repeat": function () {return this.feedList},
	      "attr": {
	        "trackBy": "id",
	        "scope": function () {return this.tag}
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {
	            "index": function () {return this.index}
	          },
	          "repeat": function () {return this.subList},
	          "style": {
	            "width": 750
	          },
	          "events": {
	            "appear": "onAppear"
	          },
	          "children": [
	            {
	              "type": "community-answer-header",
	              "shown": function () {return this.tag==='answerHeader'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-hot-header",
	              "shown": function () {return this.tag==='questionSeparator'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "cycle-buyshare",
	              "shown": function () {return this.tag==='communityImageApp'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-report",
	              "id": "onlyOneQuestionReport",
	              "shown": function () {return this.tag==='questionReport'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-interact",
	              "shown": function () {return this.tag==='interact'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-anwser-interactive",
	              "shown": function () {return this.tag==='answerInteract'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-single-img",
	              "shown": function () {return this.tag==='image'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-icon-askquestion",
	              "shown": function () {return this.tag==='askThisQuestion'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-question",
	              "shown": function () {return this.tag==='hotQuestion'},
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid},
	                "border": function () {return this.style.borderBottom}
	              }
	            },
	            {
	              "type": "community-notice",
	              "shown": function () {return this.tag==='communityNotice'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-recommend",
	              "shown": function () {return this.tag==='communityIndividuationCircle'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-ramble-circle",
	              "shown": function () {return this.tag==='communityRambleCircle'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-operation-card",
	              "shown": function () {return this.tag==='communityPicAd'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-separator",
	              "shown": function () {return this.tag==='communitySeparator'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-banner",
	              "shown": function () {return this.tag==='communityBanner'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-stroll-text",
	              "shown": function () {return this.tag==='communityStroll'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-editor-rec",
	              "shown": function () {return this.tag==='communityEditorRec'},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "pagename": function () {return this.pgName},
	                "spm": function () {return this.spm},
	                "communityid": function () {return this.communityid}
	              }
	            },
	            {
	              "type": "community-icon-text",
	              "shown": function () {return this.tag==='iconText'},
	              "id": function () {return this.id},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "community-header",
	              "shown": function () {return this.tag==='communityHeader'},
	              "id": function () {return this.id},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "actions": function () {return this.actions},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "community-grid",
	              "shown": function () {return this.tag==='gridsMultimedia'},
	              "id": function () {return this.id},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "margin": function () {return this.style.marginLeft},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "community-share-item",
	              "shown": function () {return this.tag==='communityItemShare'},
	              "id": function () {return this.id},
	              "style": {
	                "width": 750
	              },
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "margin": function () {return this.style.marginLeft},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "community-interactive-source",
	              "shown": function () {return this.tag==='communityInteractSource'},
	              "style": {
	                "width": 750
	              },
	              "id": function () {return this.id},
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "community-interactive-time",
	              "shown": function () {return this.tag==='communityInteractTime'},
	              "style": {
	                "width": 750
	              },
	              "id": function () {return this.id},
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "pagename": function () {return this.pgName}
	              }
	            },
	            {
	              "type": "richtext",
	              "shown": function () {return this.tag==='richText'},
	              "id": function () {return this.id},
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "pagename": function () {return this.pgName}
	              },
	              "style": {
	                "width": 750
	              }
	            },
	            {
	              "type": "separator",
	              "shown": function () {return this.tag==='separator'},
	              "id": function () {return this.id},
	              "attr": {
	                "fields": function () {return this.fields},
	                "styles": function () {return this.style},
	                "pagename": function () {return this.pgName}
	              },
	              "style": {
	                "width": 750
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	})
	;__weex_module__.exports.style = __weex_module__.exports.style || {}
	;Object.assign(__weex_module__.exports.style, {
	  "log": {
	    "line": 10000,
	    "width": 750
	  }
	})
	})

/***/ }
/******/ ]);