async function fetchColor(): Promise<string[]> {
  const response = await fetch('/data/color.json') // 경로는 public 폴더를 기준으로 설정
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data
}

export { fetchColor }
