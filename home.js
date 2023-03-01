'use restric'

const navMenu = document.querySelector('.navMenu')
const Menu = document.querySelector('.Menu')

Menu.addEventListener('click', () => {
    navMenu.classList.toggle('ativo')
    Menu.classList.toggle('ativo')
})