import { Player } from "../Module/Player";

/**
 * 玩家数据控制器
 */

 export default class PlayerCtrl {

    //获取玩家数据
    fGetPlayerData () : inter_Player {
        return Player.getInstance().fGetPlayer();
    }

    //设置玩家数据
    fSetPlayerData (data : inter_Player) : void {
        Player.getInstance().fSetPlayer(data);
    }

    //清理数据
    fCleanData (key : Array<string>) : void {
        Player.getInstance().fSetPlayer(key);
    }

    static _ctrl : PlayerCtrl = null;
    static getInstance () : PlayerCtrl {
        if (! this._ctrl) {
            this._ctrl = new PlayerCtrl();
        }
        return this._ctrl;
    }
 }