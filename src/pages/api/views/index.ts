import type { NextApiRequest, NextApiResponse } from 'next';
import { getSpecificFields } from './utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log('async function handler1');
    const data = await getSpecificFields({
      fields: ['slug', 'views']
    });

    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
}
