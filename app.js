let userScore = 0;
let compScore = 0;
let game=1;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const playScore = document.querySelector("#user-score");
const computerScore = document.querySelector("#comp-score");
const resetBtn = document.querySelector("#btn");
const gameNum = document.querySelector("#gameNum");
// let askGame = prompt("How many game you want to play?");

const genCompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () => {
    console.log("drawGame");
    msg.innerText = "Draw!!";
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("You Win!");
        userScore++;
        playScore.textContent = userScore;
        msg.innerText = "You Win!";

    }
    else{
        console.log("You Lose!");
        compScore++;
        computerScore.textContent = compScore;
        msg.innerText = "You Lose!";
    }

}
const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    const compChoice = genCompChoice();
    console.log("compChoice = ",compChoice);

    game++;
    gameNum.textContent=game;
    
    

    if(userChoice===compChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock") {
            userWin = compChoice === "paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin = compChoice==="scissor"?false:true;
    }
    else{
        userWin = compChoice==="rock"?false:true;
    }
    showWinner(userWin);
}
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

resetBtn.addEventListener("click",() =>{
    userScore=0;
    compScore = 0;
    game=1;
    gameNum.textContent=game;
    playScore.textContent=userScore;
    computerScore.textContent=compScore;
    msg.innerText="Play Your Move";
})