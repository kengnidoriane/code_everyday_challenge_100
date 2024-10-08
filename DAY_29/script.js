const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

 loveMe.addEventListener('click', (e) => {
    if (clickTime === 0) {
        clickTime = new Date().getTime()
        console.log(clickTime);
    }else{
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
 })

 const createHeart = (e) =>{
    // creation du coeur a afficher au click 

    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    // e.clientX et e.clientY sont utiliser pour calculer les coordonnes de loveMe(photos) sur toute la page
    const x = e.clientX
    const y = e.clientY
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInside = x - leftOffset
    const yInside = y - topOffset
     
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked;

    // la fonction setTimeout est utilise pour mettre le temps d'apparition du coeur au click
    setTimeout(() => {
        heart.remove()
    }, 1000);
 }