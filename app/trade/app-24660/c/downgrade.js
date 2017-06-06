var browserifyRequire=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof browserifyRequire=="function"&&browserifyRequire;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof browserifyRequire=="function"&&browserifyRequire;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isContext = undefined;
exports.getContext = getContext;
exports.getConfig = getConfig;

var _Weex = require('./Weex');

var _Env = require('./Env');

var _User = require('./User');

var User = _interopRequireWildcard(_User);

var _Windvane = require('./Windvane');

var Windvane = _interopRequireWildcard(_Windvane);

var _isFunction = require('./Tool/isFunction');

var _Url = require('./Url');

var _isContext2 = require('./Tool/isContext');

var _isContext = _interopRequireWildcard(_isContext2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var isContext = exports.isContext = _isContext.isContext;

/**
 * private method
 * @private
 * 
 * @param {Object} ctx weex dsl old version context
 * @return {Object} context
 */
/* global WXEnvironment */
function getContext(ctx) {
    if (isContext(ctx)) return ctx;
    var simulateContext = {};

    // simulator call for old weex version (<0.6)
    simulateContext.$call = _Weex.$call;

    // normally using
    simulateContext.$getConfig = getConfig;

    // polyfill ut
    simulateContext.$userTrack = function (type, name, comName, param) {
        var userTrack = (0, _Weex.requireModule)('userTrack');
        return userTrack.commit(type, name, comName, param);
    };

    // polyfill mtop
    simulateContext.$sendMtop = function (params, callback) {
        if ((0, _Env.isWeb)()) {
            // in web brwoser，use stream.sendMtop
            var stream = (0, _Weex.requireModule)('stream');
            return stream.sendMtop(params, callback);
        } else {
            // in native，use windvane
            return Windvane.call({
                class: 'MtopWVPlugin',
                method: 'send',
                data: params
            }, callback);
        }
    };

    // polyfill windvane
    simulateContext.$callWindvane = Windvane.call;

    // polyfill $openURL
    simulateContext.$openURL = _Url.openUrl;

    // polyfill $setSpm
    simulateContext.$setSpm = function (a, b) {
        var pageInfo = (0, _Weex.requireModule)('pageInfo');
        return pageInfo && pageInfo.setSpm(a, b);
    };

    // polyfill User.getUserInfo
    simulateContext.$getUserInfo = User.getUserInfo;

    // polyfill User.login
    simulateContext.$login = User.login;

    // polyfill User.logout
    simulateContext.$logout = User.logout;

    return simulateContext;
}

/**
 * getConfig
 *
 * @function getConfig
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * // WeexUtils.getConfig()
 * 
 * @return {Object}      [description]
 */
function getConfig(cb) {
    var _document = (0, _Weex.getDocument)();
    var _env = {};
    try {
        _env = WXEnvironment;
    } catch (e) {}
    var result = {
        env: _env,
        bundleVersion: '',
        bundleUrl: _document && _document.URL ? _document.URL : ''
    };

    (0, _isFunction.isFunction)(cb) && cb(result);

    return result;
}
},{"./Env":2,"./Tool/isContext":11,"./Tool/isFunction":13,"./Url":21,"./User":22,"./Weex":23,"./Windvane":24}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * @class Env
                                                                                                                                                                                                                                                                               * @classdesc
                                                                                                                                                                                                                                                                               * Get environment easy way. i.e. tmall, taobao, web, ios, android, ...
                                                                                                                                                                                                                                                                               */

exports.isClient = isClient;
exports.isTmall = isTmall;
exports.isTmallWeb = isTmallWeb;
exports.isTmallNative = isTmallNative;
exports.isTaobao = isTaobao;
exports.isTaobaoWeb = isTaobaoWeb;
exports.isTaobaoNative = isTaobaoNative;
exports.isWeb = isWeb;
exports.isIOS = isIOS;
exports.isAndroid = isAndroid;
exports.getUA = getUA;

var _ErrorMessage = require('./ErrorMessage');

var ErrorMessage = _interopRequireWildcard(_ErrorMessage);

var _Context = require('./Context');

var _isArray = require('./Tool/isArray');

var _isContext = require('./Tool/isContext');

var _isString = require('./Tool/isString');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * check is XXX app
 *
 * @memberOf Env
 * @function isClient
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         const myAppNameArray = ['MY_APP_NAME', 'my_app_name']
 *         const myAppName = 'MY_APP_NAME'
 *
 *         WeexUtils.env.isClient(this, myAppNameArray)
 *         WeexUtils.env.isClient(this, myAppName)
 *
 *         // also support without context(i.e. VUE2.0, RX, RAX, ...)
 *         WeexUtils.env.isClient(myAppNameArray)
 *         WeexUtils.env.isClient(myAppName)         
 *     }
 * }
 * </script>
 *
 * @param {Array|String} appName App name array. maybe your legacy app is different name
 * @return {Boolean}
 */
function isClient(ctx, nameList) {
  if (!(0, _isContext.isContext)(arguments[0]) && ((0, _isArray.isArray)(arguments[0]) || (0, _isString.isString)(arguments[0]))) {
    nameList = arguments[0];
  }

  ctx = (0, _Context.getContext)(ctx);
  nameList = (0, _isString.isString)(nameList) ? [nameList] : nameList;
  nameList = (0, _isArray.isArray)(nameList) ? nameList : [];

  var _config = ctx.$getConfig();
  var appname = _config.env && _config.env.appName || '';
  return nameList.indexOf(appname) >= 0 ? true : false;
}

/**
 * check is Tmall app
 *
 * @memberOf Env
 * @function isTmall
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         WeexUtils.env.isTmall(this)
 *
 *         // also support without context(i.e. VUE2.0, RX, RAX, ...)
 *         WeexUtils.env.isTmall()         
 *     }
 * }
 * </script>
 *
 * @return {Boolean}
 */
function isTmall(ctx) {
  return isClient(ctx, ['TM', 'tm', 'tmall', 'Tmall', '天猫']);
}

/**
 * check is Tmall app and is web
 *
 * @memberOf Env
 * @function isTmallWeb
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         WeexUtils.env.isTmallWeb(this)
 *
 *         // also support without context(i.e. VUE2.0, RX, RAX, ...)
 *         WeexUtils.env.isTmallWeb()
 *     }
 * }
 * </script>
 *
 * @return {Boolean}
 */
function isTmallWeb(ctx) {
  return isTmall(ctx) && isWeb(ctx);
}

/**
 * check is Tmall app pure native
 *
 * @memberOf Env
 * @function isTmallNative
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         WeexUtils.env.isTmallNative(this)
 *
 *         // also support without context(i.e. VUE2.0, RX, RAX, ...)
 *         WeexUtils.env.isTmallNative()
 *     }
 * }
 * </script>
 *
 * @return {Boolean}
 */
function isTmallNative(ctx) {
  return isTmall(ctx) && !isWeb(ctx);
}

/**
 * check is Taobao app
 *
 * @memberOf Env
 * @function isTaobao
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         WeexUtils.env.isTaobao(this)
 *
 *         // also support without context(i.e. VUE2.0, RX, RAX, ...)
 *         WeexUtils.env.isTaobao()
 *     }
 * }
 * </script>
 *
 * @return {Boolean}
 */
function isTaobao(ctx) {
  return isClient(ctx, ['TB', 'tb', 'taobao', 'Taobao', '淘宝']);
}

/**
 * check is Taobao app and is web
 *
 * @memberOf Env
 * @function isTaobaoWeb
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         WeexUtils.env.isTaobaoWeb(this)
 *
 *         // also support without context(i.e. VUE2.0, RX, RAX, ...)
 *         WeexUtils.env.isTaobaoWeb()
 *     }
 * }
 * </script>
 *
 * @return {Boolean}
 */
function isTaobaoWeb(ctx) {
  return isTaobao(ctx) && isWeb(ctx);
}

/**
 * check is Taobao app and is pure name
 *
 * @memberOf Env
 * @function isTaobaoNative
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         WeexUtils.env.isTaobaoNative(this)
 *
 *         // also support without context(i.e. VUE2.0, RX, RAX, ...)
 *         WeexUtils.env.isTaobaoNative()
 *     }
 * }
 * </script>
 *
 * @return {Boolean}
 */
function isTaobaoNative(ctx) {
  return isTaobao(ctx) && !isWeb(ctx);
}

/**
 * check is Web
 *
 * @memberOf Env
 * @function isWeb
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         WeexUtils.env.isWeb(this)
 *
 *         // also support without context(i.e. VUE2.0, RX, RAX, ...)
 *         WeexUtils.env.isWeb()
 *     }
 * }
 * </script>
 *
 * @return {Boolean}     check is web
 */
function isWeb(ctx) {
  ctx = (0, _Context.getContext)(ctx);
  var p = ctx.$getConfig().env.platform || '';
  return (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && p.match(/ios|android/i) === null ? true : false;
}

/**
 * check is iOS
 *
 * @memberOf Env
 * @function isIOS
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         WeexUtils.env.isIOS(this)
 *
 *         // also support without context(i.e. VUE2.0, RX, RAX, ...)
 *         WeexUtils.env.isIOS()
 *     }
 * }
 * </script>
 *
 * @return {Boolean}     check is ios
 */
function isIOS(ctx) {
  ctx = (0, _Context.getContext)(ctx);
  return ctx.$getConfig().env.platform === 'iOS' ? true : false;
}

/**
 * check is Android
 *
 * @memberOf Env
 * @function isAndroid
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         WeexUtils.env.isAndroid(this)
 *
 *         // also support without context(i.e. VUE2.0, RX, RAX, ...)
 *         WeexUtils.env.isAndroid()
 *     }
 * }
 * </script>
 *
 * @return {Boolean}     check is android
 */
function isAndroid(ctx) {
  ctx = (0, _Context.getContext)(ctx);
  return ctx.$getConfig().env.platform === 'android' ? true : false;
}

/**
 * get Weex UA(useragent)
 * UA format is DEVICE_MODEL(PLATFORM/OS_VERSION) AliApp(APP_NAME/APP_VERSION) Weex/WEEX_VERSION DEVICE_WIDTHxDEVICE_HEIGHT
 *
 * @memberOf Env
 * @function getUA
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         var _ua = WeexUtils.env.getUA()
 *         // '_ua' will be normal weex useragent
 *     }
 * }
 * </script>
 */
function getUA() {
  var _env = WXEnvironment;
  var _ua = [];
  _ua.push(_env.deviceModel + '(' + _env.platform + '/' + _env.osVersion + ')');
  _ua.push('AliApp(' + _env.appName + '/' + _env.appVersion + ')');
  _ua.push('Weex/' + _env.weexVersion);
  _ua.push(_env.deviceWidth + 'x' + _env.deviceHeight);
  return _ua.join(' ');
}
},{"./Context":1,"./ErrorMessage":3,"./Tool/isArray":10,"./Tool/isContext":11,"./Tool/isString":17}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.msg = msg;
function msg() {
    var template = arguments[0] + '';
    for (var i = 1; i < arguments.length; i++) {
        template = template.replace(/\%s/i, arguments[i]);
    }
    return template;
}

// param error
var ERROR_PARAM_IS_REQUIRED = exports.ERROR_PARAM_IS_REQUIRED = 'Param [%s] is required!';
var ERROR_SHOULD_BE = exports.ERROR_SHOULD_BE = '%s should be %s.';

var ERROR_MISSING_PARAM_CONTEXT = exports.ERROR_MISSING_PARAM_CONTEXT = msg(ERROR_SHOULD_BE, 'First param', 'context(ctx)');

var ERROR_MISSING_PARAM_URL = exports.ERROR_MISSING_PARAM_URL = msg(ERROR_PARAM_IS_REQUIRED, 'params.url');

var ERROR_MISSING_PARAM_URL2 = exports.ERROR_MISSING_PARAM_URL2 = msg(ERROR_PARAM_IS_REQUIRED, 'url');

var ERROR_MISSING_PARAM_ALL_LINK = exports.ERROR_MISSING_PARAM_ALL_LINK = msg(ERROR_PARAM_IS_REQUIRED, 'all-link');

var ERROR_MISSING_GOLDLOG = exports.ERROR_MISSING_GOLDLOG = msg(ERROR_PARAM_IS_REQUIRED, 'window.goldlog.record');

var ERROR_MESSAGE_SHOULD_BE_STRING = exports.ERROR_MESSAGE_SHOULD_BE_STRING = msg(ERROR_SHOULD_BE, 'message', 'string');

var ERROR_MISSING_CLICKTRACKIINFO = exports.ERROR_MISSING_CLICKTRACKIINFO = msg(ERROR_PARAM_IS_REQUIRED, 'clickTrackInfo(string)');

var ERROR_PARAM_SHOULE_BE_OBJECT = exports.ERROR_PARAM_SHOULE_BE_OBJECT = 'params is not object!';

var ERROR_JSONP_TIMEOUT = exports.ERROR_JSONP_TIMEOUT = 'JSONP request to %s timed out';

var ERROR_SHARE_UNSUPPORT = exports.ERROR_SHARE_UNSUPPORT = 'Currently env doesn`t support Share';

var ERROR_WRONG_URL_SCHEME = exports.ERROR_WRONG_URL_SCHEME = 'Wrong uri scheme.';

var ERROR_MTOP_REQUEST = exports.ERROR_MTOP_REQUEST = 'Mtop接口调用失败';

var ERROR_NEEDS_LOGIN = exports.ERROR_NEEDS_LOGIN = 'Please login first';

var ERROR_MISSING_CTX_OR_EVENT_MODULE = exports.ERROR_MISSING_CTX_OR_EVENT_MODULE = 'missing ctx or can not find event module';
},{}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debug = debug;
exports.log = log;
exports.info = info;
exports.warm = warm;
exports.error = error;
/* global console */

var isTesting = true;
try {
    isTesting = global.NODE_ENV !== 'test';
} catch (e) {}

function debug() {
    !isTesting && console && console.debug && console.debug.apply(this, arguments);
}

function log() {
    !isTesting && console && console.log && console.log.apply(this, arguments);
}

function info() {
    !isTesting && console && console.info && console.info.apply(this, arguments);
}

function warm() {
    !isTesting && console && console.warm && console.warm.apply(this, arguments);
}

function error() {
    !isTesting && console && console.error && console.error.apply(this, arguments);
}
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._typeof = _typeof;
/**
 * get real type
 *
 * @memberOf Tool
 * @function _typeof
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * WeexUtils.tool._typeof({}) // object
 * WeexUtils.tool._typeof([]) // array
 * WeexUtils.tool._typeof('') // string
 * WeexUtils.tool._typeof(1) // number
 * WeexUtils.tool._typeof(null) // null
 * WeexUtils.tool._typeof(undefined) // undefined
 *
 *
 * @param  {All}
 * @return {String}
 */
function _typeof(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.clone = clone;

var _isObject = require('./isObject');

var _isArray = require('./isArray');

/**
 * claone a object or array
 *
 * @memberOf Tool
 * @function clone
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * var a = [1,2,3]
 * var resultA = WeexUtils.tool.clone(a) // [1,2,3]
 * resultA[0] = 0 // [0, 2, 3]
 * a[1] = 100 // [1, 100, 3]
 *
 * var b = {a: 1, b: 2}
 * var resultB = WeexUtils.tool.clone(b) // {a: 1, b: 2}
 * resultB['a'] = 0 // {a: 0, b: 2}
 * b['b'] = '100' // {a: 1, b: 100}
 *
 * @param  {Object|Array}
 * @return {Object|Array}
 */
function clone(obj) {
    if (!(0, _isObject.isObject)(obj)) return obj;
    var result = (0, _isArray.isArray)(obj) ? [] : {},
        v = void 0,
        key = void 0;
    for (key in obj) {
        v = obj[key];
        result[key] = (0, _isObject.isObject)(v) ? clone(v) : v;
    }
    return result;
}
},{"./isArray":10,"./isObject":15}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.each = each;

var _isArray = require('./isArray');

var _isFunction = require('./isFunction');

var _isPlainObject = require('./isPlainObject');

/**
 * each array or object. callback( value, key )
 *
 * @memberOf Tool
 * @function each
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * WeexUtils.tool.each({a: 1, b: 2}, function(val, key) {
 *     // ...
 * })
 *
 * WeexUtils.tool.each([1, 2], function(val, key) {
 *     // ...
 * })
 *
 * @param  {Object|Array}
 * @param  {Function}
 */
function each(obj, cb) {
    cb = (0, _isFunction.isFunction)(cb) ? cb : function () {};
    if ((0, _isArray.isArray)(obj)) {
        for (var i = 0; i < obj.length; i++) {
            cb(obj[i], i);
        }
    } else if ((0, _isPlainObject.isPlainObject)(obj)) {
        for (var _i in obj) {
            cb(obj[_i], _i);
        }
    }
}
},{"./isArray":10,"./isFunction":13,"./isPlainObject":16}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extend = extend;

var _isFunction = require('./isFunction');

/**
 * extend objects
 *
 * @memberOf Tool
 * @function extend
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * var a = {a: 1}
 * var b = {a: 2, b: 2}
 * var c = {a: 3: b: 3, c: 3}
 *
 * WeexUtils.tool.extend(a, b) // {a: 2, b: 2}
 * WeexUtils.tool.extend(a, b, c) // {a: 3, b: 3, c: 3}
 *
 * @param  {Object}
 * @param  {...Object}
 * @return {Object}
 */
function extend(target) {
    for (var _len = arguments.length, src = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        src[_key - 1] = arguments[_key];
    }

    if ((0, _isFunction.isFunction)(Object.assign)) {
        Object.assign.apply(Object, [target].concat(src));
    } else {
        var first = src.shift();
        for (var key in first) {
            target[key] = first[key];
        }
        if (src.length) {
            extend.apply(undefined, [target].concat(src));
        }
    }

    return target;
}
},{"./isFunction":13}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = require('./_typeof');

Object.keys(_typeof).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _typeof[key];
    }
  });
});

var _clone = require('./clone');

Object.keys(_clone).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _clone[key];
    }
  });
});

var _each = require('./each');

Object.keys(_each).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _each[key];
    }
  });
});

var _extend = require('./extend');

Object.keys(_extend).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _extend[key];
    }
  });
});

var _isArray = require('./isArray');

Object.keys(_isArray).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isArray[key];
    }
  });
});

var _isContext = require('./isContext');

Object.keys(_isContext).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isContext[key];
    }
  });
});

var _isEmptyObject = require('./isEmptyObject');

Object.keys(_isEmptyObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isEmptyObject[key];
    }
  });
});

var _isFunction = require('./isFunction');

Object.keys(_isFunction).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isFunction[key];
    }
  });
});

var _isNumber = require('./isNumber');

Object.keys(_isNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isNumber[key];
    }
  });
});

var _isObject = require('./isObject');

Object.keys(_isObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isObject[key];
    }
  });
});

var _isPlainObject = require('./isPlainObject');

Object.keys(_isPlainObject).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isPlainObject[key];
    }
  });
});

var _isString = require('./isString');

Object.keys(_isString).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _isString[key];
    }
  });
});

var _keys = require('./keys');

Object.keys(_keys).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _keys[key];
    }
  });
});

var _union = require('./union');

Object.keys(_union).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _union[key];
    }
  });
});
},{"./_typeof":5,"./clone":6,"./each":7,"./extend":8,"./isArray":10,"./isContext":11,"./isEmptyObject":12,"./isFunction":13,"./isNumber":14,"./isObject":15,"./isPlainObject":16,"./isString":17,"./keys":18,"./union":19}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArray = isArray;

var _typeof2 = require('./_typeof');

/**
 * check is array. response will be boolean
 *
 * @memberOf Tool
 * @function isArray
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * WeexUtils.tool.isArray({}) // false
 * WeexUtils.tool.isArray([]) // true
 * WeexUtils.tool.isArray('') // false
 * WeexUtils.tool.isArray(1) // false
 * WeexUtils.tool.isArray(null) // false
 * WeexUtils.tool.isArray(undefined) // false
 *
 * @param  {All}
 * @return {Boolean}
 */
function isArray(obj) {
  return (0, _typeof2._typeof)(obj) === 'array' ? true : false;
}
},{"./_typeof":5}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isContext = isContext;

var _isPlainObject = require('./isPlainObject');

var _isFunction = require('./isFunction');

/**
 * check is context
 *
 * @memberOf Tool
 * @function isContext
 *
 * @example
 * <script>
 *     module.exports = {
 *         created: function () {
 *             var WeexUtils = require('@ali/WeexUtils')
 *             WeexUtils.tool.isContext(this); // true
 *         },
 *         methods: {
 *             lalala: function() {
 *                 var WeexUtils = require('@ali/WeexUtils')
 *                 WeexUtils.tool.isContext(this); // true
 *             }
 *         }
 *     }
 * </script>
 *
 *
 *
 * @param  {Object}  ctx vm context
 * @return {Boolean}     check is context
 */
function isContext(ctx) {
  var isObj = (0, _isPlainObject.isPlainObject)(ctx);
  var ishaveGetConfig = isObj && (0, _isFunction.isFunction)(ctx.$getConfig);
  return isObj && ishaveGetConfig ? true : false;
}
},{"./isFunction":13,"./isPlainObject":16}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEmptyObject = isEmptyObject;
/**
 * isEmptyObject
 *
 * @memberOf Tool
 * @function isEmptyObject
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * WeexUtils.tool.isEmptyObject({})
 * // true
 * WeexUtils.tool.isEmptyObject({a:1})
 * // false
 *
 * @param  {Object}  obj
 * @return {Boolean}
 */
function isEmptyObject(obj) {
    var empty = void 0;

    for (empty in obj) {
        return false;
    }

    return true;
}
},{}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;
/**
 * check is function. response will be boolean
 *
 * @memberOf Tool
 * @function isFunction
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * WeexUtils.tool.isFunction({}) // false
 * WeexUtils.tool.isFunction([]) // false
 * WeexUtils.tool.isFunction('') // false
 * WeexUtils.tool.isFunction(1) // false
 * WeexUtils.tool.isFunction(null) // false
 * WeexUtils.tool.isFunction(undefined) // false
 * WeexUtils.tool.isFunction(function(){}) // true
 *
 * @param  {All}
 * @return {Boolean}
 */
function isFunction(obj) {
  return typeof obj === 'function' ? true : false;
}
},{}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = isNumber;
/**
 * check is number. response will be boolean
 *
 * @memberOf Tool
 * @function isNumber
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * WeexUtils.tool.isNumber({}) // false
 * WeexUtils.tool.isNumber([]) // false
 * WeexUtils.tool.isNumber('') // false
 * WeexUtils.tool.isNumber(1) // true
 * WeexUtils.tool.isNumber(null) // false
 * WeexUtils.tool.isNumber(undefined) // false
 *
 * @param  {All}
 * @return {Boolean}
 */
