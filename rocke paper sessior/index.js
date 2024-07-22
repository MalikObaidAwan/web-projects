const choices = ["👊","✋","✌"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("playerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playgame( playerchoices){
    const computerchoice = choices[Math.floor(Math.random()*3)];
   let result = "";
   if(playerchoices==computerchoice){
    result = "it's a tie";
   }
   else{
    switch(playerchoices){
        case "👊":
   result= (computerchoice=="✌")? "you win":"you lose";
   break;
   case "✋":
    result= (computerchoice=="👊")? "you win":"you lose";
    break;
    case "✌":
        result= (computerchoice=="✋")? "you win":"you lose";
        break;


    }

}
playerDisplay.textContent=  `PLAYER:${playerchoices}`;
computerDisplay.textContent=  `computer:${computerchoice}`;
resultDisplay.textContent =result;


}                                                                               