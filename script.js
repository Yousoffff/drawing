const canvas = document.querySelector("#canvas");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const sizeElement = document.querySelector("#size");
const clear = document.querySelector("#clear");
const ctx = canvas.getContext("2d");
const colorElement = document.querySelector("#color");

let size = 20;
// let x = 50;
// let y = 50;

let isPressed = false;
let color = "black";


canvas.addEventListener("mousedown" , () => {
    isPressed = true;
});

canvas.addEventListener("mouseup" , () => {
    isPressed = false;
});

canvas.addEventListener("mousemove" , (e) =>{
    if(isPressed){
      const x = e.offsetX;
      const y = e.offsetY;
      
      drawCircle(x, y);
    }
});

function drawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,size,0,Math.PI * 2);
    ctx.fillStyle = color; 
    ctx.fill();
}

increaseBtn.addEventListener("click" , () =>{
    size +=2;
    console.log(size)
    
    if(size>50){
        size=50;
    }
    sizeElement.textContent = size;
});

decreaseBtn.addEventListener("click" , () =>{
    size -=2;
    if (size < 2) {
      size = 2;
    }
    sizeElement.textContent = size;
});

colorElement.addEventListener("change",(e) =>{
    color = e.target.value;
});


// function draw(){
//     ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
//     drawCircle(x,y);
//     requestAnimationFrame(draw);
// }

// draw();