import {BaseButton} from "./Base/BaseButton";
const {ccclass, property} = cc._decorator;

@ccclass
export default class ButtonClick extends BaseButton {

    onLoad () : void {
        // this.registerEvent(this.node, this.node.name, this);
        let self = this;
    }
}
