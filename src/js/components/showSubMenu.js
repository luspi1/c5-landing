const infoBlockOpenerButtons = document.querySelectorAll('.info-block-opener')

const submenuBlock = document.querySelector('.main-menu__submenu')

if (infoBlockOpenerButtons) {
  infoBlockOpenerButtons.forEach((item) => {
    item.addEventListener('click', (e) => {
      infoBlockOpenerButtons.forEach((elem) => {
        elem.classList.remove('info-block-opener_active')
      })

      const openerButton = e.target
      openerButton.classList.add('info-block-opener_active')
      submenuBlock.style.display =
        submenuBlock.style.display === 'block' ? 'none' : 'block'
    })
  })
}
