import BaseComponent from "../Frame/view/BaseComponent";

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
}
