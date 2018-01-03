/**
 * 游戏菜单类
 */
import BaseComponent from "../Frame/view/BaseComponent";
import { SCENE_NAME, GAME_MODE } from "../Frame/common/Common";
const {ccclass, property} = cc._decorator;

@ccclass
export default class GameMenu extends BaseComponent {
    onLoad () : void {
        let self = this;
        if (self._isLogicNode()) {
            self._logicComponentName = self.getObjectName();
        }
        super.onLoad();
    }
    //经典模式
    _tap_Button_ClassicType (event) : void {
        let self = this;
        console.log("经典模式");
        self._gameCtrl.fSetCurGameMode(GAME_MODE.MODE_CLASSICS);
        self._runScene(SCENE_NAME.START_SCENE, ()=>{});
    }

    //急速模式
    _tap_Button_QuickType (event) : void {
        let self = this;
        console.log("急速模式");
        self._gameCtrl.fSetCurGameMode(GAME_MODE.MODE_QUICK);
    }
}
