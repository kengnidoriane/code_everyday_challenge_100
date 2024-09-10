// Récupération des éléments du DOM
const form = document.getElementById('form'); // Formulaire pour ajouter des todos
const input = document.getElementById('input'); // Champ de saisie pour le texte du todo
const todosUl = document.getElementById('todos'); // Liste non ordonnée pour afficher les todos

// Chargement des todos depuis le localStorage
const todos = JSON.parse(localStorage.getItem('todos')) || []; // Récupère les todos ou initialise un tableau vide

// Si des todos existent dans le localStorage, on les ajoute à la liste
if (todos.length > 0) {
  todos.forEach(todo => {
    addTodo(todo); // Ajoute chaque todo à la liste
  });
}

// Écouteur d'événements pour le formulaire lors de la soumission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Empêche le rechargement de la page
  addTodo(); // Appelle la fonction pour ajouter un nouveau todo
});

// Fonction pour ajouter un todo
function addTodo(todo) {
  let todoText = input.value; // Récupère le texte du champ de saisie

  // Si un todo est passé en argument (lors du chargement), on utilise son texte
  if (todo) {
    todoText = todo.text;
  }

  // Vérifie si le texte du todo n'est pas vide
  if (todoText) {
    const todoEl = document.createElement('li'); // Crée un nouvel élément de liste

    // Si le todo est marqué comme complété, ajoute la classe 'completed'
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    // Définit le texte de l'élément de liste
    todoEl.innerText = todoText;

    // Écouteur d'événements pour le clic sur le todo
    todoEl.addEventListener('click', () =>  {
      todoEl.classList.toggle('completed'); // Bascule la classe 'completed'
      updateLS(); // Met à jour le localStorage
    });

    // Écouteur d'événements pour le clic droit (context menu)
    todoEl.addEventListener('contextmenu', (e) => { 
      e.preventDefault(); // Empêche le menu contextuel par défaut
      todoEl.remove(); // Supprime l'élément de la liste
      updateLS(); // Met à jour le localStorage
    });

    // Ajoute l'élément de liste à la liste des todos
    todosUl.appendChild(todoEl);
    input.value = ''; // Réinitialise le champ de saisie

    updateLS(); // Met à jour le localStorage avec la nouvelle todo
  }
}

// Fonction pour mettre à jour le localStorage
function updateLS() {
  const todosEl = document.querySelectorAll('li'); // Sélectionne tous les éléments de la liste
  const todos = []; // Initialise un tableau pour stocker les todos

  // Parcourt chaque élément de la liste et construit un tableau d'objets
  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText, // Texte du todo
      completed: todoEl.classList.contains('completed') // État complété
    });
  });

  // Enregistre le tableau de todos dans le localStorage
  localStorage.setItem('todos', JSON.stringify(todos));
}
