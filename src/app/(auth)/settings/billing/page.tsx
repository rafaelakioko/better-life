import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { isSubscribed, isTrialActive, daysLeftInTrial } from "@/lib/subscription"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckoutButton } from "./CheckoutButton"
import { PortalButton } from "./PortalButton"

export default async function BillingPage() {
  const session = await auth()
  if (!session?.user?.id) redirect("/login")

  const user = await db.user.findUnique({ where: { id: session.user.id } })
  if (!user) redirect("/login")

  const subscribed = isSubscribed(user)
  const trial = isTrialActive(user)
  const daysLeft = daysLeftInTrial(user)

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Plano & Cobrança</h1>
          <p className="text-muted-foreground text-sm mt-1">Gerencie sua assinatura do Better Life</p>
        </div>

        <Card className="bg-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-foreground">Plano atual</CardTitle>
              <Badge className={subscribed ? "bg-accent text-accent-foreground" : "bg-primary/20 text-primary"}>
                {user.plan}
              </Badge>
            </div>
            <CardDescription className="text-muted-foreground">
              {subscribed && "Acesso completo ao Better Life Pro"}
              {trial && `Trial ativo — ${daysLeft} dia${daysLeft !== 1 ? "s" : ""} restante${daysLeft !== 1 ? "s" : ""}`}
              {!subscribed && !trial && "Seu trial expirou. Faça upgrade para continuar."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {subscribed ? (
              <PortalButton />
            ) : (
              <CheckoutButton />
            )}
          </CardContent>
        </Card>

        {!subscribed && (
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Better Life Pro</CardTitle>
              <CardDescription className="text-muted-foreground">Tudo que você precisa para uma vida mais saudável</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-3xl font-bold text-foreground">
                R$ 49,90<span className="text-lg font-normal text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Plano semanal ilimitado de treinos",
                  "Biblioteca completa de exercícios",
                  "Histórico completo de streak",
                  "Acompanhamento com personal trainer",
                  "Plano nutricional com nutricionista",
                  "Acesso a consultas médicas e exames",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-accent">✓</span> {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
