let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cardsel")
console.log(messageEl)



function Startgame() {
isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    rendergame()
}

function rendergame() {
    cardsEl.textContent="Cards:"
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
if (sum <= 20) {
    message = "Do you want to draw a new card? "
    isAlive = true

} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! "
    hasBlackJack = true

} else {
    message = "You're out of the game! "
    isAlive = false

}messageEl.textContent = message
sumEl.textContent = "Sum: " + sum
}
function newcard(){
if(isAlive === true && hasBlackJack === false){


    console.log("Drawing a new card from the deck!")
    
    let card = getRandomCard()

    sum += card
    cards.push(card)
    rendergame()
}
}
function getRandomCard(){

let value=Math.floor(Math.random()*13+1)
if(value===1){
    return 11

}
else if(value>10){
    return 10
}
else{ 
       return value
}

}



