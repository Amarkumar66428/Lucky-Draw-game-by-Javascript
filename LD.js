var prompt = require('prompt-sync')();

console.log("======================={   Welcome To Lucky Draw  }=========================");
prompt("Press enter to generate your number ");

function getUserNumber() {
  return Math.floor(Math.random() * 10);
  }

const usernumber = getUserNumber();
console.log("Your generated number is : " + usernumber);

 prompt("Press enter to start");

 
 for(var i=1;i<=2;i++){

  function getLuckyNumber() {
  return Math.floor(Math.random() * 10);

   }

   var luckyNum = getLuckyNumber();
 
   console.log("The lucky number is : " + luckyNum);


   if (luckyNum==usernumber) {
  
  console.log("======================={  Congrats! You won  }================================");
  break;
}  
else{ 
 
  console.log("======================={  Sorry! bad luck   }=================================");  
}
  if(i==1){
    prompt("Press enter to start again");
  }
}
console.log("Game finished!");