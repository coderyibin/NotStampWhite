"use strict";
cc._RF.push(module, 'f0e1d9Es4hApJ8ppZhvnOJk', 'Panel');
// Script/Component/Panel.ts

Object.defineProperty(exports, "__esModule", { value: true });
var UnitComponent_1 = require("./Base/UnitComponent");
var resource_1 = require("../resource");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Panel = /** @class */ (function (_super) {
    __extends(Panel, _super);
    function Panel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Panel.prototype.onLoad = function () {
    };
    Panel.prototype.fRefresh = function () {
        var self = this;
        var _sprite = self.node.getComponent("cc.Sprite");
        if (self._oData.isBlack) {
            _sprite.spriteFrame = resource_1.RES.fGetRes("black");
        }
        else {
            _sprite.spriteFrame = resource_1.RES.fGetRes("white");
        }
        self.node.x = self._oData.x;
        self.node.y = self._oData.y;
    };
    Panel.prototype.fSetUnitData = function (data) {
        var self = this;
        self._oData = data;
        self.fRefresh();
    };
    Panel = __decorate([
        ccclass
    ], Panel);
    return Panel;
}(UnitComponent_1.UnitComponent));
exports.default = Panel;

cc._RF.pop();