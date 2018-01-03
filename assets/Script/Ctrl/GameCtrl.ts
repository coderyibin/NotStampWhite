import { BaseCtrl } from "../Frame/ctrl/BaseCtrl";
import { GAME_MODE } from "../Frame/common/Common";
import { ClientData } from "../Frame/module/ClientData";

/**
 * 游戏一些其他数据控制
 */

 export default class GameCtrl extends BaseCtrl {
    constructor () {
        super();
    }

    //设置当前游戏的模式
    fSetCurGameMode (mode : GAME_MODE) : void {
        ClientData.getInstance().fSetGameConfig({mode : mode});
    }
    fGetCurGameMode () : any {
        return ClientData.getInstance().fGetGameConfig().mode;
    }

    private static _ctrl : GameCtrl = null;
    static getInstance () : GameCtrl {
        if (! this._ctrl) {
            this._ctrl = new GameCtrl();
        }return this._ctrl;
    }
 }