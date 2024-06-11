// Variables
let choices = ["Rock", "Paper" , "Scissors"];
let ComputerChoice;
let HumanChoice;
let HumanScore = 0 ;
let ComputerScore = 0 ;
let rounds = 0;
const maxScore = 3;
let isTyping = 0;



// playGame(); //let's play

createButtons();
typeText("Please choose an option")

// playRound();

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if(isTyping == 0){
        HumanChoice = choices[button.id]
        playRound();
        // wait(1000)
        // document.querySelector(".commentText").textContent = "Please choose an option"
        if(ComputerScore <maxScore && HumanScore <maxScore ){
            typeText("Please choose an option")
        }
    }
   
    
  });
});





//function to create buttons according to choices
function createButtons(){
    for(element in choices){
        const container = document.querySelector(".buttons");
        const button = document.createElement("button");
        buttonText = choices[element];
        
        // Button formatting
        button.textContent = buttonText;
        button.style.borderRadius = "5px";
        // button.style.border = "solid";
        button.style.padding = "5px";
        // button.style.borderColor = "#AAA297"
        // button.style.borderWidth = "4px"
        button.style.width = "90px"
        button.style.textAlign = "center"
        button.style.boxShadow = "0px 0px 5px #AAA297"
        button.style.fontSize = "22px"
        button.id = element
        button.style.fontFamily = "VT323"
        button.style.border = "none"
        button.style.cursor = "pointer"
        
        


        container.appendChild(button);
    }
}

//function to write text character by character
async function typeText(text){
    let text_to_display = "";
    isTyping = 1;
    if(rounds > 0) {
        await sleep(2000)
    }
    for(i = 0 ; i< text.length ; i++){
        
        text_to_display += text.substr(i,1)
        document.querySelector(".commentText").textContent = text_to_display; 
       await sleep(50);
        
    }
    isTyping = 0;
}





//function to play one round
function playRound() {
    rounds++
    ComputerChoice = getComputerChoice();
    
    console.log("Computer"+ComputerChoice)
    ScoreBoard();

    
    
    
}

// function to play one game
function playGame() {
    for(i = 0 ; i < rounds ; i++){
        playRound();
        console.log(i)
        console.log(HumanScore, ComputerScore)
    }
}


// function randomly generates a choice for the computer 
function getComputerChoice() {
    let random_n = 3 * Math.random();
    random_n = Math.floor(random_n);
    console.log(random_n)


    return(choices[random_n]);
}

// function prompts human to input value
function getHumanChoice(){
    buttonClick = 3;
    typeText("Please select a choice")

}

//function to validate human's choice
function validateHumanChoice(choice){
    if (choices.includes(HumanChoice)) {
        return(true);
    }
}

//function to check winner and increment score
function CheckWinner(computer_choice,human_choice){
    

    if(computer_choice == human_choice){
        return("Tie ! ")
    }
    else if(computer_choice == "Rock"){
        if(human_choice == "Paper"){
            HumanScore++;
            return("Human wins this round !")
        }
        else{
            ComputerScore++;
            return("Computer wins this round !")
        }
    }
    else if(computer_choice == "Paper"){
        if(human_choice == "Scissors"){
            HumanScore++;
            return("Human wins this round !")
        }
        else{
            ComputerScore++;
            return("Computer wins this round !")
        }
    }
    else if(computer_choice == "Scissors"){
        if(human_choice == "Rock"){
            HumanScore++;
            return("Human wins this round !")
        }
        else{
            ComputerScore++;
            return("Computer wins this round !")
        }
    }

    
}

//function to print what happens in the game
function ScoreBoard(){
    
    // typeText("Human chooses "+ HumanChoice);
    
    // typeText("Computer chooses " + ComputerChoice);
    
    
    
    

    
    if (ComputerScore < maxScore && HumanScore < maxScore) {
        let winner = CheckWinner(ComputerChoice,HumanChoice);
        document.querySelector(".commentText").textContent = winner;
        console.log(winner)
        document.querySelector(".scoreHuman_score").textContent = HumanScore
        document.querySelector(".scoreComputer_score").textContent = ComputerScore

        if (ComputerScore >=maxScore || HumanScore >=maxScore ){

            document.querySelector(".scoreHuman_score").textContent = HumanScore
            document.querySelector(".scoreComputer_score").textContent = ComputerScore
            
            if (ComputerScore > HumanScore){
                document.querySelector(".commentText").textContent = "GAME OVER - COMPUTER WINS !"
            }
            else{
                document.querySelector(".commentText").textContent = "GAME OVER - PLAYER WINS !"
            }
    
            
        }
    }
    
    
    
    
    
}

async function wait(ms) {
    await sleep(ms)
    console.log("wait")
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }