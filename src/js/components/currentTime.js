import { format } from 'date-fns'

export const getCurrentDate = () => {
  return format(new Date(), 'dd.MM.yyyy')
}

export const getCurrentTime = () => {
  return format(new Date(), 'HH:mm:ss')
}
