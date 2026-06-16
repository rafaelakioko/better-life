"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

interface TrialBannerProps {
  daysLeft: number
}

export function TrialBanner({ daysLeft }: TrialBannerProps) {
  const router = useRouter()

  return (
    <div className="w-full bg-primary/10 border-b border-primary/20 px-4 py-2 flex items-center justify-between text-sm">
      <span className="text-foreground">
        Seu trial gratuito expira em <strong>{daysLeft} dia{daysLeft !== 1 ? "s" : ""}</strong>.
      </span>
      <Button
        size="sm"
        onClick={() => router.push("/settings/billing")}
        className="bg-primary text-primary-foreground hover:bg-primary/90 h-7 text-xs"
      >
        Fazer upgrade
      </Button>
    </div>
  )
}
