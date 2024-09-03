// Sélectionne l'input range et l'élément qui affichera la valeur
const rangeInput = document.getElementById('rangeInput');
const valueDisplay = document.getElementById('valueDisplay');

// Met à jour la valeur affichée et sa position lorsque l'input change
rangeInput.addEventListener('input', () => {
    const value = rangeInput.value; // Récupère la valeur actuelle
    valueDisplay.textContent = value; // Met à jour le texte avec la valeur actuelle

    // Calcule la position du curseur pour déplacer l'affichage de la valeur
    const percent = (value - rangeInput.min) / (rangeInput.max - rangeInput.min);
    const offset = percent * (rangeInput.offsetWidth - 20); // Ajuste la position
    valueDisplay.style.left = `${offset + 10}px`; // Ajuste la position avec un décalage
});

