import type { Meta, StoryObj } from "@storybook/react"
import { TrialBanner } from "../../src/components/layout/TrialBanner"

const meta: Meta<typeof TrialBanner> = {
  title: "Components/TrialBanner",
  component: TrialBanner,
  parameters: {
    backgrounds: { default: "dark", values: [{ name: "dark", value: "#0F172A" }] },
  },
}

export default meta
type Story = StoryObj<typeof TrialBanner>

export const ManyDays: Story = {
  args: { daysLeft: 14 },
}

export const FewDays: Story = {
  args: { daysLeft: 3 },
}

export const LastDay: Story = {
  args: { daysLeft: 1 },
}
