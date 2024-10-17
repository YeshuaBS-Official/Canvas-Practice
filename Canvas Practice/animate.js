/*
const c = document.getElementById("mydrawing");
const ctx = c.getContext("2d");


let angle = 0; // Initialize angle
document.addEventListener()


function drawRectangle() {
    //ctx.clearRect(0, 0, 200, 200); // Clear the canvas
    ctx.save(); // Save the current state


    // Translate to the center of the canvas
    ctx.translate(100, 100); // Center point of rotation


    // Rotate the context
    ctx.rotate(angle * Math.PI / 180); // Convert degrees to radians


    ctx.fillStyle = "blue"; // Set the fill color
    ctx.fillRect(-60, -30, 120, 60); // Draw rectangle centered at (0, 0)


    ctx.restore(); // Restore the previous state
    angle += 0.01; // Increment angle for rotation
}


setInterval(drawRectangle,0.0001);*/

// global variables
const myCanvas = document.getElementById("mydrawing2");
const myContext = myCanvas.getContext("2d");

let angleInitialD = 0;
let direction = 1;

myCanvas.addEventListener('click', function(){
    direction*=-1
});

function drawStar() {
    myContext.clearRect(0, 0, 200, 200); // Clear the canvas
    angleInitialD+=direction;
        myContext.save();
    // Set the initial position of the drawing
    myContext.translate(25, 75);
    // Draw six rotating rectangles to overlap
    for (let i = 0; i < 10; i++) {
        myContext.save();
        myContext.fillStyle = "rgba(" + (255-40*i) + ", " + (40*i)+ ", 255, 0.5)";
        let height = 20;
        let width = 120;
        let angleDegrees = angleInitialD + 19*i;
        let angleRad = (Math.PI/180)*angleDegrees; //convert to radians
        // First, translate to the center of the image, then rotate
        myContext.translate(width/2, height/2);
        myContext.rotate(angleRad*2.5);
        // Then translate back
        myContext.translate(-width/2, -height/2);
        myContext.fillRect(0, 0, width, height);
        myContext.restore();
    }
    myContext.restore();
}
setInterval(drawStar, 0.00001);
