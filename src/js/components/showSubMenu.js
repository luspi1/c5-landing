import { body, modalOverlay } from '../_vars'

const INITIAL_MOBILE_WIDTH = 1024

const infoBlockOpenerButtons = document.querySelectorAll('.info-block-opener')
const menuCheckbox = document.querySelector('#menu-checkbox')
const mainMenuButton = document.querySelector('.menu-button')
const personalAccountButton = document.querySelector('.main-menu__auth-btn')
const dropDownMenu = document.querySelector('.main-menu__links')

if (infoBlockOpenerButtons) {
  infoBlockOpenerButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.tagName !== 'H5') return

      if (e.currentTarget.classList.contains('info-block-opener_active')) {
        e.currentTarget.classList.remove('info-block-opener_active')
        modalOverlay.style.top = '0'
        body.classList.remove('_lock')

        if (window.screen.width > INITIAL_MOBILE_WIDTH) {
          modalOverlay.classList.remove('_active')
        }
      } else {
        infoBlockOpenerButtons.forEach((elem) => {
          elem.classList.remove('info-block-opener_active')
        })
        e.currentTarget.classList.add('info-block-opener_active')
        modalOverlay.classList.add('_active')

        if (window.screen.width > INITIAL_MOBILE_WIDTH) {
          body.classList.add('_lock')
          modalOverlay.style.top = '90px'
        }
      }
    })
  })

  modalOverlay.addEventListener('click', () => {
    body.classList.remove('_lock')
    infoBlockOpenerButtons.forEach((elem) => {
      elem.classList.remove('info-block-opener_active')
    })

    menuCheckbox.checked = false
  })
}

if (mainMenuButton) {
  mainMenuButton.addEventListener('click', () => {
    modalOverlay.classList.toggle('_active')
  })
}

if (personalAccountButton) {
  personalAccountButton.addEventListener('click', () => {
    if (dropDownMenu && window.screen.width < INITIAL_MOBILE_WIDTH) {
      menuCheckbox.checked = false
    }
  })
}
