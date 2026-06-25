import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Home() {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  return (
    <div className="flex h-full flex-col items-center justify-around p-5">
      <div className="mt-4 text-center">
        <div className="mb-3 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <Brain className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h1 className="text-3xl font-bold">ClipMind</h1>
      </div>

      <div className="space-y-3">
        {isAuthenticated() ? (
          <Button className="w-full" onClick={() => navigate("/dashboard")}>
            Open Dashboard
          </Button>
        ) : (
          <>
            <Button className="w-full" onClick={() => navigate("/login")}>
              Log In
            </Button>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </Button>
          </>
        )}
      </div>
    </div>
  )
}
