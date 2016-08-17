/**
 * FileName: app.js
 * 
 * @author Hina Patel
 * @date Aug 17, 2016
 * 
 * StudentID: 821021425http://comp125-finalexam-821021425.azurewebsites.net
 * website: 
 * @description This file is the main javascript file for the web site
 */
  
 // IIFE - Immediately Invoked Function Expression

var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    // app entry function
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    function gameLoop() {
        stage.update();
    }
    function main() {
    }
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map