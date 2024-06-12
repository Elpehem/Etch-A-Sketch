// Variables
var resolution = 16;
const squareFill = 1
var mouseIsDown;

setup();



function setup() {
    createSquares();
    document.querySelector(".resolutionSelect").textContent = "RES " + resolution ; 
    createEventListeners();
}

function createEventListeners() {
    addEventListener("mousedown", () => { mouseIsDown = 1 });
    addEventListener("mouseup", () => { mouseIsDown = 0 });
    createEventListenerSquares();
    createEventListenerClear();
    createEventListenerResolutionSelect();
    createEventListenerSetResolution();
}



function createEventListenerSquares(){
// buttons is a node list. It looks and acts much like an array.
const squares = document.querySelectorAll(".square");

// we use the .forEach method to iterate through each button
squares.forEach((square) => {
  // and for each one we add a 'click' listener
  square.addEventListener("mouseover", () => {
    

    if(mouseIsDown == 1 ){
        square.style.backgroundColor = "#4AF626"
    }

  });
  square.addEventListener("mousedown", () => {
    square.style.backgroundColor = "#4AF626"
    
  });
});
}


function createEventListenerClear() {
    const clear = document.querySelector(".clear");
    clear.addEventListener("click", () => {
        const squares = document.querySelectorAll(".square");
        buttonClickAnimation(clear)
    
        squares.forEach((square) => {
            square.style.backgroundColor = ""
            
          });
        
    })
}


function createEventListenerResolutionSelect(){
    const resolutionSelect = document.querySelector(".resolutionSelect");
    resolutionSelect.addEventListener("mousewheel" , getDeltaY)
    
    function getDeltaY(e) {
        if(e.deltaY > 0 && resolution > 1 ){
            resolution--
            console.log(resolution)
        }
    
        else if (e.deltaY < 0 && resolution < 100){
            resolution++
            
        }
        document.querySelector(".resolutionSelect").textContent = "RES " + resolution
    }
}


function createEventListenerSetResolution(){
    //Add event listener for resolution set button
    const setResolution = document.querySelector(".setResolution");

    setResolution.addEventListener("click", repopGrid)
}


function repopGrid() {
    const setResolution = document.querySelector(".setResolution");
    buttonClickAnimation(setResolution)
    const container = document.querySelector(".squaresContainer");
    container.innerHTML = ""; //Clears squares
    createSquares();
    createEventListenerSquares();
}


async function buttonClickAnimation(button){
    button.style.boxShadow = "inset 0px 0px 5px #000000"
    await sleep(300)
    button.style.boxShadow = "0px 0px 5px #000000"
}






//function to create squares according to resolution
function createSquares(){
    
    const container = document.querySelector(".squaresContainer");

    

    //Get Screensize and remove "px" from the end
    var screenSize = getComputedStyle(container).width
    screenSize = Number(screenSize.substring(0,screenSize.length-2))

    // Sets square size based one resolution and container width
    const border =  1 * 0.8;
    eachSquare_grossWidth = screenSize/resolution
    eachSquare_netWidth = squareFill * eachSquare_grossWidth
    eachSquare_margin = 0.5 * (eachSquare_grossWidth - eachSquare_netWidth)
    
    
    for(i = 0 ; i < resolution*resolution ; i++){
        
        const square = document.createElement("div");
        
        square.id = i
        
        // square formatting
        square.style.width = eachSquare_netWidth +"px"
        square.style.height = eachSquare_netWidth +"px"
        square.style.margin = eachSquare_margin + "px"
        square.className = "square"
        // square.style.borderColor = "#4AF626"
        // square.style.borderStyle = "solid"
        // square.style.borderWidth = border + "px"
        // square.style.backgroundColor = "#4AF626"
        square.style.boxShadow = "0px 0px 1px #17b204"
        square.draggable = false
        
        

        
        


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