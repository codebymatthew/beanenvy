const navBtn = document.querySelector('.hamburgerMenu')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modalCloseBtn')
const modalNavHome = document.querySelector('#modalNavHome')
const modalNavCoffee = document.querySelector('#modalNavCoffee')
const modalNavAboutUs = document.querySelector('#modalNavAboutUs')
const modalNavMenu = document.querySelector('#modalNavMenu')
const modalNavAmbiance = document.querySelector('#modalNavAmbiance')
const menuBtn = document.querySelector('.menuBtn')
const menuModal = document.querySelector('.menuModal')
const menuModalCloseBtn = document.querySelector('.menuModalCloseBtn')

function toggleModal() {
    modal.classList.toggle('showModal')
}

navBtn.addEventListener('click', toggleModal)
modalCloseBtn.addEventListener('click', toggleModal)
modalNavHome.addEventListener('click', toggleModal)
modalNavCoffee.addEventListener('click', toggleModal)
modalNavAboutUs.addEventListener('click', toggleModal)
modalNavMenu.addEventListener('click', toggleModal)
modalNavMenu.addEventListener('click', toggleMenuModal)
modalNavAmbiance.addEventListener('click', toggleModal)

function toggleMenuModal() {
    menuModal.classList.toggle('showModal')
}
function toggleMenuWindow(e) {
    if(e.target === menuModal) {
        toggleMenuModal()
    }
}

menuBtn.addEventListener('click', toggleMenuModal)
menuModalCloseBtn.addEventListener('click', toggleMenuModal)
menuModal.addEventListener('click', toggleMenuWindow)