function isNumber(obj) {
  return typeof obj === 'number' ? true : false;
}
},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObject = isObject;

var _isArray = require('./isArray');

var _isPlainObject = require('./isPlainObject');

/**
 * check is object or array. response will be boolean
 *
 * @memberOf Tool
 * @function isObject
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * WeexUtils.tool.isObject({}) // true
 * WeexUtils.tool.isObject([]) // true
 * WeexUtils.tool.isObject('') // false
 * WeexUtils.tool.isObject(1) // false
 * WeexUtils.tool.isObject(null) // false
 * WeexUtils.tool.isObject(undefined) // false
 *
 * @param  {All}
 * @return {Boolean}
 */
function isObject(obj) {
  return (0, _isPlainObject.isPlainObject)(obj) || (0, _isArray.isArray)(obj) ? true : false;
}
},{"./isArray":10,"./isPlainObject":16}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isPlainObject = isPlainObject;

var _typeof2 = require('./_typeof');

/**
 * check is object. response will be boolean
 *
 * @memberOf Tool
 * @function isPlainObject
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * WeexUtils.tool.isPlainObject({}) // true
 * WeexUtils.tool.isPlainObject([]) // false
 * WeexUtils.tool.isPlainObject('') // false
 * WeexUtils.tool.isPlainObject(1) // false
 * WeexUtils.tool.isPlainObject(null) // false
 * WeexUtils.tool.isPlainObject(undefined) // false
 *
 * @param  {All}
 * @return {Boolean}
 */
function isPlainObject(obj) {
  return (0, _typeof2._typeof)(obj) === 'object' ? true : false;
}
},{"./_typeof":5}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isString = isString;
/**
 * check is string. response will be boolean
 *
 * @memberOf Tool
 * @function isString
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * WeexUtils.tool.isString({}) // false
 * WeexUtils.tool.isString([]) // false
 * WeexUtils.tool.isString('') // true
 * WeexUtils.tool.isString(1) // false
 * WeexUtils.tool.isString(null) // false
 * WeexUtils.tool.isString(undefined) // false
 *
 * @param  {All}
 * @return {Boolean}
 */
function isString(obj) {
  return typeof obj === 'string' ? true : false;
}
},{}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.keys = keys;

var _isPlainObject = require('./isPlainObject');

/**
 * Get all of object keys
 *
 * @memberOf Tool
 * @function keys
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * WeexUtils.tool.keys({a:1, b:2, c:3}) // ['a', 'b', 'c']
 *
 * @param  {Object}
 * @return {Array}
 */
function keys(obj) {
    var result = [];

    if ((0, _isPlainObject.isPlainObject)(obj)) {
        for (var i in obj) {
            result.push(i);
        }
    }

    return result;
}
},{"./isPlainObject":16}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.union = union;

var _isArray = require('./isArray');

/**
 * Merge lot of arrays and make the value is unique
 *
 * @memberOf Tool
 * @function union
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * WeexUtils.tool.union([1,2,3], [2,3,4], [7,8,9]) // [1,2,3,4,7,8,9]
 *
 * @param  {Array}
 * @param  {...Array}
 * @return {Array}
 */
function union(target) {
    if (!(0, _isArray.isArray)(target)) return [];

    for (var _len = arguments.length, src = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        src[_key - 1] = arguments[_key];
    }

    var first = src.shift();

    if ((0, _isArray.isArray)(first)) {
        first.map(function (v) {
            if (target.indexOf(v) < 0) {
                target.push(v);
            }
        });

        if (src.length) {
            union.apply(undefined, [target].concat(src));
        }
    }

    return target;
}
},{"./isArray":10}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSpm = getSpm;
exports.pageEnter = pageEnter;
exports.pageLeave = pageLeave;
exports.commit = commit;
exports.commitEvent = commitEvent;
exports.customAdvance = customAdvance;
exports.exposure = exposure;
exports.other = other;
exports.click = click;
exports.goldlogClick = goldlogClick;
exports.goldlog = goldlog;
exports.clickTrackInfo = clickTrackInfo;

var _Tool = require('./Tool');

var _Env = require('./Env');

var _Url = require('./Url');

var _ErrorMessage = require('./ErrorMessage');

var ErrorMessage = _interopRequireWildcard(_ErrorMessage);

var _Weex = require('./Weex');

var _Context = require('./Context');

var _Log = require('./Log');

var Log = _interopRequireWildcard(_Log);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @class Tracker
 * @classdesc
 * UserTracker and spm tracker
 */

var MODULE_NAME = 'userTrack';

/**
 * get full SPM A.B.C.D
 *
 * @memberOf Tracker
 * @function getSpm
 *
 * @example
 * // spma = 123
 * // spmb = 456
 *
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         var spm = WeexUtils.tracker.getSpm(this, 'aaa', 'bbb', 'ccc', 'ddd')
 *         // spm: 123.456.ccc.ddd
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx  weex vm context
 * @param  {String} spma SPMA
 * @param  {String} spmb SPMB
 * @param  {String} spmc SPMC
 * @param  {String} spmd SPMD
 * @return {String}      Full SPM (A.B.C.D)
 */
