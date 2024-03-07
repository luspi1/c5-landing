const infoBlockOpenerButtons = document.querySelectorAll('.info-block-opener')

if (infoBlockOpenerButtons) {
  infoBlockOpenerButtons.forEach((item) => {
    item.addEventListener('click', () => {
      infoBlockOpenerButtons.forEach((elem) => {
        elem.classList.remove('info-block-opener_active')
      })

      if (item.classList.contains('info-block-opener_active')) {
        item.classList.remove('info-block-opener_active')
      } else {
        item.classList.add('info-block-opener_active')
      }

      window.addEventListener('click', (e) => {
        if (
          !e.target.classList.contains('.main-menu__submenu') &&
          !e.target.closest('.info-block-opener')
        ) {
          console.log(8)
          item.classList.remove('info-block-opener_active')
        }
      })
    })
  })
}
