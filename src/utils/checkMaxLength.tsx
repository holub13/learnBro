export const isCheckMaxLength = (val: string, max?: number) =>
  max && val.length < max
