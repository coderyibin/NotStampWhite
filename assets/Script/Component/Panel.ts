import { UnitComponent } from "./Base/UnitComponent";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Panel extends UnitComponent {

    constructor (parent : cc.Node) {
        super("Panel", parent);
    }

    onLoad () : void {

    }
}
