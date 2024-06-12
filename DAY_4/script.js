const faArrowLeft = document.querySelector('.fa-arrow-left');
const btnSearch = document.querySelector('.btn-search');
const container = document.querySelector('.container');

btnSearch.addEventListener('click', () => {
    container.classList.add('active')
    btnSearch.classList.add('hidden')
    input.focus()
})

faArrowLeft.addEventListener('click', () => {
    container.classList.remove('active')
    btnSearch.classList.remove('hidden')

})