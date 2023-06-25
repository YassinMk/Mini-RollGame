let player1Turne=false;
let playerScore1=0;
let playerScore2=0 ; 
//create variables for DOM
const player1borad=document.getElementById("player1Scoreborad");
const player2borad=document.getElementById("player2Scoreborad");
const player1Dice=document.getElementById("player1Dice");
const player2Dice=document.getElementById("player2Dice");
const message=document.getElementById("message");
const resetBtn =  document.getElementById("resetBtn");
const rollBtn =document.getElementById("rollBtn");
console.log(rollBtn);
// create function 
function SwipDisplay(){
    rollBtn.style.display="none";
    resetBtn.style.display="block";
}

function showWinnerAnimation() {
    const emojiContainer = document.getElementById("emojiContainer");
    const hiddenElements = document.getElementsByClassName("hidden");
    for (let i = 0; i < 10; i++) {
        const emoji = document.createElement("img");
        emoji.src = "cow.png"; // Replace with your flying emoji image
        emoji.alt = "Flying Emoji";
        emoji.style.top = Math.random() * (window.innerHeight - 50) + "px";
        emoji.style.left = Math.random() * (window.innerWidth - 50) + "px";
        emojiContainer.appendChild(emoji);
    }
    // Iterate over the hidden elements collection and change the display property
    for (let i = 0; i < hiddenElements.length; i++) {
      hiddenElements[i].style.display = "block";
    }
}
  
rollBtn.addEventListener("click",()=>{
    const randomNumber=Math.floor(Math.random()*6)+1;
    console.log(randomNumber);
    if(player1Turne){
        playerScore1+=randomNumber;
        message.textContent="Player 2 Turn "
         //switch active classe
        player2Dice.classList.toggle("active");
        player1Dice.classList.toggle("active");
        //log out number
        player1Dice.textContent=randomNumber;
        //Score
        player1borad.textContent= playerScore1;      ;
        console.log("player 2 roll "+randomNumber);
        
          
    }
    else{
        playerScore2+=randomNumber;
        message.textContent="Player 1 Turn ";
        //switch active classe
        player2Dice.classList.toggle("active");
        player1Dice.classList.toggle("active");
        //log out number 
        player2Dice.textContent=randomNumber;
        //Score of player 
        player2borad.textContent=playerScore2;

        console.log("player 1 roll "+randomNumber)
        
    }
    if(playerScore1 >=20){
        message.textContent = "Player 1 win 🎉";
        SwipDisplay();
        showWinnerAnimation();
    }else if(playerScore2 >=20){
        message.textContent = "Player 2 win 🎉";
        SwipDisplay();
        showWinnerAnimation();
    }
    player1Turne=!player1Turne;
})
resetBtn.addEventListener("click", ()=>{
    location.reload();
})
