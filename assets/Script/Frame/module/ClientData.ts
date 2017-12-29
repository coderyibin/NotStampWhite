/**
 * 游戏数据单利
 */

export class ClientData {
    _oResource : any;

    constructor () {
        let self = this;
        self._oResource = {};
    }

    //设置获取资源文件数据
    fSetResData (res : any) : void {
        this._oResource = res;
    }
    fGetResData () : any {
        return this._oResource;
    }

    static _oData : ClientData;
    static getInstance () : ClientData {
        let self = this;
        if (! self._oData) {
            self._oData = new ClientData();
            return self._oData;
        }
        return self._oData;
    }

}