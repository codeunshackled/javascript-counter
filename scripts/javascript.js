let buttons = document.querySelectorAll('.counterBox > button');
let countBox = document.querySelector('.counter');
let counter = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.className.includes('add-count') ? counter += 1 : counter > 0 ? counter -= 1 : alert("try adding");
    countBox.innerHTML = counter;
  })
})




