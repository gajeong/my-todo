import { register, format } from 'timeago.js'
import koLocale from 'timeago.js/lib/lang/ko'

register('ko', koLocale)

export function formatAgo(date: string, lang = 'eb_US') {
  return format(date, lang)
}

export function getDate(date) {}
