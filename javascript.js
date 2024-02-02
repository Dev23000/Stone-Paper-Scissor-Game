let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const Compscorepara = document.querySelector("#Comp-score");
const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Draw"
    msg.style.backgrouncolor = "#8cb352";
}

const showWinner = (userWin , userChoice ,compChoice) => {
    if(userWin){
        userscore++
        userscorepara.innerText=userscore

        console.log("you win");
        msg.innerText = `You win `;
        msg.style.backgrouncolor = "green";

    }
    else {
        compscore++;
        Compscorepara.innerText = compscore;
        console.log("you lose");
        msg.innerText = `You lost `;
        msg.style.backgrouncolor = "red";
    }
}

const playGame = (userChoice) =>  {
   console.log("user choice :", userChoice);
   const compChoice = genCompChoice();
   console.log("comp choice :", compChoice);

   if (userChoice === compChoice)
   {
    drawGame();
   }
   else{
    let userWin = true;
    if (userChoice==="rock")
    {
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice=== "paper") {
        userWin =compChoice === "scissors" ? false :true;
    }
    else {
        userWin = compChoice === rock ? false : true;
    }
    showWinner(userWin);
   }
}

choices.forEach((choice) => {
    
    choice.addEventListener("click" ,()=> {
        const userchoice = choice.getAttribute("id");
        console.log("Choice was Clicked",userchoice);
        playGame(userchoice);
    })
    });