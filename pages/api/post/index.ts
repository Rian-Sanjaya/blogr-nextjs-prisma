import { getSession } from 'next-auth/react';
import prisma from '../../../lib/prisma';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;

  const session = await getSession({ req });
  console.log('session: ', session);
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      // author: { connect: { email: session?.user?.email } },
      author: { connect: { email: 'rian.sj@gmail.com' } },
    },
  });
  res.json(result);
}