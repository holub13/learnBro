export interface FormProps {
  config: ConfigItem[]
  to: string
  title: string
  titleLink: string
}

export interface Fields {
  [propName: string]: string
}

export interface ValidationFields {
  name: string
  value?: number
}

export interface ConfigItem {
  name: string
  type: string
  placeholder: string
  validation: ValidationFields[]
}
