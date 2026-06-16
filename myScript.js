function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    return number == 0 ? "rock":
            number == 1? "paper":
            number == 2? "scissor":
            4;
}

 function getHumanChoice(){
    let choice = prompt("pick 1 of the following\n1- Rock\n2- Paper\n3- Scissor");
    return choice;
 }


function playGame(humanChoice, computerChoice){
    let humanScore =0; 
    let computerScore = 0;

    for(let i =0; i< 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("computer choice : " + computerSelection);
        console.log("Human choice : " + humanSelection);

        let result = playRound(humanSelection,computerSelection);

        if (result == "win"){
            humanScore++
        } else if(result == "lose"){
            computerScore++
        }
    
    }
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();


        if (humanChoice == computerChoice){
            return "draw";
        }
        if (humanChoice == "rock" && computerChoice == "scissor"){
            return "win";
        }
        if (humanChoice == "rock" && computerChoice == "paper"){
            return "lose";
        }
        if (humanChoice == "paper" && computerChoice == "rock"){
            return "win";
        }
        if (humanChoice == "paper" && computerChoice == "scissor"){
            return "lose";
        }
        if (humanChoice == "scissor" && computerChoice == "paper"){
            return "win";
        }
        if (humanChoice == "scissor" && computerChoice == "rock"){
            return "lose";
        }

    }
    console.log("computer score "+ computerScore +" human score "+ humanScore)
}




playGame();

