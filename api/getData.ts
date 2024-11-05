import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/lib/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const querySnapshot = await getDocs(collection(db, "your-collection"));
  const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  res.status(200).json(data);
}