function getSpm(ctx, spma, spmb, spmc, spmd) {
    var defaultSpm = '0';

    if (!(0, _Tool.isContext)(arguments[0]) && arguments.length > 2) {
        spmd = arguments[3];
        spmc = arguments[2];
        spmb = arguments[1];
        spma = arguments[0];
    } else if (!(0, _Tool.isContext)(arguments[0]) && arguments.length < 3) {
        spmd = arguments[1] + '';
        spmc = arguments[0] + '';
        spma = '';
        spmb = '';
    } else if ((0, _Tool.isContext)(arguments[0]) && arguments.length === 3) {
        spmc = spma ? spma + '' : defaultSpm;
        spmd = spmb ? spmb + '' : defaultSpm;
        spma = '';
        spmb = '';
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    // get spma, spmb from root element
    try {
        var _document = (0, _Weex.getDocument)();
        spma = _document.nodeMap._root.attr.spma;
        spmb = _document.nodeMap._root.attr.spmb;
    } catch (e) {
        Log.error(e);
    }

    // ctx._app.zebraConfig is for legacy version
    if (ctx && ctx._app && ctx._app.zebraConfig) {
        spma = ctx._app.zebraConfig.spma || defaultSpm;
        spmb = ctx._app.zebraConfig.spmb || defaultSpm;
    } else {
        spma = spma || defaultSpm;
        spmb = spmb || defaultSpm;
        spmc = spmc || defaultSpm;
        spmd = spmd || defaultSpm;
    }

    return [spma, spmb, spmc, spmd].join('.');
}

/**
 * page enter
 *
 * @memberOf Tracker
 * @function pageEnter
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         var pageName = 'Hello'
 *         var params = {
 *             'spm-cnt': '0.0.0.0', // 必须带入参数：当前页面 spm
 *             'spm-url': '0.0.0.0', // 当前页面访问 url 中带的 spm
 *             'scm': 'xxxxxxxxx', // 当前页面访问 url 中带的 scm
 *             // 其他参数根据业务场璟不同使用
 *         }
 *         WeexUtils.tracker.pageEnter(this, pageName, params)
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx  weex vm context
 * @param  {String} name Page name
 * @param  {Object} params params
 */
function pageEnter(ctx, name, params) {
    if (!(0, _Tool.isContext)(arguments[0])) {
        params = arguments[1];
        name = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    if ((0, _Tool.isPlainObject)(name)) {
        params = (0, _Tool.clone)(name);
        name = getBundleUrlWithoutQuery();
    }

    if (!name || !(0, _Tool.isString)(name) || !(0, _Tool.isPlainObject)(params)) {
        return false;
    }

    params = _normalizeParamC(params, true);
    params.url = getBundleUrl();

    if (isNewVersion(ctx)) {
        return commit(ctx, 'enter', name, '', params);
    } else {
        // todo support tmall and taobao
        if ((0, _Env.isTaobaoNative)(ctx)) {
            return commit(ctx, 'enter', name, '', params);
        } else if ((0, _Env.isTmallNative)(ctx)) {
            (0, _Weex.$call)(ctx, MODULE_NAME, 'enterEvent', name, params);
            return true;
        }
    }
    return false;

    //for new version
    //return commitEvent(ctx, name, 'enter', '', '', '', params);
}

function pageLeave(ctx, name) {
    if (!(0, _Tool.isContext)(arguments[0])) {
        name = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    if ((0, _Tool.isString)(name)) {
        (0, _Weex.$call)(ctx, MODULE_NAME, 'leaveEvent', name);
        return true;
    } else {
        return false;
    }
}

function commit(ctx, type, name, index, params) {
    if (!(0, _Tool.isContext)(arguments[0])) {
        params = arguments[3];
        index = arguments[2];
        name = arguments[1];
        type = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    if ((0, _Tool.isString)(type) && (0, _Tool.isString)(name) && (0, _Tool.isString)(index) && (0, _Tool.isPlainObject)(params)) {
        (0, _Weex.$call)(ctx, MODULE_NAME, 'commit', type, name, index, params);
        return true;
    } else {
        return false;
    }

    //for new version
    //Log.error('此接口将废弃，若因为此接口造成问题请自行负责。')
    //return commitEvent(ctx, name, type, index, '', '', params)
}

function commitEvent(ctx, pageName, type, arg1, arg2, arg3, params, isSilence) {
    if (!(0, _Tool.isContext)(arguments[0])) {
        isSilence = arguments[6];
        params = arguments[5];
        arg3 = arguments[4];
        arg2 = arguments[3];
        arg1 = arguments[2];
        type = arguments[1];
        pageName = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    !isSilence && Log.error('此接口未经 UT 团队、数据团队验证，若因为此接口造成问题请自行负责。');

    pageName = (0, _Tool.isString)(pageName) ? pageName : '';
    pageName = !pageName ? getBundleUrlWithoutQuery() : pageName;
    arg1 = (0, _Tool.isString)(arg1) ? arg1 : '';
    arg2 = (0, _Tool.isString)(arg2) ? arg2 : '';
    arg3 = (0, _Tool.isString)(arg3) ? arg3 : '';
    params = (0, _Tool.isPlainObject)(params) ? params : {};

    if ((0, _Tool.isString)(type)) {
        if (type === 'CLK' || type === 'click') {
            //arg1 === comName
            (0, _Weex.$call)(ctx, MODULE_NAME, 'commitut', 'click', 2101, pageName, arg1, '', '', '', params);
            return true;
        } else if (type === 'EXP' || type === 'pv') {
            (0, _Weex.$call)(ctx, MODULE_NAME, 'commitut', 'expose', 2201, pageName, '', arg1, arg2, arg3, params);
            return true;
        } else if (type === 'enter') {
            //arg1 === spmUrl
            (0, _Weex.$call)(ctx, MODULE_NAME, 'commitut', (0, _Env.isTmallNative)(ctx) ? 'enterEvent' : 'enter', 2001, pageName, arg1, '', '', '', params);
            return true;
        } else if (type === 'other' || type === '19999') {
            if (type === '19999') {
                (0, _Weex.$call)(ctx, MODULE_NAME, 'commitEvent', pageName, 19999, arg1, arg2, arg3, params);
            } else {
                (0, _Weex.$call)(ctx, MODULE_NAME, 'commitut', 'other', 19999, pageName, '', arg1, '', '', params);
            }
            return true;
        }
    }
    return false;
}

/**
 * customAdvance 自定义埋点
 *
 * @memberOf Tracker
 * @function customAdvance
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         var pageName = 'Hello'
 *         var eventId = '1234'
 *         var arg1 = 'arg1'
 *         var arg2 = 'arg2'
 *         var arg3 = 'arg3'
 *         var params = {
 *             'a': '1',
 *             'b': '2',
 *             // ...
 *         }
 *         WeexUtils.tracker.customAdvance(this, pageName, eventId, arg1, arg2, arg3, params)
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx       weex vm context
 * @param  {String} pageName  Page name
 * @param  {String} eventId   eventId
 * @param  {String} arg1      user track arg1
 * @param  {String} arg2      user track arg2
 * @param  {String} arg3      user track arg3
 * @param  {Object} params    params
 */
function customAdvance(ctx, pageName, eventId, arg1, arg2, arg3, params) {
    if (!(0, _Tool.isContext)(arguments[0])) {
        params = arguments[5];
        arg3 = arguments[4];
        arg2 = arguments[3];
        arg1 = arguments[2];
        eventId = arguments[1];
        pageName = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    return (0, _Weex.$call)(ctx, MODULE_NAME, 'customAdvance', pageName, eventId, arg1, arg2, arg3, params);
}

/**
 * 曝光埋点 2201
 *
 * @memberOf Tracker
 * @function exposure
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         var pageName = 'pageName'
 *         var arg1 = 'arg1'
 *         var arg2 = 'arg2'
 *         var arg3 = 'arg3'
 *         var params = {
 *             'a': '1',
 *             'b': '2',
 *             // ...
 *         }
 *         WeexUtils.tracker.exposure(this, pageName, arg1, arg2, arg3, params)
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx       weex vm context
 * @param  {String} pageName  pageName
 * @param  {String} arg1      arg1
 * @param  {String} arg2      arg2
 * @param  {String} arg3      arg3
 * @param  {Object} params    params
 * @return {Boolean}          true(success)/false(fail)
 */
function exposure(ctx, pageName, arg1, arg2, arg3, params) {
    if (!(0, _Tool.isContext)(arguments[0])) {
        params = arguments[4];
        arg3 = arguments[3];
        arg2 = arguments[2];
        arg1 = arguments[1];
        pageName = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    var result = false;
    var args = _normalizeParams(pageName, arg1);
    if (arguments.length >= 4) {
        // request by @卫苏 2016-08-26. same with web goldlog
        if ((0, _Tool.isPlainObject)(arg2)) {
            args = (0, _Tool.extend)(args, arg2);
        }
        //result = commit(ctx, 'expose', getBundleUrlWithoutQuery(ctx), '', args);
        if (isNewVersion(ctx)) {
            result = commitEvent(ctx, getBundleUrlWithoutQuery(), 'EXP', pageName, '', '', args);
        } else {
            result = commit(ctx, 'expose', getBundleUrlWithoutQuery(), '', args);
        }
    } else {
        result = commitEvent(ctx, pageName, 'EXP', arg1, arg2, arg3, params);
    }

    return result;
}

/**
 * 其他埋点 19999
 *
 * @memberOf Tracker
 * @function other
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         var pageName = 'pageName'
 *         var arg1 = 'arg1'
 *         var params = {
 *             'a': '1',
 *             'b': '2',
 *             // ...
 *         }
 *         WeexUtils.tracker.other(this, pageName, arg1, params)
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx       weex vm context
   @param  {String} pageName  pageName
 * @param  {String} arg1      arg1
 * @param  {Object} params    params
 * @return {Boolean}          true(success)/false(fail)
 */
function other(ctx, pageName, arg1, params, paramC) {
    //(ctx, paramA, newParamC, paramC, paramB)
    if (!(0, _Tool.isContext)(arguments[0])) {
        paramC = arguments[3];
        params = arguments[2];
        arg1 = arguments[1];
        pageName = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    var args;
    if (arguments.length >= 4) {
        args = _normalizeParams(pageName, arg1);
        args._lka = JSON.stringify({
            gokey: params,
            gmkey: paramC
        });
    }
    return commitEvent(ctx, arguments.length >= 4 ? getBundleUrlWithoutQuery() : pageName, arguments.length >= 4 ? '19999' : 'other', arguments.length >= 4 ? arguments[1] : arg1, '', '', args ? args : params);
}

/**
 * click event 2101 (goldlog)
 *
 * @memberOf Tracker
 * @function click
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         var pageName = 'Hello'
 *         var comName = 'Button'
 *         var params = {
 *             'a': '123',
 *             'b': '456'
 *         }
 *         WeexUtils.tracker.click(this, pageName, comName, params)
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx  weex vm context
 * @param  {String} name Page name
 * @param  {String} buttonName Button name
 * @param  {Object} params params
 */
function click(ctx, pageName, buttonName, params) {
    if (!(0, _Tool.isContext)(arguments[0])) {
        params = arguments[2];
        buttonName = arguments[1];
        pageName = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    if ((0, _Tool.isString)(buttonName)) {
        return commit(ctx, 'click', pageName, buttonName, params);
    } else {
        params = buttonName;
        // support lagacy
        return commit(ctx, 'click', pageName, '0', params);
    }

    //for new version
    //return commitEvent(ctx, pageName, 'CLK', buttonName, '', '', params);
}

/**
 * goldlogClick
 * http://tbdocs.alibaba-inc.com//pages/viewpage.action?pageId=222463274
 *
 * @memberOf Tracker
 * @function goldlogClick
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         var spma = 'spma'
 *         var spmb = 'spmb'
 *         var spmc = ''
 *         goldlogString = 'gostr=/mfe;locaid=d1222222;k1=v1&k2=v2&k3=v3'
 *         WeexUtils.tracker.goldlogClick(this, spma, spmb, spmc, goldlogString)
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx  weex vm context
 * @param  {String} spma Page spma
 * @param  {String} spmb Page spmb
 * @param  {String} spmc Page spmc
 * @param  {String} goldlogString goldlog string
 */
function goldlogClick(ctx, spma, spmb, spmc, goldlogString) {
    if (!(0, _Tool.isContext)(arguments[0])) {
        goldlogString = arguments[3];
        spmc = arguments[2];
        spmb = arguments[1];
        spma = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    // http://www.atatech.org/articles/37282#3
    // gostr=/mfe.1000;locaid=d1222222;k1=v1&k2=v2&k3=v3
    // paramA: /mfe.1000.d1222222
    // paramB: ''
    // paramC: k1=v1&k2=v2&k3=v3&locaid=d1222222
    // paramD:
    goldlogString = (0, _Tool.isString)(goldlogString) ? goldlogString : '';
    var splitGoldlog = goldlogString.split(';');
    var gostr = splitGoldlog[0] || '';
    var spmd = splitGoldlog[1] || '';
    var logkeyargs = void 0;

    gostr = gostr.replace(/^gostr\=/, '');
    spmd = spmd.replace(/^locaid\=/, '');
    splitGoldlog = splitGoldlog.slice(2);
    logkeyargs = splitGoldlog.join('');

    return goldlog(ctx, [gostr, spma, spmb, spmc, spmd].join('.'), 'CLK', logkeyargs, '');
}

/**
 * goldlog
 * http://tbdocs.alibaba-inc.com//pages/viewpage.action?pageId=222463274
 *
 * @memberOf Tracker
 * @function goldlog
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         // the same params with window.goldlog('paramA', 'paramB', 'paramC', 'paramD')
 *         // paramB is CLK: 2101. EXP: 2201. (other string):19999
 *         // paramC please input your custom params. format like url query
 *
 *         // 2101: 点击埋点
 *         WeexUtils.tracker.goldlog(this, '/tmallfmcg.234.5', 'CLK', 'a=1&b=2', 'H46896572', 'spmA.spmB.spmC.spmD')
 *
 *         // 2201: 曝光埋点
 *         WeexUtils.tracker.goldlog(this, '/tmallfmcg.234.5', 'EXP', 'a=1&b=2', 'H46896572')
 *
 *         // 19999: 其他埋点
 *         WeexUtils.tracker.goldlog(this, '/tmallfmcg.234.5', 'OTHER', 'a=1&b=2', 'H46896572')
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx  weex vm context
 * @param  {String} paramA goldlog 1st param
 * @param  {String} paramB goldlog 2nd param
 * @param  {String} paramC goldlog 3rd param. custom params. format like url query. ie: a=1&b=2&c=3
 * @param  {String} paramD goldlog 4th param
 * @param  {String} spm    current page full spm string(optional)
 */
function goldlog(ctx, paramA, paramB, paramC, paramD, spm) {
    if (!(0, _Tool.isContext)(arguments[0])) {
        spm = arguments[4];
        paramD = arguments[3];
        paramC = arguments[2];
        paramB = arguments[1];
        paramA = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    paramA = (0, _Tool.isString)(paramA) ? paramA : '';
    paramB = (0, _Tool.isString)(paramB) ? paramB : '';
    paramC = (0, _Tool.isString)(paramC) ? paramC : '';
    paramD = (0, _Tool.isString)(paramD) ? paramD : '';
    spm = (0, _Tool.isString)(spm) ? spm : '';

    if ((0, _Env.isWeb)(ctx)) {
        return _webGoldlog(paramA, paramB, paramC, paramD);
    } else {
        // same logic for goldlog
        var newParamC = 'gokey=' + paramC + '&gmkey=' + paramB;

        if (paramB === '') {
            return false;
        } else if (paramB === 'CLK' || paramB === 'click') {
            //            let params = _normalizeParams(paramA, paramC)
            var params = _normalizeParams(paramA, newParamC);
            if (spm) {
                params.spm = spm;
            }
            // request by @卫苏 2016-08-26. same with web goldlog
            params._lka = JSON.stringify({
                gokey: paramC,
                gmkey: paramB
            });
            var _url = getBundleUrlWithoutQuery();

            // android bug and tmall ios bug
            // return commitEvent(ctx, _url, 2101, paramA, '', '', params, true)
            return isNewVersion(ctx) ? customAdvance(ctx, _url, 2101, paramA, '', '', params) : click(ctx, _url, paramA, params);
        } else if (paramB === 'EXP' || paramB === 'pv') {
            //for new version
            //exposure(ctx, '', paramA, '', '', paramC)
            return exposure(ctx, paramA, newParamC, {
                _lka: JSON.stringify({
                    gokey: paramC,
                    gmkey: paramB
                })
            });
        } else {
            //for new version
            //other(ctx, '', paramA, paramC)
            return other(ctx, paramA, newParamC, paramC, paramB);
        }
    }
}

function _webGoldlog(paramA, paramB, paramC, paramD) {
    if (window && window.goldlog && window.goldlog.record) {
        window.goldlog.record(paramA, paramB, paramC, paramD);
        return true;
    } else {
        Log.error(ErrorMessage.ERROR_MISSING_GOLDLOG);
        return false;
    }
}

function _normalizeParams(paramA, paramC) {
    var logkeyargs = (0, _Tool.isPlainObject)(paramC) ? paramC : (0, _Url.paramsToObj)(paramC);
    return {
        logkey: paramA,
        //logkeyargs: _normalizeParamC(paramC),
        weex: logkeyargs.weex ? logkeyargs.weex : '1',
        autosend: '1',
        url: getBundleUrl(),
        cna: '',
        extendargs: JSON.stringify({}),
        isonepage: 0
    };
}

function _normalizeParamC(paramC, isObj) {
    var logkeyargs = (0, _Tool.isPlainObject)(paramC) ? paramC : (0, _Url.paramsToObj)(paramC);
    logkeyargs.weex = logkeyargs.weex ? logkeyargs.weex : '1';
    logkeyargs.autosend = '1';
    return isObj ? logkeyargs : (0, _Url.objToParams)(logkeyargs);
}

function getBundleUrl(isObj) {
    var ctx = (0, _Context.getContext)();

    try {
        var _url = ctx.$getConfig().bundleUrl || '';
        if (!!isObj) {
            return new _Url.parseUrl(_url);
        }
        return _url;
    } catch (e) {
        Log.error(e);
    }

    return !!isObj ? {} : '';
}

function getBundleUrlWithoutQuery() {
    var urlObj = getBundleUrl(true);
    var origin = urlObj.origin || '';
    var pathname = urlObj.pathname || '';
    return origin + pathname;
}

function isNewVersion() {
    var ctx = (0, _Context.getContext)();
    var appVersion = ctx.$getConfig().env.appVersion || '';

    if ((0, _Env.isTmallNative)(ctx)) {
        if ((0, _Env.isAndroid)(ctx) && compare(appVersion, '5.23.0.2')) {
            return true;
        }
        if ((0, _Env.isIOS)(ctx) && compare(appVersion, '5.23.0.2')) {
            return true;
        }
    } else if ((0, _Env.isTaobaoNative)(ctx)) {
        if ((0, _Env.isAndroid)(ctx) && compare(appVersion, '5.11.0.7')) {
            return true;
        }
        if ((0, _Env.isIOS)(ctx) && compare(appVersion, '5.11.0')) {
            return true;
        }
    }

    return false;
}

function compare(target, source) {
    target = (0, _Tool.isString)(target) ? target : '';
    source = (0, _Tool.isString)(source) ? source : '';
    var tt = target.split('.').slice(0, 4);
    var ss = source.split('.').slice(0, 4);
    var isAllMatch = true;
    for (var i = 0; i < 4; i++) {
        tt[i] = parseInt(tt[i], 10) || 0;
        ss[i] = parseInt(ss[i], 10) || 0;

        if (isAllMatch && tt[i] !== ss[i]) {
            isAllMatch = false;
        }
    }

    if (isAllMatch) return false;

    for (var _i = 0; _i < 4; _i++) {
        if (tt[_i] < ss[_i]) {
            return false;
        }
    }

    return true;
}

/**
 * clickTrackInfo
 * http://gitlab.alibaba-inc.com/algoqa/algoqa_tpp/wikis/trackinfo
 *
 * @memberOf Tracker
 * @function clickTrackInfo
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         var aladdinRes = { clickTrackInfo: 'AAAAA-----BBBBB-----CCCCC' }
 *         WeexUtils.tracker.clickTrackInfo(this, aladdinRes.clickTrackInfo)
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx  weex vm context
 * @param  {String} clickTrackInfo server response custom data string
 */
function clickTrackInfo(ctx, trackInfo) {
    if (!(0, _Tool.isContext)(arguments[0])) {
        trackInfo = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    trackInfo = (0, _Tool.isString)(trackInfo) ? trackInfo : '';
    if (!trackInfo) {
        return new Error(ErrorMessage.ERROR_MISSING_CLICKTRACKIINFO);
    }

    var splitString = '-----';
    var splitTrackInfo = trackInfo.split(splitString);
    var paramA = splitTrackInfo[0] || '';
    var paramC = splitTrackInfo[1] || '';
    var paramD = splitTrackInfo[2] || '';

    return goldlog(ctx, paramA, 'CLK', paramC, paramD);
}
},{"./Context":1,"./Env":2,"./ErrorMessage":3,"./Log":4,"./Tool":9,"./Url":21,"./Weex":23}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
                                                                                                                                                                                                                                                                               * @class Url
                                                                                                                                                                                                                                                                               * @classdesc
                                                                                                                                                                                                                                                                               * Url tools
                                                                                                                                                                                                                                                                               */

exports.openUrl = openUrl;
exports.getSpmUrl = getSpmUrl;
exports.parseUrl = parseUrl;
exports.fixSchema = fixSchema;
exports.paramsToObj = paramsToObj;
exports.objToParams = objToParams;

var _Tracker = require('./Tracker');

var Tracker = _interopRequireWildcard(_Tracker);

var _isContext = require('./Tool/isContext');

var _isString = require('./Tool/isString');

var _ErrorMessage = require('./ErrorMessage');

var ErrorMessage = _interopRequireWildcard(_ErrorMessage);

var _Env = require('./Env');

var Env = _interopRequireWildcard(_Env);

var _Weex = require('./Weex');

var _Context = require('./Context');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * open a new page
 *
 * @memberOf Url
 * @function openUrl
 *
 * @example
 * <template>
 *     <text href="//www.tmall.com" onClick="openUrl">Hello</text>
 * </template>
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     methods: {
 *         openUrl: function(e) {
 *             e = e.detail ? e.detail : e
 *
 *             var url = e.target.attr.href
 *             WeexUtils.url.openUrl(this, url, 'ccc', 'ddd')
 *
 *             WeexUtils.url.openUrl(url, 'ccc', 'ddd')
 *         }
 *     }
 * }
 * </script>
 *
 * @param  {String} urlStr url
 * @param  {String} spmc   spmd
 * @param  {String} spmd   spmd
 */
function openUrl(ctx, urlStr, spmc, spmd) {
    if (!(0, _isContext.isContext)(arguments[0]) && (0, _isString.isString)(arguments[0])) {
        spmd = arguments[2];
        spmc = arguments[1];
        urlStr = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    var _url = getSpmUrl(ctx, urlStr, spmc, spmd);

    var _event = (0, _Weex.requireModule)('event');
    if (_event && _event.openURL) {
        _event.openURL(_url);
    } else if ((0, _isContext.isContext)(ctx) && ctx.$openURL) {
        ctx.$openURL(_url);
    } else {
        throw new Error(ErrorMessage.ERROR_MISSING_CTX_OR_EVENT_MODULE);
    }

    return _url;
}

/**
 * open a new page
 *
 * @memberOf Url
 * @function getSpmUrl
 *
 * @example
 * <template>
 *     <a href="{{url}}">Alibaba inc</text>
 * </template>
 * <script>
 * module.exports = {
 *     methods: {
 *         data: function() {
 *             return {
 *                 url: 'https://www.alibaba-inc.com'
 *             }
 *         },
 *         created: function(e) {
 *             var WeexUtils = require('@ali/WeexUtils')
 *             // spma: 'aaa', spmb: 'bbb'
 *             this.url = WeexUtils.url.getSpmUrl(this, this.url, 'ccc', 'ddd')
 *             // this.url = http://www.alibaba-inc.com?spm=aaa.bbb.ccc.ddd
 *         }
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx    Weex VM
 * @param  {String} urlStr url
 * @param  {String} spmc   spmd
 * @param  {String} spmd   spmd
 */
function getSpmUrl(ctx, urlStr, spmc, spmd) {
    if (!(0, _isContext.isContext)(arguments[0]) && (0, _isString.isString)(arguments[0])) {
        spmd = arguments[2];
        spmc = arguments[1];
        urlStr = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    if (!urlStr) {
        throw new Error(ErrorMessage.ERROR_MISSING_PARAM_URL2);
    }

    urlStr = fixSchema(urlStr);

    spmc = spmc || 0;
    spmd = spmd || 0;

    var urlObj = void 0;

    try {
        urlObj = new parseUrl(urlStr);
    } catch (e) {
        return urlStr;
    }

    /**
     * When user doesn't input spmc && spmd dont reset url spm
     */
    if (!urlObj.params.spm && spmc && spmd) {
        var newSpm = Tracker.getSpm(ctx, spmc, spmd);
        urlObj.params.spm = newSpm;
    }

    urlObj.params._from = Env.isWeb(ctx) ? 'h5' : 'weex';

    if (ctx && ctx._app && ctx._app.zebraConfig) {
        urlObj.params.utpagename = ctx._app.zebraConfig.pageName || '';
    }

    return urlObj.toString();
}

/**
 * parsing url
 *
 * @memberOf Url
 * @function parseUrl
 *
 * @example
 * <script>
 * module.exports = {
 *     methods: {
 *         created: function() {
 *             var WeexUtils = require('@ali/WeexUtils')
 *             var url = 'https://www.tmall.com/wow/act/yoyoyo?wh_weex=true#haha'
 *             var urlObj = new WeexUtils.url.parseUrl(url)
 *             // urlObj.protocol: 'https:'
 *             // urlObj.username: ''
 *             // urlObj.password: ''
 *             // urlObj.hostname: www.tmall.com
 *             // urlObj.port: ''
 *             // urlObj.pathname: /wow/act/yoyoyo
 *             // urlObj.search: ?wh_weex=true
 *             // urlObj.params: { wh_weex: 'true' }
 *             // urlObj.hash: haha
 *             // urlObj.origin: www.tmall.com/wow/act/yoyoyo
 *         }
 *     }
 * }
 * </script>
 *
 *
 * @param  {String} url url
 * @return {Object}
 */
function parseUrl(url) {
    var _this = this;

    var params = {};

    Object.defineProperty(this, 'params', {
        set: function set(v) {
            if ((typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object') {
                for (var p in params) {
                    delete params[p];
                }
                for (var _p in v) {
                    params[_p] = v[_p];
                }
            }
        },
        get: function get() {
            return params;
        },
        enumerable: true
    });

    Object.defineProperty(this, 'search', {
        set: function set(v) {
            if (typeof v === 'string') {
                if (v.indexOf('?') === 0) {
                    v = v.substr(1);
                }
                var search = v.split('&');
                for (var p in params) {
                    delete params[p];
                }
                for (var i = 0; i < search.length; i++) {
                    var pair = search[i].split('=');
                    if (pair[0]) {
                        try {
                            params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
                        } catch (e) {
                            params[pair[0]] = pair[1] || '';
                        }
                    }
                }
            }
        },
        get: function get() {
            var search = [];
            for (var p in params) {
                if (params[p]) {
                    try {
                        search.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
                    } catch (e) {
                        // search.push(p + '=' + params[p])
                    }
                } else {
                    try {
                        search.push(encodeURIComponent(p));
                    } catch (e) {
                        // search.push(p)
                    }
                }
            }
            if (search.length) {
                return '?' + search.join('&');
            } else {
                return '';
            }
        },
        enumerable: true
    });

    var hash = void 0;
    Object.defineProperty(this, 'hash', {
        set: function set(v) {
            if (typeof v === 'string') {
                if (v && v.indexOf('#') < 0) {
                    v = '#' + v;
                }
                hash = v || '';
            }
        },
        get: function get() {
            return hash;
        },
        enumerable: true
    });

    this.set = function (v) {
        var matchArr = void 0;
        if (matchArr = v.match(new RegExp('^([a-z0-9-]+\:)?' + //protocol
        '[/]{2}' + //slash x 2
        '(?:([^@/:\?]+)(?::([^@/:]+))?@)?' + //username:password@
        '([^:/?#]+)' + //hostname
        '(?:[:]([0-9]+))?' + //port
        '([/][^?#]*)?' + //pathname
        '(?:[?]([^?#]*))?' + //search
        '(#[^#]*)?$' //hash
        , 'i'))) {
            _this.protocol = matchArr[1] || '';
            _this.username = matchArr[2] || '';
            _this.password = matchArr[3] || '';
            _this.hostname = _this.host = matchArr[4];
            _this.port = matchArr[5] || '';
            _this.pathname = matchArr[6] || '/';
            _this.search = matchArr[7] || '';
            _this.hash = matchArr[8] || '';
            _this.origin = _this.protocol + '//' + _this.hostname;
        } else {
            throw new Error(ErrorMessage.ERROR_WRONG_URL_SCHEME);
        }
    };

    Object.defineProperty(this, 'toString', {
        value: function value() {
            var string = _this.protocol + '//';
            if (_this.username) {
                string += _this.username;
                if (_this.password) {
                    string += ':' + _this.password;
                }
                string += '@';
            }
            string += _this.host;
            if (_this.port && _this.port !== '80') {
                string += ':' + _this.port;
            }
            if (_this.pathname) {
                string += _this.pathname;
            }
            if (_this.search) {
                string += _this.search;
            }
            if (_this.hash) {
                string += _this.hash;
            }
            return string;
        },
        enumerable: true
    });

    this.set(url.toString());
}

/**
 * fix url schema issues
 * case: http://, https://, tmall://, taobao://
 *
 * @memberOf Url
 * @function fixSchema
 *
 * @example
 *  var WeexUtils = require('@ali/WeexUtils')
 *  var url = '//www.tmall.com';
 *  WeexUtils.url.fixSchema(url);
 *  // 'https://www.tmall.com'
 *
 * @param  {String} url url with schema or not
 * @return {String} url url with schema
 */
function fixSchema(url, schema) {
    url = url || '';
    schema = schema || 'https';
    return typeof url === 'string' && url.match(/^\/\//) ? schema + ':' + url : url;
}

/**
 * url querys to object
 * from: a=1&b=2
 * to: { a: 1, b: 2 }
 *
 * @memberOf Url
 * @function paramsToObj
 *
 * @example
 *  var WeexUtils = require('@ali/WeexUtils')
 *
 *  WeexUtils.url.paramsToObj('a=1&b=2');
 *  // { a: 1, b: 2 }
 *
 * @param  {String} url querys url query string
 * @return {Object} query object
 */
function paramsToObj(str) {
    str = (0, _isString.isString)(str) ? str : '';

    var result = {};
    var splitStr = str.split('&');

    for (var i = 0; i < splitStr.length; i++) {
        var s = splitStr[i];
        var splitKV = s.split('=');
        var key = decodeURIComponent(splitKV[0]);
        var val = decodeURIComponent(splitKV[1]);
        if (key) {
            result[key] = val;
        }
    }

    return result;
}

/**
 * url querys to object
 * from: { a: 1, b: 2 }
 * to: a=1&b=2
 *
 * @memberOf Url
 * @function objToParams
 *
 * @example
 *  var WeexUtils = require('@ali/WeexUtils')
 *
 *  WeexUtils.url.objToParams({ a: 1, b: 2 });
 *  // 'a=1&b=2'
 *
 * @param  {String} url querys url query string
 * @return {Object} query object
 */
function objToParams(obj) {
    var result = [];
    for (var i in obj) {
        var key = i;
        var val = obj[i];
        result.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
    }
    return result.join('&');
}
},{"./Context":1,"./Env":2,"./ErrorMessage":3,"./Tool/isContext":11,"./Tool/isString":17,"./Tracker":20,"./Weex":23}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserInfo = getUserInfo;
exports.login = login;
exports.logout = logout;

var _ErrorMessage = require('./ErrorMessage');

var ErrorMessage = _interopRequireWildcard(_ErrorMessage);

var _Log = require('./Log');

var Log = _interopRequireWildcard(_Log);

var _isContext = require('./Tool/isContext');

var _isPlainObject = require('./Tool/isPlainObject');

var _isString = require('./Tool/isString');

var _isFunction = require('./Tool/isFunction');

var _Weex = require('./Weex');

var _Context = require('./Context');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * @class User
 * @classdesc
 * Taobao/Tmall User module
 */

var MODULE_NAME = 'user';

/**
 * getUserInfo
 *
 * @memberOf User
 * @function getUserInfo
 *
 * @example
 * <script>
 * module.exports = {
 *     created: function() {
 *         var WeexUtils = require('@ali/WeexUtils')
 *         WeexUtils.user.getUserInfo(this, function(res){
 *             if(res.isLogin === true || res.isLogin === 'true') {
 *                 console.log('login success')
 *             }
 *         })
 *     }
 * }
 * </script>
 *
 * @param  {Object}   ctx      weex vm context
 * @param  {Function} callback callback
 */
function getUserInfo(ctx, callback) {
    var METHOD_NAME = 'getUserInfo';
    if (!(0, _isContext.isContext)(arguments[0])) {
        callback = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    if ((0, _isFunction.isFunction)(callback)) {
        return (0, _Weex.$call)(ctx, MODULE_NAME, METHOD_NAME, function (res) {
            res = handleResType(res);
            callback.call(ctx, res);
        });
    } else {
        return new Promise(function (resolve, reject) {
            return handlePromiseRes(ctx, METHOD_NAME, resolve, reject);
        });
    }
}

/**
 * login. When called this function will wake up app client login api
 *
 * @memberOf User
 * @function login
 *
 * @example
 * <script>
 * module.exports = {
 *     created: function() {
 *         var WeexUtils = require('@ali/WeexUtils')
 *         WeexUtils.user.login(this, function(res){
 *             if(res.status === 'success') {
 *                 console.log('login success')
 *             }
 *         })
 *     }
 * }
 * </script>
 *
 * @param  {Object}   ctx      weex vm context
 * @param  {Function} callback callback
 */
function login(ctx, callback) {
    var METHOD_NAME = 'login';
    if (!(0, _isContext.isContext)(arguments[0])) {
        callback = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    if ((0, _isFunction.isFunction)(callback)) {
        return (0, _Weex.$call)(ctx, MODULE_NAME, METHOD_NAME, function (res) {
            res = handleResType(res);
            callback.call(ctx, res);
        });
    } else {
        return new Promise(function (resolve, reject) {
            return handlePromiseRes(ctx, METHOD_NAME, resolve, reject);
        });
    }
}

/**
 * logout.
 *
 * @memberOf User
 * @function logout
 *
 * @example
 * <script>
 * module.exports = {
 *     created: function() {
 *         var WeexUtils = require('@ali/WeexUtils')
 *         WeexUtils.user.logout(this, function(){
 *             // logout
 *         })
 *     }
 * }
 * </script>
 *
 * @param  {Object}   ctx      weex vm context
 * @param  {Function} callback callback
 */
function logout(ctx, callback) {
    var METHOD_NAME = 'logout';
    if (!(0, _isContext.isContext)(arguments[0])) {
        callback = arguments[0];
    }

    ctx = (0, _Context.getContext)(arguments[0]);

    if ((0, _isFunction.isFunction)(callback)) {
        (0, _Weex.$call)(ctx, MODULE_NAME, METHOD_NAME, function (res) {
            res = handleResType(res);
            callback.call(ctx, res);
        });
    } else {
        return new Promise(function (resolve, reject) {
            return handlePromiseRes(ctx, METHOD_NAME, resolve, reject);
        });
    }
}

function handleResType(res) {
    if ((0, _isString.isString)(res)) {
        try {
            res = JSON.parse(res);
        } catch (e) {
            Log.error(e);
        }
    }
    return res;
}

function handlePromiseRes(ctx, METHOD_NAME, resolve, reject) {
    return (0, _Weex.$call)(ctx, MODULE_NAME, METHOD_NAME, function (res) {
        if ((0, _isString.isString)(res)) {
            try {
                res = JSON.parse(res);
            } catch (e) {
                throw e;
            }
        }

        resolve.call(ctx, res);
    });
}
},{"./Context":1,"./ErrorMessage":3,"./Log":4,"./Tool/isContext":11,"./Tool/isFunction":13,"./Tool/isPlainObject":16,"./Tool/isString":17,"./Weex":23}],23:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports._require = _require;
exports.requireModule = requireModule;
exports.$call = $call;
exports.getDocument = getDocument;

var OLD_WEEX_MODULE_PREFIX = '@weex-module/';

/**
 * private modules
 * @private
 *
 * @param  {String} moduleName   moduleName
 * @return {Any}
 */
function _require(name) {
    try {
        if (isExist(weex) && weex.requireModule) {
            name = removeModuleName(name);
            return weex.requireModule(name);
        }
    } catch (e) {}

    try {
        if (isExist(__weex_require__)) {
            return __weex_require__(name);
        }
    } catch (e) {}

    try {
        if (require.name === '_require') {
            return require(name);
        }
    } catch (e) {}

    return null;
}

/**
 * require module
 * 
 * @function requireModule
 *
 * @example
 * var WeexUtils = require('@ali/WeexUtils')
 * var dom = WeexUtils.requireModule('dom')
 *
 * // legacy support
 * var dom = WeexUtils.requireModule('@weex-module/dom')
 * 
 * @param  {String} name required module
 * @return {Object}      module object or null (can not find module)
 */
function requireModule(name) {
    name = typeof name === 'string' ? name : '';

    // jsfm 0.19.7 will replace weex.require -> weex.requireModule
    try {
        if (isExist(weex) && weex.requireModule) {
            name = removeModuleName(name);
            return weex.requireModule(name);
        }
    } catch (e) {}

    // '@weex-module/' is not work on jsfm 0.19.6
    name = addModuleName(name);

    try {
        if (isExist(weex) && weex.require) {
            return _require(name);
        }
    } catch (e) {}

    return _require(name);
}

function $call(ctx, moduleName, methodName) {
    var _moduleName = void 0,
        _methodName = void 0;
    var isCtx = (typeof ctx === 'undefined' ? 'undefined' : _typeof(ctx)) === 'object' && typeof ctx.$getConfig === 'function';

    // get original
    if (isCtx) {
        _moduleName = typeof moduleName === 'string' ? moduleName : '';
        _methodName = typeof methodName === 'string' ? methodName : '';
    } else {
        _moduleName = typeof ctx === 'string' ? ctx : '';
        _methodName = typeof moduleName === 'string' ? moduleName : '';
    }

    var module = requireModule(_moduleName);

    if (isCtx && !module && ctx.$call) {
        var args = [_moduleName, _methodName];
        Array.prototype.push.apply(args, Array.prototype.slice.call(arguments, 3));
        return ctx.$call.apply(ctx, args);
    } else {
        var method = module[_methodName];
        var argSliceLength = isCtx ? 3 : 2;
        if (typeof method === 'function') {
            return method.apply({}, Array.prototype.slice.call(arguments, argSliceLength));
        }
    }

    return null;
}

/**
 * polyfill to get weex docuemnt. Why try each block? because in js runtime when document is not defined. typeof(document) will stop process this block.
 * @private
 * 
 * @return {Object} weex document or null
 */
function getDocument() {
    try {
        // jsfm version(>=0.19.6) document
        if (isExist(weex) && weex.document) {
            return weex.document;
        }
    } catch (e) {}

    try {
        // jsfm version(0.13.8) document
        if (isExist(__weex_document__)) {
            return __weex_document__;
        }
    } catch (e) {}

    try {
        // jsfm version(0.13.6) document
        if (isExist(document) && isWeexDocument(document)) {
            return document;
        }
    } catch (e) {}

    return null;
}

/**
 * check is Weex document or not
 * @private
 * 
 * @param  {object}  doc document
 * @return {Boolean}
 */
function isWeexDocument(doc) {
    return doc && doc.createTextNode ? true : false;
}

/**
 * isExist variable
 * @private
 * 
 * @param  {All}  v variable
 * @return {Boolean}
 */
function isExist(v) {
    return typeof v !== 'undefined';
}

function removeModuleName(name) {
    return typeof name === 'string' ? name.replace(OLD_WEEX_MODULE_PREFIX, '') : '';
}

function addModuleName(name) {
    return typeof name === 'string' ? name.match(RegExp('^' + OLD_WEEX_MODULE_PREFIX)) ? name : OLD_WEEX_MODULE_PREFIX + name : '';
}
},{}],24:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.call = call;

var _Weex = require('./Weex');

var _isFunction = require('./Tool/isFunction');

/**
 * call method. official docs <a>http://h5.alibaba-inc.com/api/TaobaoClient-API.html#Mtop请求_MtopWVPlugin</a>
 *
 * @memberOf Windvane
 * @function call
 *
 * @example
 * <script>
 * var WeexUtils = require('@ali/WeexUtils')
 * module.exports = {
 *     created: function() {
 *         WeexUtils.windvane.call({
 *             class: 'MtopWVPlugin',
 *             method: 'send',
 *             data: {
 *                 api: 'mtop.common.getTimestamp',
 *                 v: '1.0'
 *             }
 *         }, function(res){
 *             console.log('res = ', res)
 *         })
 *     }
 * }
 * </script>
 *
 * @param  {Object}   params    windvane params. <a href="http://h5.alibaba-inc.com/api/TaobaoClient-API.html#Mtop请求_MtopWVPlugin">params docs here</a>
 * @param  {Function} callback callback
 */
/**
 * @class Windvane
 * @classdesc
 * Called windvane module
 */

function call(params, callback) {
  callback = (0, _isFunction.isFunction)(callback) ? callback : function () {};
  var windvane = (0, _Weex.requireModule)('windvane');
  if (!windvane) return callback(new Error('Cant finding windvane!'));
  return windvane.call(params, callback);
}
},{"./Tool/isFunction":13,"./Weex":23}],"64eecaf965dcce22013cda81fad2bb09":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getSpm = getSpm;
exports.getSpmUrl = getSpmUrl;
exports.pageEnter = pageEnter;
exports.pageLeave = pageLeave;
exports.commit = commit;
exports.commitEvent = commitEvent;
exports.customAdvance = customAdvance;
exports.exposure = exposure;
exports.other = other;
exports.click = click;
exports.goldlogClick = goldlogClick;
exports.goldlog = goldlog;

var _Tool = require('@ali/WeexUtils/dist/commonjs/Tool');

var _Env = require('@ali/WeexUtils/dist/commonjs/Env');

var _Url = require('@ali/WeexUtils/dist/commonjs/Url');

var _ErrorMessage = require('@ali/WeexUtils/dist/commonjs/ErrorMessage');

var ErrorMessage = _interopRequireWildcard(_ErrorMessage);

var _Weex = require('@ali/WeexUtils/dist/commonjs/Weex');

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }
        newObj.default = obj;
        return newObj;
    }
}

/**
 * @class Tracker
 * @classdesc
 * UserTracker and spm tracker
 */

var MODULE_NAME = 'userTrack';

/**
 * get full SPM A.B.C.D
 *
 * @memberOf Tracker
 * @function getSpm
 *
 * @example
 * // spma = 123
 * // spmb = 456
 *
 * <script>
 * module.exports = {
 *     created: function() {
 *         var WeexUtils = require('@ali/WeexUtils')
 *         var spm = WeexUtils.tracker.getSpm(this, 'aaa', 'bbb', 'ccc', 'ddd')
 *         // spm: 123.456.ccc.ddd
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx  weex vm context
 * @param  {String} spma SPMA
 * @param  {String} spmb SPMB
 * @param  {String} spmc SPMC
 * @param  {String} spmd SPMD
 * @return {String}      Full SPM (A.B.C.D)
 */
function getSpm(ctx, spma, spmb, spmc, spmd) {
    if (!(0, _Tool.isContext)(ctx)) {
        throw new Error(ErrorMessage.ERROR_MISSING_PARAM_CONTEXT);
    }

    if (ctx && ctx._app && ctx._app.zebraConfig) {
        spmc = spma + '' || '0';
        spmd = spmb + '' || '0';

        spma = ctx._app.zebraConfig.spma || '0';
        spmb = ctx._app.zebraConfig.spmb || '0';
    } else {
        spma = spma ? spma : '0';
        spmb = spmb ? spmb : '0';
        spmc = spmc ? spmc : '0';
        spmd = spmd ? spmd : '0';
    }

    return [spma, spmb, spmc, spmd].join('.');
}

function getSpmUrl(ctx, url, spmC, spmD) {
    var params = {};
    var bundleUrl = ctx.$getConfig().bundleUrl;
    var urlRep = bundleUrl.split('?');
    var urlHost = urlRep && url.split('?')[0];
    var urlSearch = urlRep && url.split('?')[1];

    if (urlSearch) {
        var splits = urlSearch.split('&');
        for (var i = 0; i < splits.length; i++) {
            splits[i] = splits[i].split('=');
            try {
                params[splits[i][0]] = decodeURIComponent(splits[i][1]);
                /* istanbul ignore next */
            } catch (e) {
                /* istanbul ignore next */
                params[splits[i][0]] = splits[i][1];
            }
        }
    }

    var spm = ['a2141.8138988.0.0', 'a2141.8209034.0.0']
    var appid = ['1640', '1560']
    var spmCnt = spm[0];
    var appidCnt = appid[0];

    if (urlHost.indexOf('payfinish.html') > 0) {
        spmCnt = spm[1];
        appidCnt = appid[1];
    }



    var spmCntRep = spmCnt.split('.');
    spmCntRep[2] = spmC || '0';
    spmCntRep[3] = spmD || '0';
    var newUrl = url;
    var spmData = spmCntRep.join('.');
    if (url.indexOf('?') !== -1) {
        newUrl = url + '&spm=' + spmData;
    } else {
        newUrl = url + '?spm=' + spmData;
    }
    params.spmA = spmCntRep[0]
    params.spmB = spmCntRep[1]
    params.spmC = spmCntRep[2]
    params.spmD = spmCntRep[3]
    params.spmCnt = spmData;
    params.appid = appidCnt;

    params.url = newUrl;

    return params

}

function getSpmEnvParam(ctx) {
    var env = ctx.$getConfig().env;
    var platform = env.platform;
    var appVersion = env.appVersion;
    var appName = env.appName;
    return 'env=' + encodeURIComponent(JSON.stringify(env)) + '&platform=' + platform + '&appVersion=' + appVersion + '&appName=' + appName
}

/**
 * page enter
 *
 * @memberOf Tracker
 * @function pageEnter
 *
 * @example
 * <script>
 * module.exports = {
 *     created: function() {
 *         var WeexUtils = require('@ali/WeexUtils')
 *         var pageName = 'Hello'
 *         var params = {
 *             'spm-cnt': '0.0.0.0', // 必须带入参数：当前页面 spm
 *             'spm-url': '0.0.0.0', // 当前页面访问 url 中带的 spm
 *             'scm': 'xxxxxxxxx', // 当前页面访问 url 中带的 scm
 *             // 其他参数根据业务场璟不同使用
 *         }
 *         WeexUtils.tracker.pageEnter(this, pageName, params)
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx  weex vm context
 * @param  {String} name Page name
 * @param  {Object} params params
 */
function pageEnter(ctx, name, params) {
    if (!(0, _Tool.isContext)(ctx)) {
        return new Error(ErrorMessage.ERROR_MISSING_PARAM_CONTEXT);
    }

    if ((0, _Tool.isPlainObject)(name)) {
        params = (0, _Tool.clone)(name);
        name = getBundleUrlWithoutQuery(ctx);
    }

    if (!name || !(0, _Tool.isString)(name) || !(0, _Tool.isPlainObject)(params)) {
        return false;
    }

    params = _normalizeParamC(params, true);

    if (isNewVersion(ctx)) {
        return commit(ctx, 'enter', name, '', params);
    } else {
        // todo support tmall and taobao
        if ((0, _Env.isTaobaoNative)(ctx)) {
            return commit(ctx, 'enter', name, '', params);
        } else if ((0, _Env.isTmallNative)(ctx)) {
            (0, _Weex.$call)(ctx, MODULE_NAME, 'enterEvent', name, params);
            return true;
        }
    }
    return false;

    //for new version
    //return commitEvent(ctx, name, 'enter', '', '', '', params);
}

function pageLeave(ctx, name) {
    if (!(0, _Tool.isContext)(ctx)) {
        return new Error(ErrorMessage.ERROR_MISSING_PARAM_CONTEXT);
    }

    if ((0, _Tool.isString)(name)) {
        (0, _Weex.$call)(ctx, MODULE_NAME, 'leaveEvent', name);
        return true;
    } else {
        return false;
    }
}

function commit(ctx, type, name, index, params) {

    if (!(0, _Tool.isContext)(ctx)) {
        return new Error(ErrorMessage.ERROR_MISSING_PARAM_CONTEXT);
    }

    if ((0, _Tool.isString)(type) && (0, _Tool.isString)(name) && (0, _Tool.isString)(index) && (0, _Tool.isPlainObject)(params)) {

        (0, _Weex.$call)(ctx, MODULE_NAME, 'commit', type, name, index, params);
        return true;
    } else {
        return false;
    }

    //for new version
    //isFunction(console.error) && console.error('此接口将废弃，若因为此接口造成问题请自行负责。')
    //return commitEvent(ctx, name, type, index, '', '', params)
}

function commitEvent(ctx, pageName, type, arg1, arg2, arg3, params, isSilence) {
    if (!(0, _Tool.isContext)(ctx)) {
        return new Error(ErrorMessage.ERROR_MISSING_PARAM_CONTEXT);
    }

    !isSilence && console && (0, _Tool.isFunction)(console.error) && console.error('此接口未经 UT 团队、数据团队验证，若因为此接口造成问题请自行负责。');

    pageName = (0, _Tool.isString)(pageName) ? pageName : '';
    pageName = !pageName ? getBundleUrlWithoutQuery(ctx) : pageName;
    arg1 = (0, _Tool.isString)(arg1) ? arg1 : '';
    arg2 = (0, _Tool.isString)(arg2) ? arg2 : '';
    arg3 = (0, _Tool.isString)(arg3) ? arg3 : '';
    params = (0, _Tool.isPlainObject)(params) ? params : {};

    if ((0, _Tool.isString)(type)) {
        if (type === 'CLK' || type === 'click') {
            //arg1 === comName
            (0, _Weex.$call)(ctx, MODULE_NAME, 'commitut', 'click', 2101, pageName, arg1, '', '', '', params);
            return true;
        } else if (type === 'EXP' || type === 'pv') {
            (0, _Weex.$call)(ctx, MODULE_NAME, 'commitut', 'expose', 2201, pageName, '', arg1, arg2, arg3, params);
            return true;
        } else if (type === 'enter') {
            //arg1 === spmUrl
            (0, _Weex.$call)(ctx, MODULE_NAME, 'commitut', (0, _Env.isTmallNative)(ctx) ? 'enterEvent' : 'enter', 2001, pageName, arg1, '', '', '', params);
            return true;
        } else if (type === 'other' || type === '19999') {
            if (type === '19999') {
                (0, _Weex.$call)(ctx, MODULE_NAME, 'commitEvent', pageName, 19999, arg1, arg2, arg3, params);
            } else {
                (0, _Weex.$call)(ctx, MODULE_NAME, 'commitut', 'other', 19999, pageName, '', arg1, '', '', params);
            }
            return true;
        }
    }
    return false;
}

/**
 * customAdvance 自定义埋点
 *
 * @memberOf Tracker
 * @function customAdvance
 *
 * @example
 * <script>
 * module.exports = {
 *     created: function() {
 *         var WeexUtils = require('@ali/WeexUtils')
 *         var pageName = 'Hello'
 *         var eventId = '1234'
 *         var arg1 = 'arg1'
 *         var arg2 = 'arg2'
 *         var arg3 = 'arg3'
 *         var params = {
 *             'a': '1',
 *             'b': '2',
 *             // ...
 *         }
 *         WeexUtils.tracker.customAdvance(this, pageName, eventId, arg1, arg2, arg3, params)
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx       weex vm context
 * @param  {String} pageName  Page name
 * @param  {String} eventId   eventId
 * @param  {String} arg1      user track arg1
 * @param  {String} arg2      user track arg2
 * @param  {String} arg3      user track arg3
 * @param  {Object} params    params
 */
function customAdvance(ctx, pageName, eventId, arg1, arg2, arg3, params) {
    (0, _Weex.$call)(ctx, MODULE_NAME, 'customAdvance', pageName, eventId, arg1, arg2, arg3, params);
}

/**
 * 曝光埋点 2201
 *
 * @memberOf Tracker
 * @function exposure
 *
 * @example
 * <script>
 * module.exports = {
 *     created: function() {
 *         var WeexUtils = require('@ali/WeexUtils')
 *         var pageName = 'pageName'
 *         var arg1 = 'arg1'
 *         var arg2 = 'arg2'
 *         var arg3 = 'arg3'
 *         var params = {
 *             'a': '1',
 *             'b': '2',
 *             // ...
 *         }
 *         WeexUtils.tracker.exposure(this, pageName, arg1, arg2, arg3, params)
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx       weex vm context
 * @param  {String} pageName  pageName
 * @param  {String} arg1      arg1
 * @param  {String} arg2      arg2
 * @param  {String} arg3      arg3
 * @param  {Object} params    params
 * @return {Boolean}          true(success)/false(fail)
 */
function exposure(ctx, pageName, arg1, arg2, arg3, params) {
    var result = false;
    if (arguments.length >= 4) {
        var args = _normalizeParams(arguments[0], arguments[1], arguments[2]);
        if (arguments.length === 4) {
            // request by @卫苏 2016-08-26. same with web goldlog
            if ((0, _Tool.isPlainObject)(arguments[3])) {
                args = (0, _Tool.extend)(args, arguments[3]);
            }
            //result = commit(ctx, 'expose', getBundleUrlWithoutQuery(ctx), '', args);
            if (isNewVersion(ctx)) {
                result = commitEvent(ctx, getBundleUrlWithoutQuery(ctx) + "_" + pageName, 'EXP', arguments[1], '', '', args, true);
            } else {
                //result = commit(ctx, "expose", pageName, "", args);
                result = commit(ctx, "expose", getBundleUrlWithoutQuery(ctx) + "_" + pageName, "", args);
            }
        } else {
            result = commitEvent(ctx, pageName, 'EXP', arg1, arg2, arg3, paramsm, true);
        }
    }
    return result;
}

/**
 * 其他埋点 19999
 *
 * @memberOf Tracker
 * @function other
 *
 * @example
 * <script>
 * module.exports = {
 *     created: function() {
 *         var WeexUtils = require('@ali/WeexUtils')
 *         var pageName = 'pageName'
 *         var arg1 = 'arg1'
 *         var params = {
 *             'a': '1',
 *             'b': '2',
 *             // ...
 *         }
 *         WeexUtils.tracker.other(this, pageName, arg1, params)
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx       weex vm context
   @param  {String} pageName  pageName
 * @param  {String} arg1      arg1
 * @param  {Object} params    params
 * @return {Boolean}          true(success)/false(fail)
 */
function other(ctx, pageName, arg1, params, paramC) {
    //(ctx, paramA, newParamC, paramC, paramB)
    var args;
    if (arguments.length === 5) {
        args = _normalizeParams(arguments[0], arguments[1], arguments[2]);
        args._lka = JSON.stringify({
            gokey: arguments[3],
            gmkey: arguments[4]
        });
    }
    return commitEvent(ctx, arguments.length === 5 ? getBundleUrlWithoutQuery(ctx) : pageName, arguments.length === 5 ? '19999' : 'other', arguments.length === 5 ? arguments[1] : arg1, '', '', args ? args : params);
    //    }
    //    return false;
}

/**
 * click event 2101 (goldlog)
 *
 * @memberOf Tracker
 * @function click
 *
 * @example
 * <script>
 * module.exports = {
 *     created: function() {
 *         var WeexUtils = require('@ali/WeexUtils')
 *         var pageName = 'Hello'
 *         var comName = 'Button'
 *         var params = {
 *             'a': '123',
 *             'b': '456'
 *         }
 *         WeexUtils.tracker.click(this, pageName, comName, params)
 *
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx  weex vm context
 * @param  {String} name Page name
 * @param  {String} buttonName Button name
 * @param  {Object} params params
 */
function click(ctx, pageName, buttonName, params) {
    if (!(0, _Tool.isContext)(ctx)) {
        return new Error(ErrorMessage.ERROR_MISSING_PARAM_CONTEXT);
    }

    if (arguments.length > 3) {
        return commit(ctx, 'click', pageName, buttonName, params);
    } else {
        // support lagacy
        return commit(ctx, 'click', pageName, '0', buttonName);
    }

    //for new version
    //return commitEvent(ctx, pageName, 'CLK', buttonName, '', '', params);
}

/**
 * goldlogClick
 * http://tbdocs.alibaba-inc.com//pages/viewpage.action?pageId=222463274
 *
 * @memberOf Tracker
 * @function goldlogClick
 *
 * @example
 * <script>
 * module.exports = {
 *     created: function() {
 *         var WeexUtils = require('@ali/WeexUtils')
 *         var spma = 'spma'
 *         var spmb = 'spmb'
 *         var spmc = ''
 *         goldlogString = 'gostr=/mfe;locaid=d1222222;k1=v1&k2=v2&k3=v3'
 *         WeexUtils.tracker.goldlogClick(this, spma, spmb, spmc, goldlogString)
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx  weex vm context
 * @param  {String} spma Page spma
 * @param  {String} spmb Page spmb
 * @param  {String} spmc Page spmc
 * @param  {String} goldlogString goldlog string
 */
function goldlogClick(ctx, spma, spmb, spmc, goldlogString) {
    if (!(0, _Tool.isContext)(ctx)) {
        return new Error(ErrorMessage.ERROR_MISSING_PARAM_CONTEXT);
    }

    // http://www.atatech.org/articles/37282#3
    // gostr=/mfe.1000;locaid=d1222222;k1=v1&k2=v2&k3=v3
    // paramA: /mfe.1000.d1222222
    // paramB: ''
    // paramC: k1=v1&k2=v2&k3=v3&locaid=d1222222
    // paramD:
    goldlogString = (0, _Tool.isString)(goldlogString) ? goldlogString : '';
    var splitGoldlog = goldlogString.split(';') || [];
    var gostr = splitGoldlog[0] || '';
    var spmd = splitGoldlog[1] || '';
    var logkeyargs = void 0;

    gostr = gostr.replace(/^gostr\=/, '');
    spmd = spmd.replace(/^locaid\=/, '');
    splitGoldlog = splitGoldlog.slice(2);
    logkeyargs = splitGoldlog.join('');

    return goldlog(ctx, [gostr, spma, spmb, spmc, spmd].join('.'), 'CLK', logkeyargs, '');
}

/**
 * goldlog
 * http://tbdocs.alibaba-inc.com//pages/viewpage.action?pageId=222463274
 *
 * @memberOf Tracker
 * @function goldlog
 *
 * @example
 * <script>
 * module.exports = {
 *     created: function() {
 *         var WeexUtils = require('@ali/WeexUtils')
 *         // the same params with window.goldlog('paramA', 'paramB', 'paramC', 'paramD')
 *         // paramB is CLK: 2101. EXP: 2201. (other string):19999
 *         // paramC please input your custom params. format like url query
 *
 *         // 2101: 点击埋点
 *         WeexUtils.tracker.goldlog(this, '/tmallfmcg.234.5', 'CLK', 'a=1&b=2', 'H46896572', 'A.B.C.D')
 *
 *         // 2201: 曝光埋点
 *         WeexUtils.tracker.goldlog(this, '/tmallfmcg.234.5', 'EXP', 'a=1&b=2', 'H46896572')
 *
 *         // 19999: 其他埋点
 *         WeexUtils.tracker.goldlog(this, '/tmallfmcg.234.5', 'OTHER', 'a=1&b=2', 'H46896572')
 *     }
 * }
 * </script>
 *
 * @param  {Object} ctx  weex vm context
 * @param  {String} paramA goldlog 1st param
 * @param  {String} paramB goldlog 2nd param
 * @param  {String} paramC goldlog 3rd param. custom params. format like url query. ie: a=1&b=2&c=3
 * @param  {String} paramD goldlog 4th param
 * @param  {String} spm    current page spm(optional)
 */
function goldlog(ctx, paramA, paramB, paramC, paramD, spm) {
    paramB = paramB || 'CLK'
    if (!(0, _Tool.isContext)(ctx)) {
        return new Error(ErrorMessage.ERROR_MISSING_PARAM_CONTEXT);
    }

    //增加区分页面打点
    var bundleUrl = ctx.$getConfig().bundleUrl;
    var urlRep = bundleUrl.split('?');
    var urlHost = urlRep && bundleUrl.split('?')[0];
    var spm = ['a2141.8138988.0.0', 'a2141.8209034.0.0']
    var spmCnt = spm[0];
    if (urlHost.indexOf('trade/payfinish.html') > 0) {
        spmCnt = spm[1]
    }
    paramC += '&viewport=' + spmCnt

    //版本信息打点
    var env = ctx.$getConfig().env;
    var envStr = encodeURIComponent(JSON.stringify(env));
    var platform = env.platform;
    var appVersion = env.appVersion;
    var appName = env.appName;
    paramC += '&env=' + envStr + '&platform=' + platform + '&appVersion=' + appVersion + '&appName=' + appName;

    paramA = (0, _Tool.isString)(paramA) ? paramA : '';
    paramB = (0, _Tool.isString)(paramB) ? paramB : '';
    paramC = (0, _Tool.isString)(paramC) ? paramC : '';
    paramD = (0, _Tool.isString)(paramD) ? paramD : '';
    spm = (0, _Tool.isString)(spm) ? spm : '';

    if ((0, _Env.isWeb)(ctx)) {
        return _webGoldlog(paramA, paramB, paramC, paramD);
    } else {
        // same logic for goldlog
        var newParamC = 'gokey=' + paramC + '&gmkey=' + paramB;

        if (paramB === '') {
            return false;
        } else if (paramB === 'CLK' || paramB === 'click') {
            //            let params = _normalizeParams(ctx, paramA, paramC)
            var params = _normalizeParams(ctx, paramA, newParamC);
            if (spm) {
                params.spm = spm;
            }
            // request by @卫苏 2016-08-26. same with web goldlog
            params._lka = JSON.stringify({
                gokey: paramC,
                gmkey: paramB
            });

            var _url = getBundleUrlWithoutQuery(ctx) + '_' + paramA;
            //var _url = paramA;//支付成功页面 pageName统一

            // android bug and tmall ios bug
            // return commitEvent(ctx, _url, 2101, paramA, '', '', params, true)

            return isNewVersion(ctx) ? customAdvance(ctx, _url, 2101, paramA, '', '', params) : click(ctx, _url, paramA, params);
        } else if (paramB === 'EXP' || paramB === 'pv') {
            //for new version
            //exposure(ctx, '', paramA, '', '', paramC)
            return exposure(ctx, paramA, newParamC, {
                _lka: JSON.stringify({
                    gokey: paramC,
                    gmkey: paramB
                })
            });
        } else {
            //for new version
            //other(ctx, '', paramA, paramC)
            return other(ctx, paramA, newParamC, paramC, paramB);
        }
    }
}

function customAdvance(ctx, pageName, eventid, arg1, arg2, arg3, params) {
    (0, _Weex.$call)(ctx, MODULE_NAME, 'customAdvance', pageName, eventid, arg1, arg2, arg3, params);
}

function _webGoldlog(paramA, paramB, paramC, paramD) {
    paramB = ''; //老的手淘APP打点有问题
    if (window.goldlog && window.goldlog.record) {
        window.goldlog.record(paramA, paramB, paramC, paramD);
        return true;
    } else {
        console.error(ErrorMessage.ERROR_MISSING_GOLDLOG);
        return false;
    }
}

function _normalizeParams(ctx, paramA, paramC) {
    var logkeyargs = (0, _Tool.isPlainObject)(paramC) ? paramC : (0, _Url.paramsToObj)(paramC);
    return {
        logkey: paramA,
        //logkeyargs: _normalizeParamC(paramC),
        weex: logkeyargs.weex ? logkeyargs.weex : '1',
        autosend: '1',
        url: getBundleUrl(ctx),
        cna: '',
        extendargs: JSON.stringify({}),
        isonepage: 0
    };
}

function _normalizeParamC(paramC, isObj) {
    var logkeyargs = (0, _Tool.isPlainObject)(paramC) ? paramC : (0, _Url.paramsToObj)(paramC);
    logkeyargs.weex = logkeyargs.weex ? logkeyargs.weex : '1';
    logkeyargs.autosend = '1';
    return isObj ? logkeyargs : (0, _Url.objToParams)(logkeyargs);
}

function getBundleUrl(ctx, isObj) {
    try {
        var _url = ctx.$getConfig().bundleUrl || '';
        if (isObj) {
            return new _Url.parseUrl(_url);
        }
        return _url;
    } catch (e) {
        console.error(e);
    }

    return isObj ? {} : '';
}

function getBundleUrlWithoutQuery(ctx) {
    var urlObj = getBundleUrl(ctx, true);
    var origin = urlObj.origin || '';
    var pathname = urlObj.pathname || '';
    return origin + pathname;
}

function getAppVersion(ctx) {
    return ctx.$getConfig().env.appVersion;
}

function isNewVersion(ctx) {

    if ((0, _Env.isTmallNative)(ctx)) {
        if ((0, _Env.isAndroid)(ctx) && compare(getAppVersion(ctx), "5.23.0.2")) {
            return true;
        }
        if ((0, _Env.isIOS)(ctx) && compare(getAppVersion(ctx), "5.23.0.2")) {
            return true;
        }
    } else {
        if ((0, _Env.isTaobaoNative)(ctx)) {
            if ((0, _Env.isAndroid)(ctx) && compare(getAppVersion(ctx), "5.11.2")) {
                return true;
            }
            if ((0, _Env.isIOS)(ctx) && compare(getAppVersion(ctx), "5.11.0")) {
                return true;
            }
        }
    }
    return false;
}

function compare(target, source) {
    target = (0, _Tool.isString)(target) ? target : '';
    source = (0, _Tool.isString)(source) ? source : '';
    var tt = target.split('.');
    var ss = source.split('.');
    var t = [0, 0, 0, 0];
    var s = [0, 0, 0, 0];
    for (var i = 0; i < tt.length; i++) {
        t[i] = parseInt(tt[i]);
    }
    for (var i = 0; i < ss.length; i++) {
        s[i] = parseInt(ss[i]);
    }
    for (var i = 0; i < t.length; i++) {
        if (t[i] < s[i]) {
            return false;
        } else if (t[i] > s[i]) {
            return true;
        }
    }
    if (tt[0] === ss[0] && tt[1] === ss[1] && tt[2] === ss[2] && tt[3] === ss[3]) {
        return false;
    }
    return true;
}
},{"@ali/WeexUtils/dist/commonjs/Env":2,"@ali/WeexUtils/dist/commonjs/ErrorMessage":3,"@ali/WeexUtils/dist/commonjs/Tool":9,"@ali/WeexUtils/dist/commonjs/Url":21,"@ali/WeexUtils/dist/commonjs/Weex":23}],"c29864b383b65beb5234e0657f69ce37":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getBaseData = getBaseData;
exports.getPaysucData = getPaysucData;
exports.getPayfinishedData = getPayfinishedData;
exports.getPaySucActData = getPaySucActData;
exports.getPayFinishedActData = getPayFinishedActData;

function getBaseData(){
    return {
        "api": "mtop.order.paysuccess",
        "v": "1.0",
        "ret": [
            "SUCCESS::调用成功"
        ],
        "data": {
            "endpoint": {
                "mode": "WIRELESS_IPHONE",
                "osVersion": "PC",
                "protocolVersion": "2.0",
                "ultronage": "true"
            },
            "data": {
                "realTimeRecommond_110": {
                    "ref": "cdccba7",
                    "id": "110",
                    "tag": "realTimeRecommond",
                    "type": "biz",
                    "fields": {
                        "orderId": "194246894347517",
                        "itemIds": "",
                        "appid": "1",
                        "albumId": "1",
                        "enabled": "true",
                        "catIds": "50023878"
                    }
                },
                "confirmOrder_1": {
                    "ref": "8b11367",
                    "id": "1",
                    "tag": "confirmOrder",
                    "type": "biz",
                    "fields": {
                        "extensionObj": [
                            {
                                "value": "支付成功",
                                "key": "pageTitle"
                            }
                        ],
                        "fromBuyNow": "true",
                        "buyerId": "2049394091"
                        }
                },
                "functionalArea_80": {
                    "ref": "99a3987",
                    "bizName": "functionalArea",
                    "id": "80",
                    "tag": "functionalArea",
                    "type": "functionalArea",
                    "fields": {
                        "buttonList": [
                            {
                                "value": "查看订单",
                                "targetUrl": "//h5.m.taobao.com/mlapp/olist.html"
                            },
                            {
                                "value": "返回首页",
                                "targetUrl": "//m.taobao.com/"
                            }
                        ]
                    },
                    "btn": "functionalArea"
                },
                "orderStatus_20": {
                    "ref": "4da64af",
                    "id": "20",
                    "tag": "orderStatus",
                    "type": "biz",
                    "fields": {
                        "imgUrl": "//gw.alicdn.com/tfscom/TB160v5IFXXXXbwaXXXzKkNQpXX-300-200.png",
                        "sub": {
                            "value": "您的包裹正整装待发"
                        },
                        "backgroundColor": "#ff7e00",
                        "title": {
                            "value": "支付成功"
                        }
                    }
                },
                "hierarchy": {
                    "root": "confirmOrder_1",
                    "structure": {
                        "confirmOrder_1": [
                            "orderStatus_20",
                            "functionalArea_80",
                            "realTimeRecommond_110"
                        ]
                    }
                }
            }
        }
    }
}

function getPaysucData(){
    var baseData = getBaseData()
    return baseData;
}

function getPayfinishedData(){
    var baseData = getBaseData()
    var confirmOrder_1 = {
            "ref": "8b11367",
            "id": "1",
            "tag": "confirmOrder",
            "type": "biz",
            "fields": {
                "extensionObj": [
                    {
                        "value": "交易成功",
                        "key": "pageTitle"
                    }
                ],
                "fromBuyNow": "true",
                "buyerId": "2049394091"
                }
        }
    var  orderStatus_20 = {
            "ref": "4da64af",
            "id": "20",
            "tag": "orderStatus",
            "type": "biz",
            "fields": {
                "imgUrl": "//gw.alicdn.com/tfscom/TB1n5IhIFXXXXaVXFXXzKkNQpXX-300-200.png",
                "sub": {
                    "value": "卖家将收到您的货款"
                },
                "backgroundColor": "#ff7e00",
                "title": {
                    "value": "交易成功"
                }
            }
        }
    baseData.data.data.confirmOrder_1 = confirmOrder_1;
    baseData.data.data.orderStatus_20 = orderStatus_20;

    return baseData;
}

// 支付成功 带氛围的 打底数据
function getPaySucActData(){
    var baseData = getBaseData()
    var  orderStatus_20 = {
            "ref": "4da64af",
            "id": "20",
            "tag": "orderStatus",
            "type": "biz",
            "fields": {
                "imgUrl": "//gw.alicdn.com/tps/TB1_qkzNXXXXXcJXVXXXXXXXXXX-554-300.png",
                "sub": {
                    "value": "您的包裹正整装待发"
                },
                "backgroundColor": "#f81131",
                "title": {
                    "value": "支付成功"
                }
            }
        }


    var functionalArea_80 = {
        "ref": "99a3987",
        "bizName": "functionalArea",
        "id": "80",
        "tag": "functionalArea",
        "type": "functionalArea",
        "fields": {
            "buttonList": [
                {
                    "value": "查看订单",
                    "targetUrl": "//h5.m.taobao.com/mlapp/olist.html"
                },
                {
                    "value": "去主会场>",
                    "targetUrl": "//1111.tmall.com/?wh_weex=true&wh_main=true",
                    "backgroundColor":"#F81131",
                    "borderColor":"#F81131",
                    "color":"#FFFFFF",
                }
            ]
        },
        "btn": "functionalArea"
    }


    baseData.data.data.orderStatus_20 = orderStatus_20;
    baseData.data.data.functionalArea_80 = functionalArea_80;

    return baseData; 
}

// 交易成功 带氛围的 打底数据
function getPayFinishedActData(){
    var baseData = getBaseData();

    var confirmOrder_1 = {
            "ref": "8b11367",
            "id": "1",
            "tag": "confirmOrder",
            "type": "biz",
            "fields": {
                "extensionObj": [
                    {
                        "value": "交易成功",
                        "key": "pageTitle"
                    }
                ],
                "fromBuyNow": "true",
                "buyerId": "2049394091"
                }
        }
    var  orderStatus_20 = {
            "ref": "4da64af",
            "id": "20",
            "tag": "orderStatus",
            "type": "biz",
            "fields": {
                "imgUrl": "//gw.alicdn.com/tps/TB1DMQ3NXXXXXX5XpXXXXXXXXXX-554-300.png",
                "sub": {
                    "value": "卖家将收到您的货款"
                },
                "backgroundColor": "#f81131",
                "title": {
                    "value": "交易成功"
                }
            }
        }
    
    baseData.data.data.confirmOrder_1 = confirmOrder_1;
    baseData.data.data.orderStatus_20 = orderStatus_20;

    return baseData; 
}
},{}]},{},[]);


