import { UnitComponent } from "./Base/UnitComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Panel extends UnitComponent {

    // constructor (parent : cc.Node) {
    //     super("Panel", parent);
    // }

    _oData : any;

    onLoad () : void {

    }

    fRefresh () : void {
        let self = this;
        let _sprite : cc.Sprite = self.node.getComponent("cc.Sprite");
        let texture : cc.Texture2D = 
    }

    fSetUnitData (data) : void {
        let self = this;
        self._oData = data;
        self.fRefresh();
    } 
}
