import type { Meta, StoryObj } from "@storybook/react"
import { Badge } from "../../src/components/ui/badge"

const meta: Meta<typeof Badge> = {
  title: "UI/Badge",
  component: Badge,
  parameters: {
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#0F172A" }] },
  },
}

export default meta
type Story = StoryObj<typeof Badge>

export const Free: Story = {
  args: { children: "FREE", className: "bg-primary/20 text-primary" },
}

export const Pro: Story = {
  args: { children: "PRO", className: "bg-accent text-white" },
}

export const Trial: Story = {
  args: { children: "Trial gratuito de 14 dias", className: "bg-accent/10 text-accent border-accent/20" },
}
