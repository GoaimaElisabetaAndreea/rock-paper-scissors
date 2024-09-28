function getUserInput()
{
    let humanChoice
    let ok = false;
    while(ok == false)
    {
        humanChoice = prompt("What are you picking? Rock, paper or scissors?").toLowerCase();
        if(!(humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors"))
            {
                console.log("Sorry, your choice is wrong. Please input rock, paper or scissors");
            }
            else
            {
                ok = true;
            }
    } 
    return humanChoice;
}

function getComputerChoice()
{
    let randomInt = Math.floor(Math.random() * 3) + 1;
    if(randomInt == 1)
    {
        return "rock";
    }
    else if(randomInt == 2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getWinner(humanChoice, computerChoice)
{
    const outcomes = {
        "rock": {"rock": "Tie", "paper":"Computer wins", "scissors": "Human wins"},
        "paper": {"rock": "Human wins", "paper": "Tie", "scissors": "Computer wins"},
        "scissors": {"rock": "Computer Wins", "paper": "Human Wins", "scissors": "Tie"}
    };

    return outcomes[humanChoice][computerChoice];
}

function getWinnerBasedOnScore(scoreHuman, scoreComputer)
{
    if(scoreHuman > scoreComputer)
    {
        return "You won with a score of " + scoreHuman + " at " + scoreComputer;
    }
    else if(scoreHuman < scoreComputer)
    {
        return "You lose with a score of " + scoreComputer + " at " + scoreHuman;
    }
    else 
    {
        return "It is a tie. Score: " + scoreHuman + "-" + scoreComputer;
    }
}

function play()
{
    let i = 0;
    let scoreComputer = 0;
    let scoreHuman = 0;
    while(i != 5)
    {
        let humanChoice = getUserInput();
        let computerChoice = getComputerChoice();
        let winner = getWinner(humanChoice, computerChoice);
        if(winner === "Tie")
        {
            console.log("It's a tie !");
        }
        else if(winner === "Human wins")
        {
            console.log("Congrats, you won! " + humanChoice + " beats " + computerChoice);
            scoreHuman++;
        }
        else{
            console.log("You losed, computer won. " + humanChoice + " beats " + computerChoice);
            scoreComputer++;
        }
        i++;
    }
    console.log(getWinnerBasedOnScore(scoreHuman, scoreComputer))
}

play();
