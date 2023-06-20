'use client'

import { Icon } from "next/dist/lib/metadata/types/metadata-types"
import { IconType } from "react-icons"
import { HiHome } from 'react-icons/hi'
import { TfiYoutube } from 'react-icons/tfi'
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { useRouter } from "next/navigation"
import { BsCollectionPlay } from "react-icons/bs"
import { AiOutlineYoutube } from "react-icons/ai"
import { SiYoutubemusic } from "react-icons/si"

interface MenuItem {
    id: number;
    icon: IconType;
    text: string;
    pathname: string;

}

const MenuItems: Array<MenuItem> = [
    {
        id:1,
        icon: HiHome,
        text: "Home",
        pathname: "/"
    },
    {
        id: 2,
        icon: TfiYoutube,
        text: "Shorts",
        pathname: "/shorts"
    },
    {
        id: 3,
        icon: BsCollectionPlay,
        text: "Subscriptions",
        pathname: "/feed/subscriptions"
        

    },
  
    {
        id: 4,
        icon: MdOutlineVideoLibrary,
        text: "Library",
        pathname: "/library"
    },

    {
        id: 5,
        icon: AiOutlineYoutube,
        text: "Originals",
        pathname: "/originals"
    },

    {
        id:6,
        icon: SiYoutubemusic,
        text: "Youtube Music",
        pathname: "music"

    }



];

const SideNavigation = () => {
    const pathname = usePathname();
    const router = useRouter();


    const handleItemClick= (item: MenuItem) => {
        router.push(item.pathname);
     
     
      
     console.log(item.pathname===pathname);

    }

    const waveHello = ()=>{
        console.log('wave hello');

    }

  return (
  <div className="p-[4px] lg:px-2 lg:w-[460px]"> 
  {MenuItems.map((item) => (
    <div key={item.id}>
    <div className={`flex flex-col lg:flex-row gap-1 lg:gap-6  p-4 lg:py-2 items-center hover:bg-zinc-700 
    ${item.pathname===pathname && 'bg-zinc-500 hover:bg-zinc-400'} 
    rounded-lg cursor-pointer`}
    onClick= {()=> handleItemClick(item)}>
            <item.icon size={28} />
            <span className="text-xs lg:text-base">{item.text}</span>


    </div>
    </div>
  ))}
  
  </div>
  );
};

export default SideNavigation