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