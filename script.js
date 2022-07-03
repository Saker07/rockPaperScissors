//START
const ROCK=0;
const PAPER=1;
const SCISSORS=2;
const RESULT=[0,1,2]; //lose, win, draw


let result, userChoice;
//take user choice in input
userChoice=prompt("Rock, paper or scissors?");
userChoice=userChoice.toLowerCase();
//play
result=play(userChoice)






//FUNCTIONS

function computerChoice(){
    //gives out random number either 0 1 or 2, 0 is rock 1 is paper 2 is scissors
    let random;
    let r;
    //choose random number from 0 to 0.98 so there are 99 possibilities which can cleanly be divided in 3
    for(random=0.99; random===0.99; random=Math.random()){};
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


//fun personal challenge
/*
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

*/