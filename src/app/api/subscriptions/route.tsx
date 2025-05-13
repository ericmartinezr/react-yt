import { getSubscriptions, getVideos } from '@/db';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const subscriptions = await getSubscriptions();
  return Response.json(subscriptions);
}
