import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react"
import { api } from "@/lib/api"
import type { User, AuthContextType, Clip } from "@/lib/types"
import type { AuthProviderProps } from "@/lib/props"

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [clips, setClips] = useState<Clip[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const fetchMe = useCallback(async () => {
    try {
      const res = await api.get("/auth/me")
      setUser(res.data.user || null)
      setClips(res.data.clips || [])
    } catch (err: any) {
      if (err.response?.status === 401) {
        setUser(null)
        setClips([])
      } else {
        console.error("Unexpected /me error:", err)
      }
    }
  }, [])

  useEffect(() => {
    fetchMe().finally(() => setLoading(false))
  }, [fetchMe])

  const login = useCallback(async () => {
    await fetchMe()
  }, [fetchMe])

  const logout = useCallback(async () => {
    try {
      await api.post("/auth/logout")
    } catch (err) {
      console.log(err)
    }
    setUser(null)
    setClips([])
  }, [])

  const updateUser = useCallback((updates: Partial<User>) => {
    setUser((prev) => (prev ? { ...prev, ...updates } : null))
  }, [])

  const isAuthenticated = useCallback(() => !!user, [user])

  const value = useMemo(
    () => ({
      user,
      setUser,
      clips,
      setClips,
      updateUser,
      login,
      logout,
      isAuthenticated,
      loading,
    }),
    [user, clips, login, logout, isAuthenticated, updateUser, loading]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider")
  return ctx
}
