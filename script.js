// Variables
var resolution = 16;
const squareFill = 0.8;


createSquares()

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
  
   
    
  });
});





//function to create squares according to resolution
function createSquares(){
    
    const container = document.querySelector(".squaresContainer");

    

    //Get Screensize and remove "px" from the end
    var screenSize = getComputedStyle(container).width
    screenSize = Number(screenSize.substring(0,screenSize.length-2))

    // Sets square size based one resolution and container width
    eachSquare_grossWidth = screenSize/resolution
    eachSquare_netWidth = squareFill * eachSquare_grossWidth
    const border =  1;
    eachSquare_padding = 0.5 * (eachSquare_grossWidth - eachSquare_netWidth) - border
    
    for(i = 0 ; i < resolution*resolution ; i++){
        
        const square = document.createElement("div");
        
        square.id = i
        
        // square formatting
        square.style.width = eachSquare_netWidth +"px"
        square.style.height = eachSquare_netWidth +"px"
        square.style.margin = eachSquare_padding +"px"
        console.log(screenSize/resolution )
        // console.log(screenSize/resolution)
        square.style.borderColor = "#AAAAAA"
        square.style.border = "solid"
        square.style.borderWidth = border + "px"

        
        


        container.appendChild(square);
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


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }