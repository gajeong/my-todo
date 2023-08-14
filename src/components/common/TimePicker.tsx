import { ChangeEvent } from 'react'
import TimePicker from 'react-time-picker'
import styles from './TimePicker.module.css'
type Props = {
  value: string
  name: string
  onChange: (value: ChangeEvent) => void
}
export default function TimePickerComponent({
  value,
  name,
  onChange,
}: Props) {
  return (
    <TimePicker
      amPmAriaLabel='AM/PM'
      clearIcon={null}
      clockIcon={null}
      value={value}
      name={name}
      onChange={(e) => onChange}
    ></TimePicker>
  )
}
