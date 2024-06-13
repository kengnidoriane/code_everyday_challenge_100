// variables declaration

const email = document.getElementById('email');
const password = document.getElementById('password');
const labelEmail = document.querySelector('.label-email');
const labelPassword = document.querySelector('label[for="password"]');
console.log(labelPassword);


// email.addEventListener('focus', translate(labelEmail));
// password.addEventListener('focus', translate(labelPassword));


    labelEmail.innerHTML = labelEmail.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 10}ms">${letter}</span>`)
        .join('')


        labelPassword.innerHTML = labelPassword.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 10}ms">${letter}</span>`)
        .join('')

