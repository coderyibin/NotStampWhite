import BaseComponent from "../Frame/view/BaseComponent";
import { Common, SCENE_NAME } from "../Frame/common/Common";
import { RES } from "../Frame/common/resource";
import { ClientData } from "../Frame/module/ClientData";
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

    _tap_Button_StartGame (event) : void {
        let self = this;
        self._runScene(SCENE_NAME.MENU_SCENE, ()=>{});       
    }
}
