// Récupérer l'élément canvas par son ID
const canvas = document.getElementById('drawingCanvas');
// Obtenir le contexte de rendu 2D pour dessiner sur le canevas
const ctx = canvas.getContext('2d');

// Récupérer les éléments pour le sélecteur de couleur et de taille
const colorPicker = document.getElementById('colorPicker');
const sizePicker = document.getElementById('sizePicker');
// Récupérer le bouton pour effacer le canevas
const clearButton = document.getElementById('clearButton');

// Définir la largeur et la hauteur du canevas à 80% de la fenêtre
canvas.width = window.innerWidth * 0.6; // 60% de la largeur de la fenêtre
canvas.height = window.innerHeight * 0.6; // 60% de la hauteur de la fenêtre

// Variable pour suivre si l'utilisateur est en train de dessiner
let painting = false;

// Fonction pour commencer à dessiner lorsque l'utilisateur appuie sur la souris
function startPosition(e) {
    painting = true; // Mettre à jour l'état de dessin à vrai
    draw(e); // Appeler la fonction de dessin immédiatement
}

// Fonction pour arrêter de dessiner lorsque l'utilisateur relâche la souris
function endPosition() {
    painting = false; // Mettre à jour l'état de dessin à faux
    ctx.beginPath(); // Réinitialiser le chemin pour éviter de connecter les lignes
}

// Fonction pour dessiner sur le canevas
function draw(e) {
    if (!painting) return; // Si l'utilisateur n'est pas en train de dessiner, ne rien faire

    // Définir les propriétés de dessin
    ctx.lineWidth = sizePicker.value; // Épaisseur du trait à partir du sélecteur de taille
    ctx.lineCap = 'round'; // Arrondir les bords des lignes
    ctx.strokeStyle = colorPicker.value; // Couleur du trait à partir du sélecteur de couleur

    // Dessiner une ligne jusqu'à la position actuelle de la souris
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke(); // Appliquer le dessin
    ctx.beginPath(); // Commencer un nouveau chemin pour le prochain segment
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop); // Déplacer le point de départ
}

// Écouter les événements de la souris pour commencer et arrêter le dessin
canvas.addEventListener('mousedown', startPosition); // Démarrer le dessin
canvas.addEventListener('mouseup', endPosition); // Arrêter le dessin
canvas.addEventListener('mousemove', draw); // Dessiner pendant le mouvement de la souris

// Écouter le clic sur le bouton d'effacement pour nettoyer le canevas
clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer tout le contenu du canevas
});
