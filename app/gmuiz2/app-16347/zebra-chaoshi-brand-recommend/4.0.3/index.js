define('mui/zebra-chaoshi-brand-recommend/index',function (require, exports, module) {
var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ('value' in descriptor)
                    descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps) {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();
var _get = function get(object, property, receiver) {
    if (object === null)
        object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);
    if (desc === undefined) {
        var parent = Object.getPrototypeOf(object);
        if (parent === null) {
            return undefined;
        } else {
            return get(parent, property, receiver);
        }
    } else if ('value' in desc) {
        return desc.value;
    } else {
        var getter = desc.get;
        if (getter === undefined) {
            return undefined;
        }
        return getter.call(receiver);
    }
};
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}
function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    }
    return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var $ = require('mui/zepto/zepto');
var Sync = require('mui/chaoshi-item-plugins/price-inventory');
var TPL = require('mui/chaoshi-item/index-row.xtpl');
var Similar = require('mui/chaoshi-item-plugins/similar');
var CrossLazy = require('mui/chaoshi-item-plugins/cross-lazyload');
var ChaoshiItem = require('mui/chaoshi-item/index');
require('./index.css');
var ChaoshiItemExt = function (_ChaoshiItem) {
        _inherits(ChaoshiItemExt, _ChaoshiItem);
        function ChaoshiItemExt(container, itemTpl, itemConfig) {
            _classCallCheck(this, ChaoshiItemExt);
            return _possibleConstructorReturn(this, Object.getPrototypeOf(ChaoshiItemExt).call(this, container, itemTpl, itemConfig));
        }
        _createClass(ChaoshiItemExt, [{
                key: 'parseItem',
                value: function parseItem(item, idx) {
                    //可选: 通过调用super上的parseItem,保留默认的数据处理
                    item = _get(Object.getPrototypeOf(ChaoshiItemExt.prototype), 'parseItem', this).apply(this, arguments);
                    //增加特殊的处理
                    item.customImageTPL = "";
        
                    if (item.topIconUrl) {
                        item.customImageTPL = '<img class="top-icon" src="//g.alicdn.com/s.gif" data-ks-lazyload="' + item.topIconUrl + '"/>';
                    }
        
                    // 价格对应关系
                    item.itemActPrice = item.itemActPrice ? item.itemActPrice : item.exActiveSalePrice ? item.exActiveSalePrice : "";
                    item.itemMPrice = item.itemMPrice ? item.itemMPrice : item.exMobilePrice ? item.exMobilePrice : "";
        
                    return item;
                }
            }, {
                key: 'append',
                value: function append(data) {
                    if (typeof data === 'string') {
                        var $html = $(data);
                        $(this.container).append($html);
        
                        this.trigger('append', {
                            appendeditemList: $html,
                            data: data
                        });
                    } else {
                        _get(Object.getPrototypeOf(ChaoshiItemExt.prototype), 'append', this).apply(this, arguments);
                    }
        
                    return this;
                }
            }]);
        return ChaoshiItemExt;
    }(ChaoshiItem);
var Item = function Item(box, config) {
    _classCallCheck(this, Item);
    if (!box || !config || !config.needAsyncRender) {
        return false;
    }
    var $box = $(box);
    var data = config.data ? config.data : null;
    if (typeof data !== 'string' && (!data || !data.items || !data.items.length)) {
        var errMsg = config.errorMsg ? config.errorMsg : '\u6682\u65E0\u6570\u636E\uFF0C\u5F85\u4F1A\u518D\u6765\u5457~';
        var errorTpl = '<div class="errorCon">' + errMsg + '</div>';
        return $box.html(errorTpl);
    }
    var renderData = typeof data !== 'string' ? data.items : data;
    var sync = new Sync({
            el: box,
            syncInventory: true,
            syncPrice: true
        });
    var crossLazy = new CrossLazy();
    var chaoshiItem = new ChaoshiItemExt(box, TPL, {
            lazyloadSrc: 'data-ks-lazyload',
            showCart: config.showCart
        }).plugin([crossLazy, sync, new Similar({ needWatchAppend: false })]);
    $box.html('');
    chaoshiItem.append(renderData);
};
/**
 *
 * @param box required
 * @param config {Object} required
 *        @param  needAsynRender: {boolean} 是否需要异步渲染
 *        @param  data: 需要渲染的数据
 * @return {boolean}
 * @constructor
 */
function Module(box, config) {
    return new Item(box, config);
}
module.exports = Module;
});
