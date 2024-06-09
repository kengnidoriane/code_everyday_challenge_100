const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const body = document.querySelector('body');
let currentActive = 1;
const colors = ['url(images/lnzlo0.jpg)', 'url(images/nrk9w4.jpg)', 'url(images/gjz5je.jpg)', 'url(images/zygeko.jpg)']

next.addEventListener('click', () => {
    currentActive++
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    body.style.backgroundImage = colors[currentActive -1];
    console.log(currentActive)
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1){
        currentActive = 1
    }
    body.style.backgroundImage = colors[currentActive -1]
    update()
})


function update() {
    circles.forEach((circle, idx) =>{
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length  - 1) / (circles.length - 1) * 100 + '%';

    if(currentActive === 1) {
        prev.disabled = true;
    }
    else if(currentActive === circles.length){
        next.disabled = true;
    } else{
        prev.disabled = false;
        next.disabled = false;
    }
} 