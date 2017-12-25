import BaseComponent from "./Base/BaseComponent";
import { Common, SCENE_NAME } from "../Module/Common";
import { RES } from "../resource";
import { ClientData } from "../Module/ClientData";
const {ccclass, property} = cc._decorator;

@ccclass
export default class HelloMenu extends BaseComponent {
    onLoad () : void {
        let self = this;
        if (self._isLogicNode()) {
            self._logicComponentName = self.getObjectName();
        }
        super.onLoad();
    }

    _initUI () : void {
        //加载资源配置文件
        RES.loadJson("resource", (res) =>{
            ClientData.getInstance().fSetResData(res);
        });
    }

    On_Button_StartGameClick (event) : void {
        let self = this;
        self._runScene(SCENE_NAME.MENU_SCENE, ()=>{});       
    }
}
