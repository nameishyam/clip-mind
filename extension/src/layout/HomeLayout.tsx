import { SpinnerCustom } from "@/components/ui/spinner"
import { useAuth } from "@/context/AuthContext"
import { Outlet } from "react-router-dom"
import Navbar from "@/components/shared/Navbar"

export default function HomeLayout() {
  const { loading } = useAuth()

  if (loading) {
    return (
      <div className="flex h-150 w-95 items-center justify-center bg-background">
        <SpinnerCustom />
      </div>
    )
  }

  return (
    <main className="flex h-150 w-95 flex-col overflow-hidden rounded-lg border bg-background">
      <Navbar />

      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </main>
  )
}
