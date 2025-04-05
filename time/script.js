let countlabel=document.getElementById("countlabel")
let count=0
let incbutt=document.getElementById("inc")
let decbutt=document.getElementById("dec")
let resbutt=document.getElementById("res")


incbutt.onclick=function() {
    count++;
    countlabel.textContent=count;

    
}

decbutt.onclick=function() {
    count--;
    countlabel.textContent=count;

    
}

resbutt.onclick=function() {
    count=0;
    countlabel.textContent=count;

    
}
