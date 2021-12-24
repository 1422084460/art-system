//字符串转数组
export function strToArr(str) {
  let s = JSON.stringify(str)
  return s.split(',')
}
