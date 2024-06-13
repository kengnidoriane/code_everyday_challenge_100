const labels = document.querySelectorAll('.form-control label');

console.log(labels);
labels.forEach(label => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 10}ms">${letter}</span>`)
        .join('')
})