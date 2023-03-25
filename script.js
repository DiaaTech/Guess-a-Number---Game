'use strict'

/// Variables
let input = document.querySelector('.input')
let submitBtn = document.querySelector('.button')
let result = document.querySelector('.result')
let restart = document.querySelector('.restart')

let guess = Math.floor(Math.random() * 10) + 1

// this is game logic function
const checkGame = function () {
  // 1. Take value of input field
  let userValue = Number(input.value)

  // 2. Check the value against my number
  // 3. If correct, print congratulations
  // 4. if wrong, print error message

  if (userValue === guess) {
    result.innerHTML = 'Congratulations, You have Won 🎉'
  } else {
    result.innerHTML = 'Wrong, Try Again!'
  }
}

// function for restart Game
const restartGame = function () {
  input.value = ''
  result.innerHTML = 'Result'
  guess = Math.floor(Math.random() * 10) + 1
}

// register my event listerner
submitBtn.addEventListener('click', checkGame)
restart.addEventListener('click', restartGame)
