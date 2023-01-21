import { z } from 'zod'

export const getIsValidEmail = (value: string) => {
  const emailSchema = z.string().email()
  const { success } = emailSchema.safeParse(value)
  return success
}

export const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
