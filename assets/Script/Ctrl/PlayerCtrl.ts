import { Player } from "../Module/Player";
import { BaseCtrl } from "../Frame/ctrl/BaseCtrl";
import { ClientData } from "../Frame/module/ClientData";
import { GAME_MODE } from "../Frame/common/Common";

/**
 * 玩家数据控制器
 */

 export default class PlayerCtrl extends BaseCtrl{
     private _clientData : ClientData;
     private _playerData : Player;
     private _sCurTime : string = "";
     private _challenge : boolean = true;
     constructor () {
        super();
        this._sCurTime = "";
        this._challenge = true;
        this._playerData = Player.getInstance();
        this._clientData = ClientData.getInstance();
     }

     //设置是否挑战成功
     fSetSucceed (bool : boolean) : void {
        this._challenge = bool;
     }

    //设置当局玩家时间
    fSetCurTime (time : string) : void{
        this._sCurTime = time;
    }
    fGetCurTime () : string {
        return this._sCurTime;
    }

    //获取结算-挑战成功才会保存记录
    fGetSettleData () : any {
        let data = this._playerData.fGetPlayer();
        if (this._clientData.fGetGameConfig().mode == GAME_MODE.MODE_CLASSICS) {//经典模式
            let cur = this._sCurTime;
            let max = data.sShortTime || "00:00:00";
            let _data = {
                cur : cur,
                max : max
            };
            if (this._challenge === false) {//挑战失败
                _data["challenge"] = false;
            }
            let ctime : any = cur.split(":");
            let mtime : any = max.split(":");
            ctime = parseInt(ctime[0]) * 60 + parseInt(ctime[1]) + parseInt(ctime[2]);
            mtime = parseInt(mtime[0]) * 60 + parseInt(mtime[1]) + parseInt(mtime[2]);
            if (ctime > mtime && max != "00:00:00") {
                //未破记录
                _data["record"] = false;
            } else {
                _data["record"] = true;
                this._playerData.fSetPlayer({sCurTime : cur, sShortTime : max});
            }
            return _data;
        } else {

        }

    }

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
        // Player.getInstance().fClean(key);
    }

    static _ctrl : PlayerCtrl = null;
    static getInstance () : PlayerCtrl {
        if (! this._ctrl) {
            this._ctrl = new PlayerCtrl();
        }
        return this._ctrl;
    }
 }