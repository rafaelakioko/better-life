"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function PortalButton() {
  const [loading, setLoading] = useState(false)

  async function handlePortal() {
    setLoading(true)
    const res = await fetch("/api/portal", { method: "POST" })
    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <Button
      onClick={handlePortal}
      disabled={loading}
      variant="outline"
      className="border-border text-foreground hover:bg-secondary"
    >
      {loading ? "Aguarde..." : "Gerenciar assinatura"}
    </Button>
  )
}
