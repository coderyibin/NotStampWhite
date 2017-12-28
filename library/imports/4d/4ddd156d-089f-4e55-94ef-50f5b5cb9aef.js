"use strict";
cc._RF.push(module, '4ddd1VtCJ9OVZTvUPW1y5rv', 'GameMenu');
// Script/Component/GameMenu.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 游戏菜单类
 */
var BaseComponent_1 = require("./Base/BaseComponent");
var Common_1 = require("../Module/Common");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameMenu = /** @class */ (function (_super) {
    __extends(GameMenu, _super);
    function GameMenu() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameMenu.prototype.onLoad = function () {
        var self = this;
        if (self._isLogicNode()) {
            self._logicComponentName = self.getObjectName();
        }
        _super.prototype.onLoad.call(this);
    };
    //经典模式
    GameMenu.prototype._tap_Button_ClassicType = function (event) {
        var self = this;
        console.log("经典模式");
        self._runScene(Common_1.SCENE_NAME.START_SCENE, function () { });
    };
    //急速模式
    GameMenu.prototype._tap_Button_QuickType = function (event) {
        var self = this;
        console.log("急速模式");
    };
    GameMenu = __decorate([
        ccclass
    ], GameMenu);
    return GameMenu;
}(BaseComponent_1.default));
exports.default = GameMenu;

cc._RF.pop();