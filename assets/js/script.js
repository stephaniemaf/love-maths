//wait for the dom to finish loading before running the game
//get the button elements and add the listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button")

    for(let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("you cloicked Submit")
            }
            else {
                let gameType = this.getAttribute("data-type");
                alert(`You Clicked ${gameType}`);
            }
        })
    }
})

function runGame(){

}

function checkAnswer(){
    
}

function calculateCorrectAnswer(){
    
}

function incrementScore(){
    
}

function incrementWrongAnswer(){
    
}

function displayAdditionQuestion(){
    
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}

function displayDivisionQuestion(){
    
}