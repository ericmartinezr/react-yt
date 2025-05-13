import { getVideosByChannelName } from '@/db';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ channelName: string }> }
) {
  const { channelName } = await params;
  const videos = await getVideosByChannelName(channelName);
  return Response.json(videos);
}
