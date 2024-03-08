export const valid = (cn) => {
  if (cn.replace(/\s/, '').length < 2 || cn.match(/[^\d|^\s]/)) { return false }
  return [...cn]
    .reverse()
    .filter(n => n.match(/\d/))
    .map((n, i) => i%2==1 ? (n*2 > 9 ? n*2-9 : n*2) : +n)
    .reduce((sum, n) => sum += n) % 10 == 0
}