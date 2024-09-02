// Récupération des éléments du DOM
const result = document.getElementById('result'); // Liste où les utilisateurs seront affichés
const filter = document.getElementById('filter'); // Champ de recherche pour filtrer les utilisateurs
const listItems = []; // Tableau pour stocker les éléments de la liste des utilisateurs

// Appel de la fonction pour récupérer les données
getDAta();

// Ajout d'un écouteur d'événement sur le champ de recherche
filter.addEventListener('input', (e) => filterData(e.target.value));

// Fonction asynchrone pour récupérer les données des utilisateurs
async function getDAta() {
    // Envoi de la requête à l'API pour obtenir 50 utilisateurs aléatoires
    const res = await fetch('https://randomuser.me/api?results=50');
    const { results } = await res.json(); // Extraction des résultats de la réponse JSON

    // Effacer les résultats précédents (non nécessaire ici car la liste est vide au départ)
    results.innerHTML = '';

    // Parcours de chaque utilisateur récupéré
    results.forEach(user => {
        const li = document.createElement('li'); // Création d'un nouvel élément de liste

        listItems.push(li); // Ajout de l'élément de liste au tableau listItems

        // Ajout du contenu HTML à l'élément de liste
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}"> <!-- Image de l'utilisateur -->
            <div class='user-info'> <!-- Conteneur pour les informations de l'utilisateur -->
                <h4>${user.name.first} ${user.name.last}</h4> <!-- Nom de l'utilisateur -->
                <p>${user.location.city}, ${user.location.country} </p> <!-- Ville et pays -->
            </div>
        `;

        result.appendChild(li); // Ajout de l'élément de liste à la liste affichée
    });
}

// Fonction pour filtrer les utilisateurs en fonction de la recherche
function filterData(searchTerm) {
    listItems.forEach(item => { // Parcours de chaque élément de la liste
        // Vérification si le texte de l'élément inclut le terme de recherche
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide'); // Affiche l'élément si le terme est trouvé
        } else {
            item.classList.add('hide'); // Cache l'élément si le terme n'est pas trouvé
        }
    });
}
