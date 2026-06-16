"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

export function CheckoutButton() {
  const [loading, setLoading] = useState(false)

  async function handleUpgrade() {
    setLoading(true)
    const res = await fetch("/api/checkout", { method: "POST" })
    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <Button
      onClick={handleUpgrade}
      disabled={loading}
      className="bg-primary text-primary-foreground hover:bg-primary/90"
    >
      {loading ? "Aguarde..." : "Fazer upgrade para Pro — R$ 49,90/mês"}
    </Button>
  )
}
