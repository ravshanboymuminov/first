let myLeads = []
let inputEl = document.getElementById("input-el")

let inputBtn = document.getElementById("input-btn")
const ulil = document.getElementById("ul-el");
const deleteBtn =document.getElementById("delete_btn");
let leadsFromlocalStorage = JSON.parse(localStorage.getItem("myleads"))




if (leadsFromlocalStorage) {
    myLeads = leadsFromlocalStorage
    renderlist()
}

deleteBtn.addEventListener("dblclick",function(){

    localStorage.clear()
    myLeads=[]
    renderlist()
})

/*inputBtn.addEventListener("click",function() {
    console.log("botton clicked")
    myLeads.push("www.wesome.com")
    console.log(inputEl);
});*/
function getel() {
    console.log("botton clicked")
    myLeads.push(inputEl.value)

    inputEl.value = " "
    localStorage.setItem("leads", JSON.stringify(myLeads))

    /*const li=document.createElement("li")
    li.textContent=myLeads[i]
    ulil.append(li)*/
    renderlist()
    console.log(localStorage.getItem("leads"))
}
let n = 0;
let listitems = ""

function renderlist() {
    while (n < myLeads.length) {
        // ulil.innerHTML += "<li> <a href='#' target='_blank'>" + myLeads[n] + "  </a></li> "
        listitems += `
        <li> 
       <a href='${myLeads[n]}' target='_blank'>
       ${myLeads[n]}
       </a>
        </li> 
       `
        n++
    };
    ulil.innerHTML = listitems;
}