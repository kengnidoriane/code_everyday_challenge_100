// variables declaration

const textarea = document.getElementById('inputTextarea');
const buttonsContainer = document.querySelector('.buttons');



textarea.addEventListener('input', function() {

    // variables pour stocker les valeurs entrees(separes par une virgule) dans un tableau
    const values = textarea.value.split(',');

    // pour qu'un bouton ne soit creer a chaque changement dans le textarea
    buttonsContainer.innerHTML = '';

    values.forEach(value => {

        // la fonction trim() est utilise pour retirer les espaces autour de chaque valeur

        const trimmedValue = value.trim();

        if (trimmedValue) {
            const button = document.createElement('button');
            button.textContent = trimmedValue;
            buttonsContainer.appendChild(button);
        }
        
        
    });
})




textarea.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action of Enter key

        
        const buttons = document.querySelectorAll('.buttons button');

        if (buttons.length > 0) {
            let intervalId = setInterval(() => {
                const randomIndex = Math.floor(Math.random() * buttons.length);
                buttons.forEach((button, index) => {
                    button.style.backgroundColor = index === randomIndex ? '#211df0' : '#f09711';
                });
            }, 100);

            setTimeout(() => {
                clearInterval(intervalId);
                const selectedButtonIndex = Math.floor(Math.random() * buttons.length);
                buttons.forEach((button, index) => {
                    button.style.backgroundColor = index === selectedButtonIndex ? '#211df0' : '#f09711';
                });
            }, 3000);

            textarea.value = '';
        }
    }
})


