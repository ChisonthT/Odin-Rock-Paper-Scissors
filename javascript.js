
function getComputerChoice(){
    const symbols = ["Scissor","Rock","Paper"]
    const random = Math.floor(Math.random() * symbols.length);
    return symbols[random];
}

function inputCheck(playerSelection){
    const upPlayerSelection = playerSelection.toUpperCase()
    
    if (upPlayerSelection != "ROCK" 
    || upPlayerSelection != "SCISSOR" 
    || upPlayerSelection != "PAPER"){ 
        console.log("Please try one of Rock, Scissor or Paper")
        return false
    } else{
        return true
    }
}

function round(playerSelection, computerSelection){
    const upPlayerSelection = playerSelection.toUpperCase()
    const upCompSelection = computerSelection.toUpperCase()
    
    if (upPlayerSelection == upCompSelection) {
        return "It's a tie"
    } else if (upPlayerSelection == "Rock" && upCompSelection == "Scissor"){
        return "Rock beats Scissor. You win!"
    } else if (upPlayerSelection == "Scissor" && upCompSelection == "Paper"){
        return "Scissor beats Paper. You win!"
    } else if (upPlayerSelection == "Paper" && upCompSelection == "Rock"){
        return "Paper beats Rock. You win!"
    } else{
        return "You lose!"
    }
}


let keepPlaying = true
while (keepPlaying){
    computerSelection = getComputerChoice();
    playerSelection = prompt("Enter your choice of Rock, Paper or Scissor: ");

    if (inputCheck(playerSelection)){
        console.log(round(playerSelection, computerSelection));
        console.log("Somethjingz`");
    }

    if (playerSelection == "Quit"){
        keepPlaying= false;
    }
}