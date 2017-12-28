(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Component/ButtonClick.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5329e+1RV9HDIGD1BeNxE3p', 'ButtonClick', __filename);
// Script/Component/ButtonClick.ts

Object.defineProperty(exports, "__esModule", { value: true });
var BaseButton_1 = require("./Base/BaseButton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonClick = /** @class */ (function (_super) {
    __extends(ButtonClick, _super);
    function ButtonClick() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonClick.prototype.onLoad = function () {
        // this.registerEvent(this.node, this.node.name, this);
        var self = this;
    };
    ButtonClick = __decorate([
        ccclass
    ], ButtonClick);
    return ButtonClick;
}(BaseButton_1.BaseButton));
exports.default = ButtonClick;

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
        //# sourceMappingURL=ButtonClick.js.map
        