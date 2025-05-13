import Image from 'next/image';
import Link from 'next/link';
import { type ThumbnailData } from '../_interfaces/thumbnail_data';

export default function Thumbnail({ data }: { data: ThumbnailData }) {
  return (
    <Link href={`/video/${data.id}`}>
      <div className='flex flex-col gap-[10px]'>
        <div className='relative 2xl:w-[400px] 2xl:min-h-[300px] 2xl:min-h-[300px] md:min-w-[300px] md:min-h-[200px]'>
          <Image
            fill={true}
            src={data.src}
            alt={'Image'}
            sizes='(max-width: 768px) 300px,300px, (max-width: 1536px) 400px, 400px'
            style={{
              boxShadow: 'rgba(255, 255, 255, 0.16) 0px 0px 1px',
              borderRadius: '10px',
            }}
          />
        </div>
        <div className='text-white font-bold'>{data.title}</div>
        <div className='text-sm/6 text-gray-600 font-semibold'>
          {data.channelName}
          <div className='flex flex-row gap-2'>
            <Image
              src={'/assets/eye.svg'}
              width={24}
              height={24}
              alt={'Viewers Icon'}
            />
            {data.viewersNum}
          </div>
        </div>
      </div>
    </Link>
  );
}
