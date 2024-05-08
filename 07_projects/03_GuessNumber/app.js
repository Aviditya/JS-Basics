let randomNumber=parseInt(Math.random()*100+1);
// console.log(randomNumber)

// variables for all the things we'll need
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

// creating a paragraph element to addon later
const p = document.createElement('p');

let prevGuess=[];// An array to store previous guesses.
let numGuess=1; // To keep count of guess

let playGame = true;

// Logic to run the game
if (playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}


// Creating all methods required

function validateGuess(guess){
  //
  if(isNaN(guess)){
    alert('Please enter a valid number')
  } else if(guess < 1 || guess > 100){
    alert('Please enter a number between 1 to 100')
  } else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game is over. Random number was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
  
};

function checkGuess(guess){
  //
  if(guess===randomNumber){
    displayMessage(`You guessed it right`)
    endGame();
  }else if (guess < randomNumber){
    displayMessage(`Number is too low!`)
  }else if (guess > randomNumber){
    displayMessage(`Number is too High!`)
  }
};

function displayGuess(guess){
  //
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML=`${11 - numGuess}`;
};

function displayMessage(message){
  //
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
};

function endGame(){
  //
  userInput.value = '';
  userInput.setAttribute('disabled','')
  p.classList.add('button');
  p.innerHTML=`<h2 id="newGame">Start New game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
};

function newGame(){
  //
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    // reset var
    randomNumber=parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p)

    playgame=true;

  })
};
