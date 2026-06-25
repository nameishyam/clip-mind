import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Controller, useForm } from "react-hook-form"

import { Field, FieldError, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { SpinnerCustom } from "@/components/ui/spinner"
import { useAuth } from "@/context/AuthContext"
import { api } from "@/lib/api"
import { zodResolver } from "@hookform/resolvers/zod"
import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { z } from "zod"

const signupSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

export default function Signup() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const signupForm = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      firstName: ``,
      lastName: ``,
      email: ``,
      password: ``,
      confirmPassword: ``,
    },
  })

  const handleSubmit = async (values: z.infer<typeof signupSchema>) => {
    if (values.password !== values.confirmPassword) {
      toast.error("Passwords do not match")
      return
    }
    setIsLoading(true)
    try {
      const dataToSend = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      }
      await api.post(`/auth/signup`, dataToSend)
      await login()
      toast.success("User created successfully!")
      navigate("/dashboard")
    } catch (err: any) {
      if (err.response?.status === 409) {
        toast.error("User already exists")
      } else if (err.response?.status === 400) {
        toast.error("Invalid data provided")
      } else if (err.response?.status === 500) {
        toast.error("Server error, please try again later")
      } else {
        toast.error("An error occurred while creating the account")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="p-5">
      <Card className="border-0 shadow-none">
        <CardHeader className="px-0 pt-0">
          <CardTitle>Create account</CardTitle>

          <CardDescription>
            Create your ClipMind account to start saving and organizing your
            knowledge.
          </CardDescription>
        </CardHeader>

        <form
          onSubmit={signupForm.handleSubmit(handleSubmit)}
          className="space-y-3"
        >
          <CardContent className="space-y-4 px-0">
            <div className="grid grid-cols-2 gap-3">
              <Controller
                name="firstName"
                control={signupForm.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>First Name</FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      placeholder="John"
                      aria-invalid={fieldState.invalid}
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="lastName"
                control={signupForm.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={field.name}>Last Name</FieldLabel>

                    <Input
                      {...field}
                      id={field.name}
                      placeholder="Doe"
                      aria-invalid={fieldState.invalid}
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            <Controller
              name="email"
              control={signupForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email</FieldLabel>

                  <Input
                    {...field}
                    id={field.name}
                    type="email"
                    placeholder="john@example.com"
                    aria-invalid={fieldState.invalid}
                  />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="password"
              control={signupForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>

                  <div className="relative">
                    <Input
                      {...field}
                      id={field.name}
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      aria-invalid={fieldState.invalid}
                    />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      tabIndex={-1}
                      className="absolute top-0 right-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            <Controller
              name="confirmPassword"
              control={signupForm.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Confirm Password</FieldLabel>

                  <div className="relative">
                    <Input
                      {...field}
                      id={field.name}
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      aria-invalid={fieldState.invalid}
                    />

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      tabIndex={-1}
                      className="absolute top-0 right-0 h-full px-3"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </Button>
                  </div>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </CardContent>

          <CardFooter className="flex flex-col gap-3 px-0">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <SpinnerCustom /> : "Create Account"}
            </Button>

            <Button
              type="button"
              variant="link"
              className="h-auto p-0 text-sm"
              onClick={() => navigate("/login")}
            >
              Already have an account? Log In
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
