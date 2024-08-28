const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');
const text = 'we love Programming!';
let idx = 1;
let speed = 300 / speedEl.value

writeText()

function writeText() {
    // inserer le text dans l'element h1 et le faire apparaitre de facon graduelle
    textEl.innerText = text.slice(0, idx)

    idx++

    if (idx > text.length) {
        idx = 1
    }
    
    setTimeout(() => {
        writeText()
    }, speed);
}

// evenement pour augmenter ou diminuer la vitesse d'apparition du text

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)