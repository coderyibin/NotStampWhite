import { UnitComponent } from "./Base/UnitComponent";
import { RES } from "../resource";

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
        if (self._oData.isBlack) {
            _sprite.spriteFrame = RES.fGetRes("black");
        } else {
            _sprite.spriteFrame = RES.fGetRes("white");
        }
        self.node.x = self._oData.x;
        self.node.y = self._oData.y;
    }

    fSetUnitData (data) : void {
        let self = this;
        self._oData = data;
        self.fRefresh();
    } 
}
