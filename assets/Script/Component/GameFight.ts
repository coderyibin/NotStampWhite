import BaseComponent from "./Base/BaseComponent";
import { RES } from "../resource";
import { Common } from "../Module/Common";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameFight extends BaseComponent {
    _nResLen : number;
    _nCurLen : number;
    _nRow : number;

    onLoad () : void {
        let self = this;
        if (self._isLogicNode()) {
            self._logicComponentName = self.getObjectName();
        }
        super.onLoad();
        //一排四个
        self._nRow = 4;
        self._nCurLen = 0;
    }

    _initUI () : void {
        let self = this;
        let res = self._client.fGetResData().res;
            self._nResLen = RES.getJsonLength(res);
            for (let i in res) {
                RES.loadRes(res[i], self.fCallback, self);
            }
    }

    fCallback (data, target) : void {
        let self = target;
        self._nCurLen ++;
        if (self._nResLen == self._nCurLen) {
            self.fAddChunk();
        }
    }

    fAddChunk () : void {
        let self = this;
        //随机黑块的下标
        let black = Common.fGetRandom(0, 3);
        for (let i = 0; i < self._nRow; i ++) {
            let oData : any = {};
            oData = {};
            if (black == i) {
                oData["isBlack"] = true;
            }
            RES.loadRes("Prefab/Panel", (res, self) => {
                let panel : cc.Node = cc.instantiate(res);
                self.node.addChild(panel);
                panel.getComponent("Panel").fSetUnitData(oData);
            });
        }
    }



}
