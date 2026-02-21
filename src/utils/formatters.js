const priceFormatter = new Intl.NumberFormat('ko-KR')

export function formatPrice(price) {
  return priceFormatter.format(price)
}

export function formatNumber(num) {
  if (num >= 10000) {
    return (num / 10000).toFixed(1).replace(/\.0$/, '') + '만'
  }
  return priceFormatter.format(num)
}

export function formatDate(dateStr) {
  const date = new Date(dateStr)
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`
}
