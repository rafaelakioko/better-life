export type DesignTokens = {
  colors: Record<string, string>
  sidebar: Record<string, string>
  radius: Record<string, string>
  spacing: Record<string, string>
  typography: Record<string, string>
}

export const tokens: DesignTokens = {
  colors: {
    // Better Life brand
    background: "#0F172A",
    foreground: "#F8FAFC",
    primary: "#3B82F6",
    primaryForeground: "#FFFFFF",
    accent: "#22C55E",
    accentForeground: "#FFFFFF",
    // UI
    card: "#1E293B",
    cardForeground: "#F8FAFC",
    popover: "#1E293B",
    popoverForeground: "#F8FAFC",
    secondary: "#1E293B",
    secondaryForeground: "#94A3B8",
    muted: "#1E293B",
    mutedForeground: "#64748B",
    border: "#334155",
    input: "#334155",
    ring: "#3B82F6",
    destructive: "#EF4444",
    destructiveForeground: "#FFFFFF",
  },
  sidebar: {
    background: "#0F172A",
    foreground: "#F8FAFC",
    primary: "#3B82F6",
    primaryForeground: "#FFFFFF",
    accent: "#1E293B",
    accentForeground: "#F8FAFC",
    border: "#334155",
    ring: "#3B82F6",
  },
  radius: {
    sm: "0.375rem",
    md: "0.5rem",
    lg: "0.75rem",
    xl: "1rem",
  },
  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
  },
  typography: {
    fontSans: "var(--font-geist-sans)",
    fontMono: "var(--font-geist-mono)",
    sizeXs: "0.75rem",
    sizeSm: "0.875rem",
    sizeMd: "1rem",
    sizeLg: "1.125rem",
    sizeXl: "1.25rem",
    size2xl: "1.5rem",
    size3xl: "1.875rem",
    size4xl: "2.25rem",
  },
}
