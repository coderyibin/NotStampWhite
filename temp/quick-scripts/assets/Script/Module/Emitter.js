(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Module/Emitter.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '55a24IyiUVDR6OG52u9rlRG', 'Emitter', __filename);
// Script/Module/Emitter.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 事件
 */
var Emitter = /** @class */ (function () {
    function Emitter() {
        /** 监听数组 */
        this.listeners = {};
    }
    /**
     * 注册事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    Emitter.prototype.on = function (name, callback, context) {
        var self = this;
        var observers = this.listeners[name];
        if (observers && name == "runScene") {
            return;
        }
        if (!observers) {
            self.listeners[name] = [];
        }
        self.listeners[name].push(new Observer(callback, context));
    };
    /**
     * 移除事件
     * @param name 事件名称
     * @param callback 回调函数
     * @param context 上下文
     */
    Emitter.prototype.remove = function (name, callback, context) {
        var self = this;
        var observers = self.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = 0; i < length; i++) {
            var observer = observers[i];
            if (observer.compar(context)) {
                observers.splice(i, 1);
                break;
            }
        }
        if (observers.length == 0) {
            delete self.listeners[name];
        }
    };
    /**
     * 发送事件
     * @param name 事件名称
     */
    Emitter.prototype.emit = function (name) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var self = this;
        var observers = self.listeners[name];
        if (!observers)
            return;
        var length = observers.length;
        for (var i = 0; i < length; i++) {
            var observer = observers[i];
            observer.notify.apply(observer, [name].concat(args));
        }
    };
    Emitter.getInstance = function () {
        if (!this._emitter) {
            this._emitter = new Emitter();
            return this._emitter;
        }
        return this._emitter;
    };
    return Emitter;
}());
exports.Emitter = Emitter;
/**
 * 观察者
 */
var Observer = /** @class */ (function () {
    function Observer(callback, context) {
        /** 回调函数 */
        this.callback = null;
        /** 上下文 */
        this.context = null;
        var self = this;
        self.callback = callback;
        self.context = context;
    }
    /**
     * 发送通知
     * @param args 不定参数
     */
    Observer.prototype.notify = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var self = this;
        (_a = self.callback).call.apply(_a, [self.context].concat(args));
        var _a;
    };
    /**
     * 上下文比较
     * @param context 上下文
     */
    Observer.prototype.compar = function (context) {
        return context == this.context;
    };
    return Observer;
}());

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
        //# sourceMappingURL=Emitter.js.map
        