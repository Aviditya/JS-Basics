# Project Set one
## Background color Changer

### Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


## My Solution - Color Changer

```javascript
const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

buttons.forEach(function(button){
  button.addEventListener('click',function(e){
    body.style.backgroundColor=e.target.id;
    console.log(e)
  })
});

// purple.style.color='red';
buttons.forEach(function(button){
  color=button.getAttribute('id')
  button.style.borderRadius='15px'
  button.style.backgroundColor=color;
})

```

## BMI Calc
```js
const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit',function(e){
  //e for event
  e.preventDefault();
  // get the values of the height and weight
  // why here coz after submit not at page load
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  // perform some checks via if-else and display the result.
  if(height==''||height<0||isNaN(height)){
    results.innerHTML=`${height} Please enter valid height`;
  } else if(weight==''||weight<0||isNaN(weight)){
    results.innerHTML=`${weight} Please enter valid height`;
  }else{
    // calulate and display the result ie BMI
    
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //toFixed for 2nd decimal
    // results.innerHTML=`<span>${bmi}<span>`;
    // assignment to display if the person is Under/Normal/Overweight
    if(bmi<18.6){
    results.innerHTML=`<span>Under Weight : ${bmi}<span>`;
    } else if(bmi>24.9){
    results.innerHTML=`<span>OverWeight : ${bmi}<span>`;
    }else{
    results.innerHTML=`<span>Normal Range : ${bmi}<span>`;
    }
  }

})
```

## Clock
```js
const clock =document.getElementById('clock')

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
},1000)
```

## Guess Number Game 
```javascript
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
```