import { ClipboardList, User } from "lucide-react"
import { NavLink } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Footer() {
  return (
    <footer className="border-t bg-background px-3 py-2">
      <div className="grid grid-cols-2 gap-2">
        <Button asChild variant="ghost" className="h-11 p-0">
          <NavLink
            to="/clips"
            className={({ isActive }) =>
              cn(
                "flex h-full w-full items-center justify-center gap-2 rounded-md",
                isActive && "bg-accent text-accent-foreground"
              )
            }
          >
            <ClipboardList className="h-4 w-4" />
            <span>Clips</span>
          </NavLink>
        </Button>

        <Button asChild variant="ghost" className="h-11 p-0">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              cn(
                "flex h-full w-full items-center justify-center gap-2 rounded-md",
                isActive && "bg-accent text-accent-foreground"
              )
            }
          >
            <User className="h-4 w-4" />
            <span>Profile</span>
          </NavLink>
        </Button>
      </div>
    </footer>
  )
}
