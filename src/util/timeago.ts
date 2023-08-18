import { register, format } from 'timeago.js'
import koLocale from 'timeago.js/lib/lang/ko'

register('ko', koLocale)

export function formatAgo(date: string, lang = 'eb_US') {
  return format(date, lang)
}

export function getDate(date: Date) {
  let year = String(date.getFullYear())
  let month =
    date.getMonth() < 9
      ? '0' + (date.getMonth() + 1)
      : date.getMonth() + 1
  let day =
    date.getDate() < 10
      ? '0' + date.getDate()
      : date.getDate()

  return year + '-' + month + '-' + day
}
