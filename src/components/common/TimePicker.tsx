import { ChangeEvent } from 'react'
import TimePicker from 'react-time-picker'
import styles from './TimePicker.module.css'

type Value = string | null
type Props = {
  value: string | null
  name: string
  onChange: (value: Value) => void // 변경된 부분
}

export default function TimePickerComponent({
  value,
  name,
  onChange,
}: Props) {
  const adjustedValue = value || ''
  return (
    <TimePicker
      amPmAriaLabel='AM/PM'
      clearIcon={null}
      clockIcon={null}
      value={value}
      name={name}
      onChange={(newVal) => {
        if (newVal) onChange(newVal)
      }} // 수정된 부분
    ></TimePicker>
  )
}
