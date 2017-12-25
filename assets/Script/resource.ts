import { Common } from "./Module/Common";

export enum RES_TYPE {
    GLOBAL,//全局资源
    SINGLE,//单个资源
    MODULE,//模块资源
}

/**
 * 资源操作的脚本
 */

 export class RES {
    //资源数据
    static Res = {
        "global" : {}
    };
     
    //加载资源数组
    static loadArray (file : Array<string>, progress : Function, cb ?: Function) : void {
        cc.loader.loadResArray(file, (Count: number, total: number, item: any) => {
            progress.call(Count, total, item);
        }, (err: Error, res: any[]) => {
            if (err)  {
                cc.warn("res error!");
                return;
            }
            if (cb) cb.call(res);
        });
    }

    static loadJson (file : string, cb ?: Function) : void {
        cc.loader.loadRes(file, (err, res) => {
            if (err) {
                cc.warn(file, "json资源读取出错");
                return;
            }
            if (cb) cb(res);
        });
    }

    //获取json数据的长度
    static getJsonLength (json : any) : number {
        if (! json || ! (json instanceof Object)) return;
        let len : number= 0;
        for (let i in json) {
            len ++;
        }
        return len;
    }

    static loadRes (file : string, cb ?: Function, target ?: any) : void {
        let sName : string = cc.director.getScene().name;
        let func : Function = (res, target) => {
            //场景名称-文件名称
            RES.Res[sName][file] = res;
        };
        RES._loadRes(file, func, target);
    }

    static loadResToGlobal (file : string, cb ?: Function, target ?: any) : void {
        let sName : string = cc.director.getScene().name;
        let func : Function = (res, target) => {
            //场景名称-文件名称
            RES.Res["global"][file] = res;
        };
        RES._loadRes(file, func, target);
    }

    static _loadRes (file : string, cb : Function, target : any) : void {
        cc.loader.loadRes(file, (err, res) => {
            if (err) {
                cc.warn(res, "图片资源读取出错");
                return;
            }
            cb(res, target);
        });
    }

    static fGetRes () : cc.SpriteFrame {
        return null;
    }

    static fReleaseRes (type : RES_TYPE, resName : string) : void {
        if (type == RES_TYPE.SINGLE) {

        }
    }
 };