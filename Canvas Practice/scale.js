const c1 = document.getElementById("mydrawing");
const ctx1 = c1.getContext("2d")

const c2 = document.getElementById("mydrawing2");
const ctx2 = c2.getContext("2d")

ctx1.save();
// Set the initial position of the drawing
ctx1.translate(25, 75);
ctx1.scale(0.5, 1.2);
// Draw six rotating rectangles to overlap
for (let i = 0; i < 16; i++) {
    ctx1.save();
    ctx1.fillStyle = "rgba(" + (100-15*i) + ", 255, " + (15*i) + ", 0.8)";
    let height = 20;
    let width = 120;
    let angleDegrees = 20*i;
    let angleRad = (Math.PI/180)*angleDegrees; //convert to radians
    // First, translate to the center of the image, then rotate
    ctx1.translate(width/2, height/2);
    ctx1.rotate(angleRad);
    // Then translate back
    ctx1.translate(-width/2, -height/2);
    ctx1.fillRect(0, 0, width, height);
    ctx1.restore();
    }
    ctx1.restore();