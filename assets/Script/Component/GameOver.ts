import BaseComponent from "../Frame/view/BaseComponent";
import { SCENE_NAME, GAME_MODE } from "../Frame/common/Common";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameOver extends BaseComponent {
    
    onLoad () : void {
        let self = this;
        if (self._isLogicNode()) {
            self._logicComponentName = self.getObjectName();
        }
        super.onLoad();
    }

    _initUI () : void {
        let self = this;
        let sCurTime = "";
        let data = self._playerCtrl.fGetSettleData();
        if (data.challenge === false) {//挑战失败

        } else {
        }
        self._LabelData["CurScore"].string = data.cur;
        self._LabelData["MaxScore"].string = data.max;
        if (data.record === true) {//破记录

        }
        // let nBout : number = self._playerCtrl.fGetPlayerData().nBout;
        // let nMaxScore : number = self._playerCtrl.fGetPlayerData().nMaxScore;
        // self._LabelData["CurScore"].string = nBout;
        // self._LabelData["MaxScore"].string = nMaxScore;
        // let score : number = 0;
        // if (nBout >= nMaxScore) {
        //     score = nBout;
        // } else {
        //     score = nMaxScore;
        // }
        // self._playerCtrl.fSetPlayerData({nMaxScore : score});
    }

    _tap_Button_Back () : void {
        let self = this;
        self._runScene(SCENE_NAME.MENU_SCENE);
    }
}
