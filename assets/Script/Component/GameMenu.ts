/**
 * 游戏菜单类
 */
import BaseComponent from "./Base/BaseComponent";
import { SCENE_NAME } from "../Module/Common";
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
    On_Button_ClassicTypeClick (event) : void {
        let self = this;
        console.log("经典模式");
        self._runScene(SCENE_NAME.START_SCENE, ()=>{});
    }

    //急速模式
    On_Button_QuickTypeClick (event) : void {
        let self = this;
        console.log("急速模式");
    }
}
