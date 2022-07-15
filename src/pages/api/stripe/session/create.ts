import { NextApiRequest, NextApiResponse } from 'next';

import { useAuth } from '@/doodle/server/auth';
import { useStripe } from '@/doodle/server/stripe';
import doodleConfig from '@/doodle/config';

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

  const { priceId } = req.body;

  if (!priceId) {
    res.status(400).json({
      message: 'Missing priceId',
      code: 'api/missing-price-id',
    });
    return;
  }

  const stripe = useStripe();

  const customers = await stripe.customers.list();
  const customer =
    customers.data.find((c) => c.metadata.uid === user.id) ||
    (await stripe.customers.create({
      email: user.email,
      metadata: {
        uid: user.uid,
      },
    }));

  const { successUrl, cancelUrl } = doodleConfig.stripe;

  const origin = req.headers.origin;

  const { url, id } = await stripe.checkout.sessions.create({
    customer: customer.id,
    payment_method_types: ['card'],
    subscription_data: {
      items: [
        {
          plan: priceId,
        },
      ],
    },
    success_url: `${origin}${successUrl}`,
    cancel_url: `${origin}${cancelUrl}`,
  });

  res.status(200).json({
    sessionId: id,
    url: url,
  });
};

export default handler;
