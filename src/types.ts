export type UserInfo = {
  id: any
  name: string
  email: string
}

export type UserRegisterData = {
  name: string
  email: string
  password: string
}

export type UserLoginData = {
  email: string
  password: string
}

export type FormError<Data> = {
  message: string
  fields: FieldErrors<Data>
}

export type FieldErrors<Data> = {
  [key in keyof Data & string]?: string[]
}

export type DataConstraints<Data> = {
  [key in keyof Data & string]: any
}