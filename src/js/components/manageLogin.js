const newLogin = document.querySelector('.change-login__new-login')
const newLoginRepeat = document.querySelector('.change-login__new-login-repeat')

const changeLoginError = document.querySelector('.change-login__error')
const changeLoginButton = document.querySelector(
  '#change-login-modal .submit-btn',
)

if (newLogin && newLoginRepeat) {
  newLoginRepeat.addEventListener('change', (e) => {
    if (newLogin.value !== e.target.value) {
      changeLoginError.innerHTML = 'Логины не совпадают'
      changeLoginButton.classList.add('_disabled')
    } else {
      changeLoginError.innerHTML = ''
      changeLoginButton.classList.remove('_disabled')
    }
  })
}
