import { modalOverlay, INITIAL_MOBILE_WIDTH } from '../_vars'

const mainMenu = document.querySelector('.main-menu')

export const manageModal = () => {
  const openModalBtns = document.querySelectorAll('button[data-open-modal]')
  const closeModalBtns = document.querySelectorAll('button[data-close-modal]')

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      e.preventDefault()
      e.currentTarget.classList.remove('_active')
      const activeModal = e.currentTarget
        .closest('.site-container')
        .querySelector('.modal._active')
      if (activeModal) {
        activeModal.classList.remove('_active')
      }
    })
  }

  if (closeModalBtns) {
    closeModalBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const targetModal = e.currentTarget.closest('.modal')
        if (targetModal) {
          targetModal.classList.remove('_active')
          modalOverlay.classList.remove('_active')

          document.body.classList.remove('_lock')
        }
      })
    })
  }

  if (openModalBtns) {
    openModalBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        const targetModal = document.querySelector(
          `#${e.currentTarget.dataset.openModal}`,
        )

        targetModal.classList.add('_active')
        modalOverlay.classList.add('_active')

        if (window.screen.width < INITIAL_MOBILE_WIDTH) {
          document.body.classList.add('_lock')
          mainMenu.style.zIndex = 0
        }
      })
    })
  }
}

manageModal()
