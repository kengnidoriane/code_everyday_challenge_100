const progressLine = document.getElementById('progress-line');
const prev = document.getElementById('prev');

const next = document.getElementById('next');

const numbers = document.querySelectorAll('.number');

let currenActive = 1;

next.addEventListener('click', () => {
    currenActive++
    if(currenActive > numbers.length){
        currenActive = numbers.length;
    }
    console.log(currenActive)
    update()
})

prev.addEventListener('click', () => {
    currenActive--

    if(currenActive < 1){
        currenActive = 1
    }
    update()
})


function update() {
    numbers.forEach((number, idx) =>{
        if(idx < currenActive) {
            number.classList.add('active');
        } else {
            number.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');
    progressLine.style.width = (actives.length  - 1) / (numbers.length - 1) * 100 + '%';

    if(currenActive === 1) {
        prev.disabled = true;
    }
    else if(currenActive === numbers.length){
        next.disabled = true;
    } else{
        prev.disabled = false;
        next.disabled = false;
    }
}