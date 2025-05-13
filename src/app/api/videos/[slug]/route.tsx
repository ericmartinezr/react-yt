import { getVideoById } from '@/db';
import { NextRequest } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: number }> }
) {
  const { slug } = await params;
  const videos = await getVideoById(Number(slug));
  return Response.json(videos);
}
