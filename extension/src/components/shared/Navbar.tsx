import { Link } from "react-router-dom"
import { Brain } from "lucide-react"

import ModeToggle from "@/components/shared/ModeToggle"

export default function Navbar() {
  return (
    <header className="flex h-14 items-center justify-between border-b px-4">
      <Link
        to="/"
        className="flex items-center gap-2 font-semibold tracking-tight"
      >
        <Brain className="h-5 w-5 text-primary" />
        <span>ClipMind</span>
      </Link>

      <div className="flex items-center gap-2">
        <ModeToggle />
      </div>
    </header>
  )
}
