"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lock } from "lucide-react"
import { useRouter } from "next/navigation"

interface PaywallGateProps {
  children: React.ReactNode
  locked: boolean
  title?: string
  description?: string
}

export function PaywallGate({
  children,
  locked,
  title = "Recurso exclusivo do plano Pro",
  description = "Faça upgrade para ter acesso ilimitado a todos os recursos do Better Life.",
}: PaywallGateProps) {
  const router = useRouter()

  if (!locked) return <>{children}</>

  return (
    <Card className="border-dashed border-border bg-card text-center">
      <CardHeader>
        <div className="flex justify-center mb-2">
          <div className="rounded-full bg-primary/10 p-3">
            <Lock className="w-6 h-6 text-primary" />
          </div>
        </div>
        <CardTitle className="text-lg text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button onClick={() => router.push("/settings/billing")} className="bg-primary text-primary-foreground hover:bg-primary/90">
          Fazer upgrade para Pro
        </Button>
      </CardContent>
    </Card>
  )
}
