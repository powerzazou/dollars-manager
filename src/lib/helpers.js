import moment from 'moment'

moment.locale('fr')

export function formatDate (date, format) {
  date = moment(date)
  const time = ' à ' + moment(date).fromat('LT')
  if (format) {
    return date.format(format)
  }
  if (date.isSame(moment(), 'day')) {
    return 'Aujourd’hui' + time
  }
  if (date.isSame(moment().subtract(1, 'day'), 'day')) {
    return 'Hier' + time
  }
  if (date.isSame(moment().subtract(2, 'days'), 'day')) {
    return 'Avant-hier' + time
  }
  return date.format('dddd D MMMM YYYY') + time
}
export function getCompletionRatio (current, target) {
  return target > 0 ? current / target : 1
}

export function formatPrice (price) {
  return Math.floor(price / 100) + ',' + (price % 100) + '€'
}
