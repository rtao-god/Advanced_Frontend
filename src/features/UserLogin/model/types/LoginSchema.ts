export default interface LoginSchema {
  username?: string
  identifier: string
  password: string
  isLoading?: boolean
  error?: string
}
