function Rolldice(){
     let noOfDice=document.getElementById("howmany").value
     let roll=document.getElementById("roll")
     let diceresult=document.getElementById("diceresult")
     let diceimage=document.getElementById("diceimage")
     let values =[]  
     let images=[]

     let audio = new Audio("dice-roll.mp3"); // Make sure the file exists
    audio.play();
    
     for(let i=0;i<noOfDice;i++){
        let value=Math.floor(Math.random()*6)+1
        values.push(value)
        images.push(`<img src="dice-six-faces-${value}.png" class="dice-img">`)
     }
     diceresult.textContent=`dice: ${values.join(",")}`
     diceimage.innerHTML=images.join("")
}