import { Common } from "./Module/Common";

/**
 * 资源操作的脚本
 */

 export class RES {
    static loadJson (file : string, cb ?: Function) : void {
        cc.loader.loadRes(file, (err, res) => {
            if (err) {
                cc.warn(file, "json资源读取出错");
                return;
            }
            Common.getInstance().setResData(res);
            if (cb) cb(res);
        });
    }

    //获取json数据的长度
    static getJsonLength (json : any) : number {
        if (! json || json instanceof Object) return;
        let len : number= 0;
        for (let i in json) {
            len ++;
        }
        return len;
    }

    static loadRes (res : string, cb ?: Function) : void {
        cc.loader.loadRes(res, (err, res) => {
            if (err) {
                cc.warn(res, "图片资源读取出错");
                return;
            }
            if (cb) cb();
        });
    }
 };