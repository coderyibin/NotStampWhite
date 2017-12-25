/**
 * 全局的一些定义
 */

 export enum SCENE_NAME {
     MENU_SCENE = "MenuScene",
     START_SCENE = "StartGame"
 }

 export class Common {
     _oResource : any;

     //设置获取资源文件数据
     setResData (res : any) : void {
        this._oResource = res;
     }
     getResData () : any {
         return this._oResource;
     }

     private static _common : Common;
     public static getInstance() : Common {
         let self = this;
         if (! self._common) {
            self._common = new Common();
            return self._common;
         }
         return self._common;
     }
 }