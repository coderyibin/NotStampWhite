"use strict";
cc._RF.push(module, '2fc4awpYnFJupXQuY7drJc1', 'HelloMenu');
// Script/Component/HelloMenu.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent_1 = require("./Base/BaseComponent");
var Common_1 = require("../Module/Common");
var resource_1 = require("../resource");
var ClientData_1 = require("../Module/ClientData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var HelloMenu = /** @class */ (function (_super) {
    __extends(HelloMenu, _super);
    function HelloMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloMenu.prototype.onLoad = function () {
        var self = this;
        if (self._isLogicNode()) {
            self._logicComponentName = self.getObjectName();
        }
        _super.prototype.onLoad.call(this);
    };
    HelloMenu.prototype._initUI = function () {
        //加载资源配置文件
        resource_1.RES.loadJson("resource", function (res) {
            ClientData_1.ClientData.getInstance().fSetResData(res);
        });
    };
    HelloMenu.prototype._tap_Button_StartGame = function (event) {
        var self = this;
        self._runScene(Common_1.SCENE_NAME.MENU_SCENE, function () { });
    };
    HelloMenu = __decorate([
        ccclass
    ], HelloMenu);
    return HelloMenu;
}(BaseComponent_1.default));
exports.default = HelloMenu;

cc._RF.pop();