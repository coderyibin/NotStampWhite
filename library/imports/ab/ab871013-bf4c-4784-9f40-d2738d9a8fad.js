"use strict";
cc._RF.push(module, 'ab871ATv0xHhJ9A0nONmo+t', 'Common');
// Script/Module/Common.ts

/**
 * 全局的一些定义
 */
Object.defineProperty(exports, "__esModule", { value: true });
//场景的名称
var SCENE_NAME;
(function (SCENE_NAME) {
    SCENE_NAME["MENU_SCENE"] = "MenuScene";
    SCENE_NAME["START_SCENE"] = "StartGame";
})(SCENE_NAME = exports.SCENE_NAME || (exports.SCENE_NAME = {}));
//方块的尺寸
var PANEL_SIZE;
(function (PANEL_SIZE) {
    PANEL_SIZE[PANEL_SIZE["WIDTH"] = 178] = "WIDTH";
    PANEL_SIZE[PANEL_SIZE["HEIGHT"] = 319] = "HEIGHT";
})(PANEL_SIZE = exports.PANEL_SIZE || (exports.PANEL_SIZE = {}));
var Common = /** @class */ (function () {
    function Common() {
    }
    /**
     * 获取指定范围内的随机数
     * @param 最小值 number
     * @param 最大值 number 包含
     */
    Common.fGetRandom = function (min, max) {
        var num = Math.floor(Math.random() * max + min);
        return num;
    };
    /**
     * 获取文件名称
     * @param 文件路径
     */
    Common.fGetFileName = function (path) {
        var index = path.indexOf("/");
        if (index != -1) {
            var name = path.substr(index + 1, path.length);
            return name;
        }
        else {
            return path;
        }
    };
    return Common;
}());
exports.Common = Common;

cc._RF.pop();