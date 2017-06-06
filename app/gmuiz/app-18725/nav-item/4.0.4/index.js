define('mui/nav-item/index',function (require, exports, module) {
'use strict';

require('mui/hybrid/index');
var initFlag = false,
    tmGetNavStyleVer = [5, 22, 1],
    canUseNative = false;
module.exports = {
    initializer: function initializer(options) {
        if (initFlag) {
            return this;
        }
        initFlag = true;

        var self = this;
        self.config = Object.assign({}, {
            //是否适配手淘，默认适配
            adaptTB: true,
            //是否在Android手淘下降级显示：由于Android手淘不支持设置文案(updateBadgeText)的方法，但支持设置icon，所以开放配置使业务方有权限控制该场景
            downGradTBAndroid: false,
            //是否适配Tmall，默认适配
            adaptTM: true,
            //猫客最低支持版本,业务线可配置任意大于该版本号的版本
            miniTMVer: "5.9.0",
            //手淘最低支持版本，几个不同函数的支持程度不一致
            miniTBVer: '5.2.9',
            // icon font的unicode编码  猫客下：当iconFont为true时，该字段为iconfont unicode字符，否则为图片的url地址或图片的base64编码。手淘下只能是图片的base64编码
            icon: null,
            //当手淘需要内置iconfont时使用，此时需要对icon再做设置,iconfont的选择可在http://yunpan.alibaba-inc.com/share/link/D5FoiG4ZE查阅
            iconTB: null,
            //猫客下【可选】 客户端中预置的图标时使用 iconFont，'true' 表示图标是 iconFont，'false' 表示图标不是 iconFont。默认为 'false'
            iconFont: "false",
            //手淘下 客户端中预置的图标时使用 iconFont，'true' 表示图标是 iconFont，'false' 表示图标不是 iconFont。默认为 'false'
            iconFontTB: "false",
            // 图标是否从 native 中获取，仅手淘支持 【可选】图标是否从 native 中获取，'true' 表示图标从客户端预置的图片中获取，'false' 表示图标是 Base64 字符串。默认为 'false'。
            fromNative: 'false',
            //此处公共能只有猫客支持
            style: {
                iconColor: "#dd2727",
                badgeColor: "#ff33b5",
                badgeBackgroundColor: "#051B28",
                // 1、 overlap 置于图标右上角 2、 horizontal 置于图标右侧
                badgeLayout: "horizontal"
            },
            resUrl: null,
            //文案内容
            badgeText: null,
            //文案内容是否带有金钱符号，默认false
            // bageTextPrice:false,
            //按钮正下方弹出弱提示框
            tipsBelow: null,
            //点击图标的响应事件
            clickEvt: null,
            //初始化调用的回调函数，会返回标志位标识是否可执行native调用
            callback: null
        }, options);

        window.Ali.ready(function () {
            var appInfo = self.appInfo = window.Ali.appinfo,
                callback = self.config.callback;

            if (appInfo.name !== 'taobao' && appInfo.name !== 'tmall') {
                canUseNative = false;
                if (callback) {
                    callback(false, '非手淘和猫客', self.appInfo);
                }
                return;
            }
            var compareAttr = [1000000, 1000, 1],
                appVerAttr = appInfo.ver.split('.');
            if (appVerAttr.length > 3) {
                appVerAttr.length = 3;
            }
            var appVerSum = undefined,
                miniTBVerSum = undefined,
                miniTMVerSum = undefined;
            appVerSum = miniTBVerSum = miniTMVerSum = 0;
            appVerAttr.forEach(function (val, key) {
                appVerSum += val * compareAttr[key];
            });

            if (appInfo.name === 'taobao') {
                if (!self.config.adaptTB) {
                    canUseNative = false;
                    if (callback) {
                        callback(false, '不适配手淘客户端', self.appInfo);
                    }
                    return;
                }

                if (window.Ali.ua.indexOf('Android') != -1) {
                    if (!self.config.downGradTBAndroid) {
                        canUseNative = false;
                        if (callback) {
                            callback(false, '手淘安卓客户端不支持icon上文案，无法使用该功能', self.appInfo);
                        }
                        return;
                    } else {
                        self.androidTB = true;
                    }
                }

                var miniTBVerAttr = self.config.miniTBVer.split('.');
                if (miniTBVerAttr.length > 3) {
                    miniTBVerAttr.length = 3;
                }
                miniTBVerAttr.forEach(function (val, key) {
                    miniTBVerSum += val * compareAttr[key];
                });

                if (appVerSum < miniTBVerSum) {
                    canUseNative = false;
                    if (callback) {
                        callback(false, '手淘客户端版本号不足', self.appInfo);
                    }
                    return;
                }
            }

            if (appInfo.name === 'tmall') {

                if (!self.config.adaptTM) {
                    canUseNative = false;
                    if (callback) {
                        callback(false, '不适配天猫客户端', self.appInfo);
                    }
                    return;
                }
                var miniTMVerAttr = self.config.miniTMVer.split('.');
                if (miniTMVerAttr.length > 3) {
                    miniTMVerAttr.length = 3;
                }

                miniTMVerAttr.forEach(function (val, key) {
                    miniTMVerSum += val * compareAttr[key];
                });
                if (appVerSum < miniTMVerSum) {
                    canUseNative = false;
                    if (callback) {
                        callback(false, '天猫客户端版本号不足', self.appInfo);
                    }
                    return;
                }
            }
            canUseNative = true;
            if (self.config.clickEvt) {
                document.addEventListener('TBNaviBar.rightItem.clicked', function (e) {
                    self.config.clickEvt(self.appInfo);
                }, false);
            }
            var params = {
                icon: self.config.icon,
                iconFont: self.config.iconFont
            };
            if (appInfo.name === 'taobao') {
                params.fromNative = self.config.fromNative;
                if (self.config.iconTB) {
                    params.icon = self.config.iconTB;
                }
                if (self.config.iconFontTB) {
                    params.iconFont = self.config.iconFontTB;
                }
                params.autoReset = true;
            } else {
                params.style = self.config.style;
                params.resUrl = self.config.resUrl;
            }

            var setCallback = function setCallback(result) {
                self.setNaviBarRightItem(params, self.config.callback);
                if (self.config.badgeText) {
                    self.updateBadgeText(self.config.badgeText);
                }
                if (self.config.tipsBelow) {
                    self.showTipsBelow(self.config.tipsBelow);
                }
            };

            if (appInfo.name === 'tmall') {
                var tmGetNavStyleVerSum = 0;
                tmGetNavStyleVer.forEach(function (val, key) {
                    tmGetNavStyleVerSum += val * compareAttr[key];
                });

                if (appVerSum >= tmGetNavStyleVerSum) {
                    window.WindVane.call('TMSkin', 'getNavigationStyle', {}, function (e) {
                        // alert('success: ' + JSON.stringify(e));
                        if (e.iconColor) {
                            params.style.iconColor = e.iconColor;
                        }
                        if (e.badgeTextColor) {
                            params.style.badgeColor = e.badgeTextColor;
                        }
                        if (e.badgeBgColor) {
                            params.style.badgeBackgroundColor = e.badgeBgColor;
                        }

                        setCallback();
                    }, function (e) {
                        // alert('failure: ' + JSON.stringify(e));
                        setCallback();
                    });
                } else {
                    window.WindVane.call("TMAtmosphere", "navTitleColor", {}, function (data) {
                        if (data.result && /^#[0-9a-f]{6}$/.test(data.result)) {
                            params.style.iconColor = data.result;
                            params.style.badgeColor = data.result;
                            params.style.badgeBackgroundColor = '#fcc14e';
                        }
                        setCallback();
                        // 是双十一
                    }, setCallback);
                }
            } else {
                setCallback();
            }
        });
    },
    appInfo: {},
    canUseNative: false,
    setNaviBarRightItem: function setNaviBarRightItem(params, callback) {
        var self = this;
        window.Ali.ready(function () {
            if (!canUseNative) {
                if (callback) {
                    callback(false, '客户端不支持', self.appInfo);
                }
                return;
            }
            window.WindVane.call('WebAppInterface', 'setNaviBarRightItem', params, function (e) {
                if (callback) {
                    callback(true, '调用成功', self.appInfo);
                }
            }, function (e) {
                if (callback) {
                    callback(false, 'failure: ' + JSON.stringify(e), self.appInfo);
                }
            });
        });
    },
    //安卓版本手淘不支持该函数
    updateBadgeText: function updateBadgeText(text, callback) {
        var self = this;
        window.Ali.ready(function () {
            if (!canUseNative || self.androidTB) {
                if (callback) {
                    callback(false, '客户端不支持', self.appInfo);
                }
                return;
            }
            window.WindVane.call('WebAppInterface', 'updateBadgeText', { "text": text }, function (e) {
                if (callback) {
                    callback(true, '调用成功', self.appInfo);
                }
            }, function (e) {
                if (callback) {
                    callback(false, 'failure: ' + JSON.stringify(e), self.appInfo);
                }
            });
        });
    },
    //手淘不支持该函数
    showTipsBelow: function showTipsBelow(text, callback) {
        var self = this;
        window.Ali.ready(function () {
            if (!canUseNative || self.appInfo.name !== 'tmall') {
                if (callback) {
                    callback(false, '手淘不支持该版本', self.appInfo);
                }
                return;
            }
            window.WindVane.call('WebAppInterface', 'showTipsBelow', { "text": text }, function (e) {
                if (callback) {
                    callback(true, '调用成功', self.appInfo);
                }
            }, function (e) {
                if (callback) {
                    callback(false, 'failure: ' + JSON.stringify(e), self.appInfo);
                }
            });
        });
    }
};
});
