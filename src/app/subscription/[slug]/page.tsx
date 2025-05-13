'use client';

import Image from 'next/image';
import ThumbnailContainer from '@/app/_components/thumbnail_container';
import { useParams } from 'next/navigation';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const params = useParams<{ slug: string }>();
  const { data, error, isLoading } = useSWR(
    `/api/channel/${params.slug}`,
    fetcher
  );

  if (isLoading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div className='flex flex-col gap-5 m-20 divide-y divide-y-1 divide-gray-600'>
      <div className='relative w-full min-w-[300px] min-h-[200px]'>
        <Image
          fill={true}
          src={'/assets/banner.jpg'}
          alt={'Banner'}
          sizes='(max-width: 768px) 300px,300px, (max-width: 1536px) 400px, 400px'
          style={{
            boxShadow: 'rgba(255, 255, 255, 0.16) 0px 0px 1px',
            borderRadius: '10px',
          }}
        />
      </div>
      <div className='w-full max-h-[300px] flex flex-row gap-20 mt-5 pb-10'>
        <div>
          <Image
            src={'/assets/avatar.svg'}
            width={128}
            height={128}
            alt={'Avatar'}
            sizes='(max-width: 768px) 300px,300px, (max-width: 1536px) 400px, 400px'
          />
        </div>
        <div className='font-bold flex flex-col gap-2'>
          <div className='text-gray-300 text-2xl'>{data[0].channelName}</div>
          <div className='text-gray-600'>{data.length} videos</div>
        </div>
      </div>
      <div>
        <ThumbnailContainer data={data} />
      </div>
    </div>
  );
}
