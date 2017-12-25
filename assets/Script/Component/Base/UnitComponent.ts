/**
 * 单元类型脚本组件
 */

 const {ccclass, property} = cc._decorator;

 @ccclass
 export class UnitComponent extends cc.Component {

    //单元脚本组件名称
    _sUnitCompName : string;
    //父节点
    _nodeParent : cc.Node;

    constructor (unitName : string, parent ?: cc.Node) {
        super();
        let self = this;
        self._sUnitCompName = unitName;
        self._nodeParent = parent;
    }
    
    onLoad () : void {
        super.onLoad();
        let self = this;

        self._initUI();
        self.node.parent = self._nodeParent;
    }

    _initUI () : void {

    }
 }