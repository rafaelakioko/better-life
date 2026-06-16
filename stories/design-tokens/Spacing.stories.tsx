import type { Meta, StoryObj } from "@storybook/react"
import { tokens } from "../../design-system/tokens"

function SpacingScale() {
  return (
    <div style={{ padding: "2rem", background: tokens.colors.background, minHeight: "100vh" }}>
      <h2 style={{ color: tokens.colors.foreground, marginBottom: "1.5rem", fontFamily: "sans-serif" }}>
        Better Life — Spacing Scale
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {Object.entries(tokens.spacing).map(([key, value]) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ color: tokens.colors.mutedForeground, fontSize: "0.75rem", fontFamily: "monospace", width: "60px" }}>
              {key}
            </div>
            <div style={{ background: tokens.colors.primary, height: "24px", width: value, borderRadius: "4px" }} />
            <div style={{ color: tokens.colors.mutedForeground, fontSize: "0.75rem", fontFamily: "monospace" }}>
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Design Tokens/Spacing",
  component: SpacingScale,
}

export default meta

export const Scale: StoryObj = {}
