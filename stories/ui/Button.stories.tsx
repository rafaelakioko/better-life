import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "../../src/components/ui/button"

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  parameters: {
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#0F172A" }] },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { children: "Começar grátis", className: "bg-primary text-white" },
}

export const Outline: Story = {
  args: { children: "Ver planos", variant: "outline" },
}

export const Upgrade: Story = {
  args: { children: "Fazer upgrade para Pro", className: "bg-primary text-white" },
}

export const Destructive: Story = {
  args: { children: "Cancelar assinatura", variant: "destructive" },
}
