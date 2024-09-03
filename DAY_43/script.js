// Sélection des éléments nécessaires dans le DOM
const ratings = document.querySelectorAll('.rating'); // Tous les éléments avec la classe 'rating'
const ratingsContainer = document.querySelector('.ratings-container'); // Conteneur des notes
const sendBtn = document.querySelector('#send'); // Bouton d'envoi
const panel = document.querySelector('#panel'); // Panneau pour afficher le feedback
let selectedRatings = 'Satisfied'; // Valeur par défaut de la note sélectionnée

// Écouteur d'événement pour gérer les clics sur le conteneur des notes
ratingsContainer.addEventListener('click', (e) => {
    // Vérifie si l'élément cliqué est une note
    const rating = e.target.closest('.rating');
    
    if (rating) { // Si une note valide a été cliquée
        removeActive(); // Retire la classe 'active' de toutes les notes
        rating.classList.add('active'); // Ajoute la classe 'active' à la note cliquée
        selectedRatings = rating.querySelector('small').innerHTML; // Récupère le texte de la note sélectionnée
    }
});

// Écouteur d'événement pour gérer le clic sur le bouton d'envoi
sendBtn.addEventListener('click', () => {
    // Met à jour le contenu du panneau avec le feedback et la note sélectionnée
    panel.innerHTML = `
        <i class='fas fa-heart'></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRatings}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

// Fonction pour retirer la classe 'active' de toutes les notes
function removeActive() {
    ratings.forEach(rating => {
        rating.classList.remove('active'); // Retire la classe 'active' de chaque note
    });
}
