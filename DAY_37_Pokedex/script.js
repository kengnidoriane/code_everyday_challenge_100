// Récupère l'élément HTML avec l'ID 'poke-container' où les cartes Pokémon seront affichées
const poke_container = document.getElementById('poke-container');

// Définit le nombre total de Pokémon à récupérer
const pokemon_count = 150;

// Définit les couleurs associées à chaque type de Pokémon
const colors = {
    fire: '#fddfdf',
    grass: '#defde0', 
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4', 
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3', 
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5'
}

// Récupère les types principaux de Pokémon à partir des couleurs définies
const main_types = Object.keys(colors)

// Fonction asynchrone pour récupérer les Pokémon
const fetchPokemons = async () => {
    // Boucle pour récupérer chaque Pokémon par son ID
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i); // Attends que chaque Pokémon soit récupéré avant de continuer
    }
}

// Fonction asynchrone pour obtenir les données d'un Pokémon spécifique par son ID
const getPokemon = async (id) => {
    // URL de l'API pour récupérer les données du Pokémon
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    // Effectue une requête pour récupérer les données
    const res = await fetch(url);
    
    // Convertit la réponse en JSON
    const data = await res.json();
    
    // Crée une carte pour le Pokémon récupéré
    createPopkemonCard(data);
}

// Fonction pour créer une carte de Pokémon
const createPopkemonCard = (pokemon) => {
    // Crée un nouvel élément div pour le Pokémon
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon'); // Ajoute une classe CSS pour le style

    // Formate le nom du Pokémon (première lettre en majuscule)
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    
    // Formate l'ID du Pokémon pour qu'il ait toujours 3 chiffres
    const id = pokemon.id.toString().padStart(3, '0');

    // Récupère les types du Pokémon
    const poke_types = pokemon.types.map(type => type.type.name);

    // Trouve le type principal du Pokémon
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    
    // Récupère la couleur associée à ce type
    const color = colors[type];

    // Définit la couleur de fond de la carte du Pokémon
    pokemonEl.style.backgroundColor = color;

    // Crée le HTML pour la carte du Pokémon
    const pokemonInnerHTML = `
        <div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="pokemon ${pokemon.id}">
        </div>
        <div class="info">
            <span class="number">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>
    `;

    // Insère le HTML créé dans l'élément div du Pokémon
    pokemonEl.innerHTML = pokemonInnerHTML;

    // Ajoute la carte du Pokémon au conteneur principal
    poke_container.appendChild(pokemonEl);
}

// Appelle la fonction pour démarrer la récupération des Pokémon
fetchPokemons();
