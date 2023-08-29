function isObjectEmpty(obj: Record<string, any>): boolean {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (
        obj[key] === null ||
        obj[key] === undefined ||
        obj[key] === ''
      ) {
        return true // 빈 값이 하나라도 있으면 true 반환
      }
    }
  }
  return false // 빈 값이 없으면 false 반환
}

export { isObjectEmpty }
