import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'
import ko from 'date-fns/locale/ko'
type Props = {
  selected?: Date
}
export default function Calendar({ selected }: Props) {
  const [date, setDate] = useState(selected)
  return (
    <DatePicker
      className='cursor-pointer selected:bg-gray-500'
      showPopperArrow={false}
      selected={date}
      onChange={(date: Date) => setDate(date)}
      dateFormat={'yyyy-MM-dd'}
      locale={ko}
    />
  )
}
