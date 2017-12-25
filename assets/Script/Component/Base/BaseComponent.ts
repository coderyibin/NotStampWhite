/**
 * 该脚本为逻辑组件脚本基类，所有逻辑节点都继承该类
 * 创建于 2017/12/24
 */
const {ccclass, property, executionOrder} = cc._decorator;
import { Emitter } from "../../Module/Emitter";
import ButtonClick from "../ButtonClick";
import { Common } from "../../Module/Common";
@ccclass
@executionOrder(0)
export default class BaseComponent extends cc.Component {
    @property(cc.Node)
    ArrButton : cc.Node[] = [];

    _emitter : Emitter;
    _common : Common;
    _logicComponentName : string;
    _spriteFrame : {};
    onLoad () : void {
        let self = this; 
        self._emitter = Emitter.getInstance();
        self._common = Common.getInstance();
        if (self._isLogicNode()) {
            self._logicNode();
        }
        self._initUI();
    }

    _initUI () : void {

    }

    /**
     * 逻辑节点做得一些另外的操作
     */
    _logicNode () : void {
        let self = this;
        //当前如果是逻辑节点才去注册这个事件，避免重复注册
        self._emitter.on("runScene", self._runScene, self);
        for (let i in self.ArrButton) {
            let _node = self.ArrButton[i];
            let _btn = _node.getComponent("cc.Button");
            self._bindClick(_btn, _node.name);
            // new ButtonClick().setButtonData({
            //     name : _node.name,
            //     btn : _btn,
            //     comp : self._logicComponentName
            // });
        }
    }

    /**
     * 绑定按钮事件
     * @param btn 按钮组件对象
     * @param name 要绑定的函数名称
     */
    _bindClick (btn : cc.Button, name : string) : void {
        let self = this;
        //获取逻辑节点脚本组件对象
        let oCompObject = cc.director.getScene().getChildByName("LogicNode").getComponent(self._logicComponentName);
        let sName = "On_" + name + "Click";
        if (oCompObject[sName]) {
            //添加按钮普通的点击事件
            self.addBtnEvent(sName, btn);
        } else {
            cc.warn("该节点组件", self._logicComponentName, "未注册[", sName, "]函数");
        }
    }

    /**
     * 运行指定的场景
     * @param name 场景名称 
     * @param cb 加载成功的回调函数 选填
     */
    _runScene (name : string, cb ?: Function) : void {
        cc.director.preloadScene(name, (err) => {
            if (err) {
                cc.warn("场景预加载失败->[", name, "]");
            } else {
                cc.director.loadScene(name, cb);
            }
        });
    }

    /**
     * 判断当前节点是否是逻辑节点
     * @return 是否是逻辑节点
     */
    _isLogicNode () : boolean {
        let self = this;
        return self.node.name == "LogicNode" ? true : false; 
    }

    /**
     * 获取当前场景大小
     * @return 场景大小尺寸
     */
    getWinSize () : cc.Size {
        return cc.director.getWinSize();
    }

    /**
     * 获取当前脚本对象名称
     * @return 脚本对象名称
     */
    getObjectName () : string {
        let self = this;
        let name : string = self.name;
        let index : number = name.indexOf("<");
        name = name.slice(index + 1, name.length - 1);
        return name;
    }

    /**
     * 添加按钮点击事件
     * @param name 点击事件的名称
     * @param btn 点击事件绑定的按钮
     * @param data 自定义数据 选填
     */
    addBtnEvent (name : string, btn : cc.Button, data ?: any) : void {
        let self = this;        
        if (! self._isLogicNode()) return;
        var clickEventHandler = new cc.Component.EventHandler();
        clickEventHandler.target = self.node; //这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.component = self._logicComponentName;//这个是代码文件名
        clickEventHandler.handler = name;
        clickEventHandler.customEventData = data;
        btn.clickEvents.push(clickEventHandler);
    }

}