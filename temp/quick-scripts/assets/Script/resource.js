(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/resource.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a7964Qnr1BLOJJBl08c5ZaP', 'resource', __filename);
// Script/resource.ts

Object.defineProperty(exports, "__esModule", { value: true });
var Common_1 = require("./Module/Common");
var RES_TYPE;
(function (RES_TYPE) {
    RES_TYPE[RES_TYPE["GLOBAL"] = 0] = "GLOBAL";
    RES_TYPE[RES_TYPE["SINGLE"] = 1] = "SINGLE";
    RES_TYPE[RES_TYPE["MODULE"] = 2] = "MODULE";
})(RES_TYPE = exports.RES_TYPE || (exports.RES_TYPE = {}));
/**
 * 资源操作的脚本
 */
var RES = /** @class */ (function () {
    function RES() {
    }
    //加载资源数组
    RES.loadArray = function (file, progress, cb) {
        cc.loader.loadResArray(file, function (Count, total, item) {
            progress.call(Count, total, item);
        }, function (err, res) {
            if (err) {
                cc.warn("res error!");
                return;
            }
            if (cb)
                cb.call(res);
        });
    };
    RES.loadJson = function (file, cb) {
        cc.loader.loadRes(file, function (err, res) {
            if (err) {
                cc.warn(file, "json资源读取出错");
                return;
            }
            if (cb)
                cb(res);
        });
    };
    //获取json数据的长度
    RES.getJsonLength = function (json) {
        if (!json || !(json instanceof Object))
            return;
        var len = 0;
        for (var i in json) {
            len++;
        }
        return len;
    };
    RES.loadRes = function (file, cb, target) {
        var sName = cc.director.getScene().name;
        var func = function (res, target) {
            var fileName = Common_1.Common.fGetFileName(file);
            //场景名称-文件名称
            if (!RES.Res[sName]) {
                RES.Res[sName] = {};
            }
            RES.Res[sName][fileName] = res;
            cb(res, target);
        };
        RES._loadRes(file, func, target);
    };
    RES.loadResToGlobal = function (file, cb, target) {
        var sName = cc.director.getScene().name;
        var func = function (res, target) {
            //场景名称-文件名称
            RES.Res["global"][file] = res;
            cb(res, target);
        };
        RES._loadRes(file, func, target);
    };
    RES._loadRes = function (file, cb, target) {
        cc.loader.loadRes(file, function (err, res) {
            if (err) {
                cc.warn(res, "图片资源读取出错");
                return;
            }
            if (res instanceof cc.Texture2D) {
                var frame = new cc.SpriteFrame();
                frame.setTexture(res);
                res = frame;
            }
            cb(res, target);
        });
    };
    /**
     * 获取资源
     * @param file 资源名称
     */
    RES.fGetRes = function (file) {
        var g_Arr = RES.Res.global;
        for (var i in g_Arr) {
            if (file == i) {
                var res = g_Arr[i];
                return res instanceof cc.Prefab ? cc.instantiate(res) : res;
            }
        }
        var sName = cc.director.getScene().name;
        var arr = RES.Res[sName];
        for (var i in arr) {
            if (file == i) {
                var res = arr[i];
                return res instanceof cc.Prefab ? cc.instantiate(res.data) : res;
            }
        }
        cc.warn("未找到该资源", file);
        return null;
    };
    /**
     * 释放资源
     * @param type 资源类型
     * @param resName 资源名称--如果类型为模块资源，则resName默认为场景名称
     */
    RES.fReleaseRes = function (type, resName) {
        if (type == RES_TYPE.SINGLE) {
        }
        else if (type == RES_TYPE.MODULE) {
            if (!resName) {
                var scene = cc.director.getScene();
                var sName = scene.name;
                var list = RES.Res[sName];
                for (var i in list) {
                    cc.loader.release(list[i]);
                }
            }
        }
        else {
        }
    };
    //资源数据
    RES.Res = {
        "global": {}
    };
    return RES;
}());
exports.RES = RES;
;
/**
 * 资源的管理
 * 在控制台可以用 cc.RES.Res 这个来查看当前内存的资源情况方便调试
 */
cc["RES"] = RES;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=resource.js.map
        