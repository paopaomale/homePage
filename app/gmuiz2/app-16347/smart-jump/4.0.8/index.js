define('mui/smart-jump/index',function (require, exports, module) {
/**
 * @file smartJump组件
 */
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require("mui/smart-jump/index.css");

var $ = require('mui/zepto/touch'),
    fetch = require('mui/fetch/jsonp'),
    win = window,
    doc = document,
    MILLISECONDS_OF_DAY = 24 * 60 * 60 * 1000,
    storage = window.localStorage,
    date = new Date();

var timeKey = [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
var urlConfig = getParam();

//配置变量
var CONFIG = {
  url: '//equity-vip.tmall.com/liuliangbao/track.do',
  wait_time: '1500'
};

//公用变量
var uaValue = navigator.userAgent || '',
    isTMApp = uaValue.indexOf('AliApp(TM/') >= 0,
    isAliApp = uaValue.indexOf('AliApp') >= 0 || urlConfig.ttid && urlConfig.ttid.indexOf('@juhuasuan') >= 0,
    isJUApp = uaValue.indexOf('AliApp(JU/') >= 0,
    isAlipayApp = uaValue.indexOf('AlipayClient') >= 0,
    isTBApp = uaValue.indexOf('AliApp(TB/') >= 0,
    isAliTrip = uaValue.indexOf('AliTrip') >= 0,
    isBC = uaValue.indexOf('AliApp(BC') >= 0,
    referrerTaobao = document.referrer && document.referrer.indexOf('taobao.com') >= 0,
    fromTaoke = win.location.href.indexOf('ali_trackid=') >= 0 || doc.cookie.match(/(?:^|\s)tkmb=([^;]+)(?:;|$)/),
    fromTaobao = referrerTaobao && !fromTaoke,
    isAndriodWeb = uaValue.match(/Chrome/i) != null && uaValue.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i) != null,
    isAboveIOS9 = uaValue.toLowerCase().indexOf('iphone os 9') > 0;

// 全局控制参数
var g_config = window.g_config || {},
    sbConfig = g_config.sbConfig || {};

// 页面多次引用组件时，控制只调用一次接口
window.SB = window.SB || {};

SB.getAPIData = function () {
  /**
   * 请求smartjump配置的状态，分为以下3种状态:
   *   - 'unsent' 未发送
   *   - 'sending' 已发送但未返回结果
   *   - 'sent' 已返回结果
   * @type {String}
   */
  var fetchStat = 'unsent';
  /**
   * smartJump实例对象的集合，用于配置数据ready后初始化该实例
   * @type {Array}
   */
  var objects = [];
  /**
   * smartJump初始化后的回调函数集合，用于配置数据ready后初始化该实例
   * @type {Array}
   */
  var callbacks = [];
  /**
   * server接口获取到的配置信息，多个实例共享一份配置，且只请求一次
   */
  var conf = void 0;

  return function getConf(object, callback) {
    switch (fetchStat) {
      case 'unsent':
        fetchStat = 'sending';
        // 压栈，延后处理
        objects.push(object);
        callbacks.push(callback);

        fetch(CONFIG.url, {
          method: 'jsonp',
          "callback": "_sbCallback",
          body: 'wfType=8&wfCode=777522&time=20160520110002&_mock_=true'
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          conf = data;
          fetchStat = 'sent';

          callbacks.map(function (item, index) {
            if (typeof item === 'function') {
              item.call(objects[index], conf);
            }
          });

          callbacks = [];
          objects = [];
        });
        break;

      case 'sending':
        objects.push(object);
        callbacks.push(callback);
        break;

      case 'sent':
        callback.call(object, conf);
        break;
    }
  };
}();

// 定义类

var SmartJump = function () {
  /**
   * 构造函数
   * 实例化时执行该方法
   */

  /**
   * universal link的域名
   * @type {String}
   */

  function SmartJump(options) {
    _classCallCheck(this, SmartJump);

    /**
     * smartjump事件的回调函数，方便销毁时解绑
     *   - 'tap' tap点击事件
     *   - 'close' 隐藏UI事件
     *   - 'preventPierce' 防点透事件
     * @type {Objectj}
     */
    this.listeners = {};
    this.init(options);
  }
  /**
   * appstore地址
   * @type {String}
   */


  _createClass(SmartJump, [{
    key: 'init',
    value: function init(opt) {
      var me = this;
      opt.mmstat = opt.mmstat || opt.type || 'default';
      if (!opt.UIType) {
        opt.UIType = 'default';
      }
      me.opt = opt;

      if (urlConfig && urlConfig.disableSJ) return; //URL 中有disableSB 则完全屏蔽

      //增加业务屏蔽逻辑
      var g_config = window.g_config || {};
      if (g_config.removeSmartBanner) {
        return;
      }

      // 取Safari版本
      this.safariVersion = this._getSafariVersion();
      if (!opt.notNeedUI && !me._defaultHideScene()) {
        SB.getAPIData(me, me._initSmartBanner);
      }
    }

    /**
     * 唤起功能
     * @param config {object} 配置对象,可覆盖初始化的opt
     * @param config.type 页面类型，用于拼接唤起协议
     * @param config.params 页面参数，用于拼接唤起链接
     * @param config.success 成功唤起回调 （不准确）
     * @param config.fail 唤起失败回调  (不准确)
     * @param config.notGoDownload 不去下载页面
     *
     */

  }, {
    key: 'appJump',
    value: function appJump(config) {
      var me = this,
          opt = Object.assign(me.opt, config);
      opt.utsk = 'third';
      if (me.safariVersion < 9) {
        me._call({
          url: me._spliceUrl(opt)
        });
      } else {
        me.callWithUniversalLink();
      }
    }

    /**
     * 通过universal link唤起猫客，只适用于ios9及以上版本
     */

  }, {
    key: 'callWithUniversalLink',
    value: function callWithUniversalLink() {
      var opt = this.opt;
      var ulLink = this._spliceUrl(opt);
      // let downloadParam = this._spliceULDownloadParam();
      // console.log(downloadParam)
      // // downloadParam = 'src=2213';
      // // console.log(downloadParam);
      //
      // // 先将所有参数传到服务端，确保参数都能正常接收
      // fetch(`//mobile.tmall.com/mobile/api/deep_link_seed.do?${downloadParam}` , {
      //     method: 'jsonp',
      //     callback: 'callback',
      //     timeout: 4000,
      // });
      this._sendParamsToSever();

      // 跳universal link，这里本来应该延迟100 - 200ms增加api传参成功的概率，
      // 但是universal link在setTimeout中redirect不能唤起猫客，估计是safari的策略
      window.location.href = SmartJump.UNIVERSAL_LINK + '?ul_redirect=' + encodeURIComponent(ulLink) + '&redirect=' + encodeURIComponent(SmartJump.DOWNLOAD_URL);
      // window.location.href = 'https://mobile.tmall.com/universal';
    }
  }, {
    key: '_sendParamsToSever',
    value: function _sendParamsToSever() {
      var downloadParam = this._spliceULDownloadParam();
      console.log(downloadParam);
      // downloadParam = 'src=2213';
      // console.log(downloadParam);

      // 先将所有参数传到服务端，确保参数都能正常接收
      fetch('//mobile.tmall.com/mobile/api/deep_link_seed.do?' + downloadParam, {
        method: 'jsonp',
        callback: 'callback',
        timeout: 4000
      });
    }

    /**
     * 拼universal link需要传给server端的参数，包括之前下载页需要传给server端的参数
     * 和初始化smartbanner时的参数
     * @return {string}
     */

  }, {
    key: '_spliceULDownloadParam',
    value: function _spliceULDownloadParam() {
      var opt = this.opt;
      var param = '';

      function isStrOrNum(param) {
        return typeof param === 'string' || typeof param === 'number';
      }

      Object.keys(opt).map(function (key) {
        if (isStrOrNum(opt[key])) {
          param += key + '=' + encodeURIComponent(opt[key]) + '&';
        }

        // object类型的参数只有params，params里不会再有object
        if (key === 'params') {
          (function () {
            var ps = opt.params;
            Object.keys(ps).map(function (k) {
              if (isStrOrNum(ps[k])) {
                param += k + '=' + encodeURIComponent(ps[k]) + '&';
              }
            });
          })();
        }
      });
      param = param.slice(0, param.length - 1);
      // downloadSrc参数标识下载渠道来源，对应下载页的src参数，需修改参数名
      // 针对ios9也就是使用universal link的场景使用特殊渠道标识`src=universallink`，方便统计universal link导的下载量
      // 若没有传downloadSrc则默认为`src=universallink`，
      var srcFlag = 'src=universallink';
      if (~param.indexOf('downloadSrc')) {
        param = param.replace(/downloadSrc=[^&]+/, srcFlag);
      } else {
        param += '&' + srcFlag;
      }
      // 加上本来拼在跳转下载页需要传的参数（流量宝参数），
      // 这些参数本来由下载页调用deep_link_seed.do接口传递，因为universal link
      // 不会跳到下载页，所以把这些参数一并拼上去
      param += '' + this._getFlowParam() + this._getDlttid();

      return param;
    }

    /**
     * 处理smartbanner数据
     *
     */

  }, {
    key: '_initSmartBanner',
    value: function _initSmartBanner(data) {
      var me = this;
      if (!data.delta) {
        return;
      }
      //数据处理
      var delta = JSON.parse(data.delta);
      me.delta = delta;
      me.track = data.track;
      //流量宝添加埋参
      if (me.track) {
        me.opt.scene = 'liuliangbao';
      }
      // 绑定全局唤起逻辑事件
      me._initDefaultEvent();

      //处理自动唤起逻辑
      me._autoApp(delta);

      ////处理smartbanner展现
      me._renderDom(delta);
    }

    /**
     *
     * 处理自动唤起逻辑
     * @param data
     * @private
     */

  }, {
    key: '_autoApp',
    value: function _autoApp(delta) {
      var me = this,
          opt = me.opt;
      //处理自动唤起
      var deltaInfo = {};
      //初始化唤起协议
      opt.utsk = 'auto';
      me.autoUrl = me._spliceUrl(opt);
      var controlSwitch = false;

      if (delta && delta.data && delta.data[0]) {
        deltaInfo = delta.data[0];

        var invokeTimes = me._invokeFatigue();

        if (+invokeTimes >= +deltaInfo['fatigue']) {
          return;
        } else {
          me._invokeFatigue(+invokeTimes + 1);
        }

        if (deltaInfo.bottom_auto == 'true' && opt.UIType == "default") {
          controlSwitch = true;
        } else if (deltaInfo.box_auto == 'true' && opt.UIType == "box") {
          controlSwitch = true;
        } else if (deltaInfo.button_auto == 'true' && opt.UIType == "button") {
          controlSwitch = true;
        }

        if (controlSwitch && !window.SB.auto) {
          //判断屏蔽规则
          if (me._autoHideScene(opt.UIType, deltaInfo)) {
            return;
          }
          //保证一个页面只自动唤起一次
          window.SB.auto = true;
          if (deltaInfo.click_default_url && opt.UIType == 'default') {
            me.autoLink = me._spliceUrl({
              utsk: 'auto',
              type: 'link',
              params: { url: deltaInfo.auto_default_url }
            });
          }
          if (deltaInfo.click_box_url && opt.UIType == 'box') {
            me.autoLink = me._spliceUrl({
              utsk: 'auto',
              type: 'link',
              params: { url: deltaInfo.auto_box_url }
            });
          }
          me._call({
            url: me.autoLink || me.autoUrl,
            isAuto: true
          }, deltaInfo);
        }
      }
    }

    /**
     * 默认不出现场景
     *
     */

  }, {
    key: '_defaultHideScene',
    value: function _defaultHideScene() {
      //天猫App ipad mui pad
      var isMiPad = navigator.userAgent.indexOf('MI PAD') >= 0,
          isIpad = uaValue.indexOf('ipad') > -1,
          result = isTMApp || isMiPad || isIpad;
      return result;
    }

    /**
     * 自动唤起场景控制
     */

  }, {
    key: '_autoHideScene',
    value: function _autoHideScene(type, deltaInfo) {
      deltaInfo = deltaInfo || {};

      function judgeScene(flag) {
        var f1 = void 0,
            f2 = void 0;
        if (type == 'default' && deltaInfo["auto_open_default_" + flag] == 'true') {
          f1 = true;
        } else if (type == 'box' && deltaInfo["auto_open_box_" + flag] == 'true') {
          f2 = true;
        }
        return !(f1 || f2);
      }
      var me = this;
      var aboveIOS9Scene = void 0,
          tbScene = void 0,
          payScene = void 0,
          juScene = void 0,
          bcScene = void 0,
          referScene = void 0,
          tbkScene = void 0,
          andriodScene = void 0,
          specialUA = void 0,
          uaString = void 0;

      tbScene = isTBApp && judgeScene('tb');
      payScene = isAlipayApp && judgeScene('pay');
      juScene = isJUApp && judgeScene('ju');
      bcScene = isBC && judgeScene('bc');
      referScene = fromTaobao && judgeScene('refer');
      tbkScene = fromTaoke && judgeScene('tbk');
      andriodScene = isAndriodWeb && deltaInfo.auto_close_andriodWeb == 'true';
      aboveIOS9Scene = isAboveIOS9 && judgeScene('aboveIOS9');
      uaString = deltaInfo.auto_hide_ua || 'HTAO|HTao|alihealthclient|AliHealthClient|ALICAR|Car|AliTrip|AliApp\\(IS';
      !!uaString && (specialUA = uaValue.match(new RegExp(uaString)) != null);

      //默认为false，不屏蔽唤起
      var newUAScene = false;

      if (fromTaoke) {
        //把生成正则的ua放在if中，避免浪费
        //ua不进行打底，统一由运营控制
        //黑白名单都是强逻辑，直接return
        // 白名单的优先级比黑名单高
        if (me._isMatchUA(uaValue, deltaInfo.auto_tbk_white_ua || '')) {
          return false;
        } else if (me._isMatchUA(uaValue, deltaInfo.auto_tbk_black_ua || '')) {
          return true;
        } else {
          if (deltaInfo.auto_tbk_other_ua == 'true') {
            newUAScene = false;
          } else {
            newUAScene = true;
          }
        }
      } else {
        if (me._isMatchUA(uaValue, deltaInfo.auto_white_ua || '')) {
          return false;
        } else if (me._isMatchUA(uaValue, deltaInfo.auto_black_ua || '')) {
          return true;
        } else {
          if (deltaInfo.auto_other_ua == 'true') {
            newUAScene = false;
          } else {
            newUAScene = true;
          }
        }
      }

      var result = newUAScene || aboveIOS9Scene || tbScene || payScene || juScene || bcScene || referScene || tbkScene || specialUA || sbConfig.hideAuto || andriodScene;
      return result;
    }

    /**
     * smartbanenr 展现场景控制
     * @param opt
     * @private
     */

  }, {
    key: '_showHideScene',
    value: function _showHideScene(type, deltaInfo) {
      deltaInfo = deltaInfo || {};

      function judgeScene(flag, isClose) {
        var f1 = void 0,
            f2 = void 0;
        if (!isClose) {
          if (type == 'default' && deltaInfo["show_open_default_" + flag] == 'true') {
            f1 = true;
          } else if (type == 'box' && deltaInfo["show_open_box_" + flag] == 'true') {
            f2 = true;
          }
        } else {
          if (type == 'default' && deltaInfo["show_close_default_" + flag] == 'false') {
            f1 = true;
          } else if (type == 'box' && deltaInfo["show_close_box_" + flag] == 'false') {
            f2 = true;
          }
        }

        return !(f1 || f2);
      }
      var me = this;
      var aboveIOS9Scene = void 0,
          tbScene = void 0,
          juScene = void 0,
          referScene = void 0,
          tbkScene = void 0,
          specialUA = void 0,
          uaString = void 0;

      //cookie 场景
      var cookieBottomHide = type == 'default' && me.getCookie('_smartbannerBottomCloseBtn_');
      var cookieBoxHide = type == 'box' && me.getCookie('_smartbannerBoxCloseBtn_');
      var isHorizontal = window.innerWidth && window.innerWidth > window.innerHeight || false;
      var otherBannerHide = cookieBottomHide || cookieBoxHide || type != 'button' && isHorizontal;
      //let otherBannerHide = isHorizontal;

      //只要符合以下一个场景，即屏蔽展现
      aboveIOS9Scene = isAboveIOS9 && judgeScene('aboveIOS9');
      tbScene = isTBApp && judgeScene('tb');
      juScene = isJUApp && judgeScene('ju');
      referScene = fromTaobao && judgeScene('refer');
      tbkScene = fromTaoke && judgeScene('tbk', 'close');
      uaString = deltaInfo.show_hide_ua || 'alihealthclient|AliHealthClient|AliApp\\(IS';
      if (uaString) {
        specialUA = uaValue.match(new RegExp(uaString)) != null;
      }

      //默认为false，不屏蔽唤起
      var newUAScene = false;

      if (fromTaoke) {
        //把生成正则的ua放在if中，避免浪费
        //黑白名单都是强逻辑，直接return
        // 白名单的优先级比黑名单高
        if (me._isMatchUA(uaValue, deltaInfo.show_tbk_white_ua || '')) {
          return false;
        } else if (me._isMatchUA(uaValue, deltaInfo.show_tbk_black_ua || '')) {
          return true;
        } else {
          if (deltaInfo.show_tbk_other_ua == 'true') {
            newUAScene = false;
          } else {
            newUAScene = true;
          }
        }
      } else {
        if (me._isMatchUA(uaValue, deltaInfo.show_white_ua || '')) {
          return false;
        } else if (me._isMatchUA(uaValue, deltaInfo.show_black_ua || '')) {
          return true;
        } else {
          if (deltaInfo.show_other_ua == 'true') {
            newUAScene = false;
          } else {
            newUAScene = true;
          }
        }
      }

      var result = newUAScene || aboveIOS9Scene || tbScene || juScene || referScene || tbkScene || specialUA || otherBannerHide || sbConfig.hideShow;
      return result;
    }

    /**
     * 展现smartbanner
     * */

  }, {
    key: '_renderDom',
    value: function _renderDom(delta) {
      var _this = this;

      var me = this,
          opt = me.opt;

      var deltaInfo = {},
          template = '';

      opt.utsk = 'click';
      me.sbUrl = me._spliceUrl(opt);

      //处理ui
      if (delta && delta.data && delta.data[0]) {
        var _ret2 = function () {
          var substitute = function substitute(str, o) {
            var SUBSTITUTE_REG = /\\?\{([^{}]+)\}/g;
            if (typeof str !== 'string' || !o) {
              return str;
            }
            return str.replace(SUBSTITUTE_REG, function (match, name) {
              if (match.charAt(0) === '\\') {
                return match.slice(1);
              }
              return o[name] === undefined ? '' : o[name];
            });
          };

          // ios10使用a标签代替location.href
          // alert(this.safariVersion);


          deltaInfo = delta.data[0];
          //配置是否设置cookie

          if (opt.UIType == "box" && deltaInfo.p_cookie_set == 'true') {
            opt.setCookie = true;
          } else if (opt.UIType == "default" && deltaInfo.b_cookie_set == 'true') {
            opt.setCookie = true;
          }

          //替换图片
          if (opt.img) {
            deltaInfo.content = opt.img;
          }
          if (!deltaInfo.logo_pic) {
            deltaInfo.logo_pic = "//img.alicdn.com/tps/TB1twKDJFXXXXbtXVXXXXXXXXXX-92-92.png";
          }
          if (deltaInfo.click_default_url && opt.UIType == 'default') {
            me.sbLink = me._spliceUrl({
              utsk: "click",
              type: 'link',
              params: { url: deltaInfo.click_default_url }
            });
          }

          if (deltaInfo.click_box_url && opt.UIType == 'box') {
            me.sbLink = me._spliceUrl({
              utsk: "click",
              type: 'link',
              params: { url: deltaInfo.click_box_url }
            });
          }

          if (!deltaInfo.button_words) deltaInfo.button_words = '前往 App';

          //判断屏蔽规则
          if (me._showHideScene(opt.UIType, deltaInfo)) {
            return {
              v: void 0
            };
          }

          var isiOS10 = +_this.safariVersion === 10;
          // let isiOS10 = true;
          var universalLink = SmartJump.UNIVERSAL_LINK + '?ul_redirect=' + encodeURIComponent(me.sbUrl) + '&redirect=' + encodeURIComponent(SmartJump.DOWNLOAD_URL);

          switch (opt.UIType) {
            case 'default':
              template = '<div id="J_BottomSmartBanner" class="mui-bottom-smart-banner">\n              <a id="J_BottomSmartBannerLink" ' + (isiOS10 ? 'href="' + universalLink + '"' : '') + '>\n                <img src="' + deltaInfo.content + '">\n              </a>\n              <div class="mui-bottom-m-sb-btn-close" id="J_BottomSmartBannerClose" ></div>\n            </div>';
              // alert(template);
              if ($('#J_BottomSmartBanner').length > 0) {
                return {
                  v: void 0
                };
              }
              if (!$('body')) {
                setTimeout(function () {
                  $('body').append(template);
                  if (isiOS10) {
                    $('#J_BottomSmartBannerLink').get(0).onclick = me._sendParamsToSever.bind(me);
                  }
                }, 0);
              } else {
                $('body').append(template);
                if (isiOS10) {
                  $('#J_BottomSmartBannerLink').get(0).onclick = me._sendParamsToSever.bind(me);
                }
              }
              break;
            case 'box':
              template = '<div class="mui-sb-box">\n              <div class="close" id="J_SBBoxClose"></div>\n              ' + (isiOS10 ? '<a href="' + universalLink + '">' : '') + '\n                <img class="logo" src="' + deltaInfo.logo_pic + '" width="42" height="42"/>\n                <div class="words">' + deltaInfo.pic_words + '</div>\n                <div class="arrow"></div>\n              ' + (isiOS10 ? '</a>' : '') + '\n            </div>';

              // alert(template);
              $(opt.triggle).append(template);
              if (isiOS10) {
                $('.mui-sb-box').get(0).onclick = me._sendParamsToSever.bind(me);
              }
              !!opt.showCallback && opt.showCallback();
              break;
            case "button":
              template = '<div class="mui-sb-button">\n              ' + (isiOS10 ? '<a href="' + universalLink + '">' : '') + '\n                <img class="logo" src="' + deltaInfo.logo_pic + '" width="42" height="42"/>\n                <div class="words">' + deltaInfo.button_words + '</div>\n                <div class="arrow"></div>\n              ' + (isiOS10 ? '</a>' : '') + '\n            </div>';

              // alert(template);
              $(opt.triggle).append(template);
              if (isiOS10) {
                $('.mui-sb-button').get(0).onclick = me._sendParamsToSever.bind(me);
              }
              !!opt.showCallback && opt.showCallback();
              break;
          }
          showAplus();

          !!deltaInfo.exposureParam && (new Image().src = deltaInfo.exposureParam + '&r' + +new Date() + '=1');
          //初始化事件绑定
          me._initSBEvent(deltaInfo);
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      }
      //发送曝光埋点
      function showAplus() {
        me._sendLog({ string: "tmwap.1.3", apuri: "sb_show" });
      }
    }

    /**
     * 绑定tap事件
     */

  }, {
    key: '_initSBEvent',
    value: function _initSBEvent(deltaInfo) {
      var me = this,
          opt = me.opt,
          cookieKey = '',
          triggle = opt.triggle ? opt.triggle : '#J_BottomSmartBanner',
          closeId = '';
      if (opt.UIType == "default") {
        closeId = 'J_BottomSmartBannerClose';
        cookieKey = '_smartbannerBottomCloseBtn_';
      } else if (opt.UIType == "box") {
        closeId = 'J_SBBoxClose';
        cookieKey = '_smartbannerBoxCloseBtn_';
      }

      var isiOS10 = +this.safariVersion === 10;
      // let isiOS10 = true;
      // alert('before tap');
      if (!isiOS10) {
        var tapListener = this.listeners.tap = function (e) {
          // window.location.href = 'https://mobile.tmall.com/universal?ul_redirect=tmall%3A%2F%2Fpage.tm%2FitemDetail%3FitemId%3D43142451930%26_ns%3D1%26ut_sk%3D3.1472109275007.other_iOS9.click-detail_upper1-0&redirect=%2F%2Fitunes.apple.com%2Fcn%2Fapp%2Fid518966501%3Fmt%3D8';
          // return;
          //点击是关闭按钮则不触发唤起
          if (e.target.id != closeId) {
            var url = me.sbLink || me.sbUrl;

            if (me.safariVersion < 9) {
              me._call({
                url: url,
                isClick: true
              }, deltaInfo);
            } else {
              me.callWithUniversalLink();
            }

            return false;
          }
        };

        $(document).on('tap', triggle, tapListener);
      }

      // 点击关闭banner
      if (closeId) {
        var closeListener = this.listeners.close = function (e) {
          // 防止a标签的href属性唤起universal link行为
          e.preventDefault();

          me._sendLog({ string: "tmwap.1.4", apuri: "sb_click_close" });
          $(triggle).hide();
          !!opt.closeBtnCallback && opt.closeBtnCallback();
          //console.log('setCookie1');
          //opt.setCookie =1;
          if (opt.setCookie) {
            me.setCookie(cookieKey, 1, undefined, '.tmall.com', '/');
            //console.log('setCookie2');
          }
          return false;
        };
        $(document).on('tap', "#" + closeId, closeListener);

        var preventPierceListener = this.listeners.preventPierce = function (e) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        };
        $(document).on('touchstart', "#" + closeId, preventPierceListener);
      }
    }
  }, {
    key: 'setCookie',
    value: function setCookie(name, val, expires, domain, path, secure, raw) {
      var text = void 0;
      var date = expires;

      // 增加是否进行encode处理的判断
      if (!raw) {
        text = String(encodeURIComponent(val));
      } else {
        text = String(val);
      }

      // 从当前时间开始，多少天后过期
      if (typeof date === 'number') {
        date = new Date();
        date.setTime(date.getTime() + expires * MILLISECONDS_OF_DAY);
      }
      // expiration date
      if (date instanceof Date) {
        text += '; expires=' + date.toUTCString();
      }

      // domain
      if (isNotEmptyString(domain)) {
        text += '; domain=' + domain;
      }

      // path
      if (isNotEmptyString(path)) {
        text += '; path=' + path;
      }

      // secure
      if (secure) {
        text += '; secure';
      }
      doc.cookie = name + '=' + text;
    }
  }, {
    key: 'getCookie',
    value: function getCookie(name) {
      var ret = void 0,
          m = void 0;
      if (isNotEmptyString(name)) {
        if (m = String(doc.cookie).match(new RegExp('(?:^| )' + name + '(?:(?:=([^;]*))|;|$)'))) {
          ret = m[1] ? decode(m[1]) : '';
        }
      }
      return ret;
    }

    /**
     * hide smartbanner
     *
     */

  }, {
    key: 'hide',
    value: function hide() {
      var me = this,
          opt = me.opt,
          triggle = opt.triggle ? opt.triggle : '#J_BottomSmartBanner',
          smartBanner = $(triggle);
      !!smartBanner && $(smartBanner).hide();
    }

    /**
     * show smartbanner
     *
     */

  }, {
    key: 'show',
    value: function show() {
      var me = this,
          opt = me.opt,
          triggle = opt.triggle ? opt.triggle : '#J_BottomSmartBanner',
          smartBanner = $(triggle);
      !!smartBanner && $(smartBanner).show();
    }

    /**
     * 销毁smartbanner
     */

  }, {
    key: 'destroy',
    value: function destroy() {
      var _this2 = this;

      var opt = this.opt;
      // 无UI直接返回
      if (opt.notNeedUI) return;

      var triggle = opt.triggle ? opt.triggle : '#J_BottomSmartBanner';
      var $smartJump = $(triggle);
      var closeId = void 0;
      if (opt.UIType == "default") {
        closeId = 'J_BottomSmartBannerClose';
      } else if (opt.UIType == "box") {
        closeId = 'J_SBBoxClose';
      }

      // 移除dom
      $smartJump.remove();
      // 解绑事件
      Object.keys(this.listeners).map(function (key) {
        switch (key) {
          case 'tap':
            $(document).off('tap', triggle, _this2.listeners['tap']);
            break;
          case 'close':
            $(document).off('tap', '#' + closeId, _this2.listeners['close']);
            break;
          case 'preventPierce':
            $(document).off('touchstart', '#' + closeId, _this2.listeners['preventPierce']);
            break;
        }
      });
    }

    /**
     * 拼接唤起url
     */

  }, {
    key: '_spliceUrl',
    value: function _spliceUrl(opt) {
      var me = this,
          type = opt.type || '',
          params = opt.params || '',
          spliceUrl = '',
          href = '';

      if (type) {
        switch (type) {
          case "detail":
            me.page = 'detail';
            spliceUrl = 'tmall://page.tm/itemDetail?' + me._param(params);
            break;
          case "shop":
            me.page = 'shop';
            spliceUrl = 'tmall://page.tm/shop?' + me._param(params);
            break;
          case "list":
            me.page = 'list';
            spliceUrl = 'tmall://page.tm/search?searchType=item&' + me._param(params);
            break;
          case "internal":
            if (params.page) {
              me.page = params.page;
              spliceUrl = ' tmall://page.tm/' + params.page + (params.params ? '?' + me._param(params.params) : '');
            } else if (params.url) {
              spliceUrl = params.url;
            }
            break;
          case "link":
            me.page = 'h5';
            spliceUrl = params.url;
            if (spliceUrl.indexOf('#') > -1) {
              spliceUrl = spliceUrl.replace(/#(.*?)$/, '');
            }
            spliceUrl = 'tmall://page.tm/webview?url=' + encodeURIComponent(spliceUrl);
            break;
          default:
            spliceUrl = 'tmall://tab.switch/home';
            break;
        }
      } else {
        spliceUrl = 'tmall://tab.switch/home';
      }

      //淘客埋点
      if (me._getTkmd()) {
        spliceUrl += (spliceUrl.indexOf('?') > -1 ? '&' : '?') + me._getTkmd();
      }
      //流量宝埋点
      if (me.track) {
        spliceUrl += (spliceUrl.indexOf('?') > -1 ? '&' : '?') + me.track;
      }

      //客户端数据埋点
      var ut_sk = me._spliceUtsk();
      spliceUrl += (spliceUrl.indexOf('?') > -1 ? '&' : '?') + ut_sk;
      return spliceUrl;
    }
  }, {
    key: '_param',
    value: function _param(obj) {
      var result = '';
      obj = obj || {};
      var flag = 0;

      // $.each(obj,function (v, k) {
      //   if (flag) {
      //     result += '&';
      //   }
      //   if (v) {
      //     result = result + k + '=' + v;
      //     flag = 1;
      //   }
      // });

      for (var k in obj) {
        if (flag) {
          result += '&';
        }
        if (obj[k]) {
          result = result + k + '=' + obj[k];
          flag = 1;
        }
      }
      return result;
    }

    /**
     * 获取淘宝客参数
     */

  }, {
    key: '_getTkmd',
    value: function _getTkmd() {
      var tkmdCookie = doc.cookie.match(/(?:^|\s)tkmb=([^;]+)(?:;|$)/),
          result = "";
      if (tkmdCookie) {
        var tkmd = tkmdCookie[1],
            e = /(?:^|&)e=(.*?)(?:&|$)/.test(tkmd) ? encodeURIComponent(RegExp.$1) : "",
            tkFlag = /(?:^|&)tkFlag=(.*?)(?:&|$)/.test(tkmd) ? encodeURIComponent(RegExp.$1) : "";
        result = "e=" + e + "&type=2&tkFlag=" + tkFlag;
      }
      return result;
    }

    /**
     * 获取客户端埋点参数ut_sk
     */

  }, {
    key: '_spliceUtsk',
    value: function _spliceUtsk() {
      var me = this,
          opt = me.opt,
          flagObj = {
        a: opt.utskA || '3',
        b: +new Date(),
        c: me._getUtskC(),
        d: (opt.utsk ? opt.utsk + '-' : 'third-') + opt.mmstat + '-' + (fromTaoke ? '1' : '0') };
      return "_ns=1&ut_sk=" + flagObj.a + '.' + flagObj.b + '.' + flagObj.c + '.' + flagObj.d;
    }

    /**
     * 获取ua标识
     */

  }, {
    key: '_getUtskC',
    value: function _getUtskC() {
      var flag = 'other',
          isWeibo = uaValue.indexOf('Weibo') >= 0,
          isUC = uaValue.indexOf('UCBrowser') >= 0 && !isAliApp,
          isQQBrower = uaValue.indexOf('QQBrowser') >= 0;
      if (isTBApp) {
        flag = "tb";
      } else if (isJUApp) {
        flag = 'ju';
      } else if (isAlipayApp) {
        flag = 'alipay';
      } else if (isAliTrip) {
        flag = 'alitrip';
      } else if (isWeibo) {
        flag = 'weibo';
      } else if (isUC) {
        flag = 'uc';
      } else if (isQQBrower) {
        flag = 'qq';
      } else if (isBC) {
        flag = 'bc';
      } else if (isAliApp) {
        flag = 'aliapp';
      }
      // 若是ios9，加上`_iOS9`标识
      flag += this.safariVersion < 9 ? '' : '_iOS9';
      return flag;
    }

    /**
     * 判断平台，判断失败则返回false
     */

  }, {
    key: '_judgePlatform',
    value: function _judgePlatform() {
      var me = this,
          standalone = navigator.standalone; // Check if it's already a standalone web app or running within a webui view of abn app (not mobile safari)
      // 检测类型(iOS or Android)
      if (uaValue.match(/iPhone|iPod|iPad/i) != null) {
        me.platform = 'ios';
        me.isIpad = uaValue.match(/iPad/i) != null;
      } else if (uaValue.match(/Android/i) != null) {
        //android phone & pad
        if (uaValue.match(/Mobile/i) != null) {
          //android phone
          me.platform = 'android';
          me.isChrome = uaValue.match(/Chrome/i) != null && uaValue.match(/Version\/\d+\.\d+(\.\d+)?\sChrome\//i) == null;
        }
      } else if (uaValue.match(/Linux/i) != null) {
        //部分手机(htc原生浏览器)只带了Linux标识,最后一步处理认为是android
        me.platform = 'android';
      }

      if (!me.platform || standalone) {
        me.invaliable = true;
        return false;
      }
      return true;
    }

    /**
     * 绑定唤起默认事件
     */

  }, {
    key: '_initDefaultEvent',
    value: function _initDefaultEvent() {
      var me = this;
      //绑定失焦事件
      window.addEventListener("blur", function () {
        //
        if (!me.timeload) return;
        clearTimeout(me.timeload);
        me.timeload = null;
      });

      //页面可视事件绑定
      document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
          if (!me.timeload) return;
          clearTimeout(me.timeload);
          me.timeload = null;
        }
      });
    }

    /**
     * 唤起行为
     *
     */

  }, {
    key: '_call',
    value: function _call(config, deltaInfo) {
      var me = this,
          opt = me.opt,
          startTime = Date.now();

      //判断平台,若非则不执行
      if (!me._judgePlatform()) {
        return;
      }
      //埋点处理
      if (config.isAuto) {
        me._sendLog({ string: "tmallacti.201503.1005.5", apuri: "sb_auto_envoke" });
        if (me.platform == 'ios') {
          me._sendLog({ string: "tmallacti.201503.1005.1", apuri: "sb_ios_auto_envoke" });
        } else {
          me._sendLog({ string: "tmallacti.201503.1005.3", apuri: "sb_andriod_auto_envoke" });
        }
      } else {
        me._sendLog({ string: "tmwap.1.8", apuri: "sb_click" });
        if (me.platform == 'ios') {
          me._sendLog({ string: "tmwap.1.5", apuri: "sb_ios_click" });
        } else {
          me._sendLog({ string: "tmwap.1.6", apuri: "sb_andriod_click" });
        }
      }

      if (me.timeload) {
        clearTimeout(me.timeload);
      }
      me.timeload = setTimeout(function () {
        var endTime = Date.now();
        clearTimeout(me.timeload);
        me.timeload = null;
        if (endTime - startTime < CONFIG.wait_time + 50) {
          // 埋点处理
          if (config.isAuto) {
            if (me.platform == 'ios') {
              me._sendLog({ string: "tmallacti.201503.1005.2", apuri: "sb_ios_auto_fail" });
            } else {
              me._sendLog({ string: "tmallacti.201503.1005.4", apuri: "sb_andriod_auto_fail" });
            }
          } else {
            if (me.platform == 'ios') {
              me._sendLog({ string: "tmwap.1.2", apuri: "sb_ios_click_fail" });
            } else {
              me._sendLog({ string: "tmwap.1.7", apuri: "sb_andriod_click_fail" });
            }
          }

          !!opt.fail && opt.fail();
          if (!(opt.notGoDownload || config.isAuto)) {
            me._download(deltaInfo);
          }
        } else {
          !!opt.success && opt.success();
        }
      }, CONFIG.wait_time);

      me._redirect(config);
    }

    /**
     * 获取Safari版本信息
     * @return {string|number}
     */

  }, {
    key: '_getSafariVersion',
    value: function _getSafariVersion() {
      var version = '';
      var ua = navigator.userAgent.toLowerCase();
      var matched = [];
      if (ua.match(/safari/)) {
        matched = ua.match(/version\/([\d\.]+)/);
        if (matched) {
          version = matched[1];
          version && (version = version.split('.')[0]);
        }
      }

      return version || -1;
    }
    /**
     * 重定向
     *
     */

  }, {
    key: '_redirect',
    value: function _redirect(config) {
      var me = this,
          url = config.url || '',
          matched = [],
          safariVersion = this.safariVersion;
      //ios9 safari 单独处理
      if (safariVersion >= 9) {
        window.location.href = url;
        //chrome 特殊处理
      } else if (me.isChrome) {
          var paramUrlarr = url.split('://'),
              scheme = paramUrlarr[0],
              schemeUrl = url.replace(scheme + "://", "");
          url = 'intent://' + schemeUrl + '#Intent;scheme=' + scheme + ';package=com.tmall.wireless;end';
          var newWin = window.open(url);
          if (config.isClick) {
            newWin.location.href = 'http://m.laiwang.com/market/laiwang/tmall/app-download.php?src=' + (me.opt.downloadSrc ? me.opt.downloadSrc : 'wapicon');
          }
        } else {
          (function () {
            var iframe = document.createElement('iframe');
            //iframe.id = 'J_RedirectNativeFrame';
            iframe.style.display = 'none';
            iframe.src = url;
            //运行在head中
            if (!document.body) {
              setTimeout(function () {
                document.body.appendChild(iframe);
              }, 0);
            } else {
              document.body.appendChild(iframe);
            }
          })();
        }
    }
  }, {
    key: '_spliceDownloadUrl',
    value: function _spliceDownloadUrl(deltaInfo) {
      var me = this,
          opt = me.opt,
          downloadUrl = '';
      //console.log('deltaInfo:',deltaInfo);
      //debugger
      // if (me.platform == 'ios') {
      //   downloadUrl = me.isIpad ? 'https://itunes.apple.com/app/id593828513' : 'http://itunes.apple.com/cn/app/id518966501?mt=8';
      // } else {
      downloadUrl = 'http://m.laiwang.com/market/laiwang/tmall/app-download.php?src=' + (opt.downloadSrc ? opt.downloadSrc : 'wapicon');
      //}

      // if(deltaInfo && deltaInfo.tApp_white_list){
      //   let UA = me._MatchUA(navigator.userAgent, deltaInfo.tApp_white_list);
      //   //console.log('UA:',UA);
      //   if(UA) downloadUrl = downloadUrl + '&dlttid=' + UA;
      // }

      // 拼dlttid和流量宝参数
      downloadUrl += '' + this._getDlttid() + this._getFlowParam();
      //判断流量宝环境
      // if(urlConfig && urlConfig.asac && urlConfig.lpt && urlConfig.lsid && urlConfig.lpid){
      //   downloadUrl = downloadUrl
      //   + '&asac=' + urlConfig.asac
      //   + '&lpt=' + urlConfig.lpt
      //   + '&lsid=' + urlConfig.lsid
      //   + '&lpid=' + urlConfig.lpid;
      // }

      if (opt && opt.type && opt.key) {
        downloadUrl = downloadUrl + '&type=' + opt.type + '&key=' + opt.key;
      }

      return downloadUrl;
    }

    /**
     * 取dlttid
     * @return {string}
     */

  }, {
    key: '_getDlttid',
    value: function _getDlttid() {
      var deltaInfo = this.delta;

      if (deltaInfo && deltaInfo.tApp_white_list) {
        var UA = this._MatchUA(navigator.userAgent, deltaInfo.tApp_white_list);

        if (UA) {
          return '&dlttid=' + UA;
        }
      }

      return '';
    }

    /**
     * 取流量宝参数
     * @return {string}
     */

  }, {
    key: '_getFlowParam',
    value: function _getFlowParam() {
      if (urlConfig && urlConfig.asac && urlConfig.lpt && urlConfig.lsid && urlConfig.lpid) {
        return '&asac=' + urlConfig.asac + '&lpt=' + urlConfig.lpt + '&lsid=' + urlConfig.lsid + '&lpid=' + urlConfig.lpid;
      }

      return '';
    }

    /**
     * 引导下载
     */

  }, {
    key: '_download',
    value: function _download(deltaInfo) {
      // let me = this,
      //     opt = me.opt,
      //     downloadUrl = '';
      //     //console.log('deltaInfo:',deltaInfo);
      //     //debugger
      // // if (me.platform == 'ios') {
      // //   downloadUrl = me.isIpad ? 'https://itunes.apple.com/app/id593828513' : 'http://itunes.apple.com/cn/app/id518966501?mt=8';
      // // } else {
      // downloadUrl = 'http://m.laiwang.com/market/laiwang/tmall/app-download.php?src=' + (opt.downloadSrc ? opt.downloadSrc : 'wapicon');
      // //}
      //
      // if(deltaInfo && deltaInfo.tApp_white_list){
      //   let UA = me._MatchUA(navigator.userAgent, deltaInfo.tApp_white_list);
      //   //console.log('UA:',UA);
      //   if(UA) downloadUrl = downloadUrl + '&dlttid=' + UA;
      // }
      // //判断流量宝环境
      // if(urlConfig && urlConfig.asac && urlConfig.lpt && urlConfig.lsid && urlConfig.lpid){
      //   downloadUrl = downloadUrl
      //   + '&asac=' + urlConfig.asac
      //   + '&lpt=' + urlConfig.lpt
      //   + '&lsid=' + urlConfig.lsid
      //   + '&lpid=' + urlConfig.lpid;
      // }
      //
      // if (opt && opt.type && opt.key) {
      //   downloadUrl = downloadUrl
      //   + '&type=' + opt.type + '&key=' + opt.key;
      // }
      var downloadUrl = this._spliceDownloadUrl(deltaInfo);
      // window.location.href = downloadUrl;
    }
  }, {
    key: '_MatchUA',
    value: function _MatchUA(ua, ualist) {
      var list = (ualist || '').split('|');
      var res = '';
      $(list).each(function (it, value) {
        //it = it.trim();
        if (value && ua.indexOf(value) !== -1) {
          res = value;
        }
      });
      return res;
    }
  }, {
    key: '_isMatchUA',
    value: function _isMatchUA(ua, ualist) {
      var list = (ualist || '').split('|');
      var ret = false;

      $(list).each(function (it, value) {
        //it = it.trim();
        if (value && ua.indexOf(value) !== -1) {
          ret = true;
        }
      });
      return ret;
    }
  }, {
    key: '_invokeFatigue',
    value: function _invokeFatigue(fatigue) {
      var result = void 0;
      if (!storage) {
        return 0;
      }
      if (arguments.length) {
        try {
          storage.setItem("_SMARTBANNER_INVOKE_FATIGUE_" + timeKey, fatigue);
        } catch (ex) {}
      } else {
        try {
          result = parseInt(storage.getItem("_SMARTBANNER_INVOKE_FATIGUE_" + timeKey)) || 0;
        } catch (ex) {}
      }
      return result;
    }

    /**
     * 黄金令箭
     */

  }, {
    key: '_sendLog',
    value: function _sendLog(config) {
      var me = this,
          opt = me.opt,
          url = '',
          params = {};
      if (!config || !config.string) {
        return;
      }
      config.apuri && (params['apuri'] = config.apuri);
      opt.scene && (params['scene'] = opt.scene);
      opt.mmstat && (params['mmstat'] = opt.mmstat);
      params['ui'] = opt.UIType ? opt.UIType : '';
      params['r'] = +new Date(); //随机数
      var search = [];
      for (var name in params) {
        search.push(name + '=' + encodeURIComponent(params[name]));
      }
      url = '//wgo.mmstat.com/' + config.string + '?' + search.join('&');
      new Image().src = url;
    }
  }]);

  return SmartJump;
}();

/**
 * 工具类方法
 */

SmartJump.UNIVERSAL_LINK = '//mobile.tmall.com/universal';
SmartJump.DOWNLOAD_URL = '//itunes.apple.com/cn/app/id518966501?mt=8';
function getParam() {
  var r = {};
  var params = location.search.slice(1).split("&");
  if (params.length) {
    for (var i = 0; i < params.length; i++) {
      if (params[i] && params[i].indexOf('=') != -1) {
        var parts = params[i].split('=');
        r[parts[0]] = parts[1];
      }
    }
  }

  return r;
}

function isNotEmptyString(val) {
  return typeof val === 'string' && val !== '';
}

function decode(s) {
  return decodeURIComponent(s.replace(/\+/g, ' '));
}

module.exports = SmartJump;
});
