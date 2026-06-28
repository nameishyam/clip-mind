import { createHashRouter, RouterProvider } from "react-router-dom"

import Home from "@/pages/Home"
import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import PopupLayout from "@/layout/PopupLayout"
import Dashboard from "@/pages/Dashboard"
import Profile from "@/pages/Profile"
import HomeLayout from "@/layout/HomeLayout"

const router = createHashRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    element: <PopupLayout />,
    children: [
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
    ],
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
