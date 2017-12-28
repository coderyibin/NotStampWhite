(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Module/ClientData.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '89f3ai59BpJOrVKglXnWwF3', 'ClientData', __filename);
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
        //# sourceMappingURL=ClientData.js.map
        