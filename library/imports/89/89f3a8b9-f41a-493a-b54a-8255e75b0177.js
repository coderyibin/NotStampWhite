"use strict";
cc._RF.push(module, '89f3ai59BpJOrVKglXnWwF3', 'ClientData');
// Script/Module/ClientData.ts

/**
 * 游戏数据单利
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ClientData = /** @class */ (function () {
    function ClientData() {
        var self = this;
        self._oResource = {};
    }
    //设置获取资源文件数据
    ClientData.prototype.fSetResData = function (res) {
        this._oResource = res;
    };
    ClientData.prototype.fGetResData = function () {
        return this._oResource;
    };
    ClientData.getInstance = function () {
        var self = this;
        if (!self._oData) {
            self._oData = new ClientData();
            return self._oData;
        }
        return self._oData;
    };
    return ClientData;
}());
exports.ClientData = ClientData;

cc._RF.pop();