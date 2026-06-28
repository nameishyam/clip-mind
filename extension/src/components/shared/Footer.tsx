import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import z from "zod"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { api } from "@/lib/api"
import { useAuth } from "@/context/AuthContext"

const clipSchema = z.object({
  clip: z.string(),
})

export default function Footer() {
  const { setClips } = useAuth()

  const clipForm = useForm<z.infer<typeof clipSchema>>({
    resolver: zodResolver(clipSchema),
    defaultValues: {
      clip: "",
    },
  })

  async function getCurrentTabUrl() {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true,
    })
    return tab.url
  }

  const handleSubmit = async (values: z.infer<typeof clipSchema>) => {
    const url = await getCurrentTabUrl()
    const dataToSend = {
      content: values.clip,
      url,
    }
    const response = await api.post("/clips", dataToSend)
    setClips((prev) => [response.data, ...prev])
    clipForm.reset()
  }

  return (
    <footer className="border-t bg-background px-3 py-2">
      <form
        onSubmit={clipForm.handleSubmit(handleSubmit)}
        className="space-y-4"
      >
        <div className="flex items-center justify-center gap-3">
          <Controller
            name="clip"
            control={clipForm.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <Input
                  {...field}
                  id={field.name}
                  placeholder="add anything..."
                  aria-invalid={fieldState.invalid}
                />
              </Field>
            )}
          />
          <Button type="submit">
            <PlusIcon />
          </Button>
        </div>
      </form>
    </footer>
  )
}
