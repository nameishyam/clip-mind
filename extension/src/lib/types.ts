import type { Dispatch, SetStateAction } from "react"

export interface User {
  firstName?: string
  lastName?: string
  email?: string
}

export interface AuthContextType {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
  updateUser: (updates: Partial<User>) => void
  login: () => Promise<void>
  logout: () => Promise<void>
  isAuthenticated: () => boolean
  loading: boolean
}
