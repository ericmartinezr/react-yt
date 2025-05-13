import { getVideos } from '@/db';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const videos = await getVideos();
  return Response.json(videos);
}
