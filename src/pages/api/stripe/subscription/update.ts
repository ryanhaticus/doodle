import { useAuth } from '@/doodle/server/auth';
import { useFirestore } from '@/doodle/server/firestore';
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

  const firestore = await useFirestore();

  await firestore
    .collection('users')
    .doc(user.uid)
    .update({
      subscriptions: subscriptions.data.map((s) => {
        const planId = s.items.data.length > 0 ? s.items.data[0].id : null;

        return {
          id: s.id,
          status: s.status,
          created: s.created,
          current_period_start: s.current_period_start,
          current_period_end: s.current_period_end,
          planId: planId ?? 'unknown',
        };
      }),
    });

  res.status(200).json({
    message: 'Subscriptions updated',
    code: 'stripe/subscriptions-updated',
  });
};

export default handler;
