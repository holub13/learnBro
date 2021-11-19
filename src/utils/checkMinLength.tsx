export const isCheckMinLength = (val: string, min?: number) =>
  min && val.length > min
