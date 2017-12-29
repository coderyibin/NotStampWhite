/**
 * 全局的一些定义
 */

 //场景的名称
 export enum SCENE_NAME {
     MENU_SCENE = "MenuScene",
     START_SCENE = "StartGame",
     OVER_SCENE = "GameOver"
 }

 //方块的尺寸
 export enum PANEL_SIZE {
     WIDTH = 178,
     HEIGHT = 319
 }

 export class Common {
     
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