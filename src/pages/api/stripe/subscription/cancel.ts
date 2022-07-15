import { useAuth } from '@/doodle/server/auth';
import { useStripe } from '@/doodle/server/stripe';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    res.status(405).json({
      message: 'Method not allowed',
      code: 'api/method-not-allowed',
    });
    return;
  }

  const { DIT } = req.cookies;
  if (!DIT) {
    res.status(401).json({
      message: 'Unauthorized',
      code: 'api/unauthorized',
    });
    return;
  }

  const auth = await useAuth();

  const user = await auth.verifyIdToken(DIT);

  if (!user) {
    res.status(401).json({
      message: 'Unauthorized',
      code: 'api/unauthorized',
    });
    return;
  }

  const stripe = useStripe();

  const customers = await stripe.customers.list();

  const customer = customers.data.find((c) => c.metadata.uid === user.id);

  if (!customer) {
    res.status(401).json({
      message: 'Customer not found',
      code: 'stripe/customer-not-found',
    });
    return;
  }

  const subscriptions = await stripe.subscriptions.list({
    customer: customer.id,
  });

  const subscription = subscriptions.data.find((s) => s.status === 'active');

  if (!subscription) {
    res.status(401).json({
      message: 'Subscription not found',
      code: 'stripe/subscription-not-found',
    });
    return;
  }

  await stripe.subscriptions.update(subscription.id, {
    cancel_at_period_end: true,
  });

  res.status(200).json({
    message: 'Subscription cancelled',
    code: 'stripe/subscription-cancelled',
  });
};

export default handler;
