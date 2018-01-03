import { Base64 } from "./Base64";

/**
 * 全局的一些定义
 */

 //场景的名称
 export enum SCENE_NAME {
     MENU_SCENE = "MenuScene",
     START_SCENE = "StartGame",
     OVER_SCENE = "GameOver"
 }

 //数据保存本地的key配置
 export enum LOCAL_KEY {
     PLAYER = "player",
 }

 //方块的尺寸
 export enum PANEL_SIZE {
     WIDTH = 178,
     HEIGHT = 319
 }

 //游戏模式
 export enum GAME_MODE {
     MODE_CLASSICS,//经典模式
     MODE_QUICK,//急速模式
 }

 export class Common {

    /**
     * base 64解密
     */
    static BaseDecode (str : string) : string {
        return new Base64().decode(str);
    }

    /**
     * base 64解密
     */
    static BaseEncode (str : string) : string {
        return new Base64().encode(str);
    }
     
    /**
     * 获取指定范围内的随机数
     * @param 最小值 number
     * @param 最大值 number 包含
     */
    static fGetRandom (min : number, max : number) : number {
        let num : number = Math.floor(Math.random() * max + min);
        return num;
    }

    /**
     * 获取文件名称
     * @param 文件路径
     */
    static fGetFileName (path : string) : string {
        let index : number = path.indexOf("/"); 
        if (index != -1) {
            let name = path.substr(index + 1, path.length);
            return name;
        } else {
            return path;
        }
    }
 }