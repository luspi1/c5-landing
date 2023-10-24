import Choices from 'choices.js'

export const initSelects = () => {
  // Общая инциализация селектов с множественным выбором

  const generalMultSelects = document.querySelectorAll(
    '.custom-mult-select__input',
  )
  if (generalMultSelects) {
    generalMultSelects.forEach((el) => {
      const choices = new Choices(el, {
        itemSelectText: '',
        searchEnabled: false,
        shouldSort: false,
        allowHTML: true,
        removeItemButton: true,
        noChoicesText: 'Пусто',
        noResultsText: 'Не найдено',
      })
    })
  }
}

initSelects()
