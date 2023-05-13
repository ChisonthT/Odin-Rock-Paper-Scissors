 
function getComputerChoice(){
    const symbols = ["Scissor","Rock","Paper"]
    const random = Math.floor(Math.random() * symbols.length);
    return symbols[random];
}


function round(playerSelection, computerSelection){
    
    if (((playerSelection == "Rock")&&(computerSelection == "Scissor")) ||
    ((playerSelection == "Scissor") && (computerSelection == "Paper")) ||
    ((playerSelection == "Paper") && (computerSelection == "Rock"))
    ){
        return 1;
    } else if (playerSelection == computerSelection){
        return -1
    }else{
        return 0;
    }
}

function game(playerSelection){

    computerSelection = getComputerChoice();
    rndoutcome = round(playerSelection,computerSelection);
    if (rndoutcome == 1){
        playerPoints += 1;
        document.getElementById("player").innerHTML = "Player's points:" + 
        playerPoints;

        if (playerPoints == 5){
            window.alert("Player won!!");
        }
    }

    if (rndoutcome == -1){
        computerPoints += 1;
        document.getElementById("computer").innerHTML = "Computer's points:" + 
        computerPoints;
        
        if (computerPoints == 5){
            window.alert("Computer Won!!");
        }
    }
    
}

let playerPoints = 0;
let computerPoints = 0;