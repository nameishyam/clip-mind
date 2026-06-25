import { createHashRouter, RouterProvider } from "react-router-dom"

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import PopupLayout from "@/components/layout/PopupLayout"
import Dashboard from "@/pages/Dashboard"
import Profile from "@/pages/Profile"
import Clips from "@/pages/Clips"

const router = createHashRouter([
  {
    element: <PopupLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/clips",
        element: <Clips />,
      },
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
