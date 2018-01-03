import Hero from "../Frame/module/Hero";
import { LOCAL_KEY } from "../Frame/common/Common";

/**
 * 玩家类
 */

 export class Player extends Hero {

    private _oData : inter_Player;

    constructor () {
        super();
        let self = this;
        self._oData = {
            nBout : 0,
            nMaxScore : 0,
            sCurTime : "",
            sShortTime : "",
        };
    }

    fSetCurTime (time : string) : void {
        this._oData.sCurTime = time;
    }


    fSetPlayer (data : inter_Player) : void {
        let self = this;
        let local : inter_Player = self.fGetPlayer();
        this._oData.nBout = data.nBout || local.nBout || 0;
        this._oData.nMaxScore = data.nMaxScore || local.nMaxScore || 0;
        this._oData.sCurTime = data.sCurTime || local.sCurTime;
        this._oData.sShortTime = data.sShortTime || local.sShortTime;
        self._fSetLocalStorage(LOCAL_KEY.PLAYER, this._oData);
    }
    fGetPlayer () : inter_Player {
        let self = this;
        let data = self._fGetLocalStorage(LOCAL_KEY.PLAYER);
        this._oData = data;
        return this._oData;
    }

    static _player : Player = null;
    static getInstance () : Player {
        if (! this._player) {
            this._player = new Player();
            return this._player;
        } return this._player;
    }
 }

 cc["player"] = Player.getInstance();