import { Link, useNavigate } from "react-router-dom"
import { Brain } from "lucide-react"

import { useState } from "react"

import { useAuth } from "@/context/AuthContext"
import ModeToggle from "@/components/shared/ModeToggle"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

import { api } from "@/lib/api"

export default function Navbar() {
  const { user, logout, isAuthenticated } = useAuth()

  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState(false)

  async function handleDelete() {
    try {
      await api.delete("/users")

      logout()

      navigate("/")
    } catch (err) {
      console.error(err)
    }
  }

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

        {isAuthenticated() && (
          <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarFallback>
                    {user?.firstName?.[0]}
                    {user?.lastName?.[0]}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuGroup>
                  <DropdownMenuItem onSelect={() => navigate("/profile")}>
                    Profile
                  </DropdownMenuItem>

                  <DropdownMenuItem onSelect={() => navigate("/dashboard")}>
                    Dashboard
                  </DropdownMenuItem>

                  <DropdownMenuItem onSelect={logout}>Logout</DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    className="text-destructive focus:text-destructive"
                    onSelect={(e) => {
                      e.preventDefault()
                      setIsOpen(true)
                    }}
                  >
                    Delete Account
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete your account?</AlertDialogTitle>

                <AlertDialogDescription>
                  This action is permanent and cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>

              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>

                <AlertDialogAction
                  className="bg-destructive"
                  onClick={handleDelete}
                >
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
      </div>
    </header>
  )
}
