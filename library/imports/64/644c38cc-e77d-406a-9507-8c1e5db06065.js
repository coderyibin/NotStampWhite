"use strict";
cc._RF.push(module, '644c3jM531AapUHjB5dsGBl', 'ListenerByCreator');
// Script/Module/ListenerByCreator.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executionOrder = _a.executionOrder;
var Listener = /** @class */ (function () {
    function Listener() {
        this._listenerList = {};
    }
    Listener_1 = Listener;
    //注册事件
    Listener.prototype.registerEvents = function (node, EventName, callBack) {
        var oData = this._registerEvent(node, EventName, callBack);
        oData["once"] = false; //是否是单次事件
    };
    //注册单次事件
    Listener.prototype.registerOnceEvent = function (node, EventName, callBack) {
        var oData = this._registerEvent(node, EventName, callBack);
        oData["once"] = true; //是否是单次事件
    };
    //移除指定的事件
    Listener.prototype.removeListener = function (EventName) {
        for (var i in this._listenerList) {
            var oData = this._listenerList[i];
            if (oData.name == EventName) {
                if (oData && Object.prototype.toString.call(oData.cb) == "[Object Function]" || oData.cb instanceof Function) {
                    oData.node.un(EventName, oData.cb);
                    delete this._listenerList[i];
                    return true;
                }
            }
        }
        return false;
    };
    //注册事件
    Listener.prototype._registerEvent = function (node, EventName, callBack) {
        node.on(EventName, function (event) {
            callBack(event);
        });
        var oData = this._listenerList[EventName];
        if (!oData)
            oData = {};
        oData["cb"] = callBack;
        oData["name"] = EventName;
        oData["node"] = node;
        return oData;
    };
    Listener.getInstance = function () {
        if (!this._listener) {
            return new Listener_1();
        }
        return this._listener;
    };
    Listener = Listener_1 = __decorate([
        ccclass,
        executionOrder(0)
    ], Listener);
    return Listener;
    var Listener_1;
}());
exports.default = Listener;

cc._RF.pop();