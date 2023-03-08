//document.getElementById("count-el").innerText=5;
let countEL = document.getElementById("count-el");
let counter = 0;

function increment() {
    console.log("clicked");
    counter = counter + 1;
    countEL.innerText = counter;
    console.log(counter);
};
let saveel=document.getElementById("save-el"); 
function save() {
let contrStr=counter+" - ";
saveel.textContent+=contrStr;
countEL.innerText=0;
    counter=0;
};


