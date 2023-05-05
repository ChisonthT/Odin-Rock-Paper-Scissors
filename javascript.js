
function getComputerChoice(){
    const symbols = ["Scissor","Rock","Paper"]
    const random = Math.floor(Mar.random() * symbols.length);
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
    } else if (upPlayerSelection == "ROCK" && upCompSelection == "Scissor"){

    } else{
        return ""
    }
}


let keepPlaying = true
while (keepPlaying){
    computerSelection = getComputerChoice();
    playerSelection = prompt("Enter your choice of Rock, Paper or Scissor: ");

    if (inputCheck(playerSelection)){
        round(playerSelection, computerSelection);
    }

    if (playerSelection == "Quit"){
        keepPlaying= false;
    }
}