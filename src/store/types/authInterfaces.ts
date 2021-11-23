export interface AuthType {
  type: string
  payload: { login: string; email: string; password: string }
}
