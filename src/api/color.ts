async function fetchColor(): Promise<string[]> {
  try {
    const response = await fetch('/data/color.json') // 경로는 public 폴더를 기준으로 설정
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const data = await response.json()
    if (!Array.isArray(data)) {
      throw new Error('Invalid data format')
    }

    return data
  } catch (error) {
    console.error('Error fetching colors:', error)
    return [] // 에러 발생 시 빈 배열 반환
  }
}
export { fetchColor }
