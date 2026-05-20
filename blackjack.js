let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEml=document.getElementById("sum-el")
let cardsEl=document.getElementById("cardsel")
console.log(messageEl)
function Startgame() {
    cardsEl.textContent="Cards:"+firstCard+" "+secondCard
if (sum <= 20) {
    message = "Do you want to draw a new card? "
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! "
    hasBlackJack = true
} else {
    message = "You're out of the game! "
    isAlive = false

}messageEl.textContent = message
sumEml.textContent = "Sum: " + sum
}

function newcard(){
    console.log("Drawing a new card from the deck!")
    
    let card = 7

    sum += card
    
    Startgame()
}






