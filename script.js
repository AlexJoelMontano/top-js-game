function getComputerChoice(){
    num = Math.floor(Math.random()*3);
    if (num == 0){
        return "rock";
    }else if (num == 1) {
        return "paper";
    }else{
        return "scissors";
    }
}
function winner(){
   
    //counts total 
    let scoreWin = document.querySelector("#win");
    scoreWin.textContent ++;
    let total = document.querySelector("#total");
    total.textContent ++;

    //displays results for user
    let winResults = document.querySelector("#winner");
    let loseResults = document.querySelector("#loser");
    let tieResults = document.querySelector("#tieGame");
    winResults.style.display = "block";
    loseResults.style.display = "none";
    tieResults.style.display = "none";
}
function loser(){

    let scoreLose = document.querySelector("#lose");
    scoreLose.textContent ++;
    let total = document.querySelector("#total");
    total.textContent ++;

    let winResults = document.querySelector("#winner");
    let loseResults = document.querySelector("#loser");
    let tieResults = document.querySelector("#tieGame");
    winResults.style.display = "none";
    loseResults.style.display = "block";
    tieResults.style.display = "none";
}
function ties(){

    let scoreTie = document.querySelector("#tie");
    scoreTie.textContent ++;
    let total = document.querySelector("#total");
    total.textContent ++;

    let winResults = document.querySelector("#winner");
    let loseResults = document.querySelector("#loser");
    let tieResults = document.querySelector("#tieGame");
    winResults.style.display = "none";
    loseResults.style.display = "none";
    tieResults.style.display = "block";
}


function round(choice){
    let player = choice;
    let comp = getComputerChoice();
    
    if(player == "rock" & comp == "rock"){
        ties()
    }
    else if(player == "rock" & comp == "paper"){
        loser()
    }
    else if(player == "rock" & comp == "scissors"){
        winner()
    }
    else if(player == "paper" & comp == "paper"){
        ties()
    }
    else if(player == "paper" & comp == "scissors"){
        loser()
    }
    else if(player == "paper" & comp == "rock"){
        winner()
    }
    else if(player == "scissors" & comp == "scissors"){
        ties()
    }
    else if(player == "scissors" & comp == "paper"){
        winner()
    }
    else if(player == "scissors" & comp == "rock"){
        loser()
    }

    return comp;
}


function newGame(){

    let scoreWin = document.querySelector("#win");
    scoreWin.textContent = 0;

    let scoreLose = document.querySelector("#lose");
    scoreLose.textContent = 0;

    let scoreTie = document.querySelector("#tie");
    scoreTie.textContent = 0;

    let total = document.querySelector("#total");
    total.textContent = 0;

    let winResults = document.querySelector("#winner");
    let loseResults = document.querySelector("#loser");
    let tieResults = document.querySelector("#tieGame");

    winResults.style.display = "none";
    loseResults.style.display = "none";
    tieResults.style.display = "none";
}

let total = document.querySelector("#total");
if (total.textContent == 5){
    alert("Game Over");
    newGame()
}
