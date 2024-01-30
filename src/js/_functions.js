//Сбор данных форм

import { bigImgModal, infoModal, modalOverlay } from './_vars'

export const serializeForm = (formNode) => {
  return new FormData(formNode)
}

// Преобразование formData в объект
export const formToObj = (formData) => {
  return Array.from(formData.entries()).reduce(
    (memo, pair) => ({
      ...memo,
      [pair[0]]: pair[1],
    }),
    {},
  )
}

// Фунцкия отправки fetch запросов
export async function sendData(data, url) {
  return await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data,
  })
}

export const showInfoModal = (responseText) => {
  infoModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('info-modal')) {
      infoModal.classList.add('hidden')
    }
  })
  const modalText = infoModal.querySelector('.info-modal__content-text')
  modalText.textContent = responseText
  infoModal.classList.remove('hidden')
}

export const showBigImgModal = (path) => {
  bigImgModal.classList.add('big-img-modal_active')
  bigImgModal.querySelector('img').src = path
  modalOverlay.classList.add('_active')
  modalOverlay.addEventListener('click', () => {
    modalOverlay.classList.remove('_active')
    bigImgModal.classList.remove('big-img-modal_active')
  })
}

export const checkRepeatPasswords = (checkForm) => {
  const repeatInputs = checkForm.querySelectorAll('.pass-input')
  const passAlert = checkForm.querySelector('.alert-message')

  const isPassMatch = repeatInputs[0]?.value === repeatInputs[1]?.value
  if (!isPassMatch) {
    passAlert.classList.remove('hidden')
    return false
  } else {
    passAlert.classList.add('hidden')
    return true
  }
}

const formatChangeableInputName = (name, id) => {
  const initialName = name.split('[')[0]
  return `${initialName}[${id}]`
}

const formatChangeableSelects = (name, id) => {
  const initialName = name.split('[')
  initialName[1] = `${id - 1}]`
  return initialName.join('[')
}

export const updateInputsId = (input, changeableId) => {
  const currentInput = input.querySelector('input, select, textarea') ?? input
  const inputLabel = input.querySelector('label')
  currentInput.name = formatChangeableInputName(currentInput.name, changeableId)
  if (currentInput.id) {
    const initialId = currentInput.id.split('[')[0]
    currentInput.id = `${initialId}[${changeableId}]`
  }
  if (inputLabel?.getAttribute('for')) {
    const attrValue = inputLabel.getAttribute('for')
    const initialLabel = attrValue.split('[')[0]
    inputLabel.setAttribute('for', `${initialLabel}[${changeableId}]`)
  }
}

// Обновление id в изменяемых списках
export const updateChangeableListId = (changeableList) => {
  if (changeableList && changeableList.dataset.changeableId) {
    const changeableElements = Array.from(changeableList.children)
    changeableElements.forEach((el, i) => {
      const changeableId = i + 1

      const changeableAmount = el.querySelector('.changeable-amount')
      const changeableInputs = el.querySelectorAll('.changeable-input')
      const changeableSelects = el.querySelectorAll(
        '.generate-select__list select',
      )
      const inputIdInfo = el.querySelector('.changeable-input-id')

      if (changeableAmount) {
        changeableAmount.textContent = changeableId
      }
      if (inputIdInfo) {
        inputIdInfo.value = changeableId
      }

      if (changeableInputs) {
        changeableInputs.forEach((inputEl) =>
          updateInputsId(inputEl, changeableId),
        )
      }

      if (changeableSelects) {
        changeableSelects.forEach((selectEl) => {
          selectEl.name = formatChangeableSelects(selectEl.name, changeableId)
        })
      }
    })
  }
}
