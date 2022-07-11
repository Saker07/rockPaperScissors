/*
Simple game of rock paper scissors, lacks an ui for the moment.
Need to validate the user input and retry if it is wrong so you always have 5 overall rounds, otherwise one can simply win once and not input anything 4 times and win.
*/


const RESULT=[0,1,2]; //lose, win, draw               ONLY NEEDED FOR PERSONAL CHALLENGE VERSION
//START
const ROCK=0;
const PAPER=1;
const SCISSORS=2;

let userScore, computerScore;
let buttons;
userScore = 0;
computerScore = 0;
buttons = document.querySelectorAll(`.rock,.paper,.scissors`)
buttons.forEach(button => button.addEventListener("click", userChoice))






//FUNCTIONS

function computerChoice(){
    //outputs rock, paper or scissors, randomly
    //generates a random number either 0 1 or 2, 0 is rock 1 is paper 2 is scissors for this script so we convert it to string at the end
    let random;
    let r;
    //choose random number from 0 to 0.98 so there are 99 possibilities which can cleanly be divided in 3
    for(random=0.99; random>=0.99; random=Math.random()){};
    r=convertToIntChoice(random);
    r=convertToStringChoice(r); //comment out this part to use the personal challenge version !!!!!
    return r;
}

function convertToStringChoice(numb){
    //converts a number given (0,1,2) to the corresponding string choice (rock, paper, scissors)
    let choice;
    switch (numb){
        case ROCK:
            choice="rock";
            break;
        case PAPER:
            choice="paper";
            break;
        case SCISSORS:
            choice="scissors";
            break;
    }
    return choice;
}

function convertToIntChoice(numb){
    //takes the random decimal number <0.99 and makes it a int either 0 1 or 2
    let r;
    numb=numb*100;
    r = numb/33;
    r=Math.floor(r);
    return r;
}

function playRound(user, computer){
    //input user and computer string choice, outputs result of single round 0->lose 1->win 2->draw
    let r;
    switch (user){
        case "rock":
            r=computer==="rock"? 2 : computer==="paper"? 0 : 1;
            break;
        case "paper":
            r=computer==="rock"? 1 : computer==="paper"? 2 : 0;
            break;
        case "scissors":
            r=computer==="rock"? 0 : computer==="paper"? 1 : 2;
            break;
    }
    return r;
}

function userChoice(ev){
    let user, computer;
    let score;
    let res;
    user = ev.srcElement.classList.item(0);
    computer= computerChoice();
    res=playRound(user, computer);
    if (res===0){
        computerScore++;
        score = document.querySelector(".computerScore");
        score.textContent = computerScore;
    }
    else if (res===1){
        userScore++;
        score = document.querySelector(".userScore");
        score.textContent = userScore;
    }
    displayRoundResult(res);
    if((userScore === 5) || (computerScore === 5)){
        resetMatch();
    }
    return;
}

function resetMatch(){
    //if userscore===5 and computerscore ===5 ALERT ERROR WHAT HJAPPENED?
    //else if userScore ===5 -> remove img from game window, put background green and big text with YOU WON for 2sec?
    //else if userScore ===5 -> remove img from game window, put background green and big text with YOU LOST for 2sec?
}

function displayRoundResult(result){
    //change ".winnerAnnouncer p" to WIN! (res===1) LOSE! (res===0) DRAW! (RES===2) depending on res for 1sec?
    let announcer;
    announcer = document.querySelector(".winnerAnnouncer p");
    if(result===2){
        announcer.textContent = "DRAW!";
    } else if(result===1){
        announcer.textContent = "WIN!";
    } else if(result===0){
        announcer.textContent = "LOSE!";
    }
}



//not used functions

function playMatch(){
    //plays 5 matche against the computer, everytime it asks the user for input (through userChoice) and generates a choice for the computer (through computerChoice) keeps count of wins, losses and draws and prints the result.
    let i;
    let wins, losses, draws;
    let winner, loser;
    wins = 0;
    losses = 0;
    draws = 0;
    for(i=0;i<5;i++){
        computer=computerChoice();
        user=userChoice();
        r=playRound(user, computer);
        if (r===0) {
            losses++;
        }else if(r===1){
            wins++;
        }else if(r===2){
            draws++;
        }else{
            alert("ERROR OUTCOME NOT VALID");
        }
    }
    if (losses != wins){
        winner = wins > losses? "user" : "computer";
        console.log(`The winner of the match is: ${winner}!
        The result of the match is:
            wins:${wins};
            losses:${losses};
            draws:${draws};`)
    }else {
        console.log(`It's a draw!
        The result of the match is:
            wins:${wins};
            losses:${losses};
            draws:${draws};`);
    }
}

//fun personal challenge

function play(user){
    //input the user's string choice, outputs the result 0=lose 1=win 2=draw
    let computer, r;
    computer=computerChoice();
            console.log(`Computer choice: ${convertToStringChoice(computer)}`)
            console.log(`User Choice: ${user}`);
    user= user==="rock" ? 2 : user==="paper"? 1 : 0;      //converts text input to the int choice, these numbers are reversed to the computer ones, so a simple addition% will give the result
    r=computer+user; //here happens the match
    r=r%3;          //here we make it go back to it's index "domain"
    return RESULT[r];
    
}
//0 is the lose state, 1 the win state, 2 the draw state
//if we assign a state as default to the computer choices, it means we can modify the state because the computer choice is already locked to:
//0 to rock, 1 to paper, 2 to scissors
//and it just so happens that every userChoice needs the same amount of "steps" to go from current state to correct state
//rock needs 2 to go from the rock to draw, from paper to lose and from scissor to win
//paper needs 1
//scissors is the default so it already loses/wins/draws

//another option is just using a bunch of nested conditional statements or switch cases
