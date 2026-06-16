import type { Meta, StoryObj } from "@storybook/react"
import { tokens } from "../../design-system/tokens"

function TypographyScale() {
  const sizes = Object.entries(tokens.typography).filter(([key]) => key.startsWith("size"))

  return (
    <div style={{ padding: "2rem", background: tokens.colors.background, minHeight: "100vh" }}>
      <h2 style={{ color: tokens.colors.foreground, marginBottom: "1.5rem", fontFamily: "sans-serif" }}>
        Better Life — Typography Scale
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {sizes.map(([key, value]) => (
          <div key={key} style={{ borderBottom: `1px solid ${tokens.colors.border}`, paddingBottom: "1rem" }}>
            <div style={{ color: tokens.colors.mutedForeground, fontSize: "0.75rem", fontFamily: "monospace", marginBottom: "0.5rem" }}>
              {key} — {value}
            </div>
            <div style={{ color: tokens.colors.foreground, fontSize: value, fontFamily: "sans-serif" }}>
              Better Life — Seu treino, no seu ritmo.
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Design Tokens/Typography",
  component: TypographyScale,
}

export default meta

export const Scale: StoryObj = {}
