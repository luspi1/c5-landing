const sideNavigationItems = document.querySelectorAll(
  '.side-navigation__item-min',
)

const tabsToggler = (buttons) => {
  buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('_active')) {
        buttons.forEach((item) => item.classList.remove('_active'))
        e.currentTarget.classList.add('_active')
      } else {
        e.currentTarget.classList.remove('_active')
      }
    })
  })
}

tabsToggler(sideNavigationItems)
