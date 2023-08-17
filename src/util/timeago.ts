import { register, format } from 'timeago.js'
import koLocale from 'timeago.js/lib/lang/ko'

register('ko', koLocale)

export function formatAgo(date: string, lang = 'eb_US') {
  return format(date, lang)
}

export function getDate(date: Date) {
  let year = String(date.getFullYear())
  let month =
    date.getMonth() < 10
      ? '0' + date.getMonth()
      : date.getMonth()
  let day =
    date.getDate() < 10
      ? '0' + date.getDate()
      : date.getDate()

  return year + '-' + month + '-' + day
}
