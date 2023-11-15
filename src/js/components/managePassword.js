import { SMS_SECONDS_START_VALUE, TIME_INTERVAL_MILLISECONDS } from '../_vars'
import {
  sendData,
  serializeForm,
  formToObj,
  showInfoModal,
} from '../_functions'

const showPasswordButtons = document.querySelectorAll('.btn-show-pass')

const enterForm = document.querySelector('#enter-modal')
const resetPasswordForm = document.querySelector('.reset-password-form')

const enterButton = document.querySelector('.submit-enter')
const confirmEnterButton = document.querySelector('.confirm-enter')

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

const timer = () => {
  const smsTimer = enterForm.querySelector('#smsTimer')
  smsTimer.innerHTML = `0:${SMS_SECONDS_START_VALUE}`

  let smsSeconds = SMS_SECONDS_START_VALUE

  const smsIntervalId = setInterval(() => {
    smsSeconds--
    if (smsSeconds === 0) clearInterval(smsIntervalId)
    smsTimer.innerHTML = `0:${smsSeconds}`
  }, TIME_INTERVAL_MILLISECONDS)

  return smsIntervalId
}

const handleSmsSubmit = (e) => {
  e.preventDefault()
  e.currentTarget.querySelector('.submit-enter').classList.add('_disabled')
  enterButton.classList.add('_disabled')
  resetPasswordForm.classList.remove('hidden')
  const timerId = e.currentTarget.dataset.timer
  if (timerId) clearInterval(timerId)
  const id = timer()
  e.currentTarget.setAttribute('data-timer', id)
}

export const getSmsCode = () => {
  if (enterForm) {
    enterButton.classList.remove('_disabled')
    enterForm.removeEventListener('submit', handleSmsSubmit)
    enterForm.addEventListener('submit', handleSmsSubmit)
  }
}

enterButton.addEventListener('click', async (e) => {
  e.preventDefault()
  const enterUserData = formToObj(
    serializeForm(enterButton.closest('.enter-form')),
  )
  const jsonData = JSON.stringify(enterUserData)

  try {
    const response = await sendData(jsonData, './data/test.txt')
    const finishedResponse = await response.json()

    const { status, paid_user, redirect_link } = finishedResponse

    if (status === 'ok') {
      if (!paid_user) {
        window.location.href = redirect_link
      } else {
        getSmsCode()
      }
    }
  } catch (err) {
    showInfoModal('Во время выполнения запроса произошла ошибка')
    console.log(err)
  }
})

confirmEnterButton.addEventListener('click', async (e) => {
  e.preventDefault()
  const smsCode = resetPasswordForm.querySelector('#smsCode').value

  try {
    const response = await sendData(smsCode, './data/test.txt')
    const finishedResponse = await response.json()

    const { status, redirect_link } = finishedResponse

    if (status === 'ok') {
      window.location.href = redirect_link
    } else {
      showInfoModal('Неверный SMS код')
    }
  } catch (err) {
    showInfoModal('Во время выполнения запроса произошла ошибка')
    console.log(err)
  }
})
