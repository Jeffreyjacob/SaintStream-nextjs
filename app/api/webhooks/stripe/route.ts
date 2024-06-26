import stripe from 'stripe'
import { NextResponse } from 'next/server'
import { CreateSubscriber } from '@/lib/actions/subscribe.action'


export async function POST(request: Request) {
  const body = await request.text()

  const sig = request.headers.get('stripe-signature') as string
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

  let event

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret)
  } catch (err) {
    return NextResponse.json({ message: 'Webhook error', error: err })
  }

  // Get the ID and type
  const eventType = event.type

  // CREATE
  if (eventType === 'checkout.session.completed') {
    const { id, amount_total, metadata } = event.data.object

    const Subscription = {
      stripeId: id,
      planId: metadata?.planId || '',
      buyerId: metadata?.buyerId || '',
      totalAmount: amount_total ? (amount_total / 100).toString() : '0',
      createdAt: new Date(),
    }

    const newSubscriber = await CreateSubscriber(Subscription)

    
    return NextResponse.json({ message: 'OK', subscribe: newSubscriber})
  }

  return new Response('', { status: 200 })
}