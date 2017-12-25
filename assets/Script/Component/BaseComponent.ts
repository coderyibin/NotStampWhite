const {ccclass, property, executionOrder} = cc._decorator;
import { Emitter } from "../Module/Emitter";

@ccclass
@executionOrder(0)
export class BaseComponent extends cc.Component {
    _emitter : Emitter;

    onLoad () : void {
        let self = this;
        self._emitter = Emitter.getInstance();
        self._emitter.on("runScene", self.runScene, self);
    }

    runScene (sceneName : string) : void {
        cc.log("切换场景-", sceneName);
        cc.director.preloadScene(sceneName, (error : Error)=>{
            if (error) {
            } else {
                cc.director.loadScene(sceneName);
            }
        });
    }
}