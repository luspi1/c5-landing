import { body, modalOverlay } from '../_vars'

const infoBlockOpenerButtons = document.querySelectorAll('.info-block-opener')

if (infoBlockOpenerButtons) {
  infoBlockOpenerButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (e.target.tagName !== 'H5') return

      if (e.currentTarget.classList.contains('info-block-opener_active')) {
        e.currentTarget.classList.remove('info-block-opener_active')
        modalOverlay.classList.remove('_active')
        modalOverlay.style.top = '0'
        body.classList.remove('_lock')
      } else {
        infoBlockOpenerButtons.forEach((elem) => {
          elem.classList.remove('info-block-opener_active')
        })
        e.currentTarget.classList.add('info-block-opener_active')
        modalOverlay.classList.add('_active')
        modalOverlay.style.top = '90px'
        body.classList.add('_lock')
      }
    })
  })
  modalOverlay.addEventListener('click', () => {
    modalOverlay.style.top = '0'
    body.classList.remove('_lock')
    infoBlockOpenerButtons.forEach((elem) => {
      elem.classList.remove('info-block-opener_active')
    })
  })
}
