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
    }

    _initUI () : void {
        let self = this;
        let res = self._common.getResData().res;
            self._nResLen = RES.getJsonLength(res);
            for (let i in res) {
                RES.loadRes(res[i], self.callback);
            }
    }

    callback (data) : void {
        let self = this;
        self._nCurLen ++;
        if (self._nResLen == self._nCurLen) {
            self.fAddChunk();
        }
    }

    fAddChunk () : void {
        let self = this;
        for (let i = 0; i < self._nRow; i ++) {

        }
    }



}
