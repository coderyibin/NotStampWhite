(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Component/GameFight.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'f9630hSsqhC2ZdiDUs25yDY', 'GameFight', __filename);
// Script/Component/GameFight.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseComponent_1 = require("./Base/BaseComponent");
var resource_1 = require("../resource");
var Common_1 = require("../Module/Common");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameFight = /** @class */ (function (_super) {
    __extends(GameFight, _super);
    function GameFight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PanelNode = null;
        return _this;
    }
    GameFight.prototype.onLoad = function () {
        var self = this;
        if (self._isLogicNode()) {
            self._logicComponentName = self.getObjectName();
        }
        _super.prototype.onLoad.call(this);
        //一排四个,三排
        self._nRow = 4;
        self._nCol = 3;
        self._nCurLen = 0;
    };
    GameFight.prototype._initUI = function () {
        var self = this;
        var res = self._client.fGetResData().res;
        self._nResLen = resource_1.RES.getJsonLength(res);
        for (var i in res) {
            resource_1.RES.loadRes(res[i], self.fCallback, self);
        }
    };
    GameFight.prototype.fCallback = function (data, target) {
        var self = target;
        self._nCurLen++;
        if (self._nResLen == self._nCurLen) {
            self.fAddChunk();
        }
    };
    GameFight.prototype.fAddChunk = function () {
        var self = this;
        for (var j = 1; j < 4; j++) {
            //随机黑块的下标
            var black = Common_1.Common.fGetRandom(0, 3);
            for (var i = 0; i < self._nRow; i++) {
                var oData = {};
                oData = {
                    x: Common_1.PANEL_SIZE.WIDTH * i + 1,
                    y: Common_1.PANEL_SIZE.HEIGHT * j + 1
                };
                if (black == i) {
                    oData["isBlack"] = true;
                }
                var panel = resource_1.RES.fGetRes("Panel");
                self.PanelNode.addChild(panel);
                panel.getComponent("Panel").fSetUnitData(oData);
                cc.log(oData);
            }
        }
    };
    __decorate([
        property(cc.Node)
    ], GameFight.prototype, "PanelNode", void 0);
    GameFight = __decorate([
        ccclass
    ], GameFight);
    return GameFight;
}(BaseComponent_1.default));
exports.default = GameFight;

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
        //# sourceMappingURL=GameFight.js.map
        