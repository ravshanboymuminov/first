let messageEl = document.getElementById("message-el");
//let sumlEL=document.getElementById("sum");
let sumlEL = document.querySelector("#sum");
let cardEL = document.getElementById("card");

var cardss = [];
let alive = true;
let message = " ";
let sum;


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
        alive = true
        message = "do you want to draw a new card?";
    } else if (sum === 21) {
        alive = true
        cardEL.textContent = "CARDS : " + a + " " + b;
        message ="you got blackjack ";
    } else if(sum>21){
        cardEL.textContent = "CARDS : " + a + " " + b;
        message = "you are out of the game";
        alive = false
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



function NEWCARD() {
    if(alive===true){
        let  c= getrandomcars();
        cardEL.textContent = "CARDS : ";
        cardss.push(c);
        sum = sum+c;
        rendergame();
        console.log(cardss);
    }


}