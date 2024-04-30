export default interface LoginSchema {
  username: string
  password: string
  error: string | null
  isAuthenticated: boolean
}