define('@weex-component/item', function (require, exports, module) {

;
  module.exports = {
    created : function(){
        // 原价大于等于五位数 并且存在icon 隐藏原价
        var origin = this.itemdata.origin;
        var current = this.itemdata.current;
        var tagIcon = this.itemdata.tagIcon;

        if(origin && tagIcon){
            var originPrice = origin.price;
            var currentPrice = current.current;

            if(typeof originPrice === 'string' && originPrice.indexOf('￥') >= 0){
                originPrice = originPrice.split('￥')[1]
            }

            if(typeof currentPrice === 'string' && currentPrice.indexOf('￥') >= 0){
                currentPrice = currentPrice.split('￥')[1]
            }

            originPrice = Number(originPrice);
            currentPrice = Number(currentPrice);

            if(originPrice >= 10000){
                this.showOriginPrice = false;
            }


        }
    },
    methods: {
    },
    data: function () {return {
        itemdata : {},
        showOriginPrice : true
    }}
  }


;module.exports.style = {
  "items": {
    "width": 369
  },
  "info": {
    "height": 141,
    "padding": 18,
    "backgroundColor": "#ffffff"
  },
  "img": {
    "width": 369,
    "height": 369
  },
  "lib-img": {
    "width": 369,
    "height": 369
  },
  "title": {
    "flex": 1
  },
  "title-p": {
    "lineHeight": 32,
    "lines": 2,
    "fontSize": 26,
    "textOverflow": "ellipsis",
    "color": "#333333"
  },
  "reason": {
    "height": 69,
    "backgroundColor": "#efefef",
    "alignItems": "center",
    "flexDirection": "row"
  },
  "reason-p": {
    "lines": 1,
    "fontSize": 24,
    "marginLeft": 20,
    "marginRight": 20,
    "textAlign": "left",
    "color": "#999999",
    "textOverflow": "ellipsis"
  },
  "reason-similar": {
    "flex": 1,
    "textAlign": "right",
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "center",
    "height": 69
  },
  "reason-similar-p": {
    "fontSize": 24,
    "marginRight": 8
  },
  "arrow-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "arrow": {
    "marginRight": 24,
    "width": 15,
    "height": 26
  },
  "price-box": {
    "flexDirection": "row"
  },
  "type5": {
    "height": 210,
    "padding": 20,
    "backgroundColor": "#f55000",
    "color": "#ffffff"
  },
  "type6": {
    "height": 210,
    "padding": 20,
    "backgroundColor": "#f55000",
    "color": "#ffffff"
  },
  "type7": {
    "height": 210
  },
  "act": {
    "height": 170,
    "borderWidth": 2.2,
    "borderStyle": "solid",
    "borderColor": "rgba(255,255,255,0.7)",
    "alignItems": "center",
    "justifyContent": "center",
    "paddingTop": 12,
    "position": "relative"
  },
  "act-title": {
    "position": "absolute",
    "top": 18,
    "left": 0,
    "right": 0,
    "width": 369,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "act-title-span": {
    "width": 210,
    "textAlign": "center",
    "backgroundColor": "#f55000",
    "color": "#ffffff",
    "lines": 1,
    "fontSize": 24,
    "textOverflow": "ellipsis"
  },
  "act-info": {
    "paddingLeft": 18,
    "paddingRight": 18
  },
  "act-info-title": {
    "width": 264,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "act-info-title-txt": {
    "lines": 2,
    "fontSize": 24,
    "textOverflow": "ellipsis",
    "color": "#ffffff",
    "justifyContent": "center",
    "alignItems": "center",
    "textAlign": "center"
  },
  "act-info-sub": {
    "width": 264,
    "marginTop": 10,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "act-info-sub-txt": {
    "fontSize": 20,
    "opacity": 0.8,
    "textAlign": "center",
    "color": "#ffffff",
    "lines": 1,
    "textOverflow": "ellipsis",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "act-logo": {
    "width": 369,
    "position": "absolute",
    "top": 320,
    "left": 0,
    "right": 0,
    "height": 87,
    "justifyContent": "center",
    "alignItems": "center"
  },
  "act-logo-img": {
    "width": 87,
    "height": 87,
    "zIndex": 2
  },
  "act-7": {
    "height": 210
  },
  "act-info-7": {
    "height": 210,
    "//paddingLeft": 18,
    "//paddingRight": 18
  },
  "txt-cont": {
    "flex": 1,
    "paddingTop": 46
  },
  "logo-title": {
    "marginBottom": 14
  },
  "logo-title-t": {
    "fontSize": 24,
    "width": 369,
    "textAlign": "center",
    "color": "#ffffff",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "txt-cont-sub-t": {
    "fontSize": 26,
    "width": 369,
    "textAlign": "center",
    "color": "#ffffff",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "act-btn": {
    "justifyContent": "center",
    "alignItems": "center",
    "paddingBottom": 21
  },
  "btn": {
    "paddingLeft": 24,
    "paddingRight": 24,
    "paddingTop": 12,
    "paddingBottom": 12,
    "borderWidth": 2.2,
    "borderStyle": "solid",
    "borderColor": "#ffffff",
    "borderRadius": 4,
    "color": "#ffffff",
    "fontSize": 24
  },
  "line": {
    "width": 369,
    "height": 1,
    "backgroundColor": "#dddddd"
  },
  "tagIcon": {
    "flex": 1,
    "width": 124,
    "height": 42,
    "justifyContent": "center",
    "alignItems": "flex-end"
  },
  "tagIconImg": {
    "width": 124,
    "height": 24
  },
  "reasonTxt": {
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "width": 369,
    "height": 36,
    "paddingLeft": 12,
    "paddingRight": 12,
    "bottom": 0,
    "overflow": "hidden",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "reasonTxtBg": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "right": 0,
    "opacity": 0.5,
    "backgroundColor": "#000000"
  },
  "reasonTxtCont": {
    "textAlign": "center",
    "lineHeight": 28,
    "textOverflow": "ellipsis",
    "lines": 1,
    "fontSize": 24,
    "color": "#ffffff"
  }
}

;module.exports.template = {
  "type": "div",
  "classList": [
    "items"
  ],
  "children": [
    {
      "type": "a",
      "classList": [
        "img"
      ],
      "shown": function () {return this.itemdata.type==='2'},
      "attr": {
        "type": function () {return this.itemdata.type},
        "spm": function () {return 'd' + (this.itemdata.index)},
        "href": function () {return this.itemdata.url}
      },
      "style": {
        "height": 580
      },
      "children": [
        {
          "type": "image",
          "classList": [
            "lib-img"
          ],
          "attr": {
            "resize": "cover",
            "src": function () {return this.itemdata.pic}
          },
          "style": {
            "height": 580
          }
        }
      ]
    },
    {
      "type": "a",
      "classList": [
        "img"
      ],
      "shown": function () {return this.itemdata.type!=='2'},
      "attr": {
        "type": function () {return this.itemdata.type},
        "spm": function () {return 'd' + (this.itemdata.index)},
        "href": function () {return this.itemdata.url}
      },
      "style": {
        "height": 369
      },
      "children": [
        {
          "type": "image",
          "classList": [
            "lib-img"
          ],
          "attr": {
            "resize": "cover",
            "src": function () {return this.itemdata.pic}
          },
          "style": {
            "height": 369
          }
        },
        {
          "type": "div",
          "shown": function () {return this.itemdata.type==='1'&&this.itemdata.extMap&&this.itemdata.extMap.reason},
          "classList": [
            "reasonTxt"
          ],
          "children": [
            {
              "type": "div",
              "classList": [
                "reasonTxtBg"
              ]
            },
            {
              "type": "text",
              "classList": [
                "reasonTxtCont"
              ],
              "attr": {
                "value": function () {return this.itemdata.extMap.reason}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "classList": function () {return ['content', 'type' + (this.itemdata.type)]},
      "shown": function () {return this.itemdata.type!=='2'&&this.itemdata.type!=='5'&&this.itemdata.type!=='6'&&this.itemdata.type!=='7'},
      "children": [
        {
          "type": "a",
          "classList": [
            "info"
          ],
          "attr": {
            "spm": function () {return 'd' + (this.itemdata.index)},
            "href": function () {return this.itemdata.url}
          },
          "children": [
            {
              "type": "div",
              "classList": [
                "title"
              ],
              "children": [
                {
                  "type": "text",
                  "classList": [
                    "title-p"
                  ],
                  "attr": {
                    "value": function () {return this.itemdata.title}
                  }
                }
              ]
            },
            {
              "type": "div",
              "shown": function () {return this.itemdata.current},
              "classList": [
                "price-box"
              ],
              "children": [
                {
                  "type": "pricenum",
                  "attr": {
                    "pricedata": function () {return this.itemdata.current}
                  }
                },
                {
                  "type": "pricenum",
                  "shown": function () {return this.itemdata.origin&&this.showOriginPrice},
                  "attr": {
                    "pricedata": function () {return this.itemdata.origin},
                    "origin": "true"
                  }
                },
                {
                  "type": "div",
                  "shown": function () {return this.itemdata.tagIcon},
                  "classList": [
                    "tagIcon"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "classList": [
                        "tagIconImg"
                      ],
                      "style": {
                        "width": function () {return this.itemdata.tagIcon.width}
                      },
                      "attr": {
                        "src": function () {return this.itemdata.tagIcon.picUrl},
                        "resize": "contain"
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
            "reason"
          ],
          "shown": function () {return this.itemdata.type==='1'},
          "children": [
            {
              "type": "text",
              "classList": [
                "reason-p"
              ],
              "attr": {
                "value": function () {return this.itemdata.info}
              }
            },
            {
              "type": "a",
              "classList": [
                "reason-similar"
              ],
              "shown": function () {return this.itemdata.extMap&&this.itemdata.extMap.similarUrl},
              "attr": {
                "href": function () {return this.itemdata.extMap.similarUrl}
              },
              "children": [
                {
                  "type": "text",
                  "classList": [
                    "reason-similar-p"
                  ],
                  "attr": {
                    "value": "找相似"
                  }
                },
                {
                  "type": "image",
                  "classList": [
                    "arrow"
                  ],
                  "attr": {
                    "src": "//gw.alicdn.com/mt/TB15p.iKpXXXXbHXFXXXXXXXXXX-15-26.png"
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
      "classList": function () {return ['content', 'type' + (this.itemdata.type)]},
      "shown": function () {return this.itemdata.type==='5'||this.itemdata.type==='6'||this.itemdata.type==='7'},
      "style": {
        "backgroundColor": function () {return (this.itemdata.extMap&&this.itemdata.extMap.background&&this.itemdata.extMap.background||'#ff5000')}
      },
      "children": [
        {
          "type": "a",
          "classList": [
            "act"
          ],
          "attr": {
            "spm": function () {return 'd' + (this.itemdata.index)},
            "href": function () {return this.itemdata.url}
          },
          "shown": function () {return this.itemdata.type==='5'||this.itemdata.type==='6'},
          "children": [
            {
              "type": "div",
              "classList": [
                "act-info"
              ],
              "children": [
                {
                  "type": "div",
                  "classList": [
                    "act-info-title"
                  ],
                  "shown": function () {return this.itemdata.extMap&&this.itemdata.extMap.description},
                  "children": [
                    {
                      "type": "text",
                      "classList": [
                        "act-info-title-txt"
                      ],
                      "attr": {
                        "value": function () {return this.itemdata.extMap.description}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "classList": [
                    "act-info-sub"
                  ],
                  "shown": function () {return this.itemdata.type==='6'&&this.itemdata.extMap&&this.itemdata.extMap.interaction},
                  "children": [
                    {
                      "type": "text",
                      "classList": [
                        "act-info-sub-txt"
                      ],
                      "attr": {
                        "value": function () {return this.itemdata.extMap.interaction}
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "a",
          "classList": [
            "act-7"
          ],
          "attr": {
            "spm": function () {return 'd' + (this.itemdata.index)},
            "href": function () {return this.itemdata.url}
          },
          "shown": function () {return this.itemdata.type==='7'&&this.itemdata.extMap},
          "children": [
            {
              "type": "div",
              "classList": [
                "act-info-7"
              ],
              "children": [
                {
                  "type": "div",
                  "classList": [
                    "txt-cont"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "classList": [
                        "logo-title"
                      ],
                      "shown": function () {return this.itemdata.title},
                      "children": [
                        {
                          "type": "text",
                          "classList": [
                            "logo-title-t"
                          ],
                          "attr": {
                            "value": function () {return this.itemdata.title}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "classList": [
                        "txt-cont-sub"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "classList": [
                            "txt-cont-sub-t"
                          ],
                          "attr": {
                            "value": function () {return this.itemdata.extMap.description}
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "classList": [
                    "act-btn"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "classList": [
                        "btn"
                      ],
                      "attr": {
                        "value": "查看全部"
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
            "act-title"
          ],
          "shown": function () {return this.itemdata.type==='5'||this.itemdata.type==='6'},
          "children": [
            {
              "type": "text",
              "classList": [
                "act-title-span"
              ],
              "style": {
                "backgroundColor": function () {return this.itemdata.extMap&&this.itemdata.extMap.background&&this.itemdata.extMap.background||'#ff5000'}
              },
              "attr": {
                "value": function () {return this.itemdata.title}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "classList": [
        "act-logo"
      ],
      "shown": function () {return this.itemdata.type==='7'&&this.itemdata.extMap&&this.itemdata.extMap.logo},
      "children": [
        {
          "type": "image",
          "classList": [
            "act-logo-img"
          ],
          "attr": {
            "resize": "cover",
            "src": function () {return this.itemdata.extMap.logo}
          }
        }
      ]
    }
  ]
}

;})

// module

define('@weex-component/curtain', function (require, exports, module) {

;
  
  module.exports = {
    methods: {
    },
    data: function () {return {
        datainfo : ""
    }}
  }


;module.exports.style = {
  "curtain": {
    "borderStyle": "solid",
    "borderWidth": 24,
    "borderColor": "#f4f4f4",
    "paddingTop": 24,
    "paddingBottom": 24,
    "backgroundColor": "#f4f4f4"
  },
  "info": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "position": "absolute",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "info-d": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": 24,
    "paddingRight": 24
  },
  "img": {
    "width": 38,
    "height": 38,
    "marginRight": 12
  },
  "img-left": {
    "width": 32,
    "height": 6,
    "marginRight": 18
  },
  "img-right": {
    "width": 32,
    "height": 6,
    "marginLeft": 18
  },
  "txt": {
    "fontSize": 28,
    "color": "#ff6000"
  }
}

;module.exports.template = {
  "type": "div",
  "classList": [
    "curtain"
  ],
  "children": [
    {
      "type": "div",
      "classList": [
        "info"
      ],
      "children": [
        {
          "type": "div",
          "classList": [
            "info-d"
          ],
          "children": [
            {
              "type": "image",
              "classList": [
                "img-left"
              ],
              "attr": {
                "src": "//img.alicdn.com/tps/TB1SD4QPVXXXXblXFXXXXXXXXXX-32-6.png"
              }
            },
            {
              "type": "image",
              "classList": [
                "img"
              ],
              "attr": {
                "src": "//img.alicdn.com/tps/TB1tXVsPVXXXXbGaXXXXXXXXXXX-40-40.png"
              }
            },
            {
              "type": "text",
              "classList": [
                "txt"
              ],
              "attr": {
                "value": function () {return this.datainfo}
              }
            },
            {
              "type": "image",
              "classList": [
                "img-right"
              ],
              "attr": {
                "src": "//img.alicdn.com/tps/TB1aOdtPVXXXXaOaXXXXXXXXXXX-32-6.png"
              }
            }
          ]
        }
      ]
    }
  ]
}

;})

// module

define('@weex-component/circle', function (require, exports, module) {

;
    var Tracker = browserifyRequire("64eecaf965dcce22013cda81fad2bb09");
    module.exports = {
        data:function () {return {
            fields:{
                "circleId": "54004",
                "circleName": "园艺时光",
                "circleIcon": "//gw.alicdn.com/tps/i2/TB1UhO1IVXXXXc_XXXXZ6GBKFXX-150-150.png",
                "circleLink": "//h5.m.taobao.com/ocean/community.htm?communityId=54004&topicId=4049590087",
                "topicNum": "7405",
                "userNum": "110399",
                "topicId": "4049590087",
                "topicDesc": "昨天晚上浇了一点腐熟的淘米水给太阳花！今天下班回来就看到这个样子（图三，图四）这盆太阳花今年是第三年！护理晚了，每天都开十几朵也很知足了！只是没想到今天可以开那么多！错过了完全盛开的样子。图一二六是之前拍的！",
                "replyNum": "27664",
                "pics": [
                    "//img.alicdn.com/imgextra/i4/684927558/TB2sBFBa4rxQeBjy1zeXXXhAVXa_!!684927558-0-TBBala.jpg",
                    "//img.alicdn.com/imgextra/i1/684927558/TB2KCBwaWnyQeBjy1zkXXXmyXXa_!!684927558-0-TBBala.jpg",
                    "//img.alicdn.com/imgextra/i4/684927558/TB2cWG.XkNwVeBjy0FhXXc0lpXa_!!684927558-0-TBBala.jpg"
                ],
                "plan": "1",
                "scm": "1007.13350.46439.0",
                "itemIdListStr":"522837900370"
            },
            dataLine : {
                borderWidth : 12
            }
        }},
        created:function(){
            var vm = this
            var fields = vm.fields
            var utData = vm.utData = "itemidlist="+fields.itemIdListStr+"&circleid="+fields.circleId+"&topicid="+fields.topicId+"&scm="+fields.scm +"&type=weex"
            
            vm.topicText = vm.fields.topicNum + '个话题'
            vm.userText = vm.fields.userNum + '人在这里'
            vm.pics = vm.fields.pics.splice(0,3)
            
            Tracker.goldlog(vm, '/mfe.4.14', 'EXP', utData, 'H1733415');
        },
        methods: {
            gotoCircle: function(){
                var vm = this
                Tracker.goldlog(vm, '/mfe.4.15', 'CLK', vm.utData, 'H1733416');
                setTimeout(function(){
                    vm.$openURL(vm.fields.circleLink)
                },240)
            }
        }
    }


;module.exports.style = {
  "flex": {
    "display": "flex",
    "alignItems": "center"
  },
  "flex-row": {
    "flexDirection": "row"
  },
  "flex-column": {
    "flexDirection": "column"
  },
  "jc-m": {
    "justifyContent": "center"
  },
  "jc-sb": {
    "justifyContent": "space-between"
  },
  "jc-fs": {
    "justifyContent": "flex-start"
  },
  "main": {
    "paddingBottom": 24,
    "paddingLeft": 24,
    "paddingRight": 24,
    "paddingTop": 24,
    "backgroundColor": "#ffffff"
  },
  "header": {
    "marginBottom": 24
  },
  "icon": {
    "width": 112,
    "height": 112,
    "marginRight": 24
  },
  "title": {
    "fontSize": 32,
    "color": "#051b28",
    "flex": 1
  },
  "entry": {
    "borderWidth": 1,
    "borderStyle": "solid",
    "borderColor": "#666666",
    "borderRadius": 6,
    "width": 122,
    "height": 46
  },
  "entry-text": {
    "fontSize": 24,
    "color": "#666666"
  },
  "flex1": {
    "flex": 1
  },
  "topic": {
    "marginRight": 24
  },
  "i-text": {
    "fontSize": 24,
    "color": "#999999"
  },
  "desc": {
    "marginBottom": 24,
    "lineHeight": 48
  },
  "topic-text": {
    "fontSize": 32,
    "color": "#3e3e3e",
    "lines": 2,
    "textOverflow": "ellipsis"
  },
  "pic": {
    "width": 230,
    "height": 230,
    "marginRight": 6
  }
}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "curtain",
      "attr": {
        "datainfo": "可能喜欢的圈子"
      }
    },
    {
      "type": "div",
      "classList": [
        "main"
      ],
      "events": {
        "click": "gotoCircle"
      },
      "children": [
        {
          "type": "div",
          "classList": [
            "header",
            "flex",
            "flex-row"
          ],
          "children": [
            {
              "type": "image",
              "classList": [
                "icon"
              ],
              "attr": {
                "src": function () {return this.fields.circleIcon}
              }
            },
            {
              "type": "div",
              "classList": [
                "flex1",
                "jc-sb"
              ],
              "style": {
                "height": 112,
                "paddingBottom": 24
              },
              "children": [
                {
                  "type": "div",
                  "classList": [
                    "flex",
                    "flex-row"
                  ],
                  "children": [
                    {
                      "type": "div",
                      "classList": [
                        "title"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "classList": [
                            "title"
                          ],
                          "attr": {
                            "value": function () {return this.fields.circleName}
                          }
                        }
                      ]
                    },
                    {
                      "type": "div",
                      "classList": [
                        "entry",
                        "flex",
                        "flex-column",
                        "jc-m"
                      ],
                      "children": [
                        {
                          "type": "text",
                          "classList": [
                            "entry-text"
                          ],
                          "attr": {
                            "value": "进入圈子"
                          }
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "classList": [
                    "info",
                    "flex",
                    "flex-row"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "classList": [
                        "topic",
                        "i-text"
                      ],
                      "attr": {
                        "value": function () {return this.topicText}
                      }
                    },
                    {
                      "type": "text",
                      "classList": [
                        "uesers",
                        "i-text"
                      ],
                      "attr": {
                        "value": function () {return this.userText}
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
            "desc"
          ],
          "children": [
            {
              "type": "text",
              "classList": [
                "topic-text"
              ],
              "attr": {
                "value": function () {return this.fields.topicDesc}
              }
            }
          ]
        },
        {
          "type": "div",
          "classList": [
            "imgs",
            "flex",
            "flex-row",
            "jc-fs"
          ],
          "children": [
            {
              "type": "div",
              "classList": [
                "img"
              ],
              "repeat": {
                "expression": function () {return this.pics},
                "value": "pic"
              },
              "children": [
                {
                  "type": "image",
                  "classList": [
                    "pic"
                  ],
                  "attr": {
                    "src": function () {return this.pic}
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "base-line",
      "attr": {
        "linedata": function () {return this.dataLine}
      }
    }
  ]
}

;})

// module

define('@weex-component/poplayout', function (require, exports, module) {

;


  
  module.exports = {
    methods: {
        onclick : function(e){
            this.dataset.fields = {
                isShow : false
            }
        }
    },
    created : function(){
        if(this.datainfo.fields){

            this.datainfo.fields.isShow = true;
            //if(!this.datainfo.fields.css){
                this.datainfo.fields.css = {
                    height : 900
                }
            //}

            this.dataset = this.datainfo
        }
    },
    
    data: function () {return {
        datainfo : {},
        dataset : {},
        structure: [],
        paydata : {},
        hierarchy : {}
    }}
  }


;module.exports.style = {
  "poplayout": {
    "position": "fixed",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.8)",
    "justifyContent": "center",
    "alignItems": "center",
    "zIndex": 9
  },
  "box": {
    "width": 750
  },
  "closed": {
    "textAlign": "right",
    "alignItems": "flex-end"
  },
  "closed-btn": {
    "color": "#ffffff",
    "paddingLeft": 40,
    "paddingTop": 40,
    "paddingBottom": 40,
    "paddingRight": 40
  },
  "closed-text": {
    "color": "#ffffff"
  },
  "banner": {
    "height": 300,
    "backgroundColor": "#ffffff"
  }
}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "div",
      "classList": [
        "poplayout"
      ],
      "shown": function () {return this.dataset.fields&&this.dataset.fields.isShow&&this.dataset.fields.imgUrl},
      "children": [
        {
          "type": "div",
          "classList": [
            "box"
          ],
          "children": [
            {
              "type": "div",
              "classList": [
                "closed"
              ],
              "children": [
                {
                  "type": "div",
                  "classList": [
                    "closed-btn"
                  ],
                  "events": {
                    "click": "onclick"
                  },
                  "children": [
                    {
                      "type": "text",
                      "classList": [
                        "closed-text"
                      ],
                      "attr": {
                        "value": "关闭"
                      }
                    }
                  ]
                }
              ]
            },
            {
              "type": "div",
              "shown": function () {return this.dataset.fields&&this.dataset.fields.imgUrl},
              "children": [
                {
                  "type": "banner",
                  "attr": {
                    "datainfo": function () {return this.dataset}
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

;})

// module

define('@weex-component/safe-tips', function (require, exports, module) {

;
  var Tracker = browserifyRequire("64eecaf965dcce22013cda81fad2bb09");

  module.exports = {
    created: function(){
        var rlt = this.datainfo;
        if(rlt){
          var fields = rlt.fields;
          var obj = fields;
          obj.tag = rlt.tag;
          this.dataset = obj; 
        }   
    },

    methods: {
        onclick : function(e){

        }
    },

    data: function () {return {
      datainfo : {},
      dataset : {}
    }}
  }


;module.exports.style = {
  "safe": {
    "marginTop": 7,
    "paddingLeft": 20,
    "paddingRight": 20
  }
}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "tips",
      "shown": function () {return this.dataset},
      "classList": [
        "safe"
      ],
      "attr": {
        "tipsdata": function () {return this.dataset}
      }
    }
  ]
}

;})

// module

define('@weex-component/banner', function (require, exports, module) {

;
  var Tracker = browserifyRequire("64eecaf965dcce22013cda81fad2bb09");

  
  module.exports = {
    methods: {
        onclick : function(e){
            var target = e.target;
            var href = target.attr.href;
            
            Tracker.goldlog(this, '/wxtrade.11.2', '', 'bussiness='+this.dataset.tag+'&type=1', 'H46807196');

            if(href){
                this.$openURL(href)
            
            }
        }
    },
    created : function(){
        var rlt = this.datainfo
        console.log(rlt)
        if(rlt.fields){
           
            var fields = rlt.fields;
            var events = fields.event || {};
            var params = fields.params || {};
            var targetUrl = events.targetUrl;

            var newParams = Tracker.getSpmUrl(this,targetUrl,'3',rlt.tag)
            var newUrl = newParams.url || targetUrl;
            
            var obj = {
              targetUrl : newUrl,
              imgUrl : fields.imgUrl,
              event : fields.event,
              tag : rlt.tag,
              css : fields.css
            }
            
            this.dataset = obj;

            Tracker.goldlog(this, '/wxtrade.11.1', 'EXP', 'bussiness='+rlt.tag+'&type=1', 'H46807174');
        }
    },
    
    data: function () {return {
        datainfo : {},
        dataset : {}
    }}
  }


;module.exports.style = {
  "banner": {
    "height": 144
  }
}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "a",
      "attr": {
        "href": function () {return this.dataset.targetUrl}
      },
      "children": [
        {
          "type": "image",
          "classList": [
            "banner"
          ],
          "attr": {
            "src": function () {return this.dataset.imgUrl},
            "resize": "contain"
          },
          "style": {
            "height": function () {return this.dataset.css&&this.dataset.css.height}
          }
        }
      ]
    }
  ]
}

;})

// module

define('@weex-component/button', function (require, exports, module) {

;
  var Tracker = browserifyRequire("64eecaf965dcce22013cda81fad2bb09");
  module.exports = {
    ready : function(){

    },
    created : function(){
        var buttondata = this.buttondata;
        var targetUrl = buttondata.targetUrl
        if(targetUrl){
          
          
          var newParams = Tracker.getSpmUrl(this,targetUrl,'2')
          this.buttondata.targetUrl = newParams.url || targetUrl;
          
          Tracker.goldlog(this, '/wxtrade.11.1', 'EXP', 'bussiness=btn_'+buttondata.value+'&type=5', 'H46807174');
          
        }
    },
    methods: {
        onclick : function(e){
          var target = e.target;
          var href = target.attr.href;
          var value =  target.attr.btnname;
          
          Tracker.goldlog(this, '/wxtrade.11.2', 'CLK', 'bussiness=btn_'+value+'&type=5', 'H46807196');
          
          if(href){
            this.$openURL(href)
            
          }
        }
    },
    data: function () {return {
      buttondata : {},
      spmcnt : ''
    }}
  }


;module.exports.style = {
  "button-box": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "button": {
    "paddingTop": 18,
    "paddingBottom": 20,
    "borderStyle": "solid",
    "borderWidth": 2.2,
    "borderColor": "#bababa",
    "backgroundColor": "#ffffff",
    "textAlign": "center",
    "fontSize": 28,
    "borderRadius": 35,
    "width": 270
  }
}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "a",
      "classList": [
        "button-box"
      ],
      "attr": {
        "href": function () {return this.buttondata.targetUrl},
        "btnname": function () {return this.buttondata.value}
      },
      "children": [
        {
          "type": "text",
          "classList": [
            "button"
          ],
          "style": {
            "color": function () {return this.buttondata.color},
            "backgroundColor": function () {return this.buttondata.backgroundColor},
            "borderRadius": function () {return this.buttondata.radius},
            "borderStyle": function () {return this.buttondata.borderStyle},
            "borderWidth": function () {return this.buttondata.borderWidth},
            "borderColor": function () {return this.buttondata.borderColor}
          },
          "attr": {
            "value": function () {return this.buttondata.value}
          }
        }
      ]
    }
  ]
}

;})

// module

define('@weex-component/btns', function (require, exports, module) {

;
  
  module.exports = {
    ready : function(){

    },
    computed : {
      datainfo : {
        set : function(rlt){
          var fields = rlt.fields || {};
          this.dataset = fields
        }
      }
    },
    data: function () {return {
        datainfo : [],
        dataset : [],
        dataLine : {
            borderWidth : 12,
            borderColor : '#f4f4f4'

        },
        spmcnt : ''
    }}
  }


;module.exports.style = {
  "btns": {
    "padding": 24,
    "paddingBottom": 32,
    "flexDirection": "row"
  },
  "main": {
    "flex": 1,
    "alignItems": "center"
  },
  "btn": {
    "width": 270
  }
}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "div",
      "shown": function () {return this.dataset&&this.dataset.buttonList},
      "classList": [
        "btns"
      ],
      "children": [
        {
          "type": "div",
          "classList": [
            "main"
          ],
          "repeat": {
            "expression": function () {return this.dataset.buttonList},
            "value": "v"
          },
          "children": [
            {
              "type": "button",
              "classList": [
                "btn"
              ],
              "attr": {
                "buttondata": function () {return this.v},
                "spmcnt\"{{spmcnt}}\"": ""
              }
            }
          ]
        }
      ]
    },
    {
      "type": "base-line",
      "attr": {
        "linedata": function () {return this.dataLine}
      }
    }
  ]
}

;})

// module

define('@weex-component/label-info', function (require, exports, module) {

;
  var Tracker = browserifyRequire("64eecaf965dcce22013cda81fad2bb09");

  
  module.exports = {

    methods: {
        onclick : function(e){
            var target = e.target;
            var href = target.attr.href;
            Tracker.goldlog(this, '/wxtrade.11.2', '', 'bussiness='+this.dataset.tag+'&type=3', 'H46807196');
            
          if(href){
            this.$openURL(href)
            
          }
        }
    },

    created: function(){
      var rlt = this.datainfo;
      if(rlt.fields){
        var fields = rlt.fields;
        var obj = fields;

        // obj.backgroundColor = "#" + fields.backgroundColor;
        obj.flex = "1"; // 地址和label-info都用了label组件，但显示方式稍有不同。只好这样弄了
        obj.tag = rlt.tag;
        obj.backgroundColor = fields.backgroundColor ? fields.backgroundColor : "#FFFFFF";
        this.dataset = obj;

        //曝光
        Tracker.goldlog(this, '/wxtrade.11.1', 'EXP', 'bussiness='+rlt.tag+'&type=3', 'H46807174');
        
      }
    },
    data: function () {return {
      datainfo : {},
      dataset: {}
    }}
  }


;module.exports.style = {}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "label",
      "attr": {
        "labeldata": function () {return this.dataset}
      },
      "events": {
        "click": "onclick"
      }
    }
  ]
}

;})

// module

define('@weex-component/tips', function (require, exports, module) {

;
  var Tracker = browserifyRequire("64eecaf965dcce22013cda81fad2bb09");
  
  module.exports = {
    created : function(){
      var rlt = this.tipsdata;
      if(rlt){
          Tracker.goldlog(this, '/wxtrade.11.1', 'EXP', 'bussiness=tips_'+rlt.tag+'&type=6', 'H46807174');
      }

    },
    methods: {
        onclick : function(e){
          var target = e.target;
          var href = target.attr.targerurl;
          var tag = target.attr.tag;
          
          Tracker.goldlog(this, '/wxtrade.11.2', '', 'bussiness=tips_'+tag+'&type=6', 'H46807196');
          
          if(href){
            this.$openURL(href)
            
          }

        }
    },
    data: function () {return {
      tipsdata : {}
    }}
  }


;module.exports.style = {
  "tips": {
    "paddingLeft": 24,
    "paddingRight": 24,
    "paddingTop": 5,
    "paddingBottom": 10
  },
  "title": {
    "fontSize": 320,
    "marginBottom": 8
  },
  "txt": {
    "fontSize": 24,
    "marginTop": 3,
    "marginBottom": 3
  },
  "name": {
    "flex": 1,
    "lineHeight": 30
  },
  "sub": {
    "textAlign": "right"
  },
  "content": {}
}

;module.exports.template = {
  "type": "div",
  "classList": [
    "tips"
  ],
  "children": [
    {
      "type": "text",
      "shown": function () {return this.tipsdata&&this.tipsdata.title},
      "classList": [
        "title"
      ],
      "attr": {
        "value": function () {return this.tipsdata.title}
      }
    },
    {
      "type": "div",
      "shown": function () {return this.tipsdata.tips},
      "children": [
        {
          "type": "div",
          "classList": [
            "content"
          ],
          "repeat": {
            "expression": function () {return this.tipsdata.tips},
            "value": "v"
          },
          "events": {
            "click": "onclick"
          },
          "attr": {
            "targerurl": function () {return this.v.targetUrl},
            "tag": function () {return this.tipsdata.tag}
          },
          "children": [
            {
              "type": "text",
              "shown": function () {return this.v.value},
              "style": {
                "color": function () {return this.v.css&&this.v.css.color}
              },
              "classList": [
                "txt",
                "name"
              ],
              "attr": {
                "value": function () {return this.v.value}
              }
            },
            {
              "type": "text",
              "shown": function () {return this.v.sub},
              "style": {
                "color": function () {return this.v.css&&this.v.css.subColor}
              },
              "classList": [
                "txt",
                "sub"
              ],
              "attr": {
                "value": function () {return this.v.sub}
              }
            }
          ]
        }
      ]
    }
  ]
}

;})

// module

define('@weex-component/text-info', function (require, exports, module) {

;
  var Tracker = browserifyRequire("64eecaf965dcce22013cda81fad2bb09");

  module.exports = {

    created: function(){
        var rlt = this.datainfo;
        if(rlt){
          var fields = rlt.fields;
          
          //曝光
          Tracker.goldlog(this, '/wxtrade.11.1', 'EXP', 'bussiness='+rlt.tag+'&type=4', 'H46807196');

          var tips = fields.tip;

          var obj = {};
          obj.tips = tips;
          this.dataset = obj;
        }
    },
    
    data: function () {return {
      datainfo : {},
      dataset: {}
    }}
  }


;module.exports.style = {}

;module.exports.template = {
  "type": "tips",
  "attr": {
    "tipsdata": function () {return this.dataset}
  }
}

;})

// module

define('@weex-component/content-banner', function (require, exports, module) {

;
  var Tracker = browserifyRequire("64eecaf965dcce22013cda81fad2bb09");

  module.exports = {

    methods: {
        onclick : function(e){
            var target = e.target;
            var href = target.attr.href;
            Tracker.goldlog(this, '/wxtrade.11.2', '', 'bussiness='+this.dataset.tag+'&type=2', 'H46807196');
            
          if(href){
            this.$openURL(href)
            
          }
        }
    },
    created: function(){
      var rlt = this.datainfo;
      if(rlt.fields){
        var fields = rlt.fields;
        var obj = {
                tag : rlt.tag,
                title : fields.title,
                sub : fields.sub,
                backgroundColor : fields.backgroundColor,
                url : fields.targetUrl,
                leftImg : {
                  pic : fields.leftImgUrl,
                  width : 300,
                  height : 200,
                  marginLeft : 0
                },
                rightImg : {
                    pic : fields.rightImgUrl,
                    width : 300,
                    height : 200,
                    marginLeft : 0
                }
        }

        this.dataset = obj;
        //曝光
        Tracker.goldlog(this, '/wxtrade.11.1', 'EXP', 'bussiness='+rlt.tag+'&type=2', 'H46807174');
      }
    },
    data: function () {return {
      datainfo : {},
      dataset: {}
    }}
  }


;module.exports.style = {}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "div",
      "shown": function () {return this.dataset.url},
      "events": {
        "click": "onclick"
      },
      "attr": {
        "href": function () {return this.dataset.url}
      },
      "children": [
        {
          "type": "state",
          "attr": {
            "statedata": function () {return this.dataset}
          }
        }
      ]
    }
  ]
}

;})

// module

define('@weex-component/pricenum', function (require, exports, module) {

;
  
  module.exports = {
    created : function(){
      if(!(this.pricedata && this.pricedata.price)){
        return
      }
        var numPrice = this.pricedata.price;

        if(this.pricedata.price.indexOf('￥') === 0){
          numPrice = this.pricedata.split('￥')[1];
        }

        this.maxPrice = numPrice.split('.')[0];
        this.minPrice = numPrice.split('.')[1] || '.00';
        this.currencySymbol = this.pricedata.currencySymbol;
    },
    methods: {
        onclick : function(){

        }
    },
    data: function () {return {
      pricedata : {},
      origin : '',
      minPrice : '',
      maxPrice : '',
      currencySymbol : ''
    }}
  }


;module.exports.style = {
  "price-num": {
    "flexDirection": "row",
    "alignItems": "flex-end",
    "marginRight": 8,
    "height": 42
  },
  "h": {
    "color": "#ff5500"
  },
  "sign": {
    "fontSize": 28,
    "marginBottom": 4
  },
  "max": {
    "fontSize": 36,
    "lineHeight": 36
  },
  "min": {
    "fontSize": 24,
    "marginBottom": 2
  },
  "origin": {
    "fontSize": 24,
    "color": "#999999",
    "textDecoration": "line-through",
    "marginBottom": 2
  }
}

;module.exports.template = {
  "type": "div",
  "classList": [
    "price-num"
  ],
  "children": [
    {
      "type": "text",
      "shown": function () {return !this.origin},
      "classList": [
        "sign",
        "h"
      ],
      "attr": {
        "value": function () {return (this.currencySymbol||'￥')}
      }
    },
    {
      "type": "text",
      "shown": function () {return !this.origin},
      "classList": [
        "max",
        "h"
      ],
      "attr": {
        "value": function () {return this.maxPrice}
      }
    },
    {
      "type": "text",
      "shown": function () {return !this.origin},
      "classList": [
        "min",
        "h"
      ],
      "attr": {
        "value": function () {return '.' + (this.minPrice)}
      }
    },
    {
      "type": "text",
      "shown": function () {return this.origin},
      "classList": [
        "origin"
      ],
      "attr": {
        "value": function () {return this.maxPrice+'.'+this.minPrice}
      }
    }
  ]
}

;})

// module

define('@weex-component/price', function (require, exports, module) {

;
  
  module.exports = {
    created : function(){
      var rlt = this.datainfo
      if(rlt.fields){
        var fields = rlt.fields;
        var obj = {
          price : fields.price,
          title : fields.title,
          isCod : fields.isCod,
          direction : fields.price ? "row" : fields.price,
          currencySymbol : fields.currencySymbol
        }

        this.dataPrice = obj
      }
    },
    data: function () {return {
      datainfo : {},
      dataPrice : {}
    }}
  }


;module.exports.style = {
  "price": {
    "paddingLeft": 24,
    "paddingRight": 24,
    "marginBottom": 5
  },
  "title": {
    "height": 40,
    "alignItems": "center",
    "marginRight": 8,
    "lineHeight": 35,
    "marginBottom": 20
  },
  "txt": {
    "fontSize": 28
  }
}

;module.exports.template = {
  "type": "div",
  "classList": [
    "price"
  ],
  "style": {
    "flexDirection": function () {return this.dataPrice&&this.dataPrice.direction}
  },
  "children": [
    {
      "type": "div",
      "shown": function () {return this.dataPrice.title&&this.dataPrice.title.value},
      "classList": [
        "title"
      ],
      "style": {
        "flexDirection": function () {return this.dataPrice&&this.dataPrice.direction}
      },
      "children": [
        {
          "type": "text",
          "classList": [
            "txt"
          ],
          "attr": {
            "value": function () {return this.dataPrice.title.value}
          }
        }
      ]
    },
    {
      "type": "pricenum",
      "shown": function () {return this.dataPrice.price},
      "attr": {
        "pricedata": function () {return this.dataPrice}
      }
    },
    {
      "type": "div",
      "shown": function () {return this.dataPrice.desc&&this.dataPrice.desc.value},
      "classList": [
        "title"
      ],
      "children": [
        {
          "type": "text",
          "classList": [
            "txt"
          ],
          "attr": {
            "value": function () {return this.dataPrice.desc.value}
          }
        }
      ]
    }
  ]
}

;})

// module

define('@weex-component/base-line', function (require, exports, module) {

;
  
  module.exports = {
    ready : function(){

    },
    methods: {
    },
    data: function () {return {
      linedata : {}
    }}
  }


;module.exports.style = {
  "line": {
    "borderStyle": "solid",
    "borderBottomWidth": 1,
    "borderBottomColor": "#eeeeee"
  }
}

;module.exports.template = {
  "type": "div",
  "classList": [
    "line"
  ],
  "style": {
    "borderStyle": function () {return this.linedata.borderStyle},
    "borderBottomWidth": function () {return this.linedata.borderWidth},
    "borderBottomColor": function () {return this.linedata.borderColor},
    "marginLeft": function () {return this.linedata.marginLeft},
    "marginTop": function () {return this.linedata.marginTop},
    "marginRight": function () {return this.linedata.marginRight},
    "marginBottom": function () {return this.linedata.marginBottom}
  }
}

;})

// module

define('@weex-component/label', function (require, exports, module) {

;
  
  module.exports = {
    created : function(){
      var data = this.labeldata;
      if(!data.leftTitle){
        data.leftTitle = {}
      }
      if(!data.rightTitle){
        data.rightTitle = {}
      }
      if(!data.leftDesc){
        data.leftDesc = {}
      }
      if(!data.rightDesc){
        data.rightDesc = {}
      }

      this.dataset = data;
    },
    methods: {
    },
    data: function () {return {
      labeldata : {},
      dataset : {}
    }}
  }


;module.exports.style = {
  "label": {
    "paddingLeft": 24,
    "paddingRight": 24,
    "marginTop": 24,
    "marginBottom": 24,
    "flexDirection": "row",
    "backgroundColor": "#ffffff"
  },
  "icon": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "img": {
    "width": 80,
    "height": 20,
    "marginRight": 18
  },
  "cont": {
    "flex": 1
  },
  "info": {
    "flexDirection": "row",
    "flex": 1
  },
  "sub": {
    "flexDirection": "row",
    "flex": 1,
    "marginTop": 8
  },
  "t-left": {
    "paddingRight": 10,
    "fontSize": 28,
    "lines": 1
  },
  "sub-left": {
    "flex": 1,
    "fontSize": 24,
    "color": "#999999"
  },
  "t-right": {
    "textAlign": "right",
    "fontSize": 28,
    "lines": 1
  },
  "sub-right": {
    "textAlign": "right",
    "fontSize": 24,
    "color": "#999999"
  },
  "arrow-box": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "arrow": {
    "marginLeft": 24,
    "width": 15,
    "height": 26
  }
}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "div",
      "shown": function () {return this.dataset},
      "classList": [
        "label"
      ],
      "style": {
        "backgroundColor": function () {return this.dataset.backgroundColor},
        "marginLeft": function () {return this.dataset.marginLeft},
        "marginTop": function () {return this.dataset.marginTop},
        "marginRight": function () {return this.dataset.marginRight},
        "marginBottom": function () {return this.dataset.marginBottom}
      },
      "children": [
        {
          "type": "div",
          "classList": [
            "icon"
          ],
          "shown": function () {return this.dataset.icon},
          "children": [
            {
              "type": "image",
              "shown": function () {return this.dataset.icon.image},
              "classList": [
                "img"
              ],
              "attr": {
                "src": function () {return this.dataset.icon.image}
              }
            }
          ]
        },
        {
          "type": "div",
          "classList": [
            "cont"
          ],
          "children": [
            {
              "type": "div",
              "classList": [
                "info"
              ],
              "children": [
                {
                  "type": "text",
                  "classList": [
                    "t-left"
                  ],
                  "style": {
                    "flex": function () {return this.dataset.flex},
                    "color": function () {return this.dataset.leftTitle&&this.dataset.leftTitle.css&&this.dataset.leftTitle.css.color}
                  },
                  "attr": {
                    "value": function () {return this.dataset.leftTitle&&this.dataset.leftTitle.value}
                  }
                },
                {
                  "type": "text",
                  "classList": [
                    "t-right"
                  ],
                  "style": {
                    "color": function () {return this.dataset.rightTitle&&this.dataset.rightTitle.css&&this.dataset.rightTitle.css.color}
                  },
                  "attr": {
                    "value": function () {return this.dataset.rightTitle&&this.dataset.rightTitle.value}
                  }
                }
              ]
            },
            {
              "type": "div",
              "classList": [
                "sub"
              ],
              "style": {
                "marginTop": function () {return this.dataset.subMarginTop}
              },
              "children": [
                {
                  "type": "text",
                  "classList": [
                    "sub-left"
                  ],
                  "style": {
                    "color": function () {return this.dataset.leftDesc&&this.dataset.leftDesc.css&&this.dataset.leftDesc.css.color}
                  },
                  "attr": {
                    "value": function () {return this.dataset.leftDesc&&this.dataset.leftDesc.value}
                  }
                },
                {
                  "type": "text",
                  "classList": [
                    "sub-right"
                  ],
                  "style": {
                    "color": function () {return this.dataset.rightDesc&&this.dataset.rightDesc.css&&this.dataset.rightDesc.css.color}
                  },
                  "attr": {
                    "value": function () {return this.dataset.rightDesc&&this.dataset.rightDesc.value}
                  }
                }
              ]
            }
          ]
        },
        {
          "type": "div",
          "classList": [
            "arrow-box"
          ],
          "shown": function () {return this.dataset.arrow||this.dataset.targetUrl},
          "children": [
            {
              "type": "a",
              "shown": function () {return this.dataset.targetUrl},
              "attr": {
                "href": function () {return this.dataset.targetUrl}
              },
              "children": [
                {
                  "type": "image",
                  "classList": [
                    "arrow"
                  ],
                  "attr": {
                    "src": "//gw.alicdn.com/mt/TB15p.iKpXXXXbHXFXXXXXXXXXX-15-26.png"
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

;})

// module

define('@weex-component/address', function (require, exports, module) {

;

  module.exports = {
    created : function(){
      var rlt = this.datainfo
      if(rlt.fields){
        var fields = rlt.fields;
        var fullName = fields.fullName ? fields.fullName : "不需要收货地址";


        var obj = {
          subMarginTop : 10,
          leftTitle : {
            value : '收货人：'+fullName,
            css : {
              color : '#333333'
            }              
          },
          rightTitle : {
            value : fields.mobile,
            css : {
              color : '#333333'
            }
          },
          leftDesc : {
            value : fields.addressDetail ? '收货地址：' + fields.addressDetail : "收货地址：无",
            css : {
              color : '#333333'
            }
          }
        }

        this.addressData = obj
      }
    },
    methods: {
    },
    data: function () {return {
      datainfo : {},
      addressData : {},
      dataLine : {
          marginLeft : 24,
          marginRight : 24,
          marginBottom : 24
      }
    }}
  }


;module.exports.style = {}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "label",
      "shown": function () {return this.addressData},
      "attr": {
        "labeldata": function () {return this.addressData}
      }
    },
    {
      "type": "base-line",
      "attr": {
        "linedata": function () {return this.dataLine}
      }
    }
  ]
}

;})

// module

define('@weex-component/state', function (require, exports, module) {

;
  var defaultBackgroudColor ='#ff7e00';
  var Tracker = browserifyRequire("64eecaf965dcce22013cda81fad2bb09");
  module.exports = {
    ready : function(){
      var env = this.$getConfig().env;
      Tracker.goldlog(this, '/1.123.module_init', 'EXP', 'type=state_init', 'H1455636922');
    },
    computed: {
      backgroundColor:{
        get: function() {

          return this.statedata.backgroundColor ? this.statedata.backgroundColor : defaultBackgroudColor;
        }
      }
    },
    methods: {
      onclick : function(){

        }
    },
    data: function () {return {
      statedata: {}
    }}
  }


;module.exports.style = {
  "state": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "content": {
    "flex": 1
  },
  "title": {
    "fontSize": 28,
    "marginBottom": 4,
    "color": "#ffffff"
  },
  "subtxt": {
    "fontSize": 24,
    "marginTop": 4,
    "color": "#ffffff"
  }
}

;module.exports.template = {
  "type": "div",
  "classList": [
    "state"
  ],
  "style": {
    "backgroundColor": function () {return this.backgroundColor},
    "backgroundImage": function () {return 'linear-gradient(to right,' + (this.statedata.linegradientLeft) + ', ' + (this.statedata.linegradientRight) + ')'}
  },
  "children": [
    {
      "type": "image",
      "shown": function () {return this.statedata.leftImg},
      "classList": [
        "img"
      ],
      "style": {
        "width": function () {return this.statedata.leftImg.width},
        "height": function () {return this.statedata.leftImg.height},
        "marginLeft": function () {return this.statedata.leftImg.marginLeft},
        "marginRight": function () {return this.statedata.leftImg.marginRight}
      },
      "attr": {
        "src": function () {return this.statedata.leftImg.pic},
        "resize": "contain"
      }
    },
    {
      "type": "div",
      "classList": [
        "content"
      ],
      "style": {
        "marginLeft": function () {return this.statedata.contLeft}
      },
      "children": [
        {
          "type": "text",
          "shown": function () {return this.statedata.title},
          "classList": [
            "title"
          ],
          "attr": {
            "value": function () {return this.statedata.title.value}
          }
        },
        {
          "type": "div",
          "shown": function () {return this.statedata.sub},
          "children": [
            {
              "type": "text",
              "classList": [
                "subtxt"
              ],
              "style": {
                "width": function () {return this.shopImgWidth},
                "height": function () {return this.shopImgHeight}
              },
              "attr": {
                "value": function () {return this.statedata.sub.value}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "image",
      "shown": function () {return this.statedata.rightImg},
      "attr": {
        "resize": "contain",
        "src": function () {return this.statedata.rightImg.pic}
      },
      "classList": [
        "img"
      ],
      "style": {
        "width": function () {return this.statedata.rightImg.width},
        "height": function () {return this.statedata.rightImg.height},
        "marginLeft": function () {return this.statedata.rightImg.marginLeft},
        "marginRight": function () {return this.statedata.rightImg.marginRight}
      }
    }
  ]
}

;})

// module

define('@weex-component/order-status', function (require, exports, module) {

;

  module.exports = {

    created: function(){
      var fields = this.datainfo.fields || {};
      this.datastate = {
          title : fields.title,
          sub : fields.sub,
          backgroundColor : fields.backgroundColor,
          linegradientLeft : fields.linegradientLeft || '#ff9900',
          linegradientRight : fields.linegradientRight || '#ff5720',
          contLeft : 80,
          rightImg : {
            pic : fields.imgUrl,
            width : 300,
            height : 200,
            marginLeft : 0,
            marginRight : 80
          }
      };
    },
    
    data: function () {return {
      datainfo : {},
      datastate: {}
    }}
  }


;module.exports.style = {}

;module.exports.template = {
  "type": "state",
  "attr": {
    "statedata": function () {return this.datastate}
  }
}

;})

// module

define('@weex-component/mother-block', function (require, exports, module) {

;

  module.exports = {

    ready : function(){
     
    },
    created : function(){
      if(this.structure.length){
        
      }
    },
    methods: {

    },
    data: function () {return {
        structure: [],
        paydata : {},
        hierarchy : {},
        spmcnt : ''
    }}
  }


;module.exports.style = {}

;module.exports.template = {
  "type": "div",
  "children": [
    {
      "type": "div",
      "repeat": {
        "expression": function () {return this.structure},
        "value": "v"
      },
      "children": [
        {
          "type": "order-status",
          "shown": function () {return this.paydata[this.v].type==='orderstatus'||this.paydata[this.v].tag==='orderstatus'},
          "attr": {
            "datainfo": function () {return this.paydata[this.v]}
          }
        },
        {
          "type": "address",
          "shown": function () {return this.paydata[this.v].type==='addressinfo'||this.paydata[this.v].tag==='addressinfo'},
          "attr": {
            "datainfo": function () {return this.paydata[this.v]}
          }
        },
        {
          "type": "price",
          "shown": function () {return this.paydata[this.v].type==='payinfo'||this.paydata[this.v].tag==='payinfo'},
          "attr": {
            "datainfo": function () {return this.paydata[this.v]}
          }
        },
        {
          "type": "content-banner",
          "shown": function () {return this.paydata[this.v].type==='contentbanner'||this.paydata[this.v].tag==='contentbanner'},
          "attr": {
            "datainfo": function () {return this.paydata[this.v]}
          }
        },
        {
          "type": "text-info",
          "shown": function () {return this.paydata[this.v].type==='textinfo'||this.paydata[this.v].tag==='textinfo'},
          "attr": {
            "datainfo": function () {return this.paydata[this.v]}
          }
        },
        {
          "type": "label-info",
          "shown": function () {return this.paydata[this.v].type==='labelinfo'||this.paydata[this.v].tag==='labelinfo'},
          "attr": {
            "datainfo": function () {return this.paydata[this.v]}
          }
        },
        {
          "type": "btns",
          "shown": function () {return this.paydata[this.v].type==='functionalarea'||this.paydata[this.v].tag==='functionalarea'},
          "attr": {
            "datainfo": function () {return this.paydata[this.v]},
            "spmcnt": function () {return this.spmcnt}
          }
        },
        {
          "type": "banner",
          "shown": function () {return this.paydata[this.v].type==='banner'||this.paydata[this.v].tag==='banner'},
          "attr": {
            "datainfo": function () {return this.paydata[this.v]}
          }
        },
        {
          "type": "safe-tips",
          "shown": function () {return this.paydata[this.v].type==='safetips'||this.paydata[this.v].tag==='safetips'},
          "attr": {
            "datainfo": function () {return this.paydata[this.v]}
          }
        },
        {
          "type": "poplayout",
          "shown": function () {return this.paydata[this.v].type==='popimagelayer'||this.paydata[this.v].tag==='popimagelayer'},
          "attr": {
            "datainfo": function () {return this.paydata[this.v]},
            "structure": function () {return this.hierarchy.structure[this.v]},
            "paydata": function () {return this.paydata},
            "hierarchy": function () {return this.hierarchy}
          }
        },
        {
          "type": "circle",
          "shown": function () {return this.paydata[this.v].type==='balareccircle'||this.paydata[this.v].tag==='balareccircle'},
          "attr": {
            "fields": function () {return this.paydata[this.v].fields}
          }
        }
      ]
    },
    {
      "type": "poplayout",
      "attr": {
        "paydata": function () {return this.paydata},
        "hierarchy": function () {return this.hierarchy}
      }
    }
  ]
}

;})

// module

define('@weex-component/downgrade', function (require, exports, module) {

;
    //var modal = require('@weex-module/modal');
    var storage = require('@weex-module/storage');


    var Env = require('@ali/WeexUtils/dist/commonjs/Env.js');

    var Tracker = browserifyRequire("64eecaf965dcce22013cda81fad2bb09");
    // 配置以及打底数据
    var BaseData =  browserifyRequire("c29864b383b65beb5234e0657f69ce37");

  
    
    var components = [
        "orderstatus",
        "addressinfo",
        "payInfo",
        "contentbanner",
        "textInfo",
        "labelInfo",
        "functionalarea",
        "banner",
        "safetips",
        "recommond",
        "popImageLayer"
    ];

    var params = {};
    var appearedArr = [];
    var appearedArr2 = [];

    var baseData = BaseData.getPaysucData();

    



    function getLogs(item){
        var index = item.index;
        var itemId = item.itemId;
        var logFieldMap = item.logFieldMap || {
            'scm': scm,
            'pvid': pvid
        };
        var nude = '';

        // 埋点数据
        if(typeof logFieldMap === 'object') {
          logFieldMap.index = String(index);
          logFieldMap.itemId = itemId;
          
          nude = encodeURIComponent(JSON.stringify(logFieldMap));
        }else if(typeof logFieldMap === 'string') {
          nude = encodeURIComponent(logFieldMap);
        }else {
          nude =  encodeURIComponent(String(logFieldMap));
        }

        return nude;
    }

    function getOnappearLog(index, itemsData, pvid, scm, ctx){
        var _data = itemsData[index] || '';
        var _item = _data && _data.item;
        
        if(_item){
            var itemIds = [];
            var item_0 = _item[0];
            var item_1 = _item[1];
            var appearData = '';

            if(item_0){
                itemIds.push(getLogs(item_0))
            }
            
            if(item_1){
                itemIds.push(getLogs(item_1))
            }
            
            appearData = itemIds.join(',');
            
            Tracker.goldlog(ctx, '/wxtrade.58181010.12345', 'EXP', 'id='+appearData, 'H47730720');
        }
    }

    /**
     *
     * dataHandle 获取数据
     * data 数据
     * hierarchy 页面结构
     * ctx 当前作用域
     */
    function dataHandle(data, hierarchy, ctx) {
        
        var root = hierarchy.root;
        var structure = hierarchy.structure || {};

        if(structure[root]){
            var rootStr = structure[root];
            var dataArr = [];

            if(rootStr.length){
                for(var i=0; i<rootStr.length; i++){
                    var d = rootStr[i];
                    var subData = data[d];
                    var type = subData.type;
                    var tag = subData.tag.toLocaleLowerCase();

                    //检查是否存在此组件的数据
                    if(data[d]){
                        //检查代码是否存在此组件

                        if(components.indexOf(type) || components.indexOf(tag)){
                            
                            data[d].type = type.toLocaleLowerCase();
                            data[d].tag = tag;
                            dataArr.push(d);
                        }

                    }
                }
            }
             
            //作用域
            ctx.structure = dataArr;
            ctx.hierarchy = hierarchy;
            ctx.paydata = data;

            var title = data.confirmOrder_1 && data.confirmOrder_1.fields && data.confirmOrder_1.fields.extensionObj ? data.confirmOrder_1.fields.extensionObj[0].value : '';
            if(title){
                ctx.$setTitle(title); 
            }
        }
    }



    /**
     * recommendsHandle
      * data 数据

    */
    function recommendsHandle(data, ctx){
        //var data = data || {};
        
        var realTimeRecommond = {};
        var enabled = 'true';
        for(var j=0; j<ctx.structure.length; j++){
            var componentName = ctx.structure[j];
            var component = ctx.paydata[componentName];

            if (component.tag ==="realtimerecommond" || component.type ==="realtimerecommond") {
                realTimeRecommond = component
                if(component.fields.enabled === "false") {
                    enabled = 'false';
                    break;
                }
            }
        }

        if(enabled === 'false'){
            return;
        }

        //var realTimeRecommond = data.realTimeRecommond_110 || {};
        var fields = realTimeRecommond.fields || {};
        var itemIds = fields.itemIds || '';
        var catIds = fields.catIds || '';
        var appid = params.spmCnt === 'a2141.8209034.0.0' ? '1560' : '1640';
        var param = {
            appid : appid,
            orderId : params.orderIds,
            catIds : catIds,
            itemIds : itemIds
        }
        var recomData = {
            "albumId":"REC_ORDER_BUY_DOUBLE11",
            "param": JSON.stringify(param)
        };
        
        //require('@weex-module/mtop').send({ //weex Android 接口失败没有 callback 只能用sendMtop weex 需要双十一之后 下个版本才能修复 Android做抄底 这个方法有版本需要注意 
        if(!ctx.$sendMtop){
            Tracker.goldlog(ctx, '/1.123.1234', 'EXP', 'api_ret=sendMtop_null'+'&appid='+param.appid, 'H46747616');
            getStorageData(ctx)
            return;
        }
        ctx.$sendMtop({
          api : 'com.taobao.wireless.chanel.realTimeRecommond',
          v : '2.0',
          ecode : '0',
          isSec : '0',
          param : recomData
        }, function(result){
            var code = '';

            if(typeof result === 'string') {
                result = JSON.parse(result);
            }
            
            if(result.result === 'WX_SUCCESS'){
                result = result.data;
            }

            if(typeof result === 'string') {
                result = JSON.parse(result);
            }
            try{
                var ret = result.ret && result.ret[0];
                code = ret ? ret.split('::')[0] : '';
                var data = result.data;

                if(!data){
                    getStorageData(ctx)
                }else if(code.indexOf('SUCCESS') >= 0){
                    var model = data.model || {};
                    var rlt = model.result || {};
                    //that.listdata = rlt;

                    var recommedResult = rlt.recommedResult;
                    var pvid = rlt.pvid;
                    var scm = rlt.scm;
                    var tagMap = rlt.tagMap;
                    var atmospherePic = rlt.atmospherePic;
                    if(!(recommedResult && recommedResult.length)){
                        getStorageData(ctx)
                    }else{
                        setRecommendsData(ctx, recommedResult, tagMap, atmospherePic)
                        setStorageData('recommedResult_'+params.spmCnt,rlt)
                        ctx.pvid = pvid;
                        ctx.scm = scm;
                    }
                }else{
                    //缓存打底
                    getStorageData(ctx)
                }
            }catch(err){
                getStorageData(ctx);
                console.error(err);
            }

            var env = ctx.$getConfig().env;

            Tracker.goldlog(ctx, '/1.123.1234', 'EXP', 'api_ret='+code+'&appid='+param.appid, 'H46747616');
        })
    }

    function setRecommendsData (ctx, recommedResult, tagMap, atmospherePic){
        var listData = [];
        var listData2 = []
        var listDataSub = [];//存储二次的数据
        tagMap = tagMap || {};
        if(recommedResult && recommedResult.length) {
            for(var j=0; j<recommedResult.length; j++){
                var itemData = recommedResult[j].itemList;
                var groupTitle = recommedResult[j].groupTitle;

                
                //var obj = {}
                if(itemData.length){
                    if(j === 0 && atmospherePic){
                        listData.push({
                            listType : 'atmospherePic',
                            atmospherePic : atmospherePic
                        })
                    }else{

                        listData.push({
                            listType : 'groupTitle',
                            title : groupTitle
                        })
                    }
                    
                    var listArr = [];
                    var listArr2 = [];//存储二次数据
                    var itemArr = [];
                    var pageArr = [];
                    var pageList = [];

                    for(var i=0; i < itemData.length ; i++){
                        var d = itemData[i];
                        var logFieldMap = d.logFieldMap;
                        var itemId = d.itemId;
                        var pic = d.picUrl;
                        var url = d.targetUrl;
                        var type = d.type
                        var tag = d.tag;
                        var title = d.title;
                        // nativeLog(JSON.stringify(d))
                        var origin = {
                            price : d.normalPrice
                        };

                        var current = {
                            price : d.marketPrice
                        };

                        var info = d.extMap && d.extMap.recExc;
                        var data = {
                            itemId : itemId,
                            pic : pic,
                            url : url,
                            type : type,
                            title : title,
                            origin : origin,
                            current : current,
                            info : info,
                            extMap : d.extMap,
                            index : i,
                            logFieldMap : logFieldMap,
                            appid: params.appid
                        }
                        if(url){
                            var spmCnt = params.spmCnt;
                            var spmCntRep = spmCnt.split('.');
                            spmCntRep[2] = params.appid;
                            spmCntRep[3] = 'd'+i
                            var picUrl = url;
                            var spmData = spmCntRep.join('.');
                            if(url.indexOf('?') !== -1){
                                picUrl = url+'&spm='+spmData;
                            }else{
                                picUrl = url+'?spm='+spmData;
                            }
                            data.url = picUrl
                            
                        }

                        if(tagMap[tag]){
                            data.tagIcon = tagMap[tag];
                        }

                        itemArr.push(data);

                        if((i+1)%2 === 0 || i+1 === itemData.length){
                            listArr.push({
                                item:itemArr,
                                listType:'list'
                            })
                            
                            pageArr.push(itemArr);
                            itemArr = [];
                        }


                        if((i+1)%4 === 0 || i+1 === itemData.length){
                                
                            pageList.push(pageArr)
                            pageArr = [];
                        }

                        // 先展示一部分
                        if(i === 7){
                            ctx.items = listData.concat(listArr)
                            listArr = []
                        }else if(i< 7 && i === itemData.length-1){
                            ctx.items = listData.concat(listArr)
                            listArr = []
                        }

                        if(i > 7){
                            listArr2 = listArr;
                        }

                    }
                    listData2 = listArr2;//listData.concat(listArr2)
                    listData = listData.concat(listArr);
                }
            }
        }

        ctx.itemsOthers =  listData2;
        ctx.itemsAll = listData
    }

    function setStorageData(name, rlt){
        storage.setItem(name, JSON.stringify(rlt), function(e){
            
        });
    }

    function getStorageData(ctx){
        if(!(storage && storage.getItem)){
            return {}
        }
        storage.getItem('recommedResult_'+params.spmCnt, function(e){
            if(e.result === 'success'){
                var rlt = e.data;
                try {
                    rlt = JSON.parse(rlt);
                }catch(err){
                    rlt = {}
                }

                    var recommedResult = rlt.recommedResult;
                    var pvid = rlt.pvid;
                    var scm = rlt.scm;
                    var tagMap = rlt.tagMap;
                    var atmospherePic = rlt.atmospherePic;
                if(recommedResult){
                    setRecommendsData(ctx, recommedResult, tagMap, atmospherePic);
                    ctx.pvid = pvid;
                    ctx.scm = scm;
                }
                
            }
            return e.data;
        });
    }


    module.exports = {
        ready : function(){
            var that = this;
            
            
            //判断登录
            // this.$getUserInfo(function(result){
            //     var isLogin = String(result.isLogin);
            //     if(isLogin !== 'true'){
            //         that.$login();
            //     }
            // })

            // var env = this.$getConfig();
            // var appVersion = env.appVersion;
            // var platform = env.platform;
            // alert('111')
            // if(platform === 'Web' && appVersion){
            //     var url = this.$getConfig().bundleUrl;
            //     var vRep = appVersion.split('.');
            //     var newUrl = url.replace(/_wx_tpl=([^\&]+\&)/,'');
            //     if(Number(vRep[0]) < 6){
            //         this.$openURL(newUrl)
            //     }
            // }
        },
        init : function(){
            var title = '手淘支付成功-weex';

            //获取url的参数值
            var url = this.$getConfig().bundleUrl;
            var urlRep = url.split('?');
            var urlHost = urlRep && url.split('?')[0];
            var urlSearch = urlRep && url.split('?')[1];
            if(urlSearch){
                var splits = urlSearch.split('&');
                for (var i = 0; i < splits.length; i++) {
                    splits[i] = splits[i].split('=');
                    try {
                        params[splits[i][0]] = decodeURIComponent(splits[i][1]);
                        /* istanbul ignore next */
                    } catch (e) {
                        /* istanbul ignore next */
                        params[splits[i][0]] = splits[i][1];
                    }
                }
            }


            //进入页面打点
            //this.$setSpm('a2141','8138988'); 
            var spm = ['a2141.8138988.0.0','a2141.8209034.0.0']
            var appid = ['1640', '1560']
            var spmCnt = spm[0];
            var appidCnt = appid[0];
            if(urlHost.indexOf('payfinish.html') > 0){
                spmCnt = spm[1];
                appidCnt = appid[1];

                //打底数据
                if(params.act === "true"){
                    // 双十一期间的活动打底
                    baseData = BaseData.getPayFinishedActData();
                }else{
                    baseData = BaseData.getPayfinishedData();
                }

                //设置title
                this.$setTitle('交易成功');
                title = '手淘交易成功-weex'

            }else if(params.act === 'true'){
                this.$setTitle('支付成功');
                //双十一期间的 活动打底
                baseData = BaseData.getPaySucActData();
            }
            params.spmCnt = spmCnt;
            params.appid = appidCnt;

            if(!(Env && Env.isWeb && Env.isWeb(this))){
                var param = {
                    'spm-cnt' : spmCnt,
                    'spm-url' : params.spm || ''
                }
                Tracker.pageEnter(this,title,param)
            }

            //播放声音
            var systemSoundModule = require('@weex-module/systemSound');
            if (systemSoundModule && systemSoundModule.play) {
                systemSoundModule.play({"type":"pay"});
            }

        },
        // TIP: 不要用ready,native 里会有渲染不出数据的问题
        created : function() {
            var that = this;

            var data = {};
            var hierarchy = {};
            var env = this.$getConfig().env;
            this.env = JSON.stringify(env)

            Tracker.goldlog(this, '/1.123.before_mtop', 'EXP', 'type=created', 'H1455636918');

            if(!params.orderIds){
                recommendsHandle(data, that);
                that.$setTitle('随便逛逛');

                Tracker.goldlog(this, '/1.123.mtop_fail', 'EXP', 'type=orderIds_null', 'H1453789851');
            }else if (params.degrade === "1") {
                data = baseData.data.data;
                hierarchy = data.hierarchy;

                dataHandle(data, hierarchy, that);
                recommendsHandle(data, that);

                Tracker.goldlog(this, '/1.123.mtop_fail', 'EXP', 'type=degrade_1', 'H1453789851');
            } else {
                if (this.$sendMtop) {
                    this.$sendMtop({
                      // api : 'mtop.order.queryagileorderdetail.test',
                      // v : '2.0',
                      //   日常@云冲
                      api : 'mtop.order.component.pay.success',
                      v : '1.0',
                      ecode : '0',
                      isSec : '0',
                      needLogin : true,
                      param : params
                    }, function(result){
                        if(typeof result === 'string'){
                            result = JSON.parse(result)
                        }
                        var ret = result.ret ? result.ret[0] : '';
                        var code = ret.split('::')[0];
                        //var message = ret.split('::')[1];


                        if(code === 'FAIL_SYS_SESSION_EXPIRED'){
                            that.$login();
                        }

                        var data = {};
                        var hierarchy = {};
                        
                        if(code === 'SUCCESS'){
                            data = result.data.data;
                            hierarchy = result.data.hierarchy;

                            Tracker.goldlog(that, '/1.123.mtop_suc', 'EXP', 'type='+code, 'H46866911');

                        } else {
                            data = baseData.data.data;
                            hierarchy = data.hierarchy;

                            Tracker.goldlog(that, '/1.123.mtop_fail', 'EXP', 'type='+code, 'H1453789851');
                        }

                        

                        dataHandle(data, hierarchy, that);
                        recommendsHandle(data, that);
                     })
                } else {
                    data = baseData.data.data;
                    hierarchy = data.hierarchy;

                    dataHandle(data, hierarchy, that);
                    recommendsHandle(null, that);

                    Tracker.goldlog(this, '/1.123.mtop_fail', 'EXP', 'type=sendMtop_null', 'H1453789851');
                }
            }
        },

        data: function () {return {
            hierarchy : {},
            structure : [],
            paydata : {},



            pageList : [],
            listdata : {},


            items : [],
            items2 : [],
            itemsOthers : [],
            itemsAll: [],
            scm : '',
            pvid : '',
            env : ''

        }},
        methods: {
            onappear: function (e) {

                var target = e.target;
                var attr = target.attr;
                var index = attr.index;
                var sorted = attr.sorted;
                var parentIndex = attr.parentindex;
                var appearIndex = index+'_'+parentIndex

                if(sorted !== 'list'){
                    return
                }
                if(appearedArr.indexOf(appearIndex) === -1){
                    appearedArr.push(appearIndex);
                }else{
                    return;
                }

                var itemsData = this.items;
                var pvid = this.pvid;
                var scm = this.scm;
                
                getOnappearLog(index, itemsData, pvid, scm, this)
                
                //渲染剩余的
                if(index === 4){
                    this.items2 = this.itemsOthers
                }
                
            },
            onappear2: function (e) {
                var target = e.target;
                var attr = target.attr;
                var index = attr.index;
                var sorted = attr.sorted;
                var parentIndex = attr.parentindex;
                var appearIndex = index+'_'+parentIndex;

                if(sorted !== 'list'){
                    return
                }

                if(appearedArr2.indexOf(appearIndex) === -1){
                    appearedArr2.push(appearIndex);
                }else{
                    return;
                }

                
                var itemsData = this.itemsOthers;
                var pvid = this.pvid;
                var scm = this.scm;
                
                getOnappearLog(index, itemsData, pvid, scm, this)
                
            }
        }
    }


;module.exports.style = {
  "list": {
    "flexDirection": "column",
    "overflow": "hidden",
    "width": 750,
    "position": "absolute",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0
  },
  "items": {
    "flexDirection": "row",
    "paddingBottom": 12,
    "backgroundColor": "#f5f5f5"
  },
  "item-list": {
    "flexDirection": "row",
    "flex": 1
  },
  "item-left": {
    "flex": 1
  },
  "item-right": {
    "flex": 1,
    "alignItems": "flex-end"
  },
  "left": {
    "width": 370
  },
  "right": {
    "width": 370
  },
  "txt": {
    "height": 90,
    "fontSize": 24,
    "paddingTop": 20,
    "paddingLeft": 20,
    "paddingBottom": 20,
    "paddingRight": 20
  },
  "price-box": {
    "flexDirection": "row",
    "paddingLeft": 20,
    "marginBottom": 20
  },
  "atmospherePic": {
    "height": 72
  },
  "item1": {
    "border": "1px solid #000000"
  }
}

;module.exports.template = {
  "type": "list",
  "classList": [
    "list"
  ],
  "children": [
    {
      "type": "cell",
      "append": "tree",
      "attr": {
        "async": "false"
      },
      "children": [
        {
          "type": "mother-block",
          "attr": {
            "structure": function () {return this.structure},
            "paydata": function () {return this.paydata},
            "hierarchy": function () {return this.hierarchy}
          }
        }
      ]
    },
    {
      "type": "cell",
      "append": "tree",
      "repeat": {
        "expression": function () {return this.items},
        "key": "k",
        "value": "v"
      },
      "attr": {
        "sorted": function () {return this.v.listType},
        "index": function () {return this.k},
        "parentindex": "0",
        "async": "false"
      },
      "children": [
        {
          "type": "div",
          "shown": function () {return this.v.listType==='atmospherePic'},
          "children": [
            {
              "type": "image",
              "classList": [
                "atmospherePic"
              ],
              "attr": {
                "src": function () {return this.v.atmospherePic},
                "resize": "contain"
              }
            }
          ]
        },
        {
          "type": "curtain",
          "shown": function () {return this.v.listType==='groupTitle'},
          "attr": {
            "datainfo": function () {return this.v.title}
          }
        },
        {
          "type": "div",
          "classList": [
            "items"
          ],
          "shown": function () {return this.v.listType==='list'},
          "attr": {
            "sorted": function () {return this.v.listType},
            "index": function () {return this.k},
            "parentindex": "0"
          },
          "events": {
            "appear": "onappear"
          },
          "children": [
            {
              "type": "div",
              "classList": [
                "item-list"
              ],
              "shown": function () {return this.v.item},
              "attr": {
                "index": function () {return this.k}
              },
              "children": [
                {
                  "type": "div",
                  "shown": function () {return this.v.item[0]},
                  "attr": {
                    "index": function () {return this.v.item[0].index},
                    "spm": function () {return this.v.item[0].appid}
                  },
                  "classList": [
                    "item-left"
                  ],
                  "children": [
                    {
                      "type": "item",
                      "classList": [
                        "left"
                      ],
                      "attr": {
                        "itemdata": function () {return this.v.item[0]}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "shown": function () {return this.v.item[1]},
                  "attr": {
                    "index": function () {return this.v.item[1].index},
                    "spm": function () {return this.v.item[1].appid}
                  },
                  "classList": [
                    "item-right"
                  ],
                  "children": [
                    {
                      "type": "item",
                      "classList": [
                        "right"
                      ],
                      "attr": {
                        "itemdata": function () {return this.v.item[1]}
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
      "type": "cell",
      "append": "tree",
      "repeat": {
        "expression": function () {return this.items2},
        "key": "k",
        "value": "v"
      },
      "attr": {
        "sorted": function () {return this.v.listType},
        "index": function () {return this.k+5},
        "async": "false"
      },
      "children": [
        {
          "type": "curtain",
          "shown": function () {return this.v.listType==='groupTitle'},
          "attr": {
            "datainfo": function () {return this.v.title}
          }
        },
        {
          "type": "div",
          "classList": [
            "items"
          ],
          "shown": function () {return this.v.listType==='list'},
          "attr": {
            "index": function () {return this.k},
            "sorted": function () {return this.v.listType},
            "parentindex": "0"
          },
          "events": {
            "appear": "onappear2"
          },
          "children": [
            {
              "type": "div",
              "classList": [
                "item-list"
              ],
              "shown": function () {return this.v.item},
              "attr": {
                "index": function () {return this.k}
              },
              "children": [
                {
                  "type": "div",
                  "shown": function () {return this.v.item[0]},
                  "attr": {
                    "index": function () {return this.v.item[0].index}
                  },
                  "classList": [
                    "item-left"
                  ],
                  "children": [
                    {
                      "type": "item",
                      "classList": [
                        "left"
                      ],
                      "attr": {
                        "itemdata": function () {return this.v.item[0]}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "shown": function () {return this.v.item[1]},
                  "attr": {
                    "index": function () {return this.v.item[1].index}
                  },
                  "classList": [
                    "item-right"
                  ],
                  "children": [
                    {
                      "type": "item",
                      "attr": {
                        "itemdata": function () {return this.v.item[1]}
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
}

;})

// require module
bootstrap('@weex-component/downgrade', {"downgrade":{"ios":{"appVersion":"<5.11.0"},"android":{"appVersion":"<5.11.0"}},"transformerVersion":"0.1.14"})