
const c1 = document.getElementById("mydrawing");
const ctx1 = c1.getContext("2d")

const c2 = document.getElementById("mydrawing2");
const ctx2 = c2.getContext("2d")

for (let i = 0; i < 15; i++){
    for(let j = 0; j < 15; j++){
        ctx1.save();
        ctx1.fillStyle = "rgb(255,"+ (200-10*i) +", "+ (100+10*j) +")";
        ctx1.translate(20 + i * 10, 20 + j * 10);
        ctx1.fillRect(0,0,8,8);
        ctx1.restore();
    }
}

for (let r = 0; r < 15; r++){
    for(let t = 0; t < 15; t++){
        ctx2.save();
        ctx2.fillStyle = "rgb(150,"+ (200-10*r) +", "+ (100+10*t) +")";
        ctx2.translate(20 + r * 10, 20 + t * 10);
        ctx2.fillRect(0,0,8,8);
        ctx2.restore();
    }
}
