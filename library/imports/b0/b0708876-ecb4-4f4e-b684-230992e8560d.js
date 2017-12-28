"use strict";
cc._RF.push(module, 'b0708h27LRPTraEIwmS6FYN', 'Observer');
// Script/Module/Observer.ts

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Observer = Observer;

cc._RF.pop();