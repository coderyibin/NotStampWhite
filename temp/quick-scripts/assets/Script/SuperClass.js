(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/SuperClass.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '7cd6am2IKhCU7zkCn2hKJMV', 'SuperClass', __filename);
// Script/SuperClass.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executionOrder = _a.executionOrder;
var SuperClass = /** @class */ (function (_super) {
    __extends(SuperClass, _super);
    function SuperClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    SuperClass.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // init logic
                        _a = this.label;
                        return [4 /*yield*/, this.testAsync()];
                    case 1:
                        // init logic
                        _a.string = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SuperClass.prototype.testAsync = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            resolve("Hello, World!");
                            console.log(_this.text.length);
                        }, 1000);
                    })];
            });
        });
    };
    __decorate([
        property(cc.Label)
    ], SuperClass.prototype, "label", void 0);
    __decorate([
        property
    ], SuperClass.prototype, "text", void 0);
    SuperClass = __decorate([
        ccclass,
        executionOrder(1)
    ], SuperClass);
    return SuperClass;
}(cc.Component));
exports.default = SuperClass;

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
        //# sourceMappingURL=SuperClass.js.map
        