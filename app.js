let gameSeq = [];
let userSeq = [];

let btns = ["yellow" , "red" , "purple" ,"green"];

let started = false;
let level = 0;

let h3 = document.querySelector('h3');

document.addEventListener('keypress', ()=>{
    if(started == false){
        console.log('Game has been started');
        started = true;

        levelUp();
    }
});


function gameFlash(btn){
    btn.classList.add('flash');   
    setTimeout( () =>{
        btn.classList.remove('flash');
    } , 250)
}
function userFlash(btn){
    btn.classList.add('userflash');   
    setTimeout( () =>{
        btn.classList.remove('userflash');
    } , 250)
}


let levelUp = () =>{
    userSeq =[];
    level++;
    h3.innerText = `Level ${level}`;

    //random button choose

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

//Now button press functionality here


function checkAns(idx){
    // console.log("current level :" , level);
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        // console.log('same value');
        if(userSeq.length == gameSeq.length){
            // levelUp();
            setTimeout(levelUp , 1000);
        }
    }else{
        h3.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(()=>{
            document.querySelector('body').style.backgroundColor = "white";
        },150);
        reset();
    }
}


function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll('.btn');

for(btn of allBtns){
    btn.addEventListener('click' , btnPress);
}


function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}