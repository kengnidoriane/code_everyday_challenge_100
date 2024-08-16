const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener('change',
    (e) => doTheTrick(e.target)
))

function doTheTrick(theClickedOne) {
    if(good.checked && cheap.checked && fast.checked){  //si tous les input sont coche(checked)
        if (good === theClickedOne) { //si le input coche est good on decoche le fast
            fast.checked = false
        }
        if (cheap === theClickedOne) { //si le input coche est cheap on decoche le good
            good.checked === false
        }
        if (fast === theClickedOne) { //si le input coche est fast on decoche le cheap
            cheap.checked = false
        }
    }
}
