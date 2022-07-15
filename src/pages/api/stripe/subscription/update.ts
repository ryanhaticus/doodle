import { useAuth } from '@/doodle/server/auth';
import { useFirestore } from '@/doodle/server/firestore';
import { useStripe } from '@/doodle/server/stripe';
import { ISubscription } from '@/doodle/types/Subscription';
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
    status: 'all',
  });

  const firestore = await useFirestore();

  const mappedSubscriptions = await Promise.all(
    subscriptions.data.map(async (s) => {
      const { id, status, current_period_end, created, current_period_start } =
        s;

      const item = s.items.data.length > 0 ? s.items.data[0] : null;

      const { plan } = item;

      const { product: productId } = plan;

      const { name } = await stripe.products.retrieve(productId as string);

      return {
        id,
        status,
        created,
        current_period_start,
        current_period_end,
        name,
        cancelled: s.cancel_at_period_end,
        plan: {
          id: plan.id,
          amount: plan.amount,
        },
      };
    }),
  );

  await firestore.collection('users').doc(user.uid).update({
    subscriptions: mappedSubscriptions,
  });

  res.status(200).json({
    message: 'Subscriptions updated',
    code: 'stripe/subscriptions-updated',
  });
};

export default handler;
