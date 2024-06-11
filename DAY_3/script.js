const container = document.querySelector('.container');
const open = document.querySelector('#open');
const close = document.querySelector('#close');
console.log(close);
open.addEventListener('click', () => {
    container.classList.add('show-nav');
}); 
close.addEventListener('click', () => {
    container.classList.remove('show-nav');
}); 
