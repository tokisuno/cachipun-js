// 0: rock      roca
// 1: paper     papel
// 2: scissors  tijeras
// en chile se dice "cachipun"

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function getHumanChoice() {
    while(true) {
        let input = prompt("Rock, paper, or scissors?");
        switch (input.toLowerCase()) {
            case "rock":
                console.log(input);
                return input;
            case "paper":
                console.log(input);
                return input;
            case "scissors":
                console.log(input);
                return input;
            default:
                continue;
        }
    }
}

function main() {
    let humanScore = 0;
    let computerScore = 0;

    let i = 1;

    while (i <= 5) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log(`ROUND ${i}!`); 
        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "rock":
                        console.log("tie (no one wins)");
                        break;
                    case "paper":
                        console.log("paper beats rock (computer wins)");
                        computerScore++;
                        break;
                    case "scissors":
                        console.log("rock beats scissors (human wins)");
                        humanScore++;
                        break;
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "rock":
                        console.log("paper beats rock (human wins)");
                        break;
                    case "paper":
                        console.log("tie (no one wins)");
                        computerScore++;
                        break;

                    case "scissors":
                        console.log("scissors beats paper (computer wins)");
                        humanScore++;
                        break;
                }
                break;
            case "scissors":
                switch (computerChoice) {
                    case "rock":
                        console.log("rock beats scissors (computer wins)");
                        break;
                    case "paper":
                        console.log("scissors beats paper (human wins)");
                        computerScore++;
                        break;
                    case "scissors":
                        console.log("tie (no one wins)");
                        humanScore++;
                        break;
                }
                break;
        }
        console.log(`HUMAN: ${humanScore}, COMP: ${computerScore}`);
        i++;
    }
}


