import type { Dispatch, SetStateAction } from "react"

export interface User {
  firstName?: string
  lastName?: string
  email?: string
  createdAt?: string
}

export interface Clip {
  id?: string
  title?: string
  content?: string
  url?: string
  domain?: string
  createdAt?: string
}

export interface AuthContextType {
  user: User | null
  clips: Clip[] | []
  setUser: Dispatch<SetStateAction<User | null>>
  setClips: Dispatch<SetStateAction<Clip[] | []>>
  updateUser: (updates: Partial<User>) => void
  login: () => Promise<void>
  logout: () => Promise<void>
  isAuthenticated: () => boolean
  loading: boolean
}
