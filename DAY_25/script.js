const header = document.querySelector('header');
const headerLink = document.querySelectorAll('header nav a');
const logo = document.querySelector('.logo');


window.addEventListener('scroll', () => {

    if (window.scrollY > 200) {

        header.style.paddingTop = '.8rem';
        header.style.paddingBottom = '.8rem';
        header.style.backgroundColor = '#fff';
        logo.style.color = '#000';

        headerLink.forEach(element => {
            element.style.color = '#000'
        });
        headerLink[0].style.color = 'orangered';

    } else {
    
            header.style.paddingTop = '1.8rem';
            header.style.paddingBottom = '1.8rem';
            header.style.backgroundColor = '#000';
            logo.style.color = '#fff';

            headerLink.forEach(element => {
                element.style.color = '#fff'
            });
            headerLink[0].style.color = 'orangered';
        }
})