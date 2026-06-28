import { Link, useNavigate } from "react-router-dom"
import {
  Brain,
  Clipboard,
  LogOut,
  Trash2,
  User2Icon,
  UserIcon,
} from "lucide-react"
import ModeToggle from "@/components/shared/ModeToggle"
import { useAuth } from "@/context/AuthContext"
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
import { toast } from "sonner"
import { useState } from "react"
import { api } from "@/lib/api"

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleDelete = async () => {
    const response = await api.delete("/auth")
    if (response.status !== 204) {
      toast.error("error deleting the user")
      console.log(response.data)
    } else {
      logout()
      navigate("/")
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
        {isAuthenticated() ? (
          <>
            <div className="flex flex-row flex-wrap items-center gap-12">
              <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="cursor-pointer">
                      <AvatarFallback className="text-xs">
                        <UserIcon />
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56" align="start">
                    <DropdownMenuLabel className="p-0 font-normal">
                      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <Avatar className="h-8 w-8 rounded-lg">
                          <AvatarFallback className="rounded-lg">
                            <UserIcon />
                          </AvatarFallback>
                        </Avatar>
                        <div className="grid flex-1 text-left text-sm leading-tight">
                          <span className="truncate font-medium">
                            {user?.firstName}
                          </span>
                          <span className="truncate text-xs">
                            {user?.email}
                          </span>
                        </div>
                      </div>
                    </DropdownMenuLabel>

                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem
                        onSelect={() => navigate("/profile")}
                        className="hover:cursor-pointer"
                      >
                        <User2Icon />
                        Profile
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => navigate("/dashboard")}
                        className="hover:cursor-pointer"
                      >
                        <Clipboard />
                        Dashboard
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onSelect={() => {
                          logout()
                          toast.success("Logged out successfully")
                          navigate("/")
                        }}
                        className="hover:cursor-pointer"
                      >
                        <LogOut />
                        Log out
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        className="hover: cursor-pointer"
                        onSelect={(e) => {
                          e.preventDefault()
                          setIsOpen(true)
                        }}
                      >
                        <Trash2 />
                        Delete Account
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter className="flex-row justify-center gap-2">
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
            </div>
            <ModeToggle />
          </>
        ) : (
          <ModeToggle />
        )}
      </div>
    </header>
  )
}
