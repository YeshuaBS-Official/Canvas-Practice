/* JAVA SCRIPT AHHHHHHHHHHHH*/
/* CANVAS AHHHHHHHHH */
const myCanvas = document.getElementById("mydrawing");
const myContext = myCanvas.getContext("2d")

const myCanvas2 = document.getElementById("mydrawing2");
const myContext2 = myCanvas2.getContext("2d")

/*myContext.fillRect(50,50,50,50);
myContext.clearRect(75,75,25,25);
myContext.strokeRect(75,75,75,75);
*/


/* First Canvas */

myContext.beginPath();
     myContext.arc(50, 100, 20, 0, Math.PI*2);
myContext.stroke();

myContext.beginPath();
     myContext.arc(100, 100, 20, 0, Math.PI*2);
myContext.fill();

myContext.beginPath();
    myContext.arc(50, 65, 20, -1, Math.PI+1, false);
myContext.stroke();

/* Second Canvas */
myContext2.beginPath();
    myContext2.fillStyle = "rgb(181, 125, 107)";
    myContext2.arc(100, 100, 50, 2.2, Math.PI+2.2, false);
myContext2.fill();
myContext2.beginPath();
    myContext2.fillStyle = "rgb(181, 125, 107)";
    myContext2.arc(100, 100, 50, 0, Math.PI, false);
myContext2.fill();
myContext2.beginPath();
    myContext2.fillStyle = "rgb(245, 229, 186)";
    myContext2.arc(100, 100, 43, 2.2, Math.PI+2.2, false);
myContext2.fill();
myContext2.beginPath();
    myContext2.fillStyle = "rgb(245, 229, 186)";
    myContext2.arc(100, 100, 43, 0, Math.PI, false);
myContext2.fill();

myContext2.beginPath();
    myContext2.fillStyle = "rgb(181, 125, 107)";
    myContext2.arc(110,95,50,-1,Math.PI-3.1);
    myContext2.lineTo(105,97);
myContext2.fill();
myContext2.beginPath();
    myContext2.fillStyle = "rgb(245, 229, 186)";
    myContext2.arc(110,95,43,-1,Math.PI-3.1);
    myContext2.lineTo(105,97);
myContext2.fill();

myContext2.beginPath();
    myContext2.fillStyle = "rgb(204, 96, 96)";
    myContext2.arc(75, 100, 10, 0, Math.PI*2);
myContext2.fill();
myContext2.beginPath();
    myContext2.fillStyle = "rgb(204, 96, 96)";
    myContext2.arc(95, 125, 10, 0, Math.PI*2);
myContext2.fill()
myContext2.beginPath();
    myContext2.fillStyle = "rgb(204, 96, 96)";
    myContext2.arc(125, 115, 10, 0, Math.PI*2);
myContext2.fill()
myContext2.beginPath();
    myContext2.fillStyle = "rgb(204, 96, 96)";
    myContext2.arc(100, 75, 10, 0, Math.PI*2);
myContext2.fill()
myContext2.beginPath();
    myContext2.fillStyle = "rgb(204, 96, 96)";
    myContext2.arc(135, 82, 10, 0, Math.PI*2);
myContext2.fill()

//cmd shift 4


/*myContext2.beginPath();
    myContext2.fillStyle = "rgb(181, 125, 107)";
    myContext2.arc(100, 100, 50, 2, Math.PI+2.2, false);
myContext2.fill();*/





