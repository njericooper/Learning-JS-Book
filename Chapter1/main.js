$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    var c = Shape.Circle(200, 200, 50); //creates the object (x, y, center)
    c.fillColor = 'green'; //sets color. is stroke in Paper.js


//Automating Repetitive Tasts    
    //instead of commenting out previous parts of the exercise, I'll change colors

    var c;
    for(var x=25; x<400; x+=50){
        for(var y=25; y<400; y +=50){
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'orange';
        }
    }

//Handeling User Input
// this is an asychronous event - one's timing we don't have control   

var tool = new Tool();

tool.onMouseDown = function(event) {
    //var e = Shape.Circle(event.point.x, event.point.y, 20);
    var c = Shape.Circle(event.point, 20)
    c.fillColor = 'red';
};

//Hello World

var c = Shape.Circle(200, 200, 80);
c.fillColor = 'black';
var text = new PointText(200, 200);
text.justification = 'center';
text.fillColor = 'white';
text.fontSize = 20;
text.content = 'hello world';


    paper.view.draw();
});

