export interface FormProps {
  config: ConfigItem[]
  path: string
  title: string
  titleLink: string
  onSubmit?: (param: any) => void
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
