import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: "📅",
    title: "Plano semanal personalizado",
    description: "Informe quantos dias e quanto tempo você tem. Criamos um plano de treino feito para a sua rotina.",
  },
  {
    icon: "🔥",
    title: "Check-in diário e streak",
    description: "Registre cada treino realizado e acompanhe seu histórico de frequência. Consistência vira hábito.",
  },
  {
    icon: "🔔",
    title: "Lembretes no seu horário",
    description: "Configure notificações para o dia e horário que funciona para você. Sem desculpas.",
  },
  {
    icon: "💪",
    title: "Personal trainer disponível",
    description: "Acompanhamento profissional para evoluir com segurança e alcançar seus objetivos mais rápido.",
  },
  {
    icon: "🥗",
    title: "Nutricionista e médico",
    description: "Cardápio semanal personalizado e acesso a consultas médicas e exames integrados ao seu histórico.",
  },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="border-b border-border px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-primary">Better Life</span>
        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost" className="text-foreground hover:bg-secondary">Entrar</Button>
          </Link>
          <Link href="/login">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Começar grátis</Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center space-y-6">
        <Badge className="bg-accent/10 text-accent border-accent/20">Trial gratuito de 14 dias</Badge>
        <h1 className="text-5xl font-bold leading-tight">
          Seu treino, no seu ritmo.<br />
          <span className="text-primary">Toda semana.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Monte seu plano de exercícios conforme sua disponibilidade e transforme atividade física em hábito — com o apoio de profissionais quando precisar.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/login">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8">
              Começar grátis
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary text-base">
              Ver planos
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center">Tudo que você precisa para criar o hábito</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="bg-card border-border">
              <CardHeader>
                <div className="text-3xl mb-2">{f.icon}</div>
                <CardTitle className="text-foreground text-base">{f.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center">Planos simples e transparentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Better Life Start</CardTitle>
              <div className="text-3xl font-bold text-foreground">Grátis</div>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                "Plano com até 3 treinos por semana",
                "15 exercícios na biblioteca",
                "Streak dos últimos 7 dias",
                "Notificações de lembrete",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">✓</span> {item}
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card border-primary border-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-foreground">Better Life Pro</CardTitle>
                <Badge className="bg-accent text-accent-foreground">Mais popular</Badge>
              </div>
              <div className="text-3xl font-bold text-foreground">
                R$ 49,90<span className="text-lg font-normal text-muted-foreground">/mês</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                "Treinos ilimitados por semana",
                "Biblioteca completa de exercícios",
                "Histórico completo de streak",
                "Personal trainer disponível",
                "Nutricionista e cardápio semanal",
                "Consultas médicas e exames",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-accent">✓</span> {item}
                </div>
              ))}
              <Link href="/login" className="block mt-4">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Começar trial gratuito
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 Better Life. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}
