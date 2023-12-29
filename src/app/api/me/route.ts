import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getUserByUserId } from '@/service/user';

export async function GET() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentiaction Error', { status: 401 });
  }

  return getUserByUserId(user.userid).then(data => NextResponse.json(data));
}
