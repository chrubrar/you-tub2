"use client";

import { BsBell, BsCameraVideo, BsMicFill, BsYoutube } from 'react-icons/bs'
import { HiOutlineMenu } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Image from 'next/image'
import { useState } from 'react'


const TopNavigation = () => {
    const [search, setSearch]  = useState("");
  return (
  <div className="flex justify-between items-center p-4">
    <div className="flex items-center gap-6">
        <HiOutlineMenu size ={26}/>
        <div className='flex items-center gap-1'>
            <BsYoutube size={30}/>
            <span className='text-xl'>YouTube</span>
        </div>
    </div>
    <div className= "hidden md:flex gap-2 min-w-[300px] lg:w-[620px]">
        <div className="flex w-full">
        <input placeholder="Search"
            value={search} 
            onChange={event => setSearch(event.target.value)}
            className="w-full px-4 py-2
             bg-zinc-900 border-[1px] border-zinc-700 placeholder:text-zinc-500 focus:bg-black 
             rounded-tl-full rounded-bl-full 
             focus:outline-none focus:ring-1 text-zinc-400 gap-0" />
    
    <div className="bg-zinc-700 rounded-tr-full rounded-br-full px-5 py-3">
        <BiSearch />
    </div>
    </div>
    <div className='flex items-center p-4 rounded-full hover:bg-zinc-700 cursor-pointer'>
        <BsMicFill />
    </div>
    </div>
    <div className="flex gap-3 items-center">
    <div className='flex items-center  p-3 rounded-full hover:bg-zinc-500 cursor-pointer'>
        <BsCameraVideo size={22} />
    </div>
    <div className='flex items-center  p-3 rounded-full hover:bg-zinc-500 cursor-pointer'>
        <BsBell size={22} />
    </div>
    <div className='cursor-pointer'>
        <Image src="https://pbs.twimg.com/profile_images/408021229/kayak10_400x400.jpg" 
        alt="chru image from twitter "height={30} width={30}
        className='rounded-full' />
        </div>

    </div>

</div>
);
};

export default TopNavigation