import { Common } from "./Module/Common";

/**
 * 资源操作的脚本
 */

 export class RES {
     
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
        cc.loader.loadRes(file, (err, res) => {
            if (err) {
                cc.warn(res, "图片资源读取出错");
                return;
            }
            if (cb) cb(res, target);
        });
    }
 };