(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Component/Base/UnitComponent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '690d7oyQOlHZ7atdW7hvjh/', 'UnitComponent', __filename);
// Script/Component/Base/UnitComponent.ts

/**
 * 单元类型脚本组件
 */
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UnitComponent = /** @class */ (function (_super) {
    __extends(UnitComponent, _super);
    function UnitComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnitComponent.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var self = this;
        self._fInitUI();
        self.node.parent = self._nodeParent;
    };
    UnitComponent.prototype._fInitUI = function () { };
    UnitComponent = __decorate([
        ccclass
    ], UnitComponent);
    return UnitComponent;
}(cc.Component));
exports.UnitComponent = UnitComponent;

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
        //# sourceMappingURL=UnitComponent.js.map
        