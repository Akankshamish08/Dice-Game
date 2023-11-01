const Score1 = document.querySelector("#score-0");
const Score2 = document.querySelector("#score-1");
const Dice =document.querySelector(".dice");
const RollDice=document.querySelector(".roll");
const CurrentScore1=document.getElementById("Current0"); 
const CurrentScore2=document.getElementById("Current1"); 
const Player1=document.querySelector(".player-1");
const Player2=document.querySelector(".player-2");
const Hold =document.querySelector(".hold");
const New=document.querySelector(".New");
Score1.textContent=0;
Score2.textContent=0;
Dice.classList.add("hidden");
let scores =[0,0] ;
let activePlayer=0;
let currentScore =0;
let playGame = true;
const switchPlayer = function(){
    document.getElementById(`Current${activePlayer}`).textContent=0;
    activePlayer= activePlayer===0 ?1:0;
    currentScore=0;
   
}
function RollingDice(){
    if(playGame){
    Dice.classList.remove("hidden");
    const dice =Math.floor(Math.random()*6)+1;
    console.log(dice);
    Dice.src=`dice-${dice}.png`;
    if(dice !== 1){
      currentScore+=dice;
    //   CurrentScore1.textContent=currentScore;
    document.getElementById(`Current${activePlayer}`).textContent=currentScore;
    }else{
       switchPlayer();
        // Player1.classList.toggle("player-active");
        // Player2.classList.toggle("player-active");
    }
}
};


RollDice.addEventListener("click",RollingDice);
function Holding (){
    if(playGame){
   
   scores[activePlayer]+= currentScore;
   
   document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];
    //  activePlayer= activePlayer===0 ?1:0;
    //  scores[activePlayer]=0;
   

   if(scores[activePlayer]>=20){
    playGame=false;
    alert(`player-${activePlayer} is winner`);
    Dice.classList.add("hidden");
     document.querySelector(`.player-${activePlayer}`).classList.add("winner");
   }else{
    switchPlayer();
   } 
}
};



Hold.addEventListener("click",Holding);
function Reset(){
    Score1.textContent=0;
    Score2.textContent=0;
    Dice.classList.add("hidden");
     scores =[0,0] ;
     activePlayer=0;
    currentScore =0;
     playGame = true;
}



New.addEventListener("click",Reset);