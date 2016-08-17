/**
 * FileName: app.js
 * 
 * @author Hina Patel
 * @date Aug 17, 2016
 * 
 * StudentID: 821021425
 * website: http://comp125-finalexam-821021425.azurewebsites.net
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression

var core;
(function (core) {
    "use strict";
    var canvas;
    var stage;
    // app entry function
    /**
     * This function initialize the canvas 
     * 
     * @function init
     * @returns {void}
     */
    function init() {
        canvas = document.getElementById("canvas");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop);
        main();
    }
    /**
     * Event method that triggers every frame
     *
     * @method gameLoop
     */
    function gameLoop() {
     var xhrParagraphContents;
  //define an array of HTML elements

  var documentElements = [];

  documentElements[0] = document.getElementById("statement");
  documentElements[1] = document.getElementById("paragraphTwo");
  documentElements[2] = document.getElementById("paragraphThree");
  documentElements[3] = document.getElementById("work_address");
  documentElements[4] = document.getElementById("pro_1_title");
  documentElements[5] = document.getElementById("pro_2_title");
  documentElements[6] = document.getElementById("pro_3_title");
  documentElements[7] = document.getElementById("bio_heading");
  documentElements[8] = document.getElementById("name");


       

        // console.log() "You rolled "+diceTotal+".";
        stage.update();
    }

    /**
     * This function create the canvas 
     * 
     * @function main
     * @returns {void}
     */
    function main() {
        // button bitmap
        var rollButton = new createjs.Bitmap("../Assets/images/rollButton.png");
        rollButton.x = 200;
        rollButton.y = 300;

        var d1 = new createjs.Bitmap("../Assets/images/blank.png");
        d1.x = 300;
        d1.y = 0;
        var d2 = new createjs.Bitmap("../Assets/images/blank.png");


        //   rollButton = new objects.Button("../Assets/images/rollButton.png", core.CANVAS_WIDTH * 0.5, core.CANVAS_HEIGHT * 0.5, true);
        stage.addChild(rollButton);
        stage.addChild(d1);
        stage.addChild(d2);
        rollButton.on("click", clickMeButton_clicked);
        // rollButton.addEventListener("click", clickMeButton_clicked);
    }
    /**
     * This function handls the button click event
     * 
     * @function clickMeButton_clicked
     * @returns {void}
     */
    function clickMeButton_clicked() {

        var d1 = Math.floor(Math.random() * 6) + 1;
        var d2 = Math.floor(Math.random() * 6) + 1;
        d1.text = (d1.text === "Dice Roll:" + d1);
        Console.log("Dice Rolled");
    }

    // call init funciton when window finishes loading
    window.addEventListener("load", init);
})(core || (core = {}));
//# sourceMappingURL=app.js.map