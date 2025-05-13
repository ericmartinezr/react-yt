'use client';

import Link from 'next/link';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Menu() {
  const { data, error, isLoading } = useSWR('/api/subscriptions', fetcher);

  if (isLoading) return <h1>Cargando...</h1>;
  if (error) return <h1>Error</h1>;

  return (
    <div className='flex flex-col gap-[32px] pt-6 pl-1 pr-1 divide-y divide-y-1 divide-gray-600'>
      <div className='m-2 pb-5'>
        <Link
          href={'/'}
          className='menu'>
          Inicio
        </Link>
      </div>
      <div className='m-2'>
        <h3>Suscripciones</h3>
        <ul className='m-2'>
          {data.map((subscription, index) => (
            <li key={index}>
              <Link
                href={`/subscription/${subscription.channelName}`}
                className='menu'>
                {subscription.channelName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
