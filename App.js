let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["red", "green", "yellow", "purple"];

document.addEventListener("keypress", function(){
    if(start == false){
        console.log("game Started");
        start = true;

        levelUp();
    }
});


///fffgfgfgfgfg

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    // random button choose
    let randIdx = Math.floor(Math.random() * 4);
    let randColor =  btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn)
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250);
}

function btnPress(){
    //console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

function checkAns(idx){
    // console.log("curr level :",level);
    //let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        //console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`;
        reset();
    }
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}



/* Now we will takle both the arrays for to create sequence b/w them */

