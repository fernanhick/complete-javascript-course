'use strict';

/// selecting elements
const player0El = document.querySelector('.player--0')
const player1El = document.querySelector('.player--1')
const name0El = document.getElementById('name--0')
const name1El = document.getElementById('name--1')
const score0El = document.getElementById('score--0')
const score1El = document.getElementById('score--1')
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')
const diceEl = document.querySelector('.dice')

const scores = [0, 0]
let dice = 0
let currentScore = 0
let activePlayer = 0

btnRoll.addEventListener('click', function(){

    dice = Math.trunc(Math.random() * 6 ) +1
    console.log(dice)
    diceEl.src = `dice-${dice}.png`
        
    //Check for rolled 1
    if(dice !== 1){

        //add roled number to current score
        currentScore +=dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    }else{
        //change user if rolled 1
        currentScore = 0
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
        activePlayer = activePlayer === 0 ? 1 : 0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
    }
})