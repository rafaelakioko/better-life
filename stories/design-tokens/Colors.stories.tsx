import type { Meta, StoryObj } from "@storybook/react"
import { tokens } from "../../design-system/tokens"

function ColorsGrid() {
  return (
    <div style={{ padding: "2rem", background: tokens.colors.background, minHeight: "100vh" }}>
      <h2 style={{ color: tokens.colors.foreground, marginBottom: "1.5rem", fontFamily: "sans-serif" }}>
        Better Life — Color Tokens
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1rem" }}>
        {Object.entries(tokens.colors).map(([key, value]) => (
          <div key={key} style={{ borderRadius: "0.5rem", overflow: "hidden", border: "1px solid #334155" }}>
            <div style={{ background: value, height: "80px" }} />
            <div style={{ background: "#1E293B", padding: "0.75rem" }}>
              <div style={{ color: "#F8FAFC", fontSize: "0.75rem", fontFamily: "monospace", fontWeight: "bold" }}>
                {key}
              </div>
              <div style={{ color: "#64748B", fontSize: "0.7rem", fontFamily: "monospace", marginTop: "0.25rem" }}>
                {value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const meta: Meta = {
  title: "Design Tokens/Colors",
  component: ColorsGrid,
}

export default meta

export const AllColors: StoryObj = {}
