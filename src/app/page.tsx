'use client';

import useSWR from 'swr';
import ThumbnailContainer from './_components/thumbnail_container';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error, isLoading } = useSWR('api/videos', fetcher);

  if (isLoading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error</h1>;

  return <ThumbnailContainer data={data} />;
}
