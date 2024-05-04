# Project one
## Background color Changer

### Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


## My Solution 

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