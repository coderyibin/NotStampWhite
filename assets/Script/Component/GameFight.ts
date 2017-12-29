import BaseComponent from "../Frame/view/BaseComponent";
import { RES } from "../Frame/common/resource";
import { Common, PANEL_SIZE, SCENE_NAME} from "../Frame/common/Common";
import PlayerCtrl from "../Ctrl/PlayerCtrl";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GameFight extends BaseComponent {
    @property(cc.Node)
    PanelNode : cc.Node = null;
    @property(cc.Node)
    ShieldNode : cc.Node = null;

    _nResLen : number = 0;
    _nCurLen : number = 0;
    _nRow : number = 0;
    _nCol : number = 0;
    _nSecond : number = 0;
    _nMicSecond : number = 0;
    _bGameStart : boolean = false;
    _nPanelCount : number = 0;//经典模式的方块数量
    _nPanelCur : number = 0;//经典模式的方块数量
    _nCurTouch : number = 0;//当前点击有效的回合

    onLoad () : void {
        let self = this;
        if (self._isLogicNode()) {
            self._logicComponentName = self.getObjectName();
        }
        super.onLoad();
        //一排四个,三排
        self._nRow = 4;
        self._nCol = 3;
        self._nCurLen = 0;
        self._nSecond = 0;
        self._nMicSecond = 0;
        self._bGameStart = false;
        self._nPanelCount = self._client.fGetGameConfig().PanelCount;
        self._nPanelCur = 0;
    }

    _initUI () : void {
        let self = this;
        let res = self._client.fGetResData().res;
        self._nResLen = RES.getJsonLength(res);
        for (let i in res) {
            RES.loadRes(res[i], self.fCallback, self);
        }
    }

    fCallback (data, target) : void {
        let self = target;
        self._nCurLen ++;
        if (self._nResLen == self._nCurLen) {
            self.fAddChunk();
        }
    }

    fAddChunk () : void {
        let self = this;
        for(let j = 1; j < 5; j ++) {
            self._nPanelCount --;
            self.fAddColChunk(j);
        }
    }

    fAddColChunk (j : number) : void {
        let self = this;
        if (self._nPanelCount == self._nPanelCur) {
            return;
        }
        self._nPanelCur ++;
        //随机黑块的下标
        let black = Common.fGetRandom(0, 3);
        for (let i = 0; i < self._nRow; i ++) {
            let oData : any = {};
            let interval = 0;
            oData = {
                parent : self,
                x : PANEL_SIZE.WIDTH * i,
                y : PANEL_SIZE.HEIGHT * j,
            };
            if (i > 0) {
                oData.x += 2 * i;
            }
            oData.y += 2 * j;
            if (black == i) {
                oData["isBlack"] = true;
                oData["ID"] = self._nPanelCur;
            }
            let panel = RES.fGetRes("Panel");
            self.PanelNode.addChild(panel);
            panel.getComponent("Panel").fSetUnitData(oData);
        }
    }

    //开始游戏
    _tap_start () : void {
        let self = this;
        self._bGameStart = true;
        self.schedule(self._fTimeAction, 1);
        self.fMovePanel();
    }

    //计时器
    _fTimeAction () : void {
        let self = this;
        self._nSecond ++;
    }

    update () : void {
        let self = this;
        if (self._bGameStart) {
            //假时间的跳动假象
            self._nMicSecond ++;
            if (self._nMicSecond > 99) {
                self._nMicSecond = 0;
            }
            let nMicSecond : string = self._nMicSecond < 10 ? "0" + self._nMicSecond : self._nMicSecond + "";
            let nSecond : string = self._nSecond < 10 ? "0" + self._nSecond : self._nSecond + "";
            self._LabelData["CountDownTime"].string = nSecond + ":" + nMicSecond;
        }
    }

    fIsMovePanel (data : any) : void {
        let self = this;
        if (data.is) {
            if (data.id == self._nPanelCount) {
                self.fSettlement();
                //结束
                self._runScene(SCENE_NAME.OVER_SCENE);
            } else {
                self._nCurTouch ++;
                self.fMovePanel();
            }
        } else {
            //输了！
            //游戏停止
            self.fSettlement();
            //屏蔽所有点击事件
            self.ShieldNode.addComponent(cc.Button);
            //延迟进入结束界面
            self.scheduleOnce(()=>{
                self._runScene(SCENE_NAME.OVER_SCENE);
            }, 1);
        }
    }

    //游戏结算
    fSettlement () : void {
        let self = this;
        self._bGameStart = false;
        //停止倒计时
        self.unschedule(self._fTimeAction);
        self._playerCtrl.fSetPlayerData({nBout : self._nCurTouch});
    }

    fMovePanel () : void {
        let self = this;
        self.fAddColChunk(5);
        let list = self.PanelNode.children;
        for (let i in list) {
            list[i].y -= list[i].getContentSize().height + 1;
            if (list[i].y < - list[i].getContentSize().height * 2) {
                list[i].destroy();
            }
        }
    }
}
