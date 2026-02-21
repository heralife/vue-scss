import { reactive } from 'vue'

const state = reactive({
  user: JSON.parse(localStorage.getItem('hackers_user') || 'null'),
  isLoggedIn: !!localStorage.getItem('hackers_user')
})

export function useAuthStore() {
  const login = (email, password) => {
    const mockUser = { id: 1, name: '홍길동', email }
    state.user = mockUser
    state.isLoggedIn = true
    localStorage.setItem('hackers_user', JSON.stringify(mockUser))
    return true
  }

  const signup = (userData) => {
    const mockUser = { id: Date.now(), name: userData.name, email: userData.email }
    state.user = mockUser
    state.isLoggedIn = true
    localStorage.setItem('hackers_user', JSON.stringify(mockUser))
    return true
  }

  const logout = () => {
    state.user = null
    state.isLoggedIn = false
    localStorage.removeItem('hackers_user')
  }

  return { state, login, signup, logout }
}
