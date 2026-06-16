import type { Meta, StoryObj } from "@storybook/react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../src/components/ui/card"

const meta: Meta = {
  title: "UI/Card",
  parameters: {
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#0F172A" }] },
  },
}

export default meta

export const Default: StoryObj = {
  render: () => (
    <Card className="bg-card border-border w-80">
      <CardHeader>
        <CardTitle className="text-foreground">Streak atual</CardTitle>
        <CardDescription className="text-muted-foreground">Seu progresso semanal</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-accent">7 🔥</div>
        <p className="text-xs text-muted-foreground mt-1">dias consecutivos</p>
      </CardContent>
    </Card>
  ),
}
