// create buule

function makeBubble(){
  var cluter = "";
for(var i = 1; i<=147; i++){
  let number = Math.floor(Math.random()*10)+1;
  cluter += ` <div class="buble">${number}</div>`;
}
// select bootm bubble

 var bubble = document.querySelector(".btmpanel")
bubble.innerHTML = cluter;
}

makeBubble();

// st timer

let timer = 60;
function runTime(){
  let timerIner = setInterval(()=>{
    if(timer > 0){
      timer--;
    let btTimer = document.querySelector("#Timer");
    btTimer.textContent = timer;
    }else{
      clearInterval(timerIner);
      let aj = document.querySelector("#btmpanel");
      aj.innerHTML = `Game Over`;
    }
    
  },1000);
}
runTime();

// Hit select
var hitrn = 0;
function fnHit(){
  hitrn = Math.floor(Math.random()*10) +1;
  let hit = document.querySelector("#hit");
  hit.textContent = hitrn;
}
fnHit();

// select score

let score = 0;
function scor(){
  score += 10;
  let max = document.querySelector("#max");
  max.textContent = score;
}
// scor();

let target = document.querySelector("#btmpanel");
target.addEventListener("click", (detal)=>{
  let clickNumber = Number(detal.target.textContent);
  if(clickNumber === hitrn){
    scor();
    fnHit();
    runTime();
    makeBubble();
  }
});