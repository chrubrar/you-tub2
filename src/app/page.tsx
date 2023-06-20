'use client';

import Image from 'next/image'
import { feedVideos } from './utils/data'
import { BsDot, BsThreeDotsVertical } from 'react-icons/bs'

export default function Home() {
  return (  
     <div className="flex flex-col px-8 py-4 md:flex-row flex-wrap lg:gap-4 lg:flex-row flex-1">
      {feedVideos.map((video)=>(
       
       // eslint-disable-next-line react/jsx-key
       <div className="flex flex-col gap-3 w-[300px]">
          <div className="">
            <Image
            src={video.thumbnailUrl}
            height={180}
             width={300}
            alt="thumbnail"
            className="rounded-2xl"  />
        </div>
      
        <div className="flex gap-3"> 
            <div><Image src={video.channelImageUrl} width={30} height={30} 
            alt="channelimage" className="rounded-full" />
         </div>
          <div className="flex flex-col gap-2">
            <div className='flex justify-between'>
              <span className='font-semibold text-white'>{video.title}</span>
              <BsThreeDotsVertical />
            </div>
              <div className="text-sm text-zinc-400">
                <span>{video.channelName}</span>
                <div className='flex items-center'>
                  <span>{video.viewCount}</span>
                  <span><BsDot /></span>
                  <span>{video.createdAt.toDateString()}</span>
                </div>
              </div>
            </div>
          </div>      
        </div>
      ))} </div>
  );
}
