import type { Meta, StoryObj } from "@storybook/react"
import { PaywallGate } from "../../src/components/paywall/PaywallGate"
import { Card, CardContent, CardHeader, CardTitle } from "../../src/components/ui/card"

const meta: Meta<typeof PaywallGate> = {
  title: "Components/PaywallGate",
  component: PaywallGate,
  parameters: {
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#0F172A" }] },
  },
}

export default meta
type Story = StoryObj<typeof PaywallGate>

export const Locked: Story = {
  args: {
    locked: true,
    title: "Acompanhamento com profissionais",
    description: "Faça upgrade para PRO e tenha acesso a personal trainers, nutricionistas e médicos.",
    children: null,
  },
}

export const Unlocked: Story = {
  args: {
    locked: false,
    children: (
      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">Seus profissionais</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm">Conteúdo liberado para usuários Pro.</p>
        </CardContent>
      </Card>
    ),
  },
}
