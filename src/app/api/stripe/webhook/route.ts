import { NextRequest, NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { db } from "@/lib/db"
import Stripe from "stripe"

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get("stripe-signature")!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session
      const userId = session.metadata?.userId
      if (!userId) break

      await db.user.update({
        where: { id: userId },
        data: {
          plan: "PRO",
          stripeCustomerId: session.customer as string,
          stripeSubscriptionId: session.subscription as string,
        },
      })
      break
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice
      const subscriptionId =
        (invoice as unknown as { parent?: { subscription_details?: { subscription?: string } } })
          ?.parent?.subscription_details?.subscription

      if (!subscriptionId) break

      const periodEnd = invoice.period_end
      await db.user.updateMany({
        where: { stripeSubscriptionId: subscriptionId },
        data: {
          plan: "PRO",
          stripeCurrentPeriodEnd: new Date(periodEnd * 1000),
        },
      })
      break
    }

    case "customer.subscription.updated": {
      const sub = event.data.object as Stripe.Subscription & { current_period_end?: number }
      const periodEnd = sub.current_period_end
      await db.user.updateMany({
        where: { stripeSubscriptionId: sub.id },
        data: {
          stripeCurrentPeriodEnd: periodEnd ? new Date(periodEnd * 1000) : null,
        },
      })
      break
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as Stripe.Subscription
      await db.user.updateMany({
        where: { stripeSubscriptionId: sub.id },
        data: { plan: "FREE", stripeSubscriptionId: null, stripeCurrentPeriodEnd: null },
      })
      break
    }
  }

  return NextResponse.json({ received: true })
}
