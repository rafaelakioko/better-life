import { auth } from "@/lib/auth"
import { createCustomerPortalSession } from "@/lib/stripe"
import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function POST() {
  const session = await auth()
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const user = await db.user.findUnique({ where: { id: session.user.id } })
  if (!user?.stripeCustomerId) {
    return NextResponse.json({ error: "No Stripe customer" }, { status: 400 })
  }

  const portal = await createCustomerPortalSession(user.stripeCustomerId)
  return NextResponse.json({ url: portal.url })
}
