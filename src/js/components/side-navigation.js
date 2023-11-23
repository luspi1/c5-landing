const sideNavigation = document.querySelector('.side-navigation')

if (sideNavigation) {
  const sideNavigationItems = sideNavigation.querySelectorAll(
    '.side-navigation__item-min',
  )

  sideNavigationItems.forEach((navItem) => {
    const submenuTrigger = navItem.querySelector('.side-navigation__item-title')
    submenuTrigger.addEventListener('click', () =>
      navItem.classList.toggle('_active'),
    )
  })
}
