const mainForm = document.querySelector('.main-form')

if (mainForm) {
  mainForm.addEventListener('focusin', (e) => {
    const inputTarget = e.target
    inputTarget.classList.add('form-item__input_active')
  })

  mainForm.addEventListener('focusout', (e) => {
    const inputTarget = e.target

    if (!inputTarget.value) {
      inputTarget.classList.remove('form-item__input_active')
    }
  })
}
