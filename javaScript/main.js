const menu = document.querySelector('.menu-svg')
const close = document.querySelector('.close')
const menuo = document.querySelector(".menu-ul")

menu.addEventListener('click', () => {
    menuo.classList.add('open-nav')
})

close.addEventListener('click', () => {
    menuo.classList.remove('open-nav')
})