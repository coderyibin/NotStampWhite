/**
 * 全局的一些定义
 */

 //场景的名称
 export enum SCENE_NAME {
     MENU_SCENE = "MenuScene",
     START_SCENE = "StartGame"
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
 }