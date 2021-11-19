export interface InputProps {
  name: string
  value: string
  type: string
  placeholder: string
  invalid: string
  onValueChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
