const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');
const content = document.querySelector('.content');
const loading = document.getElementById('loading');

let load = 0;

let interval = setInterval(blurring, 30);

function blurring() {
    load++;

    if (load > 99) {
        clearInterval(interval);
        loading.style.display = 'none';
        content.style.display = 'block';
    }

    loadText.innerText = `Chargement ${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (number, inMin, inMax, outMin, outMax) => 
    (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
