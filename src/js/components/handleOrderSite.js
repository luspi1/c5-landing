const orderSitePage = document.querySelector('.order-website-page')

if (orderSitePage) {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('_tariff-blocked')) {
      const paidTariffInputs =
        orderSitePage.querySelectorAll('.paid-tariff-input')
      paidTariffInputs.forEach((item) => {
        item.removeAttribute('name')
        item.removeAttribute('required')
      })
    }
  })
}
