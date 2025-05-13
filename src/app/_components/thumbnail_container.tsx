'use client';

import Thumbnail from './thumbnail';
import { type ThumbnailData } from '../_interfaces/thumbnail_data';

export default function ThumbnailContainer({
  data,
}: {
  data: ThumbnailData[];
}) {
  return (
    <div className='flex flex-row flex-wrap 2xl:gap-16 md:gap-24 pt-5 items-center sm:items-start'>
      {data.map((thumbnail, index) => (
        <Thumbnail
          key={index}
          data={thumbnail}
        />
      ))}
    </div>
  );
}
