import { BaseCtrl } from "../Frame/ctrl/BaseCtrl";
import { GAME_MODE } from "../Frame/common/Common";
import { ClientData } from "../Frame/module/ClientData";
import { Player } from "../Module/Player";

/**
 * 游戏一些其他数据控制
 */

 export default class GameCtrl extends BaseCtrl {
    private _speed : number;
    private _mode : number;
    private _curTouchBlock : number;//当前方块点击数量
    private _allBlockNum : number;//经典模式总的方块数量
    private challenge : boolean;//是否挑战成功
    private _sBoutTime : string;//本局时间

    constructor () {
        super();
        this._speed = 0;
        this._allBlockNum = this._clientData.fGetGameConfig().PanelCount;
    }

    //设置当前游戏的模式
    fSetCurGameMode (mode : GAME_MODE) : void {
        this._mode = mode;
        this._clientData.fSetGameConfig({mode : mode});
    }
    fGetCurGameMode () : any {
        return this._clientData.fGetGameConfig().mode;
    }
    
    //设置方块点击次数
    fSetBlockTouchCount () : void {
        this._curTouchBlock ++;
    }
    fGetBlockTouchCount () : number {
        return this._curTouchBlock;
    }

    //获取当前模式的方块移动速度
    fGetCurModeSpeed () : number {
        if (this._mode == GAME_MODE.MODE_CLASSICS) {
            this._speed = 0;
        } else {
            let _speed = this._fGetSpeed();
            if (_speed) {
                this._speed = _speed;
            } else {
                this._speed = 5;
            }
        }
        return this._speed;
    }

    /**
     * 判断游戏结果
     * {
            is : bool,点击的方块是否是对的
            id : self._oData.ID 方块的id
        }
    */
    fJudgeGameResult (data : any) : any {
        if (data.is === false) {
            //失败
            this.challenge = false;
            return {result : "fail"};
        } else {
            if (this._mode == GAME_MODE.MODE_CLASSICS) {
                if (data.id >= this._allBlockNum) {//方块结束,过关
                    this.challenge = true;
                    return {result : "succeed"};
                } else {//继续生产方块
                    let data = {
                        result : "continue",
                        out : true,
                    }
                    return data;
                }
            } else {

            }

        }
    }

    /**
     * 本局时间
     */
    fSetBoutTime (time : string) : void {
        this._sBoutTime = time;
        Player.getInstance().fSetCurTime(time);
    }
    fGetBoutTime () : string {
        return this._sBoutTime;
    }

    //获取难度速度
    private _fGetSpeed () {
        let count = this._curTouchBlock;
        let _speed : any = this._clientData.fGetGameConfig().Speed;
        if (_speed[count]) {
            return _speed[count];
        } return null;
    }

    private static _ctrl : GameCtrl = null;
    static getInstance () : GameCtrl {
        if (! this._ctrl) {
            this._ctrl = new GameCtrl();
        }return this._ctrl;
    }
 }