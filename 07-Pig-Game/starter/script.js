'use strict';

/// selecting elements
const player0El = document.getElementById('player--0')
const player1El = document.getElementById('player--1')
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

let dice = 0

btnRoll.addEventListener('click', function(){

    dice = Math.trunc(Math.random() * 6 ) +1
    console.log(dice)
    diceEl.src = `dice-${dice}.png`
        
    
    if(dice !== 1){
        currentScore +=dice
        
    }else{

    }
})