"use strict";
cc._RF.push(module, '49757DKPu5B7551v5UYpIoM', 'BaseButton');
// Script/Component/Base/BaseButton.ts

Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseButton = /** @class */ (function (_super) {
    __extends(BaseButton, _super);
    function BaseButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //限制按钮触发时间
        _this._timeEmitter = false;
        return _this;
    }
    BaseButton.prototype.setButtonData = function (data) {
        var btn = data.btn;
        var name = data.name;
        this._logicComponentName = data.comp;
        this._bindClick(btn, name);
    };
    /**
     * 绑定按钮事件
     * @param btn 按钮组件对象
     * @param name 要绑定的函数名称
     */
    BaseButton.prototype._bindClick = function (btn, name) {
        var self = this;
        //获取逻辑节点脚本组件对象
        var oCompObject = cc.director.getScene().getChildByName("LogicNode").getComponent(self._logicComponentName);
        var sName = "On_" + name + "Click";
        if (oCompObject[sName]) {
            //添加按钮普通的点击事件
            self.addBtnEvent(sName, btn);
        }
        else {
            cc.warn("该节点组件", self._logicComponentName, "未注册[", sName, "]函数");
        }
    };
    /**
     * 添加按钮点击事件
     * @param name 点击事件的名称
     * @param btn 点击事件绑定的按钮
     * @param data 自定义数据 选填
     */
    BaseButton.prototype.addBtnEvent = function (name, btn, data) {
        var self = this;
        // if (! self._isLogicNode()) return;
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = self.node; //这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = self._logicComponentName; //这个是代码文件名
        clickEventHandler.handler = name;
        clickEventHandler.customEventData = data;
        btn.clickEvents.push(clickEventHandler);
    };
    //设置是否启动按钮
    BaseButton.prototype.setEnabled = function (bool) {
        this.interactable = bool;
    };
    //设置按钮是否时间限制
    BaseButton.prototype.setTimeEmitter = function (bool) {
        this._timeEmitter = bool;
    };
    BaseButton = __decorate([
        ccclass
    ], BaseButton);
    return BaseButton;
}(cc.Button));
exports.BaseButton = BaseButton;

cc._RF.pop();