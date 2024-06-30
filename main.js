// 0: rock      roca
// 1: paper     papel
// 2: scissors  tijeras
// en chile se dice "cachipun"

// Specifications
// [x] Create 3 buttons, one for each selection
// [x] Add event listener that calls your playRound() function
// [x] Add a div for displaying the result

const body = document.querySelector("body");

let yourScore = 0;
let cpuScore = 0;
let yourStatus = '';
let cpuStatus = '';

const yourScoreDiv = document.createElement("div");
yourScoreDiv.textContent = `Your score: ${yourScore} ${yourStatus}`
yourScoreDiv.setAttribute("id", "yourScore");

const cpuScoreDiv = document.createElement("div");
cpuScoreDiv.textContent = `CPU score: ${cpuScore} ${cpuStatus}`
cpuScoreDiv.setAttribute("id", "cpuScore");

body.appendChild(yourScoreDiv);
body.appendChild(cpuScoreDiv);

let choice = '';

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.id);
        checkScore(yourScore, cpuScore);
    });
});

const playRound = (yourChoice) => {
    const cpuChoice = () => {
        let option = Math.floor(Math.random() * (3-1 + 1) + 1);
        switch (option) {
            case 1: 
                return "rock";
            case 2: 
                return "paper";
            case 3:
                return "scissors";
        }
    }

    switch (getWinner(yourChoice, cpuChoice)) {
        case 0: 
            yourStatus = "Tie!";
            cpuStatus = "Tie!";
            break;
        case 1:
            yourScore++;
            yourStatus = "Winner!";
            cpuStatus = "Loser :(";
            break;
        case -1:
            cpuScore++;
            cpuStatus = "Winner!";
            yourStatus = "Loser :(";
            break;
    }

    yourScoreDiv.textContent = `Your score: ${yourScore} ${yourStatus}`
    cpuScoreDiv.textContent = `CPU score: ${cpuScore} ${cpuStatus}`
}


const getWinner = ((yourChoice, cpuChoice) => {
    switch (yourChoice) {
        case "rock":
            switch (cpuChoice()) {
                case "rock":
                    return 0;
                case "paper":
                    return -1;
                case "scissors":
                    return 1;
            }
        case "paper":
            switch (cpuChoice()) {
                case "rock":
                    return 1;
                case "paper":
                    return 0
                case "scissors":
                    return -1;
            }

        case "scissors":
            switch (cpuChoice()) {
                case "rock":
                    return -1;
                case "paper":
                    return 1;
                case "scissors":
                    return 0;
            }
        default:
            return;
    }
});



const checkScore = (yourScore, cpuScore) => {
    if (yourScore === 5) { 
        buttons.forEach((button) => {
            button.remove();
        });
        const winner = document.createElement("h2");
        winner.textContent = "You win!";
        body.appendChild(winner);
    }
    if (cpuScore === 5) {
        buttons.forEach((button) => {
            button.remove();
        });
        const winner = document.createElement("h2");
        winner.textContent = "CPU wins!";
        body.appendChild(winner);
    }
}
