let messageEl = document.getElementById("message-el");
//let sumlEL=document.getElementById("sum");
let sumlEL = document.querySelector("#sum");
let cardEL = document.getElementById("card");
let sum=0;

let message = " ";
let cardss = [];
let alive = true;
let hasblackjack=false;



function getrandomcars() {
    let randomnumber = Math.floor(Math.random() * 13) + 1;

    if (randomnumber > 10) {
        return 10;

    } else if (randomnumber === 1) {
        return 11
    } else {
        return randomnumber;
    }

};





function rendergame() {
    
    cardEL.textContent = "CARDS :";
    for (i = 0; i < cardss.length; i++) {
        cardEL.textContent += cardss[i] + " ";
    };
    sumlEL.textContent = "Sum : " + sum;
    if (sum <= 20) {
      
        message = "do you want to draw a new card?";
      
    } else if (sum === 21) {
        
       
        message = "you got blackjack ";
        hasblackjack=true;

    } else {
       
        message = "you are out of the game";
        alive = false;
    };
    messageEl.textContent = message;
    
};

function startgame() {

    let a = getrandomcars();
    let b = getrandomcars();
    cardss = [a, b];
    sum = a + b;
    rendergame();
}



function newCard(){
    if (alive === true && hasblackjack===false) {
        let c = getrandomcars();

        cardss.push(c);
        sum = sum + c;
        rendergame();
        console.log(cardss);
    } 


}