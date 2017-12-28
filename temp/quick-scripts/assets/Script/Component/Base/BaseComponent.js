(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Component/Base/BaseComponent.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b9462LQ0SJJr6/wnNN7k54R', 'BaseComponent', __filename);
// Script/Component/Base/BaseComponent.ts

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 该脚本为逻辑组件脚本基类，所有逻辑节点都继承该类
 * 创建于 2017/12/24
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, executionOrder = _a.executionOrder;
var Emitter_1 = require("../../Module/Emitter");
var ClientData_1 = require("../../Module/ClientData");
var resource_1 = require("../../resource");
var BaseComponent = /** @class */ (function (_super) {
    __extends(BaseComponent, _super);
    function BaseComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ArrButton = [];
        _this.Canvas = null;
        return _this;
    }
    BaseComponent.prototype.onLoad = function () {
        var self = this;
        self._emitter = Emitter_1.Emitter.getInstance();
        self._client = ClientData_1.ClientData.getInstance();
        if (self._isLogicNode()) {
            self._logicNode();
        }
        self._initData();
        self._initUI();
    };
    BaseComponent.prototype._initUI = function () {
    };
    BaseComponent.prototype._initData = function () {
        var self = this;
        self._fExitFunc = null;
    };
    /**
     * 逻辑节点做得一些另外的操作
     */
    BaseComponent.prototype._logicNode = function () {
        var self = this;
        //当前如果是逻辑节点才去注册这个事件，避免重复注册
        self._emitter.on("runScene", self._runScene, self);
        for (var i in self.ArrButton) {
            var _node = self.ArrButton[i];
            var _btn = _node.getComponent("cc.Button");
            self._bindClick(_btn, _node.name);
            // new ButtonClick().setButtonData({
            //     name : _node.name,
            //     btn : _btn,
            //     comp : self._logicComponentName
            // });
        }
    };
    /**
     * 绑定按钮事件
     * @param btn 按钮组件对象
     * @param name 要绑定的函数名称
     */
    BaseComponent.prototype._bindClick = function (btn, name) {
        var self = this;
        //获取逻辑节点脚本组件对象
        var oCompObject = cc.director.getScene().getChildByName("LogicNode").getComponent(self._logicComponentName);
        var sName = "_tap_" + name + "";
        if (oCompObject[sName]) {
            //添加按钮普通的点击事件
            self.addBtnEvent(sName, btn);
        }
        else {
            cc.warn("该节点组件", self._logicComponentName, "未注册[", sName, "]函数");
        }
    };
    /**
     * 运行指定的场景
     * @param name 场景名称
     * @param cb 加载成功的回调函数 选填
     */
    BaseComponent.prototype._runScene = function (name, cb) {
        var self = this;
        cc.director.preloadScene(name, function (err) {
            if (err) {
                cc.warn("场景预加载失败->[", name, "]");
            }
            else {
                self.onExit();
                cc.director.loadScene(name, cb);
            }
        });
    };
    /**
     * 判断当前节点是否是逻辑节点
     * @return 是否是逻辑节点
     */
    BaseComponent.prototype._isLogicNode = function () {
        var self = this;
        return self.node.name == "LogicNode" ? true : false;
    };
    /**
     * 获取当前场景大小
     * @return 场景大小尺寸
     */
    BaseComponent.prototype.getWinSize = function () {
        return cc.director.getWinSize();
    };
    /**
     * 获取当前脚本对象名称
     * @return 脚本对象名称
     */
    BaseComponent.prototype.getObjectName = function () {
        var self = this;
        var name = self.name;
        var index = name.indexOf("<");
        name = name.slice(index + 1, name.length - 1);
        return name;
    };
    /**
     * 添加按钮点击事件
     * @param name 点击事件的名称
     * @param btn 点击事件绑定的按钮
     * @param data 自定义数据 选填
     */
    BaseComponent.prototype.addBtnEvent = function (name, btn, data) {
        var self = this;
        if (!self._isLogicNode())
            return;
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = self.node; //这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = self._logicComponentName; //这个是代码文件名
        clickEventHandler.handler = name;
        clickEventHandler.customEventData = data;
        btn.clickEvents.push(clickEventHandler);
    };
    /**
     * 当前组件被销毁时调用
     */
    BaseComponent.prototype.onDestroy = function () {
    };
    /**
     * 场景跳转之前做的一些业务
     */
    BaseComponent.prototype.onExit = function () {
        //当前场景资源的释放
        resource_1.RES.fReleaseRes(resource_1.RES_TYPE.MODULE);
    };
    __decorate([
        property(cc.Node)
    ], BaseComponent.prototype, "ArrButton", void 0);
    __decorate([
        property(cc.Node)
    ], BaseComponent.prototype, "Canvas", void 0);
    BaseComponent = __decorate([
        ccclass,
        executionOrder(0)
    ], BaseComponent);
    return BaseComponent;
}(cc.Component));
exports.default = BaseComponent;

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
        //# sourceMappingURL=BaseComponent.js.map
        