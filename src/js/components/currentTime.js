const today = new Date()
const dd = String(today.getDate()).padStart(2, '0')
const mm = String(today.getMonth() + 1).padStart(2, '0')
const yyyy = today.getFullYear()

const hh = today.getHours()
const min = today.getMinutes()
const ss = today.getSeconds()

export const getCurrentDate = () => {
  return `${dd}.${mm}.${yyyy}`
}

export const getCurrentTime = () => {
  return `${hh}:${min}:${ss}`
}
