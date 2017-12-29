import { UnitComponent } from "../Frame/view/UnitComponent";
import { RES } from "../Frame/common/resource";
import { PANEL_SIZE } from "../Frame/common/Common";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Panel extends UnitComponent {

    // constructor (parent : cc.Node) {
    //     super("Panel", parent);
    // }

    _oData : any;

    onLoad () : void {
        this.node.on("click", this._tap_Touch, this);
    }

    _tap_Touch () : void {
        let self = this;
        let bool : boolean = true;
        if (! self._oData.isBlack) {
            bool = false;
        } else {
            let multiple =  self.node.y / PANEL_SIZE.HEIGHT;
            if (multiple < 2) {
                bool = true;
            } else {
                bool = false;
            }
        }
        if (bool === false) {
            //报错显示红色
            self.node.color = cc.Color.RED;
            var seq = cc.repeat(
                cc.sequence(
                    cc.fadeIn(0.05),
                    cc.fadeOut(0.05),
                    cc.fadeIn(0.05)
                ), 3);
            self.node.runAction(seq);   
        }
        let data = {
            is : bool,
            id : self._oData.ID
        }
        return self._oData.parent.fIsMovePanel(data);
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
