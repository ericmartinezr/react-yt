'use client';

import Image from 'next/image';
import ThumbnailContainer from '@/app/_components/thumbnail_container';
import { useParams } from 'next/navigation';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const params = useParams<{ slug: string }>();
  const { data, error, isLoading } = useSWR(
    `/api/videos/${params.slug}`,
    fetcher
  );

  if (isLoading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div className='flex flex-col gap-5 m-20 min-h-screen'>
      <div className='w-full h-[70vh] relative flex flex-row gap-20 mt-5 pb-10'>
        <Image
          fill
          src={'/thumbnails/thumbnail.jpg'}
          alt={'Video'}
        />
      </div>
      <div className='font-bold flex flex-col gap-2'>
        <div className='text-gray-300 text-2xl'>{data[0].title}</div>
        <div className='text-gray-600'>{data[0].channelName}</div>
      </div>
    </div>
  );
}
