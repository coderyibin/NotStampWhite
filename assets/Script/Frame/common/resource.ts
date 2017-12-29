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
            let fileName = Common.fGetFileName(file);
            //场景名称-文件名称
            if (! RES.Res[sName]) {
                RES.Res[sName] = {};
            }
            RES.Res[sName][fileName] = res;
            cb(res, target);
        };
        RES._loadRes(file, func, target);
    }

    static loadResToGlobal (file : string, cb ?: Function, target ?: any) : void {
        let sName : string = cc.director.getScene().name;
        let func : Function = (res, target) => {
            //场景名称-文件名称
            RES.Res["global"][file] = res;
            cb(res, target);
        };
        RES._loadRes(file, func, target);
    }

    static _loadRes (file : string, cb : Function, target : any) : void {
        cc.loader.loadRes(file, (err, res) => {//res 图片的话为texture2d对象
            if (err) {
                cc.warn(res, "图片资源读取出错");
                return;
            }
            if (res instanceof cc.Texture2D) {
                let frame : cc.SpriteFrame = new cc.SpriteFrame();
                frame.setTexture(res);
                res = frame;
            }
            cb(res, target);
        });
    }

    /**
     * 获取资源
     * @param file 资源名称 
     */
    static fGetRes (file : string) : any {
        let g_Arr = RES.Res.global
        for (let i in g_Arr) {//优先遍历全局资源
            if (file == i) {
                let res = g_Arr[i];
                return res instanceof cc.Prefab ? cc.instantiate(res) : res;
            }
        }
        let sName : string = cc.director.getScene().name;
        let arr = RES.Res[sName];
        for (let i in arr) {//遍历场景资源
            if (file == i) {
                let res = arr[i];
                return res instanceof cc.Prefab ? cc.instantiate(res.data) : res;
            }
        }
        cc.warn("未找到该资源", file);
        return null;
    }

    /**
     * 释放资源
     * @param type 资源类型
     * @param resName 资源名称--如果类型为模块资源，则resName默认为场景名称
     */
    static fReleaseRes (type : RES_TYPE, resName ?: string) : void {
        if (type == RES_TYPE.SINGLE) {
            
        } else if (type == RES_TYPE.MODULE) {
            if (! resName) {
                let scene = cc.director.getScene()
                let sName : string = scene.name;
                let list = RES.Res[sName];
                for (let i in list) {
                    cc.loader.release(list[i]);
                }
            }
        } else {
            
        }
    }
 };

 /**
  * 资源的管理
  * 在控制台可以用 cc.RES.Res 这个来查看当前内存的资源情况方便调试
  */
 cc["RES"] = RES;