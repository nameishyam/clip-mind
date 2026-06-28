import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/context/AuthContext"

export default function Dashboard() {
  const { clips } = useAuth()

  return (
    <main className="flex-1 overflow-y-auto p-4">
      <div className="grid gap-4">
        {clips.map((clip) => (
          <Card
            key={clip.id}
            className="cursor-pointer transition-colors hover:bg-accent/40"
          >
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-3">
                <CardTitle className="line-clamp-1 text-base">
                  {clip.title}
                </CardTitle>

                <Badge variant="secondary">{clip.domain}</Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-3">
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {clip.content}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{clip.createdAt}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
