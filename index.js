const buttonOpenMenu = document.querySelector('.menu__button__visible')
const buttonCloseMenu = document.querySelector('.menu__btn__close__invisible')
const buttonCoffeeMobile = document.querySelector('.mobile__button__coffee')

const sectionClose = document.querySelector('.container__visible')
const modalOpen = document.querySelector('.modal__invisible')


function addModal() {
  sectionClose.classList.add('container__invisible')
  modalOpen.classList.remove('modal__invisible')
  buttonOpenMenu.classList.add('menu__button__invisible')
  buttonOpenMenu.classList.remove('menu__button__visible')
  buttonCloseMenu.classList.add('menu__btn__close__visible')
  buttonCloseMenu.classList.remove('menu__btn__close__invisible')
}

function removeModal() {
  sectionClose.classList.remove('container__invisible')
  modalOpen.classList.add('modal__invisible')
  buttonOpenMenu.classList.add('menu__button__visible')
  buttonOpenMenu.classList.remove('menu__button__invisible')
  buttonCloseMenu.classList.add('menu__btn__close__invisible')
}

const buttonAddModal = buttonOpenMenu.addEventListener('click', addModal)
const buttonRemoveModal = buttonCloseMenu.addEventListener('click', removeModal)
