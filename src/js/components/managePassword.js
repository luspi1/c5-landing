import {
  formToObj,
  sendData,
  serializeForm,
  showInfoModal,
} from '../_functions'

const showPasswordButtons = document.querySelectorAll('.btn-show-pass')

const enterModal = document.querySelector('#enter-modal')

if (showPasswordButtons) {
  showPasswordButtons.forEach((item) => {
    item.addEventListener('click', () => {
      if (item.previousElementSibling.type === 'password') {
        item.previousElementSibling.type = 'text'
        item.classList.remove('_open')
      } else {
        item.previousElementSibling.type = 'password'
        item.classList.add('_open')
      }
    })
  })
}

export const getSmsCode = (modal) => {
  const smsForm = modal.querySelector('.reset-password-form')
  const enterButton = modal.querySelector('.submit-enter')
  if (smsForm) {
    smsForm.classList.remove('hidden')
    enterButton.classList.add('_disabled')
    const smsFormAction = smsForm.action
    smsForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      const enterUserData = formToObj(serializeForm(e.currentTarget))
      const jsonData = JSON.stringify(enterUserData)
      try {
        const response = await sendData(jsonData, smsFormAction)
        const finishedResponse = await response.json()

        const { status, redirect_link } = finishedResponse

        if (status === 'ok') {
          window.location.href = redirect_link
        } else {
          showInfoModal('Ошибка авторизации!')
        }
      } catch (err) {
        showInfoModal('Неверный sms-код')
        console.log(err)
      }
    })
  }
}

//Логика отправки данных авторизации серверу

const enterForm = enterModal?.querySelector('.enter-form')
const enterAction = enterForm?.action

if (enterForm) {
  enterForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const enterUserData = formToObj(serializeForm(e.currentTarget))
    const jsonData = JSON.stringify(enterUserData)

    try {
      const response = await sendData(jsonData, enterAction)
      const finishedResponse = await response.json()

      const { status, paid_user, redirect_link } = finishedResponse

      if (status === 'ok') {
        if (!paid_user) {
          window.location.href = redirect_link
        } else {
          getSmsCode(enterModal)
        }
      } else {
        showInfoModal('Ошибка авторизации!')
      }
    } catch (err) {
      showInfoModal('Во время выполнения запроса произошла ошибка')
      console.log(err)
    }
  })
}

// Логика восстановления пароля

const resetModal = document.querySelector('#reset-password-modal')

if (resetModal) {
  const restoreForm = resetModal.querySelector('.restore-form')
  const restoreAction = restoreForm.action
  restoreForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const restoreData = formToObj(serializeForm(e.currentTarget))
    const jsonData = JSON.stringify(restoreData)

    try {
      const response = await sendData(jsonData, restoreAction)
      const finishedResponse = await response.json()

      const { status } = finishedResponse

      if (status === 'ok') {
        getSmsCode(resetModal)
      } else {
        showInfoModal('Ошибка восстановления пароля!')
      }
    } catch (err) {
      showInfoModal('Во время выполнения запроса произошла ошибка')
      console.log(err)
    }
  })
}
