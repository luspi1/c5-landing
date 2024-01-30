document.addEventListener('DOMContentLoaded', () => {
  if (document.body.classList.contains('order-website-page')) {
    const orderSiteForm = document.querySelector('.order-site-form')

    if (document.body.classList.contains('_tariff-blocked')) {
      const paymentBlocks = orderSiteForm.querySelectorAll('.payment-block')
      paymentBlocks.forEach((item) => item.remove())

      orderSiteForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const chooseTariffBlock = orderSiteForm.querySelector(
          '.choose-tariff-block',
        )
        chooseTariffBlock.remove()

        const { elements } = orderSiteForm

        Array.from(elements).forEach((element) => {
          const { name, value } = element
          console.log({ name, value })
        })
      })
    } else {
      orderSiteForm.addEventListener('submit', (e) => {
        e.preventDefault()

        const { elements } = orderSiteForm

        Array.from(elements).forEach((element) => {
          const { name, value } = element
          console.log({ name, value })
        })
      })
    }
  }
})
