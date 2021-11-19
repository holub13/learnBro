import { ConfigItem } from '../../components/Form/types'

export const config: ConfigItem[] = [
  {
    name: 'login',
    type: 'text',
    placeholder: 'Enter your Login',
    validation: [
      { name: 'min', value: 3 },
      { name: 'max', value: 12 },
    ],
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Enter your Password',
    validation: [
      { name: 'min', value: 4 },
      { name: 'max', value: 10 },
    ],
  },
]
