let gameSeq =[];
let userSeq =[];
let started= false;
let level=0; 
let highScore = 0;


let btns=["red", "green", "orange", "blue"];

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function() {
    if(started == false){
        console.log("game is started");
        started = true;

        levelUp();
    }
} );

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);

}
function levelUp(){
    userSeq =[];

    level++;
    h3.innerText = `Level ${level} `;

    // random flash div
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(
        gameSeq
    );
    btnFlash(randbtn);
}


function checkAns(idx){
    
    if(userSeq[idx] === gameSeq[idx]){
        console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
            

        }
    }
    else{
        if (level > highScore){
            highScore= level;
        }
        h3.innerHTML =`Game Over!!<br> <h1>Highest Score: ${highScore} </h1> <br> Your Score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor ="white";
        }, 250); 
        started=false;
        gameSeq= [];
        userSeq = [];
        level=0;

    }
}
function btnPress(){
    
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}


let allbtns= document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnPress);
}