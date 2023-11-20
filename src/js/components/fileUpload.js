// загрузка файлов

import { showInfoModal } from '../_functions'
import { getCurrentDate, getCurrentTime } from './currentTime'

export const initFileUploading = () => {
  const handleDeleteFile = (e) => {
    if (e.target.classList.contains('file-upload__delete-btn')) {
      const currentFileWrapper = e.target.closest('.file-upload')
      const currentInput = currentFileWrapper.querySelector('.file-upload__add')
      currentFileWrapper.classList.remove('_loaded')
      currentInput.value = ''
    }
  }

  const fileUploads = document.querySelectorAll('.file-upload')
  if (fileUploads) {
    fileUploads.forEach((fileUploadEl) => {
      const uploadInput = fileUploadEl.querySelector('.file-upload__add')
      const uploadName = fileUploadEl.querySelector('.file-upload__name')
      const uploadDate = fileUploadEl.querySelector('.file-upload__date')
      const uploadTime = fileUploadEl.querySelector('.file-upload__time')

      //////

      const exampleInitInputFile = document
        .querySelector('#edit-document-modal')
        .querySelector("[id='edit-file[2]']")

      if (exampleInitInputFile) {
        const myFile = new File(['Hello World!'], 'myFile.pdf', {
          type: 'text/plain',
          lastModified: new Date(),
        })

        const dataTransfer = new DataTransfer()
        dataTransfer.items.add(myFile)
        exampleInitInputFile.files = dataTransfer.files

        const fileUpload = exampleInitInputFile.closest('.file-upload')

        //exampleInitInputFile.classList.add('_loaded')

        const info = fileUpload.querySelector('.file-upload__info')
        info.style.display = 'block'

        const uploadDate = fileUpload.querySelector('.file-upload__date')
        const uploadTime = fileUpload.querySelector('.file-upload__time')

        if (uploadDate && uploadTime) {
          uploadDate.textContent = getCurrentDate()
          uploadTime.textContent = getCurrentTime()
        }

        fileUpload
          .querySelector('.file-upload__delete-btn')
          .addEventListener('click', () => {
            info.style.display = 'none'
          })
      }

      //////

      uploadInput.addEventListener('input', (evt) => {
        let targetInput = evt.currentTarget
        let fileItem = targetInput.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(fileItem)

        reader.addEventListener('load', () => {
          //////
          if (
            fileUploadEl.querySelector('.file-upload__info').style.display ===
            'none'
          ) {
            fileUploadEl.querySelector('.file-upload__info').style.display =
              'block'
          }
          //////

          if (uploadName) {
            uploadName.textContent = fileItem.name ?? ''
            uploadName.href = reader.result
          }

          if (uploadDate) {
            console.log(uploadDate)
            uploadDate.textContent = getCurrentDate()
          }

          if (uploadTime) {
            uploadTime.textContent = getCurrentTime()
          }

          fileUploadEl.classList.add('_loaded')
        })

        reader.addEventListener('error', () => {
          showInfoModal(`Произошла ошибка при чтении файла: ${fileItem.name}`)
        })
      })
      fileUploadEl.addEventListener('click', handleDeleteFile)
    })
  }
}

initFileUploading()
