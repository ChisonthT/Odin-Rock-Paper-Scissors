
function getComputerChoice(){
    const symbols = ["Scissor","Rock","Paper"]
    const random = Math.floor(Math.random() * symbols.length);
    return symbols[random];
}

function inputCheck(playerSelection){
    const upPlayerSelection = playerSelection.toUpperCase()
    
    if (upPlayerSelection == "ROCK" || upPlayerSelection == "SCISSOR" || upPlayerSelection == "PAPER"){ 
        return true
    } else{
        console.log("Please try one of Rock, Scissor or Paper")
        return false
    }
}

function round(playerSelection, computerSelection, playerPoints){
    const upPlayerSelection = playerSelection.toUpperCase()
    const upCompSelection = computerSelection.toUpperCase()
    
    if (upPlayerSelection == upCompSelection) {
        return "It's a tie"
    } else if (upPlayerSelection == "ROCK" && upCompSelection == "SCISSOR"){
        return "Rock beats Scissor. You win!"
    } else if (upPlayerSelection == "SCISSOR" && upCompSelection == "PAPER"){
        return "Scissor beats Paper. You win!"
    } else if (upPlayerSelection == "PAPER" && upCompSelection == "ROCK"){        
        return "Paper beats Rock. You win!"
    } else{
        return "You lose! " + computerSelection + " beats " + playerSelection 
    }
}

function game(){
    let playerPoints = 0

    for (let i = 0; i < 5; i++){
        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter Rock, Paper, or Scissor: ");

        if (inputCheck(playerSelection)){
            console.log(playerSelection, computerSelection)
            outcomeString = round(playerSelection, computerSelection);
            if (outcomeString.search("win") != -1){
                playerPoints += 1
            }
            console.log(outcomeString);
        }

    }
    console.log("You got " + playerPoints + " out of 5!")
}

game()