import { Dropzone } from 'dropzone'

//Загрузка картинок

const fotosDropZones = document.querySelectorAll('.upload-photos')

if (fotosDropZones) {
  fotosDropZones.forEach((dropZoneItem) => {
    const addPictureButton = dropZoneItem.querySelector(
      '.general-dropzone__add-btn',
    )
    const pictureContainer = dropZoneItem.querySelector('.dz-message')

    let organizerLogoDropzone = new Dropzone(dropZoneItem, {
      maxFilesize: 5,
      url: './data/test.txt',
      maxFiles: 1,
      thumbnailWidth: 108,
      thumbnailHeight: 108,
      acceptedFiles: '.png, .jpeg, .jpg, .svg',
      addRemoveLinks: true,
      dictRemoveFile: '',
      clickable: addPictureButton,
      previewsContainer: pictureContainer,
    })

    const textToHide = dropZoneItem.querySelectorAll('.dropzone-hide')

    /// 'succsess'
    organizerLogoDropzone.on('complete', function (file, response) {
      addPictureButton.classList.add('_disabled')

      textToHide.forEach((item) => item.classList.add('hidden'))

      const parent = document.querySelector('.dz-details')

      const stringDate = document.createElement('span')
      const date = new Date()
      const currentTime = date.toLocaleTimeString('ru-RU', {
        hour: 'numeric',
        minute: 'numeric',
      })
      const currentDate = date.toLocaleDateString()

      stringDate.classList.add('dz-date')
      stringDate.textContent = `Загружен в ${currentTime} ${currentDate}`
      parent.prepend(stringDate)
    })

    organizerLogoDropzone.on('removedfile', function (file, response) {
      addPictureButton.classList.remove('_disabled')
      textToHide.forEach((item) => item.classList.remove('hidden'))
    })
  })
}
