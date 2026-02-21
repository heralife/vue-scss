export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validatePassword(password) {
  return password.length >= 8 && /[a-zA-Z]/.test(password) && /[0-9]/.test(password)
}

export function validatePhone(phone) {
  return /^01[0-9]-?\d{3,4}-?\d{4}$/.test(phone)
}

export function getPasswordStrength(password) {
  if (password.length < 8) return { level: 0, label: '8자 이상 입력', color: '#ccc' }
  let score = 0
  if (/[a-z]/.test(password)) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^a-zA-Z0-9]/.test(password)) score++
  if (password.length >= 12) score++

  if (score <= 2) return { level: 1, label: '약함', color: '#E31837' }
  if (score <= 3) return { level: 2, label: '보통', color: '#FFB800' }
  return { level: 3, label: '강함', color: '#00A651' }
}
