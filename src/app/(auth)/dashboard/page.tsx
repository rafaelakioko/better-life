import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { redirect } from "next/navigation"
import { hasAccess, daysLeftInTrial, isTrialActive } from "@/lib/subscription"
import { TrialBanner } from "@/components/layout/TrialBanner"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PLAN_LIMITS } from "@/lib/plan-limits"
import { PaywallGate } from "@/components/paywall/PaywallGate"

export default async function DashboardPage() {
  const session = await auth()
  if (!session?.user?.id) redirect("/login")

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    include: {
      streaks: true,
      workoutPlans: { where: { ativo: true }, take: 1 },
      workoutLogs: { orderBy: { data: "desc" }, take: 7 },
    },
  })

  if (!user) redirect("/login")
  if (!hasAccess(user)) redirect("/settings/billing")

  const streak = user.streaks[0]
  const activePlan = user.workoutPlans[0]
  const limits = PLAN_LIMITS[user.plan]
  const trialDays = daysLeftInTrial(user)

  return (
    <div className="min-h-screen bg-background">
      {isTrialActive(user) && <TrialBanner daysLeft={trialDays} />}

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Olá, {user.name?.split(" ")[0]} 👋
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Seu treino, no seu ritmo. Toda semana.
            </p>
          </div>
          <Badge className={user.plan === "PRO" ? "bg-accent text-accent-foreground" : "bg-primary/20 text-primary"}>
            {user.plan}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Streak atual</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-accent">
                {streak?.diasConsecutivos ?? 0} 🔥
              </div>
              <p className="text-xs text-muted-foreground mt-1">dias consecutivos</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Treinos essa semana</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">
                {user.workoutLogs.filter(l => l.concluido).length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                de {activePlan?.diasPorSemana ?? limits.diasTreinoPorSemana} planejados
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-muted-foreground">Plano ativo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-lg font-bold text-foreground">
                {activePlan ? `${activePlan.diasPorSemana}x/semana` : "Nenhum"}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {activePlan ? `${activePlan.minutosPorSessao} min por sessão` : "Crie seu plano"}
              </p>
            </CardContent>
          </Card>
        </div>

        <PaywallGate
          locked={!limits.acessoProfissionais}
          title="Acompanhamento com profissionais"
          description="Faça upgrade para PRO e tenha acesso a personal trainers, nutricionistas e médicos."
        >
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Seus profissionais</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Agende consultas com personal trainer, nutricionista ou médico.
              </p>
            </CardContent>
          </Card>
        </PaywallGate>
      </div>
    </div>
  )
